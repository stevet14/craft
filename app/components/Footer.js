/**
 * Created by stevet on 28/06/2016.
 */
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className='navbar-fixed-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <h3><strong>Information</strong> and <strong>Copyright</strong></h3>
                            <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
                        </div>
                        <div className='col-sm-5'>
                            <h3><strong>Source Code</strong></h3>
                            <p>You may view the <strong><a href='https://github.com/stevet14/craft'>Source Code</a></strong> behind this project on GitHub. © 2016 Steve Taplin.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;