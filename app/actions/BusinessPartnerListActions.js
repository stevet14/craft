/**
 * Created by stevet on 05/07/2016.
 */
import alt from '../alt';

class BusinessPartnerListActions {
    constructor() {
    }

    getBusinessPartnerList() {
        $.ajax({ url: '/api/businessPartnerList'})
            .done((data) => {
                this.getBusinessPartnerListSuccess(data);
            })
            .fail((jqXhr) => {
                this.getBusinessPartnerListFail(jqXhr.responseJSON.message);
            });
    }

    getBusinessPartnerListSuccess(message) {
        return message;
    }

    getBusinessPartnerListFail(message) {
        return message;
    }
}

export default alt.createActions(BusinessPartnerListActions);