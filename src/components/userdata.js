import React, {useState} from 'react';

import axios from 'axios';

import {Navbar} from './navbar';

import {Tables} from './tables';

export const UserData = () => {

    const [state, setState] = useState({
        name: '',
        lastname: '',
        age: null,
        email: '',
    });

    async function makeRequest() {
    
        const config = {
            method: 'get',
            url: 'mongodb+srv://kevin:asd123@cluster0.vahxu.azure.mongodb.net/users?retryWrites=true&w=majority'
        }
    
        let res = await axios(config)
    
        console.log(res.status);
    }
    
    makeRequest();

    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <section>
                <Tables />
            </section>
        </div>
    )
}


