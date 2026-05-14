import { NextResponse } from "next/server";
import { LeadRateLimitError, LeadValidationError, parseLeadInput, submitLead } from "@/lib/lead-intake";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const lead = parseLeadInput(payload);
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
    const result = await submitLead(lead, {
      ipAddress,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    return NextResponse.json(
      {
        ok: true,
        ...result,
        tracking: {
          event: "lead_submitted",
          method: "telegram",
          sourcePage: lead.sourcePage,
        },
      },
      { status: 202 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unbekannter Fehler.";
    const status = error instanceof LeadValidationError ? 422 : error instanceof LeadRateLimitError ? 429 : 500;

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status },
    );
  }
}
