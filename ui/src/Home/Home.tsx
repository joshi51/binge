import React from 'react';
import logo from '../react.svg';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './Home.scss';

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Home">
          <ButtonToolbar>
              <Button variant="outline-secondary">Primary</Button>
          </ButtonToolbar>
      </div>
    );
  }
}

export default Home;
