/**
 * Created by stevet on 04/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
//import BusinessPartnerListStore from '../stores/BusinessPartnerListStore';
//import BusinessPartnerListActions from '../actions/BusinessPartnerListActions';

class BusinessPartnerList extends React.Component {
    constructor(props) {
        super(props);
//        this.state = BusinessPartnerListStore.getState();
//        this.onChange = this.onChange.bind(this);
    }

/*
    componentDidMount() {
        BusinessPartnerListStore.listen(this.onChange);
    }

    componentWillUnmount() {
        BusinessPartnerListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }
*/

    render() {

        return (
            <div className='container'>

                <div className='row flipInX animated'>
                    <div className='col-sm-8'>



                <div className="panel panel-default">
                    <div className="panel-heading">Business Partner List</div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                    </div>
                </div>
        );
    }
}

export default BusinessPartnerList;