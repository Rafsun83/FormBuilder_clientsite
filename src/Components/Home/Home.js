import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Hometable from './Hometable';

const Home = () => {
    const [formnames, setFormname] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/generatevalue')
            .then(res => res.json())
            .then(data => setFormname(data))
    })

    return (
        <div style={{ marginTop: '5rem' }} className='container'>

            <Hometable
                formname={formnames}
            ></Hometable>


        </div>
    );
};

export default Home;