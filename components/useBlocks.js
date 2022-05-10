import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useBlocks() {
  const res = useSWR("/api/up42/marketplace/blocks", fetcher);

  return {
    data: res.data?.data.filter(
      (block) => block.metadata.blockPricingStrategy.name === "simple"
    ),
    error: res.error || res.data?.error,
  };
}
