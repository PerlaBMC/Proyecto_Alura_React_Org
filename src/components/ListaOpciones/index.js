import "./ListaOpciones.css"

const ListaOpciones = (props) => {
//Metodo Map -> Nombre del arreglo.map((equipos) => {return <option key="propiedad unica como id o index"></option>})


    const manejarCambio = (e) => {
        //console.log("cambio", e.target.value)
        props.actualizarEquipo( e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones