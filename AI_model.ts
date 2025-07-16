import { readFileSync, promises as fsPromises } from "fs";
import path from "path";

const AI = (input: string) => {
  async function read_data() {
    const filePath = path.join(process.cwd(), "data.json");
    let jsonData = "";
    try {
      jsonData = await fsPromises.readFile(filePath, "utf-8");
    } catch (error) {
      console.error("Failed to read data.json:", error);
    }

    const json = JSON.parse(jsonData);

    const data = json;
  }
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
    x17 = 0;
    x18 = 0;
    x19 = 0;
    x20 = 0;
    x21 = 0;
    x22 = 0;
    x23 = 0;
    x24 = 0;
    x25 = 0;
    x26 = 0;
    x27 = 0;
    x28 = 0;
    x29 = 0;
    x30 = 0;
    x31 = 0;
    x32 = 0;
    x33 = 0;
    x34 = 0;
    x35 = 0;
    x36 = 0;
    x37 = 0;
    x38 = 0;
    x39 = 0;
    x40 = 0;
    x41 = 0;
    x42 = 0;
    x43 = 0;
    x44 = 0;
    x45 = 0;
    x46 = 0;
    x47 = 0;
    x48 = 0;
    x49 = 0;
    x50 = 0;
    x51 = 0;
    x52 = 0;
    x53 = 0;
    x54 = 0;
    x55 = 0;
    x56 = 0;
    x57 = 0;
    x58 = 0;
    x59 = 0;
    x60 = 0;
    x61 = 0;
    x62 = 0;
    x63 = 0;
    x64 = 0;
    x65 = 0;
  }
  input = input.toLowerCase();
  read_data();
  reset();
  let threshold = 8;

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

  let x17 = 0;
  let w17 = 17;

  let x18 = 0;
  let w18 = 18;

  let x19 = 0;
  let w19 = 19;

  let x20 = 0;
  let w20 = 20;

  let x21 = 0;
  let w21 = 21;

  let x22 = 0;
  let w22 = 22;

  let x23 = 0;
  let w23 = 23;

  let x24 = 0;
  let w24 = 24;

  let x25 = 0;
  let w25 = 25;

  let x26 = 0;
  let w26 = 26;

  let x27 = 0;
  let w27 = 27;

  let x28 = 0;
  let w28 = 28;

  let x29 = 0;
  let w29 = 29;

  let x30 = 0;
  let w30 = 30;

  let x31 = 0;
  let w31 = 31;

  let x32 = 0;
  let w32 = 32;

  let x33 = 0;
  let w33 = 33;

  let x34 = 0;
  let w34 = 34;

  let x35 = 0;
  let w35 = 35;

  let x36 = 0;
  let w36 = 36;

  let x37 = 0;
  let w37 = 37;

  let x38 = 0;
  let w38 = 38;

  let x39 = 0;
  let w39 = 39;

  let x40 = 0;
  let w40 = 40;

  let x41 = 0;
  let w41 = 41;

  let x42 = 0;
  let w42 = 42;

  let x43 = 0;
  let w43 = 43;

  let x44 = 0;
  let w44 = 44;

  let x45 = 0;
  let w45 = 45;

  let x46 = 0;
  let w46 = 46;

  let x47 = 0;
  let w47 = 47;

  let x48 = 0;
  let w48 = 48;

  let x49 = 0;
  let w49 = 49;

  let x50 = 0;
  let w50 = 50;

  let x51 = 0;
  let w51 = 51;

  let x52 = 0;
  let w52 = 52;

  let x53 = 0;
  let w53 = 53;

  let x54 = 0;
  let w54 = 54;

  let x55 = 0;
  let w55 = 55;

  let x56 = 0;
  let w56 = 56;

  let x57 = 0;
  let w57 = 57;

  let x58 = 0;
  let w58 = 58;

  let x59 = 0;
  let w59 = 59;

  let x60 = 0;
  let w60 = 60;

  let x61 = 0;
  let w61 = 61;

  let x62 = 0;
  let w62 = 62;

  let x63 = 0;
  let w63 = 63;

  let x64 = 0;
  let w64 = 64;

  let x65 = 0;
  let w65 = 65;

  //all weights in an array
  let weights = [
    w1,
    w2,
    w3,
    w4,
    w5,
    w6,
    w7,
    w8,
    w9,
    w10,
    w11,
    w12,
    w13,
    w14,
    w15,
    w16,
    w17,
    w18,
    w19,
    w20,
    w21,
    w22,
    w23,
    w24,
    w25,
    w26,
    w27,
    w28,
    w29,
    w30,
    w31,
    w32,
    w33,
    w34,
    w35,
    w36,
    w37,
    w38,
    w39,
    w40,
    w41,
    w42,
    w43,
    w44,
    w45,
    w46,
    w47,
    w48,
    w49,
    w50,
    w51,
    w52,
    w53,
    w54,
    w55,
    w56,
    w57,
    w58,
    w59,
    w60,
    w61,
    w62,
    w63,
    w64,
    w65,
  ];
};
