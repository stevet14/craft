/**
 * Created by stevet on 29/06/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import AddBusinessPartnerStore from '../stores/AddBusinessPartnerStore';
import AddBusinessPartnerActions from '../actions/AddBusinessPartnerActions';

class AddBusinessPartner extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddBusinessPartnerStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddBusinessPartnerStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddBusinessPartnerStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.errors.length = 0;

        var title = this.state.title;
        var firstName = this.state.firstName.trim();
        var lastName = this.state.lastName.trim();
        var email = this.state.email.trim();

        if (!firstName) {
            AddBusinessPartnerActions.invalidFirstName();
            ReactDOM.findDOMNode(this.refs.firstNameTextField).focus();
        }

        if (!lastName) {
            AddBusinessPartnerActions.invalidLastName();
            ReactDOM.findDOMNode(this.refs.lastNameTextField).focus();
        }

        if (!email) {
            AddBusinessPartnerActions.invalidEmail();
            ReactDOM.findDOMNode(this.refs.emailTextField).focus();
        }

        if (title && firstName && lastName && email) {
            AddBusinessPartnerActions.addBusinessPartner(title, firstName, lastName, email);
        }
    }

    render() {
        let errorsList = this.state.errors.map((error, index) => {
           return (
             <li key={index}><a href='#firstNameTextField'>{error}</a></li>
           );
        });

        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-8'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>Add Business Partner
                                <span className='help-block'>{this.state.helpBlock}</span>
                            </div>
                            <div className='panel-body'>
                                {errorsList.length > 0 ?
                                    <div className={'alert ' + this.state.addBusinessPartnerState}>
                                        There was an error with your submission
                                        <ul>
                                            {errorsList}
                                        </ul>
                                    </div>
                                    : null
                                }
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group ' + this.state.firstNameValidationState}>
                                        <label className='control-label'>Title / First Name<sup>*</sup></label>
                                        <div className='form-group form-inline'>
                                            <select className='form-control' onChange={AddBusinessPartnerActions.updateTitle} defaultValue='Mr'>
                                                <option value='Mr'>Mr</option>
                                                <option value='Mrs'>Mrs</option>
                                                <option value='Miss'>Miss</option>
                                            </select>
                                            <input type='text' className='form-control' ref='firstNameTextField' value={this.state.firstName}
                                                   onChange={AddBusinessPartnerActions.updateFirstName} autoFocus/>
                                        </div>
                                    </div>
                                    <div className={'form-group ' + this.state.lastNameValidationState}>
                                        <label className='control-label'>Business Name / Last Name<sup>*</sup></label>
                                        <input type='text' className='form-control' ref='lastNameTextField' value={this.state.lastName}
                                               onChange={AddBusinessPartnerActions.updateLastName} />
                                    </div>
                                    <div className={'form-group ' + this.state.emailValidationState}>
                                        <label className='control-label'>Email<sup>*</sup></label>
                                        <input type='email' className='form-control' ref='emailTextField' value={this.state.email}
                                               onChange={AddBusinessPartnerActions.updateEmail} autoFocus/>
                                    </div>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBusinessPartner;