import React from "react";
import { FormsUserComponent , FormCarComponent, ButtomComponent, TableCarComponent, TableUserComponent} from "../components";

const RegisterPage = () =>{
    return(
        <div>
            <div class="row">
                <div class="col">
            <FormsUserComponent/> 
            <FormCarComponent/> 
                </div>
            </div>
            <TableUserComponent/><br/> <hr/> <br/>
            <TableCarComponent/><br/> <hr/> <br/>
            <ButtomComponent/>
            
        </div>
    )
} 

export default RegisterPage;