import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const useStyles = makeStyles((theme) =>({
    centalview: {
        display: "flex",
        alignItems: "center",
        height: "80vh",
    },
    imgview: {
    },
    button: {
        backgroundColor: "#81BE1C",
        color: "white",
        marginTop: "3%",
        '&:hover': {
            backgroundColor: "#81BE1C",
            color: "white",
        }
    }
}));

const MainPage = (props) =>{
    const classes = useStyles();
    return(
        <div className={classes.centalview}>
            <div>
                <Typography variant="h3">Kongu Intergrated Farm</Typography>
                <Button endIcon={<ArrowForwardRoundedIcon />} className={classes.button} variant="contained">Let's Start</Button>                
            </div>
        </div>
    );
}

export default MainPage;