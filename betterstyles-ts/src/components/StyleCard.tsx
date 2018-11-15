import * as React from "react";
// import PropTypes from "prop-types";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import createStyles from "@material-ui/core/styles/createStyles";
// import { Theme } from "@material-ui/core/styles/createMuiTheme";
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
    // injected style props
    name: string;
    properties: string;
    classes: {
        card: string;
        title: string;
        pos: string;
        properties: string;
        name: string;
    };
}

type State = {};

class StyleCard extends React.Component<Props, State> {
    render() {
        const { classes, name, properties } = this.props;

        // generate style overrides string from properties
        let styleString = "";
        for (const [key, value] of Object.entries(properties)) {
            styleString = `${styleString} ${key}: ${value}, `;
        }

        // remove trailing comma and space
        styleString = `${styleString.slice(0, -2)}`;
        console.log(styleString);

        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        {/* <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Word of the Day
                    </Typography> */}
                        <Typography className={classes.name} style={properties}>
                            {name}
                        </Typography>
                        <Typography
                            className={classes.properties}
                            color="textSecondary"
                        >
                            {styleString}
                        </Typography>
                        {/* <Typography component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography> */}
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
            </Card>
        );
    }
}

export default withStyles(styles)(StyleCard);

// function StyleCard(props) {
//     const { classes } = props;
//     const { name } = props;

//     // generate style overrides string from properties
//     const { properties } = props;
//     let styleString = "";
//     for (const [key, value] of Object.entries(properties)) {
//         styleString = `${styleString} ${key}: ${value}, `;
//     }
//     // remove trailing comma and space
//     styleString = `${styleString.slice(0, -2)}`;
//     console.log(styleString);
//     // const bull = <span className={classes.bullet}>•</span>;

//     return (
//         <Card className={classes.card}>
//             <CardActionArea>
//                 <CardContent>
//                     {/* <Typography
//                         className={classes.title}
//                         color="textSecondary"
//                         gutterBottom
//                     >
//                         Word of the Day
//                     </Typography> */}
//                     <Typography className={classes.name} style={properties}>
//                         {name}
//                     </Typography>
//                     <Typography
//                         className={classes.properties}
//                         color="textSecondary"
//                     >
//                         {styleString}
//                     </Typography>
//                     {/* <Typography component="p">
//                         well meaning and kindly.
//                         <br />
//                         {'"a benevolent smile"'}
//                     </Typography> */}
//                 </CardContent>
//             </CardActionArea>
//             {/* <CardActions>
//                 <Button size="small">Learn More</Button>
//             </CardActions> */}
//         </Card>
//     );
// }

// StyleCard.propTypes = {
//     classes: PropTypes.object.isRequired,
//     name: PropTypes.string.isRequired,
//     properties: PropTypes.object.isRequired
// };

// export default withStyles(styles)(StyleCard);
