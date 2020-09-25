import { map } from 'lodash';
import * as React from 'react';
import './Genre.scss';
import { config } from '../shared/functions';
import { GenreList } from './interfaces';
import { Grid, Container, withStyles, Snackbar } from '@material-ui/core';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

const styles = (theme: any) => ({
  genreGrid: {
    padding: '1rem'
  }
});

class Genre extends React.Component<any, { genres: GenreList[], open: boolean, alertMsg: string, redirectPath: string }> {
  private config = config();
  
  constructor(props: any) {
    super(props);
    this.state = {
      genres: [],
      open: false,
      alertMsg: '',
      redirectPath: ''
    };
    this.handleClose = this.handleClose.bind(this);
    this.getFeaturedGenres();
  }
  
  private showAlert(msg: string) {
    this.setState({...this.state, open: true, alertMsg: msg});
  }
  
  private handleClose() {
    this.setState({...this.state, open: false});
  }
  
  private getFeaturedGenres() {
    const getFeaturedGenreApi = `${this.config.serverEndpoint}/genres/featured`;
    axios.get(getFeaturedGenreApi)
      .then((res) => {
        this.setState({genres: res.data});
      })
      .catch((err) => this.showAlert(err.message));
  }
  
  private navigateGenrePage(genreId: number) {
    this.setState({redirectPath: `/genres/${genreId}`});
  }
  
  private renderGenreRow() {
    const { classes }: any = this.props;
    return map(this.state.genres, (genre, key) => {
      return (<Grid item lg={4} md={4} sm={12} xs={12} key={key} className={`${classes.genreGrid} genre-grid`}>
        <div onClick={() => this.navigateGenrePage(genre.id)} className="image"><img src={genre.image} alt={genre.name}/></div>
        <div className="title"><span>{genre.name}</span></div>
      </Grid>);
    });
  }
  
  public render() {
    if (this.state.redirectPath) {
      return <Redirect to={this.state.redirectPath} push/>;
    } else {
      return (
        <div className="section">
          <Snackbar open={this.state.open} message={this.state.alertMsg} onClose={this.handleClose}/>
          <Container className="container">
            <h5 className="heading">Genres</h5>
            <Grid container spacing={3}>
              {this.renderGenreRow()}
              <Grid item lg={12} xs={12} sm={12} md={12} className="view-more"><span>View More</span></Grid>
            </Grid>
          </Container>
        </div>
      );
    }
    
  }
}

export default withStyles(styles)(Genre);
