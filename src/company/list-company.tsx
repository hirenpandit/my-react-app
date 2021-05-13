import React from 'react';
import {CompanyPorp} from './company';

export default class Company extends React.Component<any, any> {

    constructor(props:CompanyPorp[]){
        super(props);
    }

    state =  {
        companies: this.props.companies
    }

    render() {
        return <>
            {this.state.companies.map((c:CompanyPorp) => c.city)}
        </>
    }

}