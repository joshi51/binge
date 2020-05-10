import * as _ from 'lodash';
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Genre.scss';
import { GenreList } from './interfaces';

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
        const rows: any = [];
        for (let i = 0; i < this.genres.length;) {
            const cards: any = [];
            _.forEach(_.slice(this.genres, i, i + 3), (genre, key) => {
                cards.push(<Col key={key}>
                    <Card>
                        <div className="image"><img src={genre.image} alt={genre.name}/></div>
                        <div className="title"><span>{genre.title}</span></div>
                    </Card>
                </Col>);
            });
            rows.push(<Row key={i}>{cards}</Row>);
            i += 3;
        }
        return rows;
    }
    
    public render() {
        return (
            <div className="section">
                <Container>
                    <h5 className="heading">Genres</h5>
                    {this.renderGenreRow()}
                    <div className="view-more"><span>View More</span></div>
                </Container>
            </div>
        );
    }
}