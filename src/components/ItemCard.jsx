import { Link } from "react-router-dom";

export function ItemCard({ stock }) {
  return (
    <div className="card">
      <Link to={`/shop/${stock._id}`} className="card-content">
        <div className="card-image">
          <img className="card-product-image" src={stock.imageId}></img>
        </div>
        <h2>{stock.description}</h2>
        <h2>{stock.price}</h2>
      </Link>
    </div>
  );
}
