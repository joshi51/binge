import * as _ from 'lodash';
import React from 'react';
import { Container, Media } from 'react-bootstrap';
import * as config from '../../config.json';
import './SelectGridList.scss';

class SelectGridList extends React.Component<{apiData: any}, {movies: any}> {
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
    
    private renderGrids() {
        const tmdbImageUsl = config.tmdbImageEndpoint;
        return _.map(this.state.movies, (movie, key) => {
            return (
                <Media className="selectable" onClick={() => this.handleClick(movie)} key={key}>
                    <img className="poster" src={`${tmdbImageUsl}${movie.poster}`} alt="Generic placeholder"/>
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
