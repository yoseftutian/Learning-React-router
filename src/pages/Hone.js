import { Link, useNavigate } from "react-router-dom";

export default function HonePage() {
  const navigate = useNavigate();

  function navigeteHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My Hone Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <p>
        <button onClick={navigeteHandler}>Navigate</button>
      </p>
    </>
  );
}
