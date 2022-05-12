import Block from "@components/Block";
import useBlocks from "@components/useBlocks";
import Head from "next/head";

export default function Home() {
  const { data, error } = useBlocks();

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
        ) : !data ? (
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
              <Block key={block.id} block={block} />
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
          overflowY: "auto",
        }}
      >
        <h2 style={{ margin: 16 }}>Cart</h2>
      </aside>
    </>
  );
}
