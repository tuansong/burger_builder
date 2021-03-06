import React, { Component } from 'react';

import Aux from '../../hoc/Auxi'
import classes from './Layout.css';
import Toolbar from '../Burger/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Burger/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        console.log(this.state.showSideDrawer);
        this.setState({ showSideDrawer: false });
    }

    sideDrawerOpenedHandler = () => {
        console.log(this.state.showSideDrawer);
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar openSideDrawer={this.sideDrawerOpenedHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout