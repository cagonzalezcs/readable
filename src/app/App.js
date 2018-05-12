import React, { Component } from 'react';
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
                    <NavigationComponent />
                    <MainContentAreaComponent />
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default App;
