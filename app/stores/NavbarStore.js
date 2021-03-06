/**
 * Created by SteveT on 29/06/2016.
 */
import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
    constructor() {
        this.bindActions(NavbarActions);
        this.onlineUsers = 0;
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
    }

    onFindCharacterSuccess(payload) {
        payload.history.pushState(null, '/characters/' + payload.characterId);
    }

    onFindCharacterFail(payload) {
        payload.searchForm.classList.add('shake');
        setTimeout(() => {
            payload.searchForm.classList.remove('shake');
        }, 1000);
    }

    onUpdateOnlineUsers(data) {
        this.onlineUsers = data.onlineUsers;
    }

    onUpdateAjaxAnimation(className) {
        this.ajaxAnimationClass = className; //fadein or fadeout
    }

    onUpdateSearchQuery(event) {
        this.searchQuery = event.target.value;
    }

}

export default alt.createStore(NavbarStore);