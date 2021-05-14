import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CompanyPorp } from './company';

export default class AddCompany extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }
    fakeId = 124;
    state = {
        company: {
            id: 0,
            name: "",
            city: "",
            region: "" 
        }
    }
    addNewCompany = (e:any) => {
        e.preventDefault();
        this.fakeId = this.fakeId + 1;
        this.props.add({...this.state.company, id: this.fakeId});

        //clear the form
        this.setState({
            company: {
                id:0,
                name: "",
                city: "",
                region: ""
            }
        })
    }
    render() {
        return <Form onSubmit={this.addNewCompany}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" placeholder="Company Name" value={this.state.company.name} onChange={(e)=>{
                            console.log(e.target.value);
                            this.setState((prevState:any) => ({company: {...prevState.company, name: e.target.value}}))
                        }}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" value={this.state.company.city} onChange={(e)=>{
                            console.log(e.target.value);
                            this.setState((prevState:any) => ({company: {...prevState.company, city: e.target.value}}))
                        }}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" value={this.state.company.region} onChange={(e)=>{
                            console.log(e.target.value);
                            this.setState((prevState:any) => ({company: {...prevState.company, region: e.target.value}}))
                        }}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add New
                    </Button>
                </Form>
    }
}