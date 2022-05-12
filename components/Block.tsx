import { memo } from "react";
import { IBlock } from "@components/useBlocks";

interface Props {
  block: IBlock;
  addToCart(id: string): void;
}

export default memo(function Block({
  block: {
    id,
    displayName,
    metadata: {
      blockThumbnailUrl,
      blockPricingStrategy: { credits },
    },
  },
  addToCart,
}: Props) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #eee",
      }}
    >
      <div
        style={{
          height: 100,
          backgroundImage: `url(${blockThumbnailUrl}), linear-gradient(#eee, #eee)`,
        }}
      />
      <h3 style={{ margin: 16 }}>{displayName}</h3>
      <div style={{ margin: "auto" }} />
      <div style={{ margin: 16, marginBottom: 0 }}>{credits} credits</div>
      <button
        onClick={() => {
          addToCart(id);
        }}
        style={{ margin: 16 }}
      >
        Add to cart
      </button>
    </article>
  );
});
