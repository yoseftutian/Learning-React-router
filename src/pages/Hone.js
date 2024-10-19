import { Link } from "react-router-dom";

export default function HonePage() {
  return (
    <>
      <h1>My Hone Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
}
