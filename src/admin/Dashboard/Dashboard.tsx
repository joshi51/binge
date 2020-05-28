import axios from 'axios';
import React from 'react';
import { config } from '../../shared/functions';
import SelectGridList from '../SelectGridList/SelectGridList';
import './Dashboard.scss';
import { TextField, Container, Button, FormControl, Checkbox, FormControlLabel } from '@material-ui/core';

class Dashboard extends React.Component<any, { keyword: string, apiData: any, apiCallCheckbox: any }> {
  private config = config();
  
  constructor(props: any) {
    super(props);
    this.state = {
      apiCallCheckbox: true,
      apiData: [],
      keyword: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  private handleChange(event: any) {
    switch (event.currentTarget.id) {
      case 'apiCallCheckbox':
        this.setState({apiCallCheckbox: event.currentTarget.checked});
        break;
      case 'keyword':
        this.setState({keyword: event.currentTarget.value});
        break;
    }
  }
  
  private handleSearch(event: any) {
    event.preventDefault();
    if (!this.state.keyword) {
      return;
    }
    let apiUrl = `${this.config.serverEndpoint}/admin/search/${this.state.keyword}`;
    if (this.state.apiCallCheckbox) {
      apiUrl += `?fromapi=${this.state.apiCallCheckbox}`;
    }
    axios.get(apiUrl)
      .then((res) => {
        if (res) {
          this.setState({apiData: res.data});
        }
      })
      .catch((err) => console.log(err));
  }
  
  public render() {
    return (
      <Container className="margin-top-2">
        <FormControl fullWidth={true}>
          <TextField id="keyword" label="Search movie" variant="outlined" value={this.state.keyword} onChange={this.handleChange}/>
        </FormControl>
        <FormControl fullWidth={true}>
          <FormControlLabel label="Use API"
          control={<Checkbox defaultChecked={true} value={this.state.apiCallCheckbox} onChange={this.handleChange} color="primary" id="apiCallCheckbox"/>}/>
        </FormControl>
        <Button variant="contained" color="primary" onClick={this.handleSearch}>Search</Button>
        {this.state.apiData.length ? <SelectGridList apiData={this.state.apiData}/> : ''}
      </Container>
    );
  }
}

export default Dashboard;
