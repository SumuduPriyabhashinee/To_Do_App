import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../home/Home'

const ComponentRoutes = () => {
    return (
        <div className="FormStyles">
                <Route path="/" exact component={Home} />
        </div>
    );
}

export default ComponentRoutes;