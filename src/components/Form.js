import React from "react";
import Luxury from "../assets/img/attachment_34415170.jpg"

const FormsUserComponent = () => {
    return (
        <div class="card" style={{width:"50%", borderRadius:"10px"}}>
            <img
                src={Luxury}
                alt=""
                style={{
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    opacity:"60%",
                    borderRadius:"10px"
                }}
            />
            <div class="card-header">
                Registro Usuario
            </div>
            <div class="card-body">
                <h5 class="card-title">Complete los campos con su datos</h5>
                <div class="form-floating mb-3"style={{opacity:"30%"}}>
                    <input type="nombre" class="form-control" id="floatingInput" placeholder="Nombre" />
                    <label for="floatingInput">Nombre</label>
                </div>
                <div class="form-floating mb-3" style={{opacity:"30%"}}>
                    <input type="Apellido" class="form-control" id="floatingInput" placeholder="Apellido" />
                    <label for="floatingInput">Apellido</label>
                </div>
                <div class="form-floating" style={{opacity:"30%"}}>
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Clave</label><br />
                </div>
                <div class="form-floating mb-3"style={{opacity:"30%"}}>
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@ejemplo.com" />
                    <label for="floatingInput">Correo electronico</label> <br />
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            acepto las <a href="?">Condiciones de uso y servicio</a>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> {/* dsps lo veremos con react (checked)*/}
                        <label class="form-check-label" for="flexCheckChecked">
                            Deseo recibir ofertas y novedades
                        </label>
                    </div> <br />
                </div>
                <button class="btn btn-secondary">Registrarse</button>
            </div>
        </div>
    )
}

export default FormsUserComponent;