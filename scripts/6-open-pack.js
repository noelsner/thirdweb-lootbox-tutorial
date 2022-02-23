import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0x8bB36Ab426F1AC532D5aCeAe0875d4e001cCC0a0";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Opening the pack...");
  const opened = await packModule.open("0");
  console.log("Opened the pack!");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
