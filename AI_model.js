import { readFileSync, promises as fsPromises } from "fs";
import path from "path";

const AI = async (input) => {
  async function read_data(type = (Boolean = true)) {
    const filePath = path.join(process.cwd(), "./data.json");
    let jsonData = "";
    try {
      jsonData = await fsPromises.readFile(filePath, "utf-8");
    } catch (error) {
      console.error("Failed to read data.json:", error);
    }
    const json = JSON.parse(jsonData);
    if (type === false) {
      return json.human_like_words;
    } else if (type === true) {
      return json.ai_like_words;
    }
  }

  // input = input.toLowerCase();

  let threshold = 8;

  //all the weights

  let w1 = 8;

  let w2 = 5;

  let w3 = 3;

  let w4 = 6;

  let w5 = 2;

  let w6 = 1;

  let w7 = 4;

  let w8 = 7;

  let w9 = 9;

  let w10 = 10;

  let w11 = 11;

  let w12 = 12;

  let w13 = 13;

  let w14 = 14;

  let w15 = 15;

  let w16 = 16;

  let w17 = 17;

  let w18 = 18;

  let w19 = 19;

  let w20 = 20;

  let w21 = 21;

  let w22 = 22;

  let w23 = 23;

  let w24 = 24;

  let w25 = 25;

  let w26 = 26;

  let w27 = 27;

  let w28 = 28;

  let w29 = 29;

  let w30 = 30;

  let w31 = 31;

  let w32 = 32;

  let w33 = 33;

  let w34 = 34;

  let w35 = 35;

  let w36 = 36;

  let w37 = 37;

  let w38 = 38;

  let w39 = 39;

  let w40 = 40;

  let w41 = 41;

  let w42 = 42;

  let w43 = 43;

  let w44 = 44;

  let w45 = 45;

  let w46 = 46;

  let w47 = 47;

  let w48 = 48;

  let w49 = 49;

  let w50 = 50;

  let w51 = 51;

  let w52 = 52;

  let w53 = 53;

  let w54 = 54;

  let w55 = 55;

  let w56 = 56;

  let w57 = 57;

  let w58 = 58;

  let w59 = 59;

  let w60 = 60;

  let w61 = 61;

  let w62 = 62;

  let w63 = 63;

  let w64 = 64;

  let w65 = 65;

  var activation = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  //resets all the variables
  function reset() {
    for (let y = 0; y < activation.length; y++) {
      activation[y] = 0;
    }
  }

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
  async function calculate_AI(input) {
    const data = await read_data(true);

    for (let i = 0; i < data.length; i++) {
      const word = data[i];
      if (word == input) {
        activation[i] = 1;
      }
    }
    console.log(activation);
    let y = 0;

    for (let i = 0; i < activation.length; i++) {
      y += activation[i] * weights[i];
    }
    y -= threshold;

    console.log(y);
  }
  calculate_AI("resolve");
};
AI();
