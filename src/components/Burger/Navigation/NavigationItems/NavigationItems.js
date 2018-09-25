import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationsItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Order</NavigationItem>
        <NavigationItem link="/checkout">Checkout</NavigationItem>
    </ul>
);

export default NavigationsItems;