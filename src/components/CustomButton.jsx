import React from 'react'

function CustomButton({funcionParaOnClick, buttonText, estiloParaElBoton}) {

    return (
        <button onClick={funcionParaOnClick} className={estiloParaElBoton}>{buttonText}</button>
    )
}

export default CustomButton