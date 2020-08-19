import React from 'react';

function Header(props) {

    return (
        <div className="header">
            {!props.win ? <h1>{props.turn}'s turn</h1> : <h1> {props.turn === "X" ? "O" : "X"} has won!</h1>}
            <button className="reset" onClick={props.onReset}>Reset</button>
        </div>
    );
}

export default Header;