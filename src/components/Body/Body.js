import React,{useEffect, useState} from 'react';
import fakeData from '../../fakeData/players.json';
import Cart from '../Cart/Cart';
import './Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const Body = () => {
    const first10 = fakeData.slice(0,10);
    const [players, setPlayers] = useState([first10]);
    useEffect(() => {
        setPlayers(first10)
    },[]);
    // const [cart, setCart] = useState([]);
    const [info, setInfo] = useState([]);

    const handlePlayer = (playerInfo) => {
        const newInfo = [...info, playerInfo]

        setInfo(newInfo);
        console.log(newInfo);
    }

    return (
        <div className="container">
            <Cart information={info}></Cart>
            <div  className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        players.map(player => 
                        <div>
                            <div className="card">
                                <div className="card-body">
                                    <h3>{player.name}</h3>
                                    <img src={player.img} alt="" />
                                    <h4>Salary: ${player.salary}</h4>

                                    <button onClick={()=>handlePlayer(player)} className="btn btn-primary"><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
                                </div>
                            </div>
                        </div>
                         )
                    }
            </div>
        </div>
    );
};

export default Body;