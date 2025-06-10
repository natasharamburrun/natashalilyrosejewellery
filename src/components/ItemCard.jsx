export function ItemCard({ stock }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-content"></div>
        <h2>{stock.description}</h2>
        <h2>{stock.price}</h2>
      </div>
    </div>
  );
}
