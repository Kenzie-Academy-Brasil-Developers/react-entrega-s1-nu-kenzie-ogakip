import { useState } from "react";
import "./form.css"

const FormInput = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("Sem descrição");
  const [value, setValue] = useState(1);
  const [option, setOption] = useState("Entrada");

  const currentDate = () => {
    var date = new Date(),
        day  = date.getDate().toString(),
        dayF = (day.length == 1) ? '0'+day : day,
        month  = (date.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        monthF = (month.length == 1) ? '0'+month : month,
        yearF = date.getFullYear();
    return dayF+"/"+monthF+"/"+yearF;
}

  const addTransactions = () => {
    if (option === "Despesa") {
      const newtranslation = {
        description: description,
        date: currentDate(),
        type: option,
        value: -value,
      };
      setListTransactions([...listTransactions, newtranslation]);
    } else if (option === "Entrada") {
      const newtranslation = {
        description: description,
        date: currentDate(),
        type: option,
        value: value,
      };
      setListTransactions([...listTransactions, newtranslation]);
    }
  };

  return (
    <div className="boxTransaction">
        <div className="boxTransaction-description">
          <p>Descrição</p>
          <input
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Digite aqui sua descrição"
          />
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="boxTransaction-inputBox">
          <div className="boxTransaction-inputValue">
            <label htmlFor="valueInput">Valor</label>
            <div className="boxTransaction-encapsulate">
              <input
                onChange={(event) => setValue(Number(event.target.value))}
                type="number"
                id="valueInput"
                placeholder="1"
              />
              <span>R$</span>
            </div>
          </div>
          <div className="boxTransaction-optionBox">
            <label htmlFor="typeInput">Tipo de valor</label>
            <select
              onChange={(event) => setOption(event.target.value)}
              id="typeInput">
              <option selected>Entrada</option>
              <option>Despesa</option>
            </select>
          </div>
        </div>
        <button onClick={addTransactions}>Inserir valor</button>
    </div>
  );
};

export default FormInput;
