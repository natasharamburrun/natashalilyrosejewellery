import { useState, useEffect } from "react";
import axios from "axios";

function ProductPage() {
  const [data, setData] = useState();

  useEffect(() => {
    async function grabData(id) {
      await axios
        .get(`http://localhost:8080/stock${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    grabData();
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="card-product-image">
              <img
                src="https://bulma.io/assets/images/placeholders/96x96.png"
                alt="For sale a pendant made in silver that has been made in the style of molton"
              />
            </figure>
          </div>
          <div className="card-content-info">{JSON.stringify(data)}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
