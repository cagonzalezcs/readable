import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import $ from 'jquery';
import 'foundation-sites';
import NavigationComponent from '../components/nav/Navigation';
import MainContentAreaComponent from '../components/main-content/MainContentArea';
import FooterComponent from '../components/footer/Footer';

class App extends Component {
    componentDidMount() {
        $(document).foundation();
    }
    render() {
        return (
            <div className="application-body">
                <div className="app-content">
                    <Switch>
                        <Route exact path="/" component={NavigationComponent} />
                        <Route path="/:category?" component={NavigationComponent} />
                    </Switch>
                    <MainContentAreaComponent />
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default withRouter(App);
