/**
 * Created by stevet on 29/06/2016.
 */
import alt from '../alt';

class AddBusinessPartnerActions {
    constructor() {
        this.generateActions(
            'addBusinessPartnerSuccess',
            'addBusinessPartnerFail',
            'updateTitle',
            'updateFirstName',
            'updateLastName',
            'updateEmail',
            'invalidFirstName',
            'invalidLastName',
            'invalidEmail'
        );
    }

    addBusinessPartner(title, firstName, lastName, email) {
        $.ajax({
            type: 'POST',
            url: '/api/business-partners',
            data: { title: title, firstName: firstName,  lastName: lastName, email: email}
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