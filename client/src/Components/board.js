import React from 'react';
import Cell from './cell'
import '../App.css';


function Board(props) {

    return (
        <table>
            <tbody>
                {
                    props.board.map((x, i) => {
                        return <tr key={i} value={i}>{x.map((x, j) => {
                            return <Cell key={j} value={x} index={[i, j]} onUpdate={props.onUpdate} />
                        })}</tr>
                    })
                }
            </tbody>
        </table>
    );
}

export default Board;