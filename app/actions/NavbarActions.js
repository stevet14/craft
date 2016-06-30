/**
 * Created by SteveT on 29/06/2016.
 */
import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
    constructor() {
        this.generateActions(
            'updateOnlineUsers',
            'updateAjaxAnimation',
            'updateSearchQuery',
            'findCharacterSuccess',
            'findCharacterFail'
        );
    }

    findCharacter(payload) {
        $.ajax({
            url: '/api/characters/search',
            data: { name: payload.searchQuery }
        })
            .done((data) => {
                assign(payload, data);
                this.actions.findCharacterSuccess(payload);
            })
            .fail(() => {
                this.actions.findCharacterFail(payload);
            });
    }

}

export default alt.createActions(NavbarActions);