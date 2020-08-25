import { Container, Grid, withStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { config } from '../shared/functions';
import { MoviesService } from '../shared/services';
import { userLogin } from '../shared/store/actions';
import './Movie.scss';
import { Movies } from '../shared/interfaces';
import {get} from 'lodash';

const movieService = new MoviesService();

const styles = (theme: any) => ({
  posterContainer: {
    'margin-top': '-15rem'
  }
});

const mapStateToProps = (state: any) => {
  return state;
};

class Movie extends React.Component<any, {movie?: Movies}> {
  private config = config();
  
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }
  
  public componentDidMount() {
    // if (!get(this.props, 'location.state.movie')) {
      const movieId = get(this.props, 'match.params.movieId');
      movieService.getMovie(movieId)
        .then((response) => {
          this.setState({...this.state, movie: response.data});
        })
        .catch((e) => console.log(e));
    // }
  }
  
  public render() {
    const {classes}: any = this.props;
    if (this.state.movie) {
      console.log(this.state.movie);
      return <React.Fragment>
        <div className="banner" style={{background: `url("${this.config.tmdbImageEndpoint1280}${this.state.movie.image}") center center / cover`}}/>
        <Container className={classes.posterContainer}>
          <Grid container spacing={3}>
            <Grid lg={3} md={3} sm={12} xs={12}>
              <img className="poster" src={`${this.config.tmdbImageEndpoint1280}${this.state.movie.poster}`} alt=""/>
            </Grid>
  
            <Grid lg={9} md={9} sm={12} xs={12}>
              <div className="poster-details">
                <span className="movie-title">{this.state.movie.title}</span>
                <span className="release-date">{this.state.movie.releaseDate}</span>
                <Grid container >
                  <Grid lg={3} md={3} sm={5} xs={5}>
                    <p>Original Language</p>
                    <p>Original Title</p>
                    <p>Popularity</p>
                    <p>Vote Average</p>
                    <p>Vote Count</p>
                  </Grid>
                  <Grid lg={9} md={9} sm={7} xs={7}>
                    <p>{this.state.movie.originalLanguage}</p>
                    <p>{this.state.movie.originalTitle}</p>
                    <p>{this.state.movie.popularity}</p>
                    <p>{this.state.movie.voteCount}</p>
                  </Grid>
                </Grid>
              </div>
              <div className="synopsis">
                <h3>Synopsis</h3>
                {this.state.movie.overview}
              </div>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>;
    } else {
      return '';
    }
  }
  
}

export default connect(mapStateToProps, {userLogin})(withStyles(styles)(Movie));
