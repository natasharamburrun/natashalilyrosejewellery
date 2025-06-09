import { useState, useEffect } from "react";
import axios from "axios";

function ShopPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadAllData() {
      await axios
        .get(`http://localhost:8080/stock`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    loadAllData();
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="image-content">
          <figure className="card-product-image">
            <img
              src="https://bulma.io/assets/images/placeholders/96x96.png"
              alt="For sale a pendant made in silver that has been made in the style of molton"
            />
          </figure>
        </div>
        <div className="data-content">
          {data.map((data) => {
            return (
              //     <figure className="card-product-image">
              //     <img
              //       src="https://bulma.io/assets/images/placeholders/96x96.png"
              //       alt="For sale a pendant made in silver that has been made in the style of molton"
              //     />
              //   </figure>
              <div>
                <figure className="image is-250x250">
                  <img src={data.image} />
                </figure>
                <h2>{data.description}</h2>
                <h2>{data.price}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
