import React from 'react'

function ItemDeLista({tarea, checkBoxClick}) {

    return (
        <li>
            <input type="checkbox" checked={tarea.completada} onChange={checkBoxClick} ></input>
            <span>{tarea.textoDeTarea}</span>
        </li>
    )
}

export default ItemDeLista