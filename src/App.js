import React, { useState, useEffect } from 'react';
import { Home, SignIn, Signup, Created } from './components/'
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import { AuthProvider } from './Context';

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/SignIn">
                        <SignIn />
                    </Route>
                    <Route exact path="/signUp">
                        <Signup />
                    </Route>
                    <Route path="/created">
                        <Created />
                    </Route>
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
