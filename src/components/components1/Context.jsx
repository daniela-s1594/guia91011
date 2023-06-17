import {createContext,useContext,useState} from 'react'

function randomCase(string) {
    return string
    .split("")
    .map((c)=>(Math.random() <= 0.5?c.toUpperCase() : c.toLowerCase()))
    .join("");
}

function Header() {
    const {user} = useContext(UserContext);
    return 
    <div className='Header'>Sesion iniciada como @{user.username</div>;
}

const UserContext = createContext();
function Sidebar() {
    const {user,updateUsername} = useContext(UserContext);
    return(
        div.Sidebar
    )
}