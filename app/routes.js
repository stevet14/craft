/**
 * Created by stevet on 28/06/2016.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import BusinessPartnerList from './components/BusinessPartnerList';
import AddBusinessPartner from './components/AddBusinessPartner';

export default (
    <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='/businessPartnerList' component={BusinessPartnerList} />
        <Route path='/addBusinessPartner' component={AddBusinessPartner} />
    </Route>
);