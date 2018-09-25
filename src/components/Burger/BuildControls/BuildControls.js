import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.js';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price:<strong> {props.price}$</strong></p>
        {controls.map( c => 
            <BuildControl 
                key={c.label}
                label={c.label} 
                addIngredient={() => props.addIngredient(c.type)}
                removeIngredient={() => props.removeIngredient(c.type)}
                disabledRemove={props.disabledRemove[c.type]}
            />
        )}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchaseable}
            onClick={props.orderHandler}>Order Now
        </button>
    </div>
);


export default BuildControls