import ButtonHome from "../buttonHome";
import List from "../CardList/list";
import Encapsulate from "../Encapsulate/encapsulate";
import FormInput from "../Form/form";
import Header from "../Header/header";
import Logo from "../Logo";
import Total from "../TotalMoney/total";
import { useState } from "react";

const RenderApp = () => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <Header>
        <Logo className={"logo"} />
        <ButtonHome />
      </Header>
      <div className="main">
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
    </div>
  );
};
export default RenderApp;
