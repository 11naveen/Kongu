import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        minHeight: "7vh",
        flexDirection: "column",
    }
}));

const Footer = (props) =>{
    const classes = useStyles();
    
    return(
        <div>
            <Typography className={classes.footer} variant="caption">Kongu Integrated Farm © CopyRights 2021 All Rights Reserved</Typography>
        </div>
    );
}
export default Footer;