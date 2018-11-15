import React from "react";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "typeface-roboto";

const styles = createStyles({
    card: {
        minWidth: 275,
        marginBottom: 8
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
    properties: {
        fontSize: 10
    },
    name: {
        fontSize: "11pt",
        fontFamily: "Calibri"
    }
});

interface Props extends WithStyles<typeof styles> {
    name: string;
    styleProps: any;
}

type State = {};

class StyleCard extends React.Component<Props, any> {
    render() {
        const { classes, name, styleProps } = this.props;

        // generate style overrides string from properties
        let styleString = "";
        for (const [key, value] of Object.entries(styleProps)) {
            styleString = `${styleString} ${key}: ${value}, `;
        }
        // remove trailing comma and space
        styleString = `${styleString.slice(0, -2)}`;

        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography className={classes.name} style={styleProps}>
                            {name}
                        </Typography>
                        <Typography
                            className={classes.properties}
                            color="textSecondary"
                        >
                            {styleString}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}
export default withStyles(styles)(StyleCard);
