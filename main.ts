// Dog Ate My Homework: Funniest Excuse — make.fun entry.
// Deterministic emitter: zero dependencies, no network.
// Writes exactly one line to /output/entry.txt and verifies it byte-exact.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "The homework told me it wanted to be free, so I set it free. Inside me.";

// Competition gate: one line, 1-200 characters, UTF-8, non-whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file matches the line exactly (no trailing newline).
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("output verification failed: file does not match entry line");
}
