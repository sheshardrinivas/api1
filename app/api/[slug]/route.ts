import { NextRequest, NextResponse } from "next/server";
import { readFileSync, promises as fsPromises } from "fs";
import path from "path";

const frontendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const frontendUrl2 = process.env.NEXT_PUBLIC_API_BASE_URL2;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const allowedOrigins = [frontendUrl, frontendUrl2];

  const origin = request.headers.get("origin");

  if (request.method === "OPTIONS") {
    const headers: HeadersInit = {
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",

      "Access-Control-Allow-Headers": "Content-Type",

      "Access-Control-Max-Age": "86400", // 24 hours
    };

    if (origin && allowedOrigins.includes(origin)) {
      headers["Access-Control-Allow-Origin"] = origin;
    }

    return new NextResponse(null, { status: 200, headers });
  }

  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json(
      { message: "Forbidden: Origin not allowed." },
      { status: 403 },
    );
  }

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

    const responseHeaders: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (origin && allowedOrigins.includes(origin)) {
      responseHeaders["Access-Control-Allow-Origin"] = origin;
    }

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
