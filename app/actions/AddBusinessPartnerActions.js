/**
 * Created by stevet on 29/06/2016.
 */
import alt from '../alt';

class AddBusinessPartnerActions {
    constructor() {
        this.generateActions(
            'addBusinessPartnerSuccess',
            'addBusinessPartnerFail',
            'updateName',
            'updateGender',
            'invalidName',
            'invalidGender'
        );
    }

    addBusinessPartner(name, gender) {
        $.ajax({
            type: 'POST',
            url: '/api/BusinessPartners',
            data: { name: name, gender: gender }
        })
            .done((data) => {
                this.actions.addBusinessPartnerSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addBusinessPartnerFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(AddBusinessPartnerActions);