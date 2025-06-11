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
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <img src={stock.imageId}></img>
            <h2>{stock.description}</h2>
            <h2>{stock.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
