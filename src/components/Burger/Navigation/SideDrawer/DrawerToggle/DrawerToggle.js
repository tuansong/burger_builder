import React from 'react';

import classess from './DrawerToggle.css';

const drawerToggle = (props) => (<div onClick={props.clicked} className={classess.Menu}>MENU</div>)

export default drawerToggle;