import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import { routes } from "../routes/route.json";

export interface HeaderProps {
    name: string;
}
const route_menu = routes.filter(m => m.menu === true);
const HeaderComponent: React.FC<HeaderProps> = ({ name }) => (
    <>
        <div className='App-header-container'>
            <div className='App-header'>
                <Link to={'/'} className='App-link'><h1>Portal Header</h1></Link>
            </div>
            <div className='App-link-container'>
                {route_menu.map((route, i) => {
                    return <Link key={route.name + '-' + i} to={route.path} className='App-link'>{route.name + ' '}</Link>
                })}
            </div>
        </div>
    </>
);

export default HeaderComponent;