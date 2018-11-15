import * as React from "react";
import Progress from "./Progress";
import StyleCard from "./StyleCard.js";

export interface AppProps {
    title: string;
    isOfficeInitialized: boolean;
}

export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props, context) {
        super(props, context);
        // this.state = {
        //     listItems: []
        // };
    }

    componentDidMount() {
        // this.setState({
        //     listItems: [
        //         {
        //             icon: "Ribbon",
        //             primaryText: "Achieve more with Office integration"
        //         },
        //         {
        //             icon: "Unlock",
        //             primaryText: "Unlock features and functionality"
        //         },
        //         {
        //             icon: "Design",
        //             primaryText: "Create and visualize like a pro"
        //         }
        //     ]
        // });
    }

    click = async () => {
        return Word.run(async context => {
            /**
             * Insert your Word code here
             */
            const range = context.document.getSelection();

            // Read the range text
            range.load("text");

            // Update font color
            range.font.color = "red";

            await context.sync();
            console.log(`The selected text was ${range.text}.`);
        });
    };

    render() {
        const { title, isOfficeInitialized } = this.props;
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

        if (!isOfficeInitialized) {
            return (
                <Progress
                    title={title}
                    logo="assets/logo-filled.png"
                    message="Please sideload your addin to see app body."
                />
            );
        }

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
            <div className="App">
                <div className="App-body">{styleCardsJSX}</div>
            </div>
        );
    }
}
