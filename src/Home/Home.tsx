import * as _ from 'lodash';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import Genre from '../Genre/Genre';
import './Home.scss';
import { Banner } from './interfaces';
import { userLogin } from '../shared/store/actions';

const mapStateToProps = (state: any) => {
  console.log(state);
  return state;
};

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
  }
  
  public componentDidMount() {
    this.props.userLogin({id: '2'});
  }
  
  private renderItems = () => {
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

export default connect(mapStateToProps, {userLogin})(Home);
