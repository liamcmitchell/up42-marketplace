export default function Block({
  block: {
    displayName,
    metadata: {
      blockPricingStrategy: { credits },
    },
  },
}) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "0 1 240px",
        margin: 8,
        border: "1px solid #eee",
        overflowX: "hidden",
      }}
    >
      <h3 style={{ margin: 16 }}>{displayName}</h3>
      <div style={{ margin: "auto" }} />
      <div style={{ margin: 16, marginBottom: 0 }}>{credits} credits</div>
      <button style={{ margin: 16 }}>Add to cart</button>
    </article>
  );
}
