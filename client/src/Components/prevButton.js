import React from 'react';

function PrevButton(props) {
    return (
        props.moves.map((move, i) => {
            if (i < props.moves.length - 1) {
                return <button className="prev" key={i} onClick={props.onRevert} value={i}> go back to move number {i + 1}</button >
            }
        })
    );

}

export default PrevButton;