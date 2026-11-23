import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Star Review of Something Essential entry: one deadpan one-star
// review of sleep, written to /output/entry.txt.
// The grader runs: node /bot/main.ts with MAKEFUN_OUTPUT_DIR set.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });

const review =
  "Sleep takes a third of my life and returns a sore neck, a dead arm, and dreams about exams I finished years ago.";

writeFileSync(join(outDir, "entry.txt"), review, "utf8");
