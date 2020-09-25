import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Genre from '../Genre/Genre';
import './Home.scss';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {MoviesService} from '../shared/services';
import {Movies} from '../shared/interfaces';
const movieService = new MoviesService();
import {config} from '../shared/functions';
const env = config();

const bannerMovieIds = [299536, 664767, 447332, 27205];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const mapStateToProps = (state: any) => {
  return state;
};

class Home extends React.Component<{ userLogin?: any }, {activeStep: number, bannerMovies: Movies[]}> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeStep: 0,
      bannerMovies: []
    };
    
    this.handleStepChange = this.handleStepChange.bind(this);
  }
  
  public componentDidMount() {
    movieService.getMovies(bannerMovieIds)
      .then((response: any) => this.setState({...this.state, bannerMovies: response.data}))
      .catch((err: any) => console.log(err));
  }
  
  private renderBannerImage(banner: Movies) {
    return <div style={{background: `url("${env.tmdbImageEndpoint1280}/${banner.image}") center center / cover`, height: '500px'}}>
      {banner.title}
    </div>;
  }
  
  private renderItems = () => {
    return _.map(this.state.bannerMovies, (banner: Movies, index: number) => {
      return (
        <div key={index}>
          {Math.abs(this.state.activeStep - index) <= 2 ? (this.renderBannerImage(banner)) : null}
        </div>
      );
    });
  }
  
  private handleStepChange() {
    let newStep;
    newStep = this.state.bannerMovies.length > 0 && this.state.activeStep !== this.state.bannerMovies.length - 1 ? this.state.activeStep + 1 : 0;
    this.setState({...this.state, activeStep: newStep});
  }
  
  public render() {
    return (
      <React.Fragment>
        <AutoPlaySwipeableViews
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {this.renderItems()}
        </AutoPlaySwipeableViews>
        <Genre/>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, null)(Home);
