import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () =>{

    return(
        <>
        <NavLink exact to="/">Home</NavLink>|
        <NavLink exact to="/user">User</NavLink>|
        <NavLink exact to="/Red">Red</NavLink>|
        <NavLink exact to="/Blue">Blue</NavLink>|
        <NavLink exact to="/Green">Green</NavLink>|
        <NavLink exact to="/Yellow">Yellow</NavLink>|
        <NavLink exact to="/Pink">Pink</NavLink>|
        </>
    );
}
export default Menu;