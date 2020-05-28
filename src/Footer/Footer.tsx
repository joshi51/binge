import { Container, withStyles } from '@material-ui/core';
import React from 'react';
import './Footer.scss';
import {globalCss} from '../shared/material-ui-global';

const styles = (theme: any) => ({
  root: globalCss.flex
});

class Footer extends React.Component {
  public render() {
    const { classes }: any = this.props;
    return (<Container className={classes.root}>
      <div className="tmdb-logo"/>
      <div className="about-text">About the site</div>
    </Container>);
  }
}

export default withStyles(styles)(Footer);
