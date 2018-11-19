import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StyleCard from "./components/StyleCard";
import { applyStyle } from "./scripts";

import withRoot from "./withRoot";

class App extends Component {
    render() {
        const styleCards = [
            {
                name: "normal",
                styleProps: { fontSize: 11, fontFamily: "roboto" }
            },
            {
                name: "header",
                styleProps: { fontSize: 24, fontFamily: "roboto" }
            },
            {
                name: "subheader",
                styleProps: { fontSize: 18, fontFamily: "roboto" }
            },
            {
                name: "bold",
                styleProps: {
                    fontSize: 11,
                    fontFamily: "roboto",
                    fontWeight: "bold"
                }
            },
            {
                name: "italic",
                styleProps: {
                    fontSize: 11,
                    fontFamily: "roboto",
                    fontStyle: "italic"
                }
            }
        ];
        const styleCardsJSX = styleCards.map(function(styleCard, index) {
            return (
                <StyleCard
                    key={index}
                    name={styleCard.name}
                    styleProps={styleCard.styleProps}
                    onClick={function() {
                        return applyStyle(styleCard.styleProps);
                    }}
                />
            );
        });
        return (
            <div className="App">
                <div className="App-body">{styleCardsJSX}</div>
            </div>
        );
    }
}

export default withRoot(App);
