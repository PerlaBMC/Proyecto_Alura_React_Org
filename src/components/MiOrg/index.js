import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //useState
    //const [nombreVariable, funcionActualizada] = useState (valorInicial)
    console.log(props)

    return <section className="orgSection">
        <h3 className="tittle">Mi Organización</h3>
        <img src="img/Add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg