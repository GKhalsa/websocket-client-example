import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SockJS from 'sockjs-client'
import Stomp from 'stomp-websocket';


class App extends Component {

    constructor() {
        super();
        this.state = {
            calls: []
        };
    }

    componentDidMount() {

        var socket = new SockJS('http://localhost:8080/call');
        var stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            // subscribe to the /topic/message endpoint
            stompClient.subscribe("/topic/calls", function (data) {
                debugger;
            });
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
