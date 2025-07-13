import { NextRequest, NextResponse } from "next/server";
import { readFileSync, promises as fsPromises } from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const origin = request.headers.get("origin");

  if (request.method === "OPTIONS") {
    const headers: HeadersInit = {
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",

      "Access-Control-Allow-Origin": "*",
    };

    return new NextResponse(null, { status: 200, headers });
  }

  const responseHeaders: HeadersInit = {
    "Content-Type": "application/json",

    "Access-Control-Allow-Origin": "*",
  };

  if (slug === "data") {
    const filePath = path.join(process.cwd(), "data.json");
    let jsonData: string;

    try {
      jsonData = await fsPromises.readFile(filePath, "utf-8");
    } catch (error) {
      console.error("Error reading data.json:", error);

      return NextResponse.json(
        { message: "Error reading data file." },
        { status: 500 },
      );
    }

    const json = JSON.parse(jsonData);

    const data = json[0];

    return NextResponse.json(
      { ai_words: data.ai_like_words, human_words: data.human_like_words },
      { headers: responseHeaders },
    );
  } else {
    return NextResponse.json(
      { message: `No data sent for slug: ${slug}` },
      { status: 404 },
    );
  }
}
