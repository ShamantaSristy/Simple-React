import React from 'react';

const Cart = (props) => {
    const selectedPlayer = props.information;

    const totalSalary = selectedPlayer.reduce((total, player) => total + player.salary,0);
    console.log(selectedPlayer);
    return (
        <div>
                
                
                <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Player Selected: {selectedPlayer.length}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            {
                                selectedPlayer.map((player) => <li className="list-group-item">Name:{player.name} , Budget: {player.salary} million </li>)
                            }
                        </ul>
                        <div className="card-body">
                            <h5>Total Budget: {totalSalary} million</h5> 
                        </div>
                </div>
                
                
                
        </div>
    );
};

export default Cart;