/**
 * Created by stevet on 29/06/2016.
 */
import alt from '../alt';
import AddBusinessPartnerActions from '../actions/AddBusinessPartnerActions';

class AddBusinessPartnerStore {
    constructor() {
        this.bindActions(AddBusinessPartnerActions);
        this.title = 'Mr';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.firstNameValidationState = '';
        this.lastNameValidationState = '';
        this.emailValidationState = '';
        this.addBusinessPartnerState = '';
        this.errors = [];
    }

    onAddBusinessPartnerSuccess(successMessage) {
        this.addBusinessPartnerState = 'alert-success';
        this.errors.push(successMessage);
    }

    onAddBusinessPartnerFail(errorMessage) {
        this.addBusinessPartnerState = 'alert-danger';
        this.errors.push(errorMessage);
    }

    onUpdateTitle(event) {
        this.title = event.target.value;
    }

    onUpdateFirstName(event) {
        this.firstName = event.target.value;
        this.firstNameValidationState = '';
    }

    onUpdateLastName(event) {
        this.lastName = event.target.value;
        this.lastNameValidationState = '';
    }

    onUpdateEmail(event) {
        this.email = event.target.value;
        this.emailValidationState = '';
    }

    onInvalidFirstName() {
        this.firstNameValidationState = 'has-error';
        this.addBusinessPartnerState = 'alert-danger';
        this.errors.push('Please enter a first name.');
    }

    onInvalidLastName() {
        this.lastNameValidationState = 'has-error';
        this.errors.push('Please enter a last name.');
    }

    onInvalidEmail() {
        this.emailValidationState = 'has-error';
        this.errors.push('Please enter a valid email address.');
    }
}

export default alt.createStore(AddBusinessPartnerStore);