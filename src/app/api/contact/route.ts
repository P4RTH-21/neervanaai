import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      workEmail,
      company,
      jobTitle,
      serviceInterest,
      budgetRange,
      timeline,
      message,
      honeypot,
    } = body;

    // Check honeypot to eliminate spam bots silently
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry processed" }, { status: 200 });
    }

    // Required fields check
    if (!fullName || !workEmail || !company || !message) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, workEmail, company, and message are mandatory." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: "Invalid corporate email address format." },
        { status: 400 }
      );
    }

    // In a live production environment, this payload is forwarded to HubSpot/Salesforce CRM and triggers Slack/Teams webhooks:
    const leadRecord = {
      leadId: `LEAD-${Date.now()}`,
      receivedAt: new Date().toISOString(),
      fullName: String(fullName).trim(),
      workEmail: String(workEmail).trim().toLowerCase(),
      company: String(company).trim(),
      jobTitle: jobTitle ? String(jobTitle).trim() : "Unspecified",
      serviceInterest: serviceInterest || "Enterprise AI Strategy",
      budgetRange: budgetRange || "Unspecified",
      timeline: timeline || "Unspecified",
      message: String(message).trim(),
      status: "NEW_ENTERPRISE_INQUIRY",
      slaTargetHours: 12,
    };

    // Forward to CRM webhook if configured
    const webhookUrl = process.env.CONTACT_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadRecord),
        });
      } catch (crmErr) {
        console.error("CRM Webhook dispatch failed:", crmErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enterprise inquiry has been registered. An executive partner will reach out within 12 business hours.",
        leadId: leadRecord.leadId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact intake:", error);
    return NextResponse.json(
      { error: "Internal server error processing intake form." },
      { status: 500 }
    );
  }
}
