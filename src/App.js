import React, {Component} from "react";
import "./App.css";

import {receiveCalls} from "./websocket-layer";


class App extends Component {

    constructor() {
        super();
        this.state = {
            calls: []
        };
        receiveCalls((call) => this.addCallsToState(call))
    }

    addCallsToState = (call) => {
        const calls = [...this.state.calls];
        calls.push(call);
        this.setState({calls})
    };

    displayCalls = () => {
        return this.state.calls.map((call) => {
            return (
                <div>
                    <div> Name: {call.name} </div>
                    <div> email: {call.email} </div>
                    <div> time: {call.time} </div>
                    <br/>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="App">
                {this.displayCalls()}
            </div>
        );
    }
}

export default App;
