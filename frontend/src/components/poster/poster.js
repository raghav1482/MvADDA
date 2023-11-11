import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './poster.css';

export default function Poster(props) {
    const [newdat, setDat] = useState({});
    
    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('https://api.tvmaze.com/shows');
                if (response.data && response.data.length > 0) {
                    setDat(response.data[Math.floor(Math.random()*response.data.length)]); 
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getData();
    }, []);

    return (
        <>
            <div className="post">
                <div className="post1">
                    <h1 className='glow'>{newdat.name}</h1>
                    <a href={newdat.url}>
                        <button className="button-62">DETAILS</button>
                    </a>
                </div>
                {newdat.image && newdat.image.original && (
                    <img src={newdat.image.original} alt={newdat.name} />
                )}
            </div>
        </>
    );
}
