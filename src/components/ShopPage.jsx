import { useState, useEffect } from "react";
import { getStocks } from "../api";
import { ItemCard } from "../components/ItemCard";

function ShopPage() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    async function loadAllStock() {
      const data = await getStocks();
      setStocks(data);
    }
    loadAllStock();
  }, []);

  return (
    <div className="shop-content">
      <div className="shop-items">
        {stocks.map((stock) => {
          return <ItemCard stock={stock} />;
        })}
      </div>
    </div>
  );
}

export default ShopPage;
