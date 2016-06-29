/**
 * Created by stevet on 29/06/2016.
 */
import React from 'react';
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

        var name = this.state.name.trim();
        var gender = this.state.gender;

        if (!name) {
            AddBusinessPartnerActions.invalidName();
            this.refs.nameTextField.getDOMNode().focus();
        }

        if (!gender) {
            AddBusinessPartnerActions.invalidGender();
        }

        if (name && gender) {
            AddBusinessPartnerActions.addBusinessPartner(name, gender);
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
                                    <div className={'form-group ' + this.state.nameValidationState}>
                                        <label className='control-label'>Title / First Name</label>
                                        <div className='form-group row  form-inline'>
                                            <select className='form-control'>
                                                <option>Mr</option>
                                                <option>Mrs</option>
                                                <option>Miss</option>
                                            </select>
                                            <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                                   onChange={AddBusinessPartnerActions.updateName} autoFocus/>
                                            <span className='help-block'>{this.state.helpBlock}</span>
                                        </div>
                                    </div>
                                    <div className={'form-group ' + this.state.nameValidationState}>
                                        <label className='control-label'>Business Name / Last Name</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                               onChange={AddBusinessPartnerActions.updateName} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group ' + this.state.nameValidationState}>
                                        <label className='control-label'>Email</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                               onChange={AddBusinessPartnerActions.updateName} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group ' + this.state.genderValidationState}>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='gender' id='female' value='Female' checked={this.state.gender === 'Female'}
                                                   onChange={AddBusinessPartnerActions.updateGender}/>
                                            <label htmlFor='female'>Female</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='gender' id='male' value='Male' checked={this.state.gender === 'Male'}
                                                   onChange={AddBusinessPartnerActions.updateGender}/>
                                            <label htmlFor='male'>Male</label>
                                        </div>
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