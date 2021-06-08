import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  anchors:{
      flexGrow: .03,
      color: 'white'
  },
  appBar: {
      backgroundColor: '#81BE1C',
  },
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
   }
}));


const NavBar = (props) =>{
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return(
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Kongu Integrated Form
                </Typography>
                <Link href="#" className={classes.anchors} onClick={preventDefault}>
                  <Typography variant="subtitle1">NEWS</Typography>
                </Link>
                <Link href="#" className={classes.anchors} onClick={preventDefault}>
                  <Typography variant="subtitle1">ABOUT</Typography>
                </Link>
                <Link href="#" className={classes.anchors} onClick={preventDefault}>
                  <Typography variant="subtitle1">CONTACT</Typography>
                </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;