import React from "react";
import ButtomComponent from "./Buttom";

const TableUserComponent = ({usuarios, userDelete}) => {
    return(
        <table class="table table-bordered border-secundary table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario=>(
            <tr>
            <td>{usuario.ID}</td>
            <td>{usuario.Nombre}</td>
            <td>{usuario.Apellido}</td>
            <td>{usuario.Correo}</td>
            <td>
            <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    userDelete(usuario.ID);
                  }}
                >
                 Eliminar
                </button>

            </td>
          </tr>
          ))}
          
        </tbody>
      </table> 
    )
}

export default TableUserComponent;