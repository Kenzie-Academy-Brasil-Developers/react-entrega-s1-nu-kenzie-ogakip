import "./total.css"

const Total = ({ listTransactions }) => {
  const sumTotal = () => {
    const sum = listTransactions.reduce((val1, curr) => val1 + curr.value, 0);
    return sum;
  };

  return (
    <div className="boxTotalMoney">
      <div>
        <h2>Valor total:</h2>
        <span>O valor se refere ao saldo</span>
      </div>
      <p>$ {sumTotal()}</p>
    </div>
  );
};

export default Total;
