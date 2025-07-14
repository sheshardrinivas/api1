import { NextRequest, NextResponse } from "next/server";
import { readFileSync, promises as fsPromises } from "fs";
import path from "path";

const AI = (input: string) => {



  //acts like an fillter for data
  let thershold = 8

  //all the weights with their values
  let x1 = 0;
  let w1 = 8;

  let x2 = 0;
  let w2 = 5;

  let x3 = 0;
  let w3 = 3;

  let x4 = 0;
  let w4 = 6;

  let x5 = 0;
  let w5 = 2;

  let x6 = 0;
  let w6 = 1;

  let x7 = 0;
  let w7 = 4;

  let x8 = 0;
  let w8 = 7;

  let x9 = 0;
  let w9 = 9;

  let x10 = 0;
  let w10 = 10;

  let x11 = 0;
  let w11 = 11;

  let x12 = 0;
  let w12 = 12;

  let x13 = 0;
  let w13 = 13;

  let x14 = 0;
  let w14 = 14;

  let x15 = 0;
  let w15 = 15;

  let x16 = 0;
  let w16 = 16;




  //all weights in an array
  let weights = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16];
  
  //resets all the variables
  function reset() {
    x1 = 0;
    x2 = 0;
    x3 = 0;
    x4 = 0;
    x5 = 0;
    x6 = 0;
    x7 = 0;
    x8 = 0;
    x9 = 0;
    x10 = 0;
    x11 = 0;
    x12 = 0;
    x13 = 0;
    x14 = 0;
    x15 = 0;
    x16 = 0;

  }

}

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
