import React from 'react';
import { AppBar, IconButton, Typography, Button, Toolbar, Link, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { globalCss } from '../shared/material-ui-global';
import './BingeNav.scss';
import { get, isEmpty, isEqual } from 'lodash';
import {userLogin} from '../shared/store/actions';

const styles = (theme: any) => ({
  whiteLink: globalCss.whiteLink,
  headerBar: {
    backgroundColor: '#242530'
  }
});

const mapStateToProps = (state: any) => {
  return state;
};

class BingeNav extends React.Component<any, { user: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {}
    };
    this.renderHeaderItems = this.renderHeaderItems.bind(this);
  }
  
  public componentDidMount() {
    if (!isEmpty(this.props.user)) {
      this.setState({...this.state, user: get(this.props, 'user.userData.token.user')});
    } else {
      const sessionData = localStorage.getItem('auth');
      if (sessionData) {
        const sessionJson = JSON.parse(sessionData);
        this.setState({...this.state, user: get(sessionJson, 'token.user')});
        this.props.userLogin(sessionJson);
      }
    }
  }
  
  public componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{ user: any }>, snapshot?: any) {
    if (!isEqual(this.props, prevProps) && !isEmpty(this.props.user)) {
      this.setState({...this.state, user: get(this.props, 'user.userData.token.user')});
    }
  }
  
  private renderHeaderItems() {
    const {classes}: any = this.props;
    if (get(this.state, 'user.firstname')) {
      return (
        <React.Fragment>
          <Typography  variant="h6">Hi {this.state.user.firstname}</Typography>
          <Button className={classes.whiteLink} href="/admin" color="inherit">Dashboard</Button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Button className={classes.whiteLink} href="/admin" color="inherit">Dashboard</Button>
          <Button className={classes.whiteLink} href="/auth/login" color="inherit">Login</Button>
          <Button className={classes.whiteLink} href="/auth/signup" color="inherit">Register</Button>
        </React.Fragment>
      );
    }
  }
  
  public render() {
    const {classes}: any = this.props;
    return (
      <AppBar position="static" className={classes.headerBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography className="header-left" variant="h6">
            <Link className={classes.whiteLink} href="/">Binge</Link>
          </Typography>
          {this.renderHeaderItems()}
        </Toolbar>
      </AppBar>
    );
  }
}

export default connect(mapStateToProps,{userLogin})(withStyles(styles)(BingeNav));
