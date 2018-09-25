import React from 'react';

import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map( (igKey, i) => {
           return <li key={i}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        })
    return (
    <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p>Continue to checkout</p>
        <p><span style={{fontWeight: 'bold'}}>Total</span>: {props.totalPrice} $</p>
        <Button btnType="Danger" clicked={props.cancelOrder}>CANCEL</Button>
        <Button btnType="Success" clicked={props.continueCheckout}>CONTINUE</Button>
    </Aux>
    )
};

export default orderSummary;