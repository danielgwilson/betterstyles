import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./StyleCard";
import StyleCard from "./StyleCard";

class App extends Component {
    render() {
        const styleCards = [
            {
                name: "normal",
                properties: { fontSize: 11, fontFamily: "roboto" }
            },
            {
                name: "header",
                properties: { fontSize: 24, fontFamily: "roboto" }
            },
            {
                name: "subheader",
                properties: { fontSize: 18, fontFamily: "roboto" }
            },
            {
                name: "bold",
                properties: { fontSize: 11, fontFamily: "roboto" }
            },
            {
                name: "italic",
                properties: { fontSize: 11, fontFamily: "roboto" }
            }
        ];
        const styleCardsJSX = styleCards.map(function(styleCard, index) {
            return (
                <StyleCard
                    key={index}
                    name={styleCard.name}
                    properties={styleCard.properties}
                />
            );
        });
        return (
            <React.Fragment className="App">
                <React.Fragment className="App-body">
                    {styleCardsJSX}
                </React.Fragment>
            </React.Fragment>
        );
    }
}

export default App;
