/**
 * Created by stevet on 29/06/2016.
 */
import alt from '../alt';
import AddBusinessPartnerActions from '../actions/AddBusinessPartnerActions';

class AddBusinessPartnerStore {
    constructor() {
        this.bindActions(AddBusinessPartnerActions);
        this.name = '';
        this.gender = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
    }

    onAddBusinessPartnerSuccess(successMessage) {
        this.nameValidationState = 'has-success';
        this.helpBlock = successMessage;
    }

    onAddBusinessPartnerFail(errorMessage) {
        this.nameValidationState = 'has-error';
        this.helpBlock = errorMessage;
    }

    onUpdateName(event) {
        this.name = event.target.value;
        this.nameValidationState = '';
        this.helpBlock = '';
    }

    onUpdateGender(event) {
        this.gender = event.target.value;
        this.genderValidationState = '';
    }

    onInvalidName() {
        this.nameValidationState = 'has-error';
        this.helpBlock = 'Please enter a BusinessPartner name.';
    }

    onInvalidGender() {
        this.genderValidationState = 'has-error';
    }
}

export default alt.createStore(AddBusinessPartnerStore);