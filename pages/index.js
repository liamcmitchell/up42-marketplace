import Block from "@components/Block";
import CartBlock from "@components/CartBlock";
import useBlocks from "@components/useBlocks";
import Head from "next/head";
import { useCallback, useState } from "react";

export default function Home() {
  const { loading, data, error } = useBlocks();
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((id) => {
    setCart((cart) => {
      // Assuming you can't add the same block twice.
      if (!cart.includes(id)) {
        return cart.concat(id);
      }
      return cart;
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((cart) => {
      if (!cart.includes(id)) {
        return cart;
      }

      return cart.filter((_id) => _id !== id);
    });
  }, []);

  const cartBlocks = data.filter(({ id }) => cart.includes(id));
  const total = cartBlocks.reduce(
    (memo, block) => memo + block.metadata.blockPricingStrategy.credits,
    0
  );

  return (
    <>
      <Head>
        <title>UP42 Marketplace</title>
      </Head>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          borderBottom: "1px solid #eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
          backgroundColor: "#fff",
        }}
      >
        <h1>UP42 Marketplace</h1>
        <div>Credits: 10000</div>
      </nav>
      <main
        style={{
          paddingTop: 80,
          paddingRight: 320,
          display: "flex",
        }}
      >
        {error ? (
          <div style={{ margin: 16, color: "red" }}>{String(error)}</div>
        ) : loading ? (
          <div style={{ margin: 16 }}>Loading...</div>
        ) : (
          <div
            style={{
              margin: 16,
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, [col-start] minmax(160px, 1fr) [col-end])",
              gap: 16,
            }}
          >
            {data.map((block) => (
              <Block key={block.id} block={block} addToCart={addToCart} />
            ))}
          </div>
        )}
      </main>
      <aside
        style={{
          position: "fixed",
          top: 80,
          right: 0,
          bottom: 0,
          width: 320,
          borderLeft: "1px solid #eee",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ margin: 0, padding: 16, borderBottom: "1px solid #eee" }}>
          Cart
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            flex: "1 1",
          }}
        >
          {cartBlocks.map((block) => (
            <CartBlock
              key={block.id}
              block={block}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div
          style={{
            margin: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>Total: </div>
          <div>{total} credits</div>
        </div>
      </aside>
    </>
  );
}
