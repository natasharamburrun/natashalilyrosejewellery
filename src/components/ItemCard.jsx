import { Link } from "react-router-dom";

export function ItemCard({ stock }) {
  return (
    <div className="card">
      <Link to={`/shop/${stock._id}`} className="card-content">
        <h2>{stock.description}</h2>
        <h2>{stock.price}</h2>
      </Link>
    </div>
  );
}
