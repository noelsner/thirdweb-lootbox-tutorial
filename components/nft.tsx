import type { NFTMetadata } from "@3rdweb/sdk";

type Props = {
  metadata: NFTMetadata;
};

export default function NFT({ metadata }: Props) {
  return (
    <div className="flex flex-col text-gray-800">
      <p className="font-medium text-lg">{metadata.name}</p>
      <img
        className="mx-auto my-4 w-48 h-48 object-cover"
        src={metadata.image}
        alt={metadata.name}
      />
    </div>
  );
}
