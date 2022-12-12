import React from "react";

const ButtomComponent = ({InfoBoton, handleOnClick}) => {
    return (
        <button variant="outlined"
        onClick={()=>{
            handleOnClick();
        }}
        >    
            {InfoBoton}
        </button>
    )
}

export default ButtomComponent;