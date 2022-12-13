import React, { useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import { TableUserComponent ,ButtomComponent} from "../components";

const usuario1=[
    {
    ID:'1',
    Nombre:'Zyra',
    Apellido: 'Olmos',
    Correo: 'zyrapelota@gmail.com'
},
{
    ID:'2',
    Nombre:'Komi',
    Apellido: 'Shouko',
    Correo: 'komiS@gmail.com'
}]


const UsuarioListaPage = () =>{
        const navigate = useNavigate();
        const handleOnClick = useCallback(()=> navigate("/",{}, [navigate]))
        const [state, setState] = useState(usuario1); //state vale lo mismo que usuario 1 en este momento, set state genera una funcion seteadora que permite realizar cambios en usuario 1 sin que lo afecte directamente

        const userDelete = (IDUsuario)=>{
            const changeUser = state.filter(usuario => usuario.ID != IDUsuario )
            setState(changeUser);
        }
    return(
        <div>                     
            <TableUserComponent usuarios={state} userDelete={userDelete}/>
            <ButtomComponent InfoBoton={"Ir a registrar Usuario"} handleOnClick={handleOnClick}/>        
        </div>
    )
} 

export default UsuarioListaPage;