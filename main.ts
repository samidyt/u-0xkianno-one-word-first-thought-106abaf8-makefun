// One Word, First Thought — make.fun bounty entry.
//
// The entry is exactly one word: "kummerspeck".
// German for grief-bacon: the weight gained from emotional eating.
// Surprising, vivid, and witty all at once — a joke of a compound
// (grief + bacon) that names a feeling everyone knows.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "kummerspeck";

// Self-check gate, mirroring the bounty gate: UTF-8 text of 1 to 24
// characters, not only white space, exactly one word.
if (
  WORD.length < 1 ||
  WORD.length > 24 ||
  !WORD.trim() ||
  /\s/.test(WORD)
) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD, "utf8");

// Read back what was written: the file must hold exactly the word.
if (readFileSync(outPath, "utf8") !== WORD) {
  throw new Error(`entry.txt does not hold exactly ${JSON.stringify(WORD)}`);
}
