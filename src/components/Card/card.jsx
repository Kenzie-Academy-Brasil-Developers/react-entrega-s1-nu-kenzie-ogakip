import "./card.css"

const Card = ({ transaction, id, listTransactions, setListTransactions }) => {

    const remove = () => {
        const removed = listTransactions.filter((el, index) => {
            return index !== id
        })
        setListTransactions(removed)
    }

    return (

        <li className={transaction.type}>
            <div className="listDescription">
                <h3>{transaction.description}</h3>
                <span>{transaction.type}</span>
                <span className="date">{transaction.date}</span>
            </div>
            <div className="listDescription-value">
                <p>R$ {transaction.value.toFixed(2)}</p>
                <button onClick={() => remove()} className="trash" id={id}><i className="fa-solid fa-trash"></i></button>
            </div>
        </li>

    )
}

export default Card