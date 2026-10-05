// Liveness probe for the fleet (fleet.conf HEALTH_PATH).
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ status: "ok" });
}
