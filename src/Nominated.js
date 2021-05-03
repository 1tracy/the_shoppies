import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import './App.css';

function Nominated() {
    const [nominate, setNominate] = useState([]);

    

    const getNominated = () => {
        if (localStorage.getItem('nominate') === null) {
            localStorage.setItem('nominate', JSON.stringify([]));
            console.log('empty storage');
        } else {
            let nominateLocal = JSON.parse(localStorage.getItem("nominate"));
            setNominate(nominateLocal);
            console.log(nominateLocal);
        }
    }
    useEffect(() => {
        getNominated();
    }, []);
    return(

        <div className="App">
            {nominate}
        </div>
    );
}

export default Nominated;