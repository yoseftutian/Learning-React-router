import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">Back</Link>
      </p>
    </>
  );
}
