/**
 * Created by stevet on 29/06/2016.
 */
import alt from '../alt';

class AddBusinessPartnerActions {
    constructor() {
        this.generateActions(
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
                this.addBusinessPartnerSuccess(data.message);
            })
            .error((jqXhr) => {
                this.addBusinessPartnerFail(jqXhr.responseJSON.message);
            });
    }

    addBusinessPartnerSuccess(message) {
        return message;
    }

    addBusinessPartnerFail(message) {
        return message;
    }
}

export default alt.createActions(AddBusinessPartnerActions);