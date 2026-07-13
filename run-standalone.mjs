import { spawn } from "child_process";

console.log("Starting OmniRoute via run-standalone wrapper...");
const child = spawn("node", ["scripts/dev/run-next.mjs", "start"], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, PORT: process.env.PORT || "20128" },
});

child.on("close", (code) => {
  process.exit(code);
});
