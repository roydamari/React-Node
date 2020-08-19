import React from 'react';
import '../App.css';

function Cell(props) {


    return (
        <td onClick={() => { props.onUpdate(props.index) }}>
            {props.value}
        </td>
    );
}

export default Cell;