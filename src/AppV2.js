import "./App.css";
import React, { useEffect, useState } from "react";
import ItemDeLista from "./components/ItemDeLista";
import CustomButton from "./components/CustomButton";
import Header from "./components/Header";
import { getData } from "./api/getData";
import { createTodo } from "./api/createTodo";
import { getHechos } from "./api/getHechos";
import { getNoHechos } from "./api/getNohechos";
import { updateTodo } from "./api/updateTodo";

function AppV2() {
  const [listaDeTareas, setListaDeTareas] = useState([]);
  const [valorInput, setValorInput] = useState("");

  useEffect(() => {
    async function aux() {
      const result = await getData();
      console.log(result);
      setListaDeTareas(result);
    }
    aux();
  }, []);

  const checkBoxClick = async (id, hecho) => {
    await updateTodo(hecho, id);
    const result = await getData();
    setListaDeTareas(result);
  };

  const buttonComplete = async () => {
    const result = await getHechos();
    setListaDeTareas(result);
  };

  const buttonAll = async () => {
    const result = await getData();
    setListaDeTareas(result);
  };

  const buttonActive = async () => {
    const result = await getNoHechos();
    setListaDeTareas(result);
  };

  const crearTarea = async (event) => {
    event.preventDefault();
    await createTodo(valorInput);
    setValorInput("");
    const result = await getData();
    setListaDeTareas(result);
  };

  return (
    <div className="content">
      <div className="icon-moon">
        <Header />
      </div>
      <div>
        <form onSubmit={crearTarea}>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="nueva-tarea"
            value={valorInput}
            onChange={(event) => {
              setValorInput(event.target.value);
            }}
          />
        </form>
        <div className="lista-de-tareas">
          <ul>
            {listaDeTareas.map((tarea, index) => {
              return (
                <ItemDeLista
                  key={tarea.id_todolist}
                  tarea={tarea}
                  checkBoxClick={() =>
                    checkBoxClick(tarea.id_todolist, !tarea.hecho)
                  }
                  setListaDeTareas={setListaDeTareas}
                />
              );
            })}
          </ul>
          <div className="buttons">
            <CustomButton
              funcionParaOnClick={buttonAll}
              buttonText="All"
              estiloParaElBoton="all"
            />
            <CustomButton
              funcionParaOnClick={buttonActive}
              buttonText="Active"
              estiloParaElBoton="active"
            />
            <CustomButton
              funcionParaOnClick={buttonComplete}
              buttonText="Complete"
              estiloParaElBoton="complete"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppV2;
