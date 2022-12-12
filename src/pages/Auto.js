import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormCarComponent,ButtomComponent} from "../components";

const AutoPage = () =>{
        const navigate = useNavigate();
        const handleOnClick = useCallback(()=>navigate("/",{}, [navigate]));
        const ListaAutosClick = useCallback(()=>navigate("/ListaAutos",{}, [navigate]));

    return(
        <div>           
            <FormCarComponent/>           
            <ButtomComponent InfoBoton={" Ir a registrar Usuario"} handleOnClick={handleOnClick}/>
            <ButtomComponent InfoBoton={" Ir a Lista de autos"} handleOnClick={ListaAutosClick}/>       
        </div>
    )
} 

export default AutoPage;

