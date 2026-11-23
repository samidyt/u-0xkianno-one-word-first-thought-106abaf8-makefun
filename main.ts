// "One Word, First Thought" — make.fun bounty entry.
//
// The whole entry is a single word: "kummerspeck".
// German for "grief-bacon" — the weight put on by emotional eating.
// A compound that is a joke in itself: grief + bacon, naming a feeling
// everyone recognises the moment they hear it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry word. Must stay exactly this — the bounty is one word only.
const ENTRY_WORD = "kummerspeck";

// The bounty gate, in plain terms: the entry has to be UTF-8 text of
// 1–24 characters, must not be only white space, and must be exactly
// one word (no white space anywhere inside it). Returns the word
// unchanged when it passes, so callers always work with a gated value.
function validateWord(word: string): string {
  const charCount = [...word].length; // count code points, not UTF-16 units
  if (charCount < 1 || charCount > 24) {
    throw new Error(
      `entry word must be 1–24 characters, got ${charCount}: ${JSON.stringify(word)}`,
    );
  }
  if (!word.trim()) {
    throw new Error("entry word must not be only white space");
  }
  if (/\s/.test(word)) {
    throw new Error(`entry word must be exactly one word: ${JSON.stringify(word)}`);
  }
  return word;
}

// Where the entry file goes: /output in the sandbox, or the local
// override directory when running by hand.
function entryPath(): string {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  return join(outputDir, "entry.txt");
}

function main(): void {
  const word = validateWord(ENTRY_WORD);

  const path = entryPath();
  writeFileSync(path, word, "utf8");

  // Read back what landed on disk and make sure it is exactly the word.
  const written = readFileSync(path, "utf8");
  if (written !== word) {
    throw new Error(
      `entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(word)}`,
    );
  }
}

main();
