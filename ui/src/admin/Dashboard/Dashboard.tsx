import axios from 'axios';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import * as config from '../../config.json';
import SelectGridList from '../SelectGridList/SelectGridList';

class Dashboard extends React.Component<any, {keyword: string, apiData: any, apiCallCheckbox: any}> {
    constructor(props: any) {
        super(props);
        this.state = {
            apiCallCheckbox: false,
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
        let apiUrl = `${config.serverEndpoint}/admin/search/${this.state.keyword}`;
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
        return(
            <Container>
                <Form>
                    <Form.Group controlId="keyword">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="input" placeholder="Search movie" value={this.state.keyword} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="apiCallCheckbox">
                        <Form.Check type="checkbox" label="Use API call" value={this.state.apiCallCheckbox} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSearch}>Search</Button>
                </Form>
                {this.state.apiData.length ? <SelectGridList apiData={this.state.apiData}/> : ''}
            </Container>
        );
    }
}
export default Dashboard;
