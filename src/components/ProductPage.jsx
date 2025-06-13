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
    <div className="product-wrapper">
      <div className="product-parent">
        <div className="product-column">
          <div>
            <img className="product-images" src={stock.imageId}></img>
          </div>
        </div>
        <div className="product-column">
          <div className="product-description">
            <h2 className="product-name"></h2>
            <h2 className="product-price">{stock.price}</h2>
            <p className="product-description">{stock.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
