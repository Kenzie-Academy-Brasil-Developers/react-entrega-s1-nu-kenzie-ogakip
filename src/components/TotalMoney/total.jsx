import "./total.css";

const Total = ({ listTransactions }) => {
  const sumTotal = () => {
    const sum = listTransactions.reduce((val1, curr) => {
      if (curr.type === "Entrada") {
        if (curr.value < 0) {
          return val1 + Math.abs(curr.value);
        } else {
          return val1 + curr.value;
        }
      } else {
        if (curr.value < 0) {
          return val1 - Math.abs(curr.value);
        } else {
          return val1 - curr.value;
        }
      }
    }, 0);
    return sum;
  };

  return (
    <div className="boxTotalMoney">
      <div>
        <h2>Valor total:</h2>
        <span>O valor se refere ao saldo</span>
      </div>
      <p>R$ {sumTotal()}</p>
    </div>
  );
};

export default Total;
