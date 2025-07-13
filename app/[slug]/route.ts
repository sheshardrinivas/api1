import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  return NextResponse.json({
    message: `The route '${slug}' doesn't exist. Try the route 'api', And 'api' route is only for input validation and output formatting.`,
  });
}
