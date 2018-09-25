import React from 'react';

import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button 
            className={classes.Less}
            onClick={props.removeIngredient}
            disabled={props.disabledRemove}>Less
        </button>
        <button 
            className={classes.More}
            onClick={props.addIngredient}>More
        </button>
    </div>
);

export default buildControl;