import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu1 from "./menu1";
import HomePage from "./HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu1Photos from "./menu-1/photos"
import Menu2 from "./menu-2"
import Menu3 from "./menu-3"
import Menu4 from "./menu-4"

import Menu1Video from "./menu-1/video"




export default class App extends React.Component {

    render() {
        return (
            <div className="backGround">
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/menu1" component={Menu1} exact />
                    <Route path="/menu1/photos" component={Menu1Photos} />
                    <Route path="/menu1/video" component={Menu1Video} />

                    <Route path="/menu2" component={Menu2} />

                    <Route path="/menu3" component={Menu3} />
                    <Route path="/menu4" component={Menu4} />
                
                </Switch>
            </div>
        );
    }

}