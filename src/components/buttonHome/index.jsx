import "./style.js";
import { Link } from "react-router-dom";
import { ButtonGoHome } from "./style.js";

const ButtonHome = () => {
  return (
    <div>
      <Link to={"/"} >
        <ButtonGoHome>
          Inicio
        </ButtonGoHome>
      </Link>
    </div>
  );
};

export default ButtonHome;
