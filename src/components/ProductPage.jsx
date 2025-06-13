import { useState, useEffect } from "react";
import { getStock } from "../api";
import { useParams } from "react-router-dom";
import Modal from "./Model";

function ProductPage() {
  const [stock, setStock] = useState({});
  const [show, setShow] = useState(false);

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
            <button
              onClick={() => setShow(true)}
              className="button primary-button"
            >
              Add to cart
            </button>
            <Modal onClose={() => setShow(false)} show={show} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
