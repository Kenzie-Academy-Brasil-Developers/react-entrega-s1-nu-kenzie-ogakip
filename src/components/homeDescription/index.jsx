import "./style.css";
import { Link } from "react-router-dom";

const HomeDescription = () => {
  return (
    <div className="description">
      <h1>Centralize o controle das suas finanças</h1>
      <span>de forma rápida e segura</span>
      <Link to={"/app"} ><button>Iniciar</button></Link>
    </div>
  );
};

export default HomeDescription;
