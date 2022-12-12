import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ButtomComponent,TableCarComponent} from "../components";

const AutoListaPage = () =>{
        const navigate = useNavigate();
        const handleOnClick = useCallback(()=> navigate("/Auto",{}, [navigate]))
    return(
        <div>        
            <TableCarComponent/>
            <ButtomComponent InfoBoton={"Ir a registrar auto"} handleOnClick={handleOnClick}/>        
        </div>
    )
} 

export default AutoListaPage;