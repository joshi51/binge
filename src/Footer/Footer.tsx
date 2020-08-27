import { Container, withStyles } from '@material-ui/core';
import React from 'react';
import './Footer.scss';
import {globalCss} from '../shared/material-ui-global';

const styles = (theme: any) => ({
  footer: {
    display: 'flex',
    padding: '0 6rem',
    'background-color': '#1b19191f',
    'margin-top': '1rem'
  },
  
});

class Footer extends React.Component {
  public render() {
    const { classes }: any = this.props;
    return (<div className={classes.footer}>
      <div className="tmdb-logo"/>
      <div className="about-text">About the site</div>
    </div>);
  }
}

export default withStyles(styles)(Footer);
