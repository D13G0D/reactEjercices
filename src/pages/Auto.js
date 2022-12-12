import React from "react";
import { FormCarComponent, TableCarComponent,ButtomComponent} from "../components";

const AutoPage = () =>{
    return(
        <div>
            <div class="row">
                <div class="col">
            <FormCarComponent/> 
                </div>
            </div>
            <TableCarComponent/><br/> <hr/> <br/>
            <ButtomComponent InfoBoton={"Registrar Usuario"}/>    
        </div>
    )
} 

export default AutoPage;

