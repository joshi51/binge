import React from 'react';
import { AppBar, IconButton, Button, Toolbar, Link, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { globalCss } from '../shared/material-ui-global';
import './BingeNav.scss';
import { get, isEmpty, isEqual, map } from 'lodash';
import { userLogin } from '../shared/store/actions';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import { movieService } from '../shared/services';
import { config } from '../shared/functions';

const styles: any = (theme: any) => ({
  whiteLink: globalCss.whiteLink,
  headerBar: {
    backgroundColor: '#242530'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
});

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    userLogin: (payload: any) => dispatch(userLogin(payload))
  };
};

const defaultImage = 'https://res.cloudinary.com/dayo7ui1r/image/upload/w_360,h_360/v1590687559/Binge/genres/drama.png';

class BingeNav extends React.Component<any, { user: any, searchValue: string, searchResults: any, selectedMovie: any }> {
  private config = config();
  constructor(props: any) {
    super(props);
    this.state = {
      user: {},
      searchValue: '',
      searchResults: [],
      selectedMovie: {}
    };
    this.renderHeaderItems = this.renderHeaderItems.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  public componentDidMount() {
    if (!isEmpty(this.props.user)) {
      this.setState({ ...this.state, user: this.props.user.userData });
    } else {
      const sessionData = sessionStorage.getItem('auth');
      if (sessionData) {
        const sessionJson = JSON.parse(sessionData);
        this.setState({ ...this.state, user: sessionJson });
        this.props.userLogin(sessionJson);
      }
    }
  }

  public componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{ user: any }>, snapshot?: any) {
    if (!isEqual(this.props, prevProps) && !isEmpty(this.props.user)) {
      this.setState({ ...this.state, user: this.props.user.userData });
    }
  }

  public componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  private renderHeaderItems() {
    const { classes }: any = this.props;
    if (get(this.state, 'user.firstname')) {
      return (
        <React.Fragment>
          <p className='header-text'>Hi {this.state.user.firstname.toUpperCase()}</p>
          <Button className={classes.whiteLink} href="/admin" color="inherit">Dashboard</Button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Button className={classes.whiteLink} href="/admin" color="inherit">Dashboard</Button>
          <Button className={classes.whiteLink} href="/auth/login" color="inherit">Login</Button>
          <Button className={classes.whiteLink} href="/auth/signup" color="inherit">Register</Button>
        </React.Fragment>
      );
    }
  }

  private renderSearchResults() {
    return map(this.state.searchResults, (movie: any) => {
      return (<Link href={`/movie/${movie.id}`} key={movie.id}>
        <div className="result-ul">
          {movie.poster ?
            <div className="image" style={{ background: `url("${this.config.tmdbImageEndpoint1280}${movie.poster}") center center / cover` }} /> :
            <div className="image" style={{ background: `url("${defaultImage}") center center / cover` }} />}
          <span>{movie.title}</span>
        </div>
      </Link>)
    })
  }

  private handleSearchChange(event: any) {
    event.preventDefault();
    this.setState({ ...this.state, searchValue: event.currentTarget.value }, () => {
      if (this.state.searchValue.length > 2) {
        movieService.searchMovie(this.state.searchValue)
          .then(response => {
            this.setState({ ...this.state, searchResults: response.data })
          })
          .catch(err => console.log(err));
      } else {
        this.setState({ ...this.state, searchResults: [] });
      }
    });
  }

  public render() {
    const { classes }: any = this.props;
    return (
      <AppBar position="static" className={classes.headerBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <p className="header-left">
            <Link className={classes.whiteLink} href="/">Binge</Link>
          </p>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={this.state.searchValue} onChange={this.handleSearchChange}
            />
            <div className="search-results">{this.renderSearchResults()}</div>
          </div>
          {this.renderHeaderItems()}
        </Toolbar>
      </AppBar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BingeNav));
