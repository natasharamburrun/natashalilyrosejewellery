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
    <div className="card">
      <div className="media">
        <div className="card">
          <div className="card-image">
            <img className="card-product-image" src={stock.imageId}></img>
          </div>
        </div>
        <div className="card-description">
          <h2>{stock.description}</h2>
          <h2>{stock.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
