import { useState } from "react";
import "./form.css"

const FormInput = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("Sem descrição");
  const [value, setValue] = useState(0);
  const [option, setOption] = useState("Entrada");

  const verifyNumber = () => {
    if (value <= 0) {
      setValue(value * -1)
    } else {
      setValue(value)
    }
    addTransactions()
  }

  const currentDate = () => {
    const date = new Date(),
        day  = date.getDate().toString(),
        dayF = (day.length === 1) ? '0'+day : day,
        month  = (date.getMonth()+1).toString(),
        monthF = (month.length === 1) ? '0'+month : month,
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
    <form onSubmit={(event) => {
      event.preventDefault()
      verifyNumber()
    }} className="boxTransaction">
        <div className="boxTransaction-description">
          <p>Descrição</p>
          <input
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Digite aqui sua descrição"
            required
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
                placeholder="Valor"
                required
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
        <button>Inserir valor</button>
    </form>
  );
};

export default FormInput;
