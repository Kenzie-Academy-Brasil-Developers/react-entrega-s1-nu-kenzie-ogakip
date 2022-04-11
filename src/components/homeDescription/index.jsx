import "./style.css";

const HomeDescription = ({ toApp }) => {
  return (
    <div className="description">
      <h1>Centralize o controle das suas finanças</h1>
      <span>de forma rápida e segura</span>
      <button onClick={() => toApp(false)}>Iniciar</button>
    </div>
  );
};

export default HomeDescription;
