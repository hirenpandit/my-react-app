import React from 'react';
import {CompanyPorp} from './company';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import AddCompany from './add-company';

export default class Company extends React.Component<any, any> {

    state =  {
        companies: this.props.companies
    }

    delById = (id:number) => {
        console.log(`Deleting company with id: ${id}`);
        this.setState({
            companies: this.state.companies.filter((c:CompanyPorp) => c.id !== id )
        });
    }
    
    addNew = (company:CompanyPorp) => {
       this.setState((prevState:any) => ({
            companies: [...prevState.companies, company]
        }));
    }

    render() {
        return <>
            <AddCompany add = {this.addNew}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.companies.map((c:CompanyPorp) => {
                            return <tr>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.city}</td>
                                <td>{c.region}</td>
                                <td><Button variant="outline-danger" onClick={()=>this.delById(c.id)}>Delete</Button></td>
                            </tr>
                        })
                    }
                </tbody>
                </Table>
        </>
    }

}