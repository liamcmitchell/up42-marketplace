import { memo } from "react";

export default memo(function CartBlock({
  block: {
    id,
    displayName,
    metadata: {
      blockPricingStrategy: { credits },
    },
  },
  removeFromCart,
}) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid #eee",
      }}
    >
      <h3 style={{ margin: 16 }}>{displayName}</h3>
      <div
        style={{
          margin: 16,
          marginTop: 0,
          marginBottom: 0,
          textAlign: "right",
        }}
      >
        {credits} credits
      </div>
      <button
        onClick={() => {
          removeFromCart(id);
        }}
        style={{ margin: 16 }}
      >
        Remove from cart
      </button>
    </article>
  );
});
