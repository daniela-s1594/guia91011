import React from "react";
import Button from 'react-bootstrap/Button';

function handleClick(){
    alert('Me clikckeaste *se ofende*');
}

export default function Button1() {
    return (
        <div className="container">
            <Button variant="primary" onClick={handleClick}>No me clickees</Button>
        </div>
    )
}