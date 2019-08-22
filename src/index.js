import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
    render () {
        return (
        <div>
            <h1>Indecision App</h1>
            <h2>Put your life in hands computer.</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    render () {
        return (
        <div>
            <button>What should I do?</button>
        </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
    </div>
);


ReactDOM.render(jsx, document.getElementById('app'));
