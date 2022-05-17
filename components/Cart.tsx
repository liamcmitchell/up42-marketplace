import CartBlock from "@components/CartBlock";
import { IBlock } from "./useBlocks";

interface Props {
  cartBlocks: IBlock[];
  removeFromCart(id: string): void;
  total: number;
  buy(): void;
}

export default function Cart({
  cartBlocks,
  removeFromCart,
  total,
  buy,
}: Props) {
  return (
    <>
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
      <button onClick={buy} style={{ margin: 16 }}>
        Buy now
      </button>
    </>
  );
}
