import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TableUserComponent ,ButtomComponent} from "../components";

const UsuarioListaPage = () =>{
        const navigate = useNavigate();
        const handleOnClick = useCallback(()=> navigate("/",{}, [navigate]))
    return(
        <div>                     
            <TableUserComponent/>
            <ButtomComponent InfoBoton={"Ir a registrar Usuario"} handleOnClick={handleOnClick}/>        
        </div>
    )
} 

export default UsuarioListaPage;