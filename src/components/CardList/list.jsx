import "./list.css"
import Card from "../Card/card";

const List = ({ listTransactions, setListTransactions }) => {
  if (listTransactions.length < 1) {
    return (

      <div className="empty">
        <p className="empty-message">Você ainda não possui nenhum lançamento</p>
      </div>

    )
  } else {
    return (
      <div className="boxList">
        <ul>
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
        </ul>
      </div>
    );
  }
};

export default List;
