import * as _ from 'lodash';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import Genre from '../Genre/Genre';
import './Home.scss';
import { Banner } from './interfaces';
import { config } from '../shared/functions';
import { userLogin } from '../shared/store/actions';

class Home extends React.Component<{userLogin?: any}, {}> {
  private bannerImages: Banner[] = [
    {
      image: `https://res.cloudinary.com/dayo7ui1r/image/upload/w_1440,h_500,c_crop/v1565430748/Binge/blade-runner-2049.jpg`,
      subtitle: 'Blade Runner',
      title: '',
    }, {
      image: `https://res.cloudinary.com/dayo7ui1r/image/upload/w_1440,h_500,c_crop/v1565432199/Binge/arrival_d545_1440x900.jpg`,
      subtitle: 'Arrival',
      title: '',
    }, {
      image: `https://res.cloudinary.com/dayo7ui1r/image/upload/w_1440,h_500,c_crop/v1565431443/Binge/leon-the-professional.jpg`,
      subtitle: 'Léon: The Professional',
      title: '',
    },
  ];
  
  constructor(props: any) {
    super(props);
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }
  
  private handleUserLogin() {
    this.props.userLogin({user: '2'});
  }
  
  private renderItems = () => {
    config();
    this.handleUserLogin();
    return _.map(this.bannerImages, (banner: Banner, index: number) => {
      return (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={banner.image}
            alt={banner.title}
          />
          <Carousel.Caption>
            <h3>{banner.title}</h3>
            <p>{banner.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  }
  
  public render() {
    return (
      <React.Fragment>
        <Carousel>
          {this.renderItems()}
        </Carousel>
        <Genre/>
      </React.Fragment>
    );
  }
}

export default connect(null, {userLogin})(Home);
