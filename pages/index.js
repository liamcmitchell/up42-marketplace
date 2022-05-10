import Head from "next/head";

export default function Home() {
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
        }}
      >
        <h1>UP42 Marketplace</h1>
        <div>Credits: 10000</div>
      </nav>
      <main
        style={{
          paddingTop: 80,
          display: "flex",
        }}
      >
        <div style={{ margin: 16 }}>Loading...</div>
      </main>
      <aside
        style={{
          position: "fixed",
          top: 80,
          right: 0,
          bottom: 0,
          width: 320,
          borderLeft: "1px solid #ccc",
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
