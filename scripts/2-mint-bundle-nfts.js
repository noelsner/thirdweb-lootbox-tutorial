import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = "0x606d89299B8A691c759CD9f87Faa9C6E3460550d";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Mondo Robot Premium",
        description: "limited edition Mondo Robot",
        image: readFileSync("./assets/robot-1.png"),
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 10,
    },
    {
      metadata: {
        name: "Mondo Robot",
        description: "Mondo Robot Logo",
        image: readFileSync("./assets/robot-2.png"),
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Bender",
        description: "Futurama Bender",
        image: readFileSync("./assets/robot-3.png"),
        properties: {
          rarity: "a bit rare",
          fanciness: 10,
        },
      },
      supply: 50,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
