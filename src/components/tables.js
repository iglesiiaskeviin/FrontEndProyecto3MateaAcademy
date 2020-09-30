import React from 'react';
import { Typography } from '@material-ui/core';



export const Tables = () => {

    return (
        <div className="container">
            <div className="row align-items-center p-5 d-flex vh-100 justify-content-center">
                <div className="col-lg-6">
                <div className="p-3">
                    <Typography align="left" color="secondary" variant="h5" >Usuarios</Typography>
                </div>
                <table className="table col-12 table-responsive ">
                    <thead>
                        <tr>
                            <th scope="col"><Typography color="secondary" variant="title" >Nombre</Typography></th>
                            <th scope="col"><Typography color="secondary" variant="title" >Apellido</Typography></th>
                            <th scope="col"><Typography color="secondary" variant="title" >Edad</Typography></th>
                            <th scope="col"><Typography color="secondary" variant="title" >E-mail</Typography></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Hola</th>
                            <th>Hola</th>
                            <th>Hola</th>
                            <th>Hola</th>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
      );
}
