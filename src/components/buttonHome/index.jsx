import "./style.css"

const ButtonHome = ({ toHome }) => {
    return (
        <div>
            <button className="buttonHome" onClick={() => toHome(true)}>Inicio</button>
        </div>
    )
}

export default ButtonHome