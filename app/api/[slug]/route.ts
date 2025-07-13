import { NextRequest, NextResponse } from "next/server";
import { readFileSync, promises as fsPromises } from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (request.method === "OPTIONS") {
    const headers: HeadersInit = {
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      "Access-Control-Allow-Origin": "*",
    };

    return new NextResponse(null, { status: 200, headers });
  }

  if (slug === "data") {
    const filePath = path.join(process.cwd(), "data.json");
    let jsonData;
    try {
      jsonData = await fsPromises.readFile(filePath, "utf-8");
    } catch (error) {
      console.error("Failed to read data.json:", error);
      return NextResponse.json(
        { message: "Internal Server Error: Could not read data file." },
        { status: 500 },
      );
    }

    const json = JSON.parse(jsonData);

    const data = json[0];

    const responseHeaders: HeadersInit = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    return NextResponse.json(
      { message: data.ai_like_words },
      { headers: responseHeaders },
    );
  } else {
    const responseHeaders: HeadersInit = {
      "Access-Control-Allow-Origin": "*",
    };
    return NextResponse.json(
      { message: `No data sent for slug: ${slug}` },
      { status: 404, headers: responseHeaders },
    );
  }
}
