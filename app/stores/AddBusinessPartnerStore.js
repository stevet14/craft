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
        this.helpBlock = '';
    }

    onAddBusinessPartnerSuccess(successMessage) {
        this.firstNameValidationState = 'has-success';
        this.helpBlock = successMessage;
    }

    onAddBusinessPartnerFail(errorMessage) {
        this.firstNameValidationState = 'has-error';
        this.helpBlock = errorMessage;
    }

    onUpdateTitle(event) {
        this.title = event.target.value;
    }

    onUpdateFirstName(event) {
        this.firstName = event.target.value;
        this.firstNameValidationState = '';
        this.helpBlock = '';
    }

    onUpdateLastName(event) {
        this.lastName = event.target.value;
        this.lastNameValidationState = '';
        this.helpBlock = '';
    }

    onUpdateEmail(event) {
        this.email = event.target.value;
        this.emailValidationState = '';
        this.helpBlock = '';
    }

    onInvalidFirstName() {
        this.firstNameValidationState = 'has-error';
        this.helpBlock = 'Please enter a first name.';
    }

    onInvalidLastName() {
        this.lastNameValidationState = 'has-error';
        this.helpBlock = 'Please enter a last name.';
    }

    onInvalidEmail() {
        this.emailValidationState = 'has-error';
        this.helpBlock = 'Please enter a valid email address.';
    }
}

export default alt.createStore(AddBusinessPartnerStore);