import { NextRequest, NextResponse } from "next/server";
import { promises as fsPromises } from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  const SURECITY_FRONTEND_URL = "https://code-logic-frontend.netlify.app/";

  const origin = request.headers.get("origin");

  const corsHeaders: HeadersInit = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };

  if (origin === SURECITY_FRONTEND_URL) {
    corsHeaders["Access-Control-Allow-Origin"] = SURECITY_FRONTEND_URL;
  }

  if (request.method === "OPTIONS") {
    return new NextResponse(null, { status: 200, headers: corsHeaders });
  }

  const responseHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...corsHeaders,
  };

  if (slug === "data") {
    const filePath = path.join(process.cwd(), "data.json");
    let jsonData: string;

    try {
      jsonData = await fsPromises.readFile(filePath, "utf-8");
    } catch (error) {
      console.error("Error reading data.json with fs:", error);

      return NextResponse.json(
        {
          message: "Error reading data file. (Likely filesystem access issue)",
        },
        { status: 500, headers: responseHeaders },
      );
    }

    const json = JSON.parse(jsonData);

    if (!Array.isArray(json) || json.length === 0) {
      return NextResponse.json(
        { message: "Data format invalid or empty." },
        { status: 500, headers: responseHeaders },
      );
    }
    const data = json[0];

    return NextResponse.json(
      { ai_words: data.ai_like_words, human_words: data.human_like_words },
      { headers: responseHeaders },
    );
  } else {
    return NextResponse.json(
      { message: `No data sent for slug: ${slug}` },
      { status: 404, headers: responseHeaders },
    );
  }
}
