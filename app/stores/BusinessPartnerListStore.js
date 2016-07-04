/**
 * Created by stevet on 04/07/2016.
 */
import alt from '../alt';
import BusinessPartnerListActions from '../actions/BusinessPartnerListActions';

class BusinessPartnerListStore {
    constructor() {
        this.bindActions(BusinessPartnerListActions);
        this.businessPartnerListValidationState = '';
        this.businessPartners = [];
    }

    onGetBusinessPartnerListSuccess(data) {
        this.businessPartnerListValidationState = 'has-success';
        this.businessPartners = data;
    }

    onGetBusinessPartnerListFail(errorMessage) {
        this.businessPartnerListValidationState = 'has-error';
        this.businessPartnerListHelpBlock = errorMessage;
    }
}

export default alt.createStore(BusinessPartnerListStore);