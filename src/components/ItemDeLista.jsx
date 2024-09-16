import React from "react";
import CustomButton from "./CustomButton";
import { deleteTodo } from "../api/deleteTodo";
import { getData } from "../api/getData";

function ItemDeLista({ tarea, checkBoxClick, setListaDeTareas }) {
  const buttonDelete = async (id) => {
    await deleteTodo(id);
    const result = await getData();
    setListaDeTareas(result);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={tarea.hecho}
        onChange={checkBoxClick}
      ></input>
      <span>{tarea.tarea_todo}</span>
      <CustomButton
        funcionParaOnClick={() => buttonDelete(tarea.id_todolist)}
        buttonText="Delete"
        estiloParaElBoton="delete"
      />
    </li>
  );
}

export default ItemDeLista;
