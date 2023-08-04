import './App.css';
import React, {useState} from 'react'
import ItemDeLista from './components/ItemDeLista';
import CustomButton from './components/CustomButton';
import Header from './components/Header';

function AppV2() {
  const [listaDeTareas, setListaDeTareas] = useState([])
  const [valorInput, setValorInput] = useState("")
  
  const checkBoxClick = (index) => {
    console.log('checkbox click')
    const tareasModificadas = [...listaDeTareas]

    const tareaACambiar = tareasModificadas[index]
    tareaACambiar.completada = !tareaACambiar.completada
    setListaDeTareas(tareasModificadas)
  }

  const buttonComplete = () => {
    console.log('button-completed')
    const copiaListaDeTareas = [...listaDeTareas]

    copiaListaDeTareas.map((item) => {
        if(!item.completada) {
            item.show = false
        } else {
            item.show = true
        }
    })

    setListaDeTareas(copiaListaDeTareas)
  }

  const buttonAll = () => {
    console.log('button-all')
    const copiaListaDeTareas = [...listaDeTareas]

    copiaListaDeTareas.map((item) => {
        item.show = true
    })

    setListaDeTareas(copiaListaDeTareas)
  }

  const buttonActive = () => {
    console.log('button active')
    const copiaListaDeTareas = [...listaDeTareas]

    copiaListaDeTareas.map((item) => {
        if(item.completada) {
            item.show = false
        } else {
            item.show = true
        }
    })

    setListaDeTareas(copiaListaDeTareas)
  }

  const crearTarea = (event) => {
    event.preventDefault()
    let tarea = {
              textoDeTarea: valorInput,
              id:  listaDeTareas.length + 1,
              completada: false,
              show: true
          }
    setListaDeTareas([...listaDeTareas, tarea])
    setValorInput("")
  }

  return (
    <div className="content">
      <div className="icon-moon">
        <Header />
      </div>
      <div>
        <form onSubmit={crearTarea}>
          <input type="text" placeholder="Create a new todo..." className="nueva-tarea" 
          value={valorInput} 
          onChange={(event) => {
            setValorInput(event.target.value)
          }} />
        </form>
        <div className="lista-de-tareas">
          <ul>  
            {listaDeTareas.map((tarea, index) => {
                if(tarea.show) {
                    return <ItemDeLista key={tarea.id} tarea={tarea} checkBoxClick={() => checkBoxClick(index)} />
                }
            })}
          </ul>
          <div className="buttons">
            <CustomButton funcionParaOnClick={buttonAll} buttonText="All" estiloParaElBoton="all" />
            <CustomButton funcionParaOnClick={buttonActive} buttonText="Active" estiloParaElBoton="active" />
            <CustomButton funcionParaOnClick={buttonComplete} buttonText="Complete" estiloParaElBoton="complete" />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default AppV2;
