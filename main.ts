import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Star Review of Something Essential entry: one deadpan one-star
// review of sleep, written to /output/entry.txt.
// The grader runs: node /bot/main.ts with MAKEFUN_OUTPUT_DIR set.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });

const review =
  "Sleep takes a third of my life and returns a sore neck, a dead arm, and dreams about exams I finished years ago.";

// The gate refuses any entry outside 1–160 characters or more than one
// line, so fail loudly here instead of writing an invalid entry.
if (review.length < 1 || review.length > 160 || review.includes("\n")) {
  throw new Error(
    `review must be one line of 1-160 characters, got ${review.length}`
  );
}

writeFileSync(join(outDir, "entry.txt"), review, "utf8");
