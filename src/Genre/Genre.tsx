import { map } from 'lodash';
import * as React from 'react';
import './Genre.scss';
import { GenreList } from './interfaces';
import {Grid, Container} from '@material-ui/core';

export class Genre extends React.Component {
  private dummyImg = `https://res.cloudinary.com/dayo7ui1r/image/upload/w_360,h_240/v1565431382/Binge/arrival.jpg`;
  private genres: GenreList[] = [
    {title: 'rom-com1', name: 'rom-com', image: this.dummyImg, route: '/genre'},
    {title: 'rom-com2', name: 'rom-com', image: this.dummyImg, route: '/genre'},
    {title: 'rom-com3', name: 'rom-com', image: this.dummyImg, route: '/genre'},
    {title: 'rom-com4', name: 'rom-com', image: this.dummyImg, route: '/genre'},
    {title: 'rom-com5', name: 'rom-com', image: this.dummyImg, route: '/genre'},
    {title: 'rom-com5', name: 'rom-com', image: this.dummyImg, route: '/genre'},
  ];
  
  private renderGenreRow() {
    return map(this.genres, (genre, key) => {
      return (<Grid item xs={4} key={key}>
        <div className="image"><img src={genre.image} alt={genre.name}/></div>
        <div className="title"><span>{genre.title}</span></div>
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
