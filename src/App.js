import "./App.css";
import { useState } from "react";
import List from "./components/CardList/list";
import FormInput from "./components/Form/form";
import Total from "./components/TotalMoney/total";
import Header from "./components/Header/header";
import Encapsulate from "./components/Encapsulate/encapsulate";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", date: "04/04/2022", value: 2500 },
    { description: "Conta de luz", type: "Despesa", date: "04/04/2022", value: -150 },
  ]);

  return (
    <div className="App">
      <Header />
      <Encapsulate>
        <FormInput
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <Total listTransactions={listTransactions} />
      </Encapsulate>

      <List
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
    </div>
  );
}

export default App;
