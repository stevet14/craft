/**
 * Created by stevet on 28/06/2016.
 */
import React from 'react';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;