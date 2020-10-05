import React, {useState} from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ChargingData} from './charging';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      color: "#fff",
      textAlign: "center",
    },
    button:{
        background: '#2c6e59',
    },
    users: {
        color: '#2c6e59',
    }
  }));

export const Tables = () => {

    const history = useHistory();

    const classes = useStyles();

    const [users, setUsers] = useState([]);

    const [favSongs, setFavSongs] = useState([{}]);

    const handleData = async (e) => {

    const response = await fetch('http://localhost:4100/users',{
        mode: 'cors',
    });

    const data = await response.json();

    setUsers(data);

    }

    handleData();


    const handleToFavoriteMusic = async (songId) => {

        console.log(songId)
        setFavSongs(songId)
        
    }


    return (
        <div className="container-fluid">
            <div className="row align-items-center p-5 d-flex vh-100 justify-content-center">
                <div className="col-xs-6 col-lg-12">
                <div className="p-3">
                    <Typography align="center" className={classes.users} variant="h5" >Usuarios</Typography>
                </div>
                <div className="table-responsive table-hover">
                    <table className="table table-bordered">
                        <thead className="table-head">
                            <tr>
                                <th scope="col"><Typography className={classes.title} variant="title" >Nombre</Typography></th>
                                <th scope="col"><Typography className={classes.title} variant="title" >Apellido</Typography></th>
                                <th scope="col"><Typography className={classes.title} variant="title" >Edad</Typography></th>
                                <th scope="col"><Typography className={classes.title} variant="title" >E-mail</Typography></th>
                                <th scope="col"><Typography className={classes.title} variant="title" >Acciones</Typography></th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {users.length > 0 ? (
                                users.map((data) => (
                                    <tr key={data._id}>
                                        <th>{data.name}</th>
                                        <th>{data.lastname}</th>
                                        <th>{data.age}</th>
                                        <th>{data.email}</th>
                                        <th>
                                            <div className="text-center">
                                                <Button 
                                                    variant="contained" 
                                                    className={classes.button}
                                                    onClick={()=> handleToFavoriteMusic(data._id)}
                                                    
                                                >
                                                    Canciones Favoritas
                                                </Button>
                                            </div>
                                        </th>
                                    </tr>

                                ))
                            ) : (

                                <div className="container p-5 my-5 mx-5">
                                    <center>
                                        <ChargingData />
                                    </center>
                                </div>

                            )}
                        </tbody> 
                    </table>
                    <table className="table table-bordered">
                        <thead className='table-head'>
                            <tr>
                                <th scope="col"><Typography className={classes.title} variant="title" >ID de la canción</Typography></th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                                {
                                    <tr>
                                        {/* <th scope="col">{favSongs}</th> */}
                                    </tr>
                                }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
      );
}
