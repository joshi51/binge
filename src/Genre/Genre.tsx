import { map } from 'lodash';
import * as React from 'react';
import './Genre.scss';
import { config } from '../shared/functions';
import { globalCss } from '../shared/material-ui-global';
import { GenreList } from './interfaces';
import { Grid, Container, withStyles } from '@material-ui/core';
import axios from 'axios';

const styles = (theme: any) => ({
  genreGrid: {
    padding: '1rem'
  }
});

class Genre extends React.Component<any, { genres: GenreList[] }> {
  private config = config();
  
  constructor(props: any) {
    super(props);
    this.state = {
      genres: []
    };
    this.getFeaturedGenres();
  }
  
  private getFeaturedGenres() {
    const getFeaturedGenreApi = `${this.config.serverEndpoint}/genres/featured`;
    axios.get(getFeaturedGenreApi)
      .then((res) => {
        this.setState({genres: res.data});
      })
      .catch((err) => alert(err));
  }
  
  private renderGenreRow() {
    const { classes }: any = this.props;
    return map(this.state.genres, (genre, key) => {
      return (<Grid item lg={4} md={4} sm={12} xs={12} key={key} className={`${classes.genreGrid} genre-grid`}>
        <div className="image"><img src={genre.image} alt={genre.name}/></div>
        <div className="title"><span>{genre.name}</span></div>
      </Grid>);
    });
  }
  
  public render() {
    return (
      <div className="section">
        <Container>
          <h5 className="heading">Genres</h5>
          <Grid container spacing={3}>
            {this.renderGenreRow()}
          </Grid>
          <div className="view-more"><span>View More</span></div>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Genre);
