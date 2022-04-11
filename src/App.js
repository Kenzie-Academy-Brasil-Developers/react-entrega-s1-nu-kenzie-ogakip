import "./App.css";
import { useState } from "react";
import List from "./components/CardList/list";
import FormInput from "./components/Form/form";
import Total from "./components/TotalMoney/total";
import Header from "./components/Header/header";
import Encapsulate from "./components/Encapsulate/encapsulate";
import Logo from "./components/Logo";
import ButtonHome from "./components/buttonHome";
import HomeDescription from "./components/homeDescription";
import imgHome from "./svg/Group277.svg";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [home, setHome] = useState(true);

  return (
    <div>
      {home === true ? (
        <div className="home">
          {window.screen.width < 720 && (
            <div>
              <Logo className={"logoHome"} />
            </div>
          )}
          <div className="homeDescription">
            <div className="boxDescription">
              {window.screen.width > 720 && <Logo className={"logoHome"} />}
              <HomeDescription toApp={setHome} />
            </div>
          </div>
          <img src={imgHome} alt={"imgHome"} />
        </div>
      ) : (
        <div className="App">
          <Header>
            <Logo className={"logo"} />
            <ButtonHome toHome={setHome} />
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
      )}
    </div>
  );
}

export default App;
