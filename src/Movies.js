import React, { useEffect, useState } from "react";
import style from './movie.module.css';

const Movies = ({title, image, year, nominates}) => {
    const [nominate, setNominate] = useState([]);

    if (image==="N/A") {
        image = 'http://www.clker.com/cliparts/b/m/L/p/r/u/gray-square-hi.png';
    }

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

    const saveNominated = (e) => {
        getNominated();
        setNominate(nominate => [...nominate, title]);
        localStorage.setItem('nominate', JSON.stringify(nominate));
        console.log(title);
        console.log(nominate);
        
        
    };

    return(
        <div className={style.movie}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img src={image} alt ="" />
                        </div>
                        <div className="col-sm">
                            <h1>{title}</h1>
                        </div>               
                        <div className="col-sm">
                            <p>{year}</p>
                        </div>
                        <div className="col-sm">
                            <button onClick={saveNominated}>Nominate</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Movies;