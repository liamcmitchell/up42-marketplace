import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export interface IBlock {
  id: string;
  displayName: string;
  metadata: {
    blockThumbnailUrl: string;
    blockPricingStrategy: {
      name: string;
      credits: number;
    };
  };
}

interface BlocksResponse {
  data: IBlock[];
  // No idea what the actual type is.
  error: null | string;
}

const isSimplePricing = (block: IBlock) =>
  block.metadata.blockPricingStrategy.name === "simple";

export default function useBlocks() {
  const res = useSWR<BlocksResponse, Error>(
    "/api/up42/marketplace/blocks",
    fetcher
  );

  return {
    loading: !res.data && !res.error,
    data: res.data?.data.filter(isSimplePricing) || [],
    error: res.error?.message || res.data?.error,
  };
}
