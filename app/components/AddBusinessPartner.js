/**
 * Created by stevet on 29/06/2016.
 */
import React from 'react';
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
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-8'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>Add Business Partner</div>
                            <div className='panel-body'>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group ' + this.state.firstNameValidationState}>
                                        <label className='control-label'>Title / First Name</label>
                                        <div className='form-group form-inline'>
                                            <select className='form-control' onChange={AddBusinessPartnerActions.updateTitle}>
                                                <option value={this.state.title} selected>Mr</option>
                                                <option value={this.state.title}>Mrs</option>
                                                <option value={this.state.title}>Miss</option>
                                            </select>
                                            <input type='text' className='form-control' ref='firstNameTextField' value={this.state.firstName}
                                                   onChange={AddBusinessPartnerActions.updateFirstName} autoFocus/>
                                            <span className='help-block'>{this.state.helpBlock}</span>
                                        </div>
                                    </div>
                                    <div className={'form-group ' + this.state.lastNameValidationState}>
                                        <label className='control-label'>Business Name / Last Name</label>
                                        <input type='text' className='form-control' ref='lastNameTextField' value={this.state.lastName}
                                               onChange={AddBusinessPartnerActions.updateLastName} />
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group ' + this.state.emailValidationState}>
                                        <label className='control-label'>Email</label>
                                        <input type='email' className='form-control' ref='emailTextField' value={this.state.email}
                                               onChange={AddBusinessPartnerActions.updateEmail} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
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