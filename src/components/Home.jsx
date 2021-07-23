import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Click to go to camera page</h1>
      <Link to="/camera">
        <button>CLICK</button>
      </Link>
    </div>
  );
};

export default Home;
