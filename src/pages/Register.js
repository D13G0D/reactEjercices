import React from "react";
import { FormsUserComponent ,ButtomComponent, TableUserComponent} from "../components";

const RegisterPage = () =>{
    return(
        <div>
            <div class="row">
                <div class="col">
            <FormsUserComponent/> 
                </div>
            </div>
            <TableUserComponent/><br/> <hr/> <br/>
            <ButtomComponent/>        
        </div>
    )
} 

export default RegisterPage;