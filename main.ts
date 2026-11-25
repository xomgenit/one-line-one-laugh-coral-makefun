// SPDX-License-Identifier: MIT
// One Line, One Laugh — a single joke line, written to the output file
// the sealed scorer reads. The humour is a three-beat escalation:
// a reasonable request, a human flaw, then bureaucracy on top.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const joke =
  "I asked my AI assistant to act more human, so now it leaves me on read, " +
  "blames the Wi-Fi, and schedules a meeting about it.";

// Why the line works, beat by beat:
//   1. "act more human" — a plain, relatable setup anyone with an
//      assistant app has thought.
//   2. "leaves me on read, blames the Wi-Fi" — the two most human
//      evasions, both instantly recognisable.
//   3. "schedules a meeting about it" — the punchline turns the flaw
//      into office process: the assistant does not fix the problem,
//      it calendars it. Each beat raises the stakes without explaining
//      the joke, so the whole thing lands in one breath.
function checkLine(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

checkLine(joke);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(`wrote ${[...joke].length} characters to ${join(outDir, "entry.txt")}`);
