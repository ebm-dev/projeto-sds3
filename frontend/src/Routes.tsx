import Home from 'pages/Home';
import Dashboad from 'pages/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboad />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;

