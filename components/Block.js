import { memo } from "react";

export default memo(function Block({
  block: {
    id,
    displayName,
    metadata: {
      blockPricingStrategy: { credits },
    },
  },
  addToCart,
}) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #eee",
      }}
    >
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
