// One-Line Roast: The Gadget You Use Every Day.
// Writes a single original roast line to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My phone hits 20% battery and dims the screen so much I need a flashlight to read the warning telling me to save battery.";

function main(): void {
  // The gate requires 1-200 characters of UTF-8 text, not only whitespace.
  const chars = [...ROAST].length;
  if (chars < 1 || chars > 200 || ROAST.trim().length === 0) {
    throw new Error(`roast line is ${chars} characters, must be 1-200`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
}

main();
