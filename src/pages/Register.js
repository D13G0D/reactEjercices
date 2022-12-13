import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormsUserComponent ,ButtomComponent} from "../components";


const RegisterPage = () =>{
        const navigate = useNavigate();
        const handleOnClick = useCallback(()=> navigate("/Auto",{}, [navigate]))
        const CLickListaUsuarios = useCallback(()=> navigate("/ListaUsuarios",{}, [navigate]))

    return(
        <div className="container">               
            <FormsUserComponent/>               
            <ButtomComponent InfoBoton={"Ir a registrar auto"} handleOnClick={handleOnClick}/>
            <ButtomComponent InfoBoton={"Ir a la lista de Usuarios"} handleOnClick={CLickListaUsuarios}/>        
        </div>
    )
} 

export default RegisterPage;