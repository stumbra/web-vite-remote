import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")}>
      <h1>{`Navigate from Landing (Remote) -> Wrapper (Main)`}</h1>
    </div>
  );
}

export default Landing;
