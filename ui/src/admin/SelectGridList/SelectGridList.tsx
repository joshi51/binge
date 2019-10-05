import * as _ from 'lodash';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

class SelectGridList extends React.Component<{apiData: any}, {movies: any}> {
    constructor(props: any) {
        super(props);
        this.state = {
          movies: this.props.apiData.results
        };
    }
    private renderGrids() {
        const tmdbImageUsl = `https://image.tmdb.org/t/p/w500`;
        return _.map(this.state.movies, (movie, key) => (
            <Card style={{ width: '18rem' }} key={key}>
                <Card.Img variant="top" src={`${tmdbImageUsl}${movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
            </Card>
        ));
    }
    public render() {
        return (
            <Container>{this.renderGrids()}</Container>
        );
    }
}

export default SelectGridList;
