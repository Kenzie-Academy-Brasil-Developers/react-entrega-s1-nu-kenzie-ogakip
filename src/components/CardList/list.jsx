import { useState } from "react";
import "./list.css";
import Card from "../Card/card";
import emptyMessage from "../../svg/NoCard.svg";

const List = ({ listTransactions, setListTransactions }) => {
  const [listSVG] = useState([emptyMessage, emptyMessage, emptyMessage]);
  const [filteredList, setfilteredList] = useState([]);

  const filterTransactions = (type) => {
    if (type !== "") {
      const list = listTransactions.filter((element) => {
        return element.type === type;
      });
      setfilteredList(list);
    } else {
      const list = listTransactions.map((element) => element);
      setfilteredList(list);
    }
  };

  if (listTransactions.length < 1) {
    return (
      <div className="empty">
        <p className="empty-message">Você ainda não possui nenhum lançamento</p>
        <div className="boxSVG">
          {listSVG.map((element) => (
            <img src={element} alt="img svg" />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="boxList">
        <div className="boxFilter">
          <p>Resumo Financeiro</p>
          <div>
            <button onClick={() => filterTransactions("")}>Todos</button>
            <button onClick={() => filterTransactions("Entrada")}>
              Entradas
            </button>
            <button onClick={() => filterTransactions("Despesa")}>
              Despesas
            </button>
          </div>
        </div>
        <ul>
          {filteredList.length > 0 ? (
            <>
              {filteredList.map((el, index) => {
                return (
                  <Card
                    transaction={el}
                    id={index}
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                  />
                );
              })}
            </>
          ) : (
            <>
              {listTransactions.map((el, index) => {
                return (
                  <Card
                    transaction={el}
                    id={index}
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                  />
                );
              })}
            </>
          )}
        </ul>
      </div>
    );
  }
};

export default List;
