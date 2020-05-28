import {map, isEqual} from 'lodash';
import React from 'react';
import { Container, Media } from 'react-bootstrap';
import { config } from '../../shared/functions';
import './SelectGridList.scss';
import { Movies } from '../../shared/interfaces';

class SelectGridList extends React.Component<{ apiData: any }, { movies: any }> {
  private config = config();
  
  constructor(props: any) {
    super(props);
    console.log('props', props);
    this.state = {
      movies: this.props.apiData
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  private handleClick(movie: any) {
    console.log(movie);
  }
  
  public componentWillReceiveProps(nextProps: { apiData: Movies }) {
    if (!isEqual(nextProps.apiData, this.state.movies)) {
      this.setState({movies: nextProps.apiData});
    }
  }
  
  private renderGrids() {
    const tmdbImageUsl = this.config.tmdbImageEndpoint;
    return map(this.state.movies, (movie: Movies, key) => {
      return (
        <Media className="selectable" onClick={() => this.handleClick(movie)} key={key}>
          <img className="poster" src={`${tmdbImageUsl}${movie.poster ? movie.poster : movie.image}`} alt="Generic placeholder"/>
          <Media.Body>
            <h5>{movie.title}</h5>
            <p>{movie.overview}</p>
          </Media.Body>
        </Media>
      );
    });
  }
  
  public render() {
    return (
      <Container>{this.renderGrids()}</Container>
    );
  }
}

export default SelectGridList;
