import { useState } from 'react';
import {v4 as uuid} from "uuid"
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import './App.css';

function App() {

const [mostrarFormulario, actualizarMostrar] = useState (false)
const [colaboradores, setColaboradores] = useState([{ 
id: uuid(),
nombre: "Perla Mondragón",
puesto: "Desarrolladora",
foto: "https://media.licdn.com/dms/image/D5603AQHUvvLrWfvDzQ/profile-displayphoto-shrink_200_200/0/1677040773962?e=2147483647&v=beta&t=X4QhckyryL0Z9JjO3pYrFei-dlYrigfVG3phywcVtAk",
equipo: "Front End",
fav: true
},
{
id: uuid(),
nombre: "Harland Lohora",
puesto: "Programador",
foto: "https://github.com/harlandlohora.png",
equipo: "Data Science",
fav: false
},
{
id: uuid(),  
nombre: "Christian Pva",
puesto: "Head Alura",
foto: "https://github.com/christianpva.png",
equipo: "Programación",
fav: true
},
{
id: uuid(),  
nombre: "Genesys",
puesto: "Diseñadora",
foto: "https://github.com/JeanmarieAluraLatam.png",
equipo: "UX y Diseño",
fav: false
},

])

const [equipos, actualizarEquipos] = useState ([
  {
    id: uuid(),
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorScundario: "#D9F7E9",
  },
  {

    id: uuid(),
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorScundario: "#E8F8FF",
  },
  {

    id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorScundario: "#F0F8E2",
  },
  {

    id: uuid(),
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorScundario: "#FDE7E8",
  },
  {

    id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorScundario: "#FAE9F5",
  },
  {

    id: uuid(),
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorScundario: "#FFF5D9",
  },
  {

    id: uuid(),
    titulo: "Innovación y  Gestión",
    colorPrimario: "#FF8A29",
    colorScundario: "#FFEEDF",
  },


])

//Ternario --> condicion ? seMuestra : no se muestra

const cambiarMostrar = () => {
  actualizarMostrar(!mostrarFormulario)
}

const registrarColaborador = (colaborador) => {
  console.log ("nuevo colaborador", colaborador)
  // Spread operator
  setColaboradores([...colaboradores, colaborador])
}

//Eliminar colaborador
const eliminarColaborador = (id) => {
  console.log("Eliminar colaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
  setColaboradores(nuevosColaboradores)
}

//Actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log("Actualizar:", color, id)
  const equiposActualizados = equipos.map((equipo)=>{
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}

//Crear equipo 
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
}

const like = (id) => {
 const colaboradoresActualizados = colaboradores.map((colaborador)=>{
  if (colaborador.id === id){
    colaborador.fav = !colaborador.fav
  }
  return colaborador
 })
 
 setColaboradores(colaboradoresActualizados)

}


  return (
    <div>
      <Header/>
      { mostrarFormulario === true ? <Formulario 
      equipos={equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador = {registrarColaborador}
      crearEquipo = {crearEquipo}
      /> : <div> </div> }
      <MiOrg cambiarMostrar={cambiarMostrar}
      />
      {
        equipos.map((equipo) => <Equipo 
        datos= {equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
      }
      <Footer/>

    </div>
  );
}

export default App;
