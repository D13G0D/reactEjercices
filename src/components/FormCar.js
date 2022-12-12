import React from "react";

const FormCarComponent = () => {
    return (
        <div class="card" style={{width:"50%"}}>
            <div class="card-header">
                Registro Vehiculo
            </div>
            <div class="card-body">
                <h5 class="card-title">Complete los campos con su datos</h5>
                <div class="form-floating mb-3">
                    <input type="ID" class="form-control" id="floatingInput" placeholder="Nombre" />
                    <label for="floatingInput">ID</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="Marca" class="form-control" id="floatingInput" placeholder="Nombre" />
                    <label for="floatingInput">Marca</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="Modelo" class="form-control" id="floatingInput" placeholder="Nombre" />
                    <label for="floatingInput">Modelo</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="Anio" class="form-control" id="floatingInput" placeholder="Nombre" />
                    <label for="floatingInput">Año</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="Color" class="form-control" id="floatingInput" placeholder="Nombre" />
                    <label for="floatingInput">Color</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="Motor" class="form-control" id="floatingInput" placeholder="Apellido" />
                    <label for="floatingInput">Cilindraje Motor</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="Version" class="form-control" id="floatingInput" placeholder="Version" />
                    <label for="floatingInput">Version</label> <br/>                    
                </div>
                <a href="#" class="btn btn-secondary">Ingresar</a>
            </div>
        </div>
    )
}

export default FormCarComponent;