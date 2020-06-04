import React from 'react';
import { AppBar, IconButton, Typography, Button, Toolbar, Link, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {globalCss} from '../shared/material-ui-global';
import './BingeNav.scss';

const styles = (theme: any) => ({
  whiteLink: globalCss.whiteLink
});

class BingeNav extends React.Component<any, { type: number }> {
  constructor(props: any) {
    super(props);
  }
  
  public render() {
    const { classes }: any = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className="header-left" variant="h6">
            <Link className={classes.whiteLink} href="/">Binge</Link>
          </Typography>
          <Button className={classes.whiteLink} href="/admin" color="inherit">Dashboard</Button>
          <Button className={classes.whiteLink} href="/auth/login" color="inherit">Login</Button>
          <Button className={classes.whiteLink} href="/auth/signup" color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(BingeNav);
