import { getStock } from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductPage() {
  const [stock, setStock] = useState({});

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    async function loadStock() {
      let data = await getStock(id);
      console.log(data);
      setStock(data);
    }
    loadStock();
  }, []);

  return (
    <div class="card">
      <div class="media">
        <div class="card">
          <div class="card-image">
            <img class="card-product-image" src={stock.imageId}></img>
          </div>
        </div>
        <div class="card-description">
          <h2>{stock.description}</h2>
          <h2>{stock.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
