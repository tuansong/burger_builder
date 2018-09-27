import React from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi';
const modal = (props) => {
    return (
        <Aux>
        <Backdrop show={props.show} clicked={props.closeModal}/>
        <div className={classes.Modal}>
            {props.children}
        </div>
        </Aux>
    );
}

export default modal;