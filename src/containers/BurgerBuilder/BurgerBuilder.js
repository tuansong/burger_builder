import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/spinner/Spinner';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchaseable: false,
        showModal: false,
        loading: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => { return sum + el }, 0);
        this.setState({
            purchaseable: sum > 0
        })
    }

    addIngredientHandler = (ingredient) => {
        // Add ingredient
        const oldCounter = this.state.ingredients[ingredient];
        const newCounter = oldCounter + 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[ingredient] = newCounter;

        // Update burger's price
        const currentPrice = this.state.totalPrice;
        const ingredientPrice = INGREDIENT_PRICES[ingredient];
        const updatedPrice = currentPrice + ingredientPrice;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (ingredient) => {
        // Remove ingredient
        const oldCounter = this.state.ingredients[ingredient];
        if (oldCounter <= 0) {
            return null;
        }
        else {
            const newCounter = oldCounter - 1;
            const updatedIngredients = { ...this.state.ingredients }
            updatedIngredients[ingredient] = newCounter;

            // Update burger's price
            const currentPrice = this.state.totalPrice;
            const ingredientPrice = INGREDIENT_PRICES[ingredient];
            const updatedPrice = currentPrice - ingredientPrice;

            this.setState({
                ingredients: updatedIngredients,
                totalPrice: updatedPrice
            });
            this.updatePurchaseState(updatedIngredients);
        }
    }

    orderHandler = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    cancelOrderHandler = () => {
        this.setState({
            showModal: false
        })
    }

    countinueCheckoutHandler = () => {
        this.setState({loading: true});
        const orderInfo = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Song',
                address: {
                    street: 'Testing',
                    zipCode: '1234',
                    country: 'VN'
                },
                email: 'test@test.com'
            }
        }
        axios.post('/orders.json', orderInfo).then(response => {
            this.setState({loading: false, showModal: false});
            console.log(response)
        })
            .catch(error => {
                console.log(error)
                this.setState({loading: false});
            });
    }

    render() {
        const disabledIngredient = { ...this.state.ingredients };
        for (let key in disabledIngredient) {
            disabledIngredient[key] = disabledIngredient[key] <= 0
        }
        let orderSummary = this.state.loading ?
            <Spinner />
            :
            <OrderSummary
                ingredients={this.state.ingredients}
                cancelOrder={this.cancelOrderHandler}
                continueCheckout={this.countinueCheckoutHandler}
                totalPrice={this.state.totalPrice}
            />
        return (
            <Aux>
                {this.state.showModal ?
                    <Modal closeModal={this.closeModal} show={this.state.purchaseable}>
                        {orderSummary}
                    </Modal>
                    :
                    null
                }
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledRemove={disabledIngredient}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    orderHandler={this.orderHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;