import React from 'react';

import logoImg from '../../assets/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logoImg} alt="burger" />
    </div>
);

export default logo;