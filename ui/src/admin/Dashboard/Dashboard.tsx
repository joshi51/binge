import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import * as apidata from '../../../public/apiData.json';
import SelectGridList from '../SelectGridList/SelectGridList';

class Dashboard extends React.Component<any, {keyword: string, apiData: any}> {
    constructor(props: any) {
        super(props);
        this.state = {
            apiData: undefined,
            keyword: '',
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    private handleChange(event: any) {
        this.setState({keyword: event.currentTarget.value});
    }
    private handleSearch(event: any) {
        event.preventDefault();
        this.setState({apiData: apidata});
    }
    public render() {
        return(
            <Container>
                <Form>
                    <Form.Group controlId="keyword">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="input" placeholder="Search movie" value={this.state.keyword} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSearch}>Search</Button>
                </Form>
                {this.state.apiData ? <SelectGridList apiData={this.state.apiData.default}/> : ''}
            </Container>
        );
    }
}
export default Dashboard;
