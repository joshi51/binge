import * as _ from 'lodash';
import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Home.scss';
import Feature from '../Feature/Feature';

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Feature/>
        <Container>
        <Row>
          {_.map([1, 2, 3, 4], (key) => {
            return (<Col key={key}>
              <Card>
                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16c587b9efd%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16c587b9efd%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.3984375%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                <Card.Body>
                  <Card.Title >Movie Title</Card.Title>
                  <Card.Text className="card-desc">
                    Movie Description. Movie Description. Movie Description. Movie Description. 
                    Movie Description. Movie Description. Movie Description. Movie Description. 
                    Movie Description. Movie Description. Movie Description. Movie Description. 
                  </Card.Text>
                  <Button variant="primary">Watch Trailer</Button>
                </Card.Body>
              </Card>
            </Col>);
          })}
        </Row>
      </Container>
      </div>
    );
  }
}

export default Home;
