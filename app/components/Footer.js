/**
 * Created by stevet on 28/06/2016.
 */
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
                            <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
                            <p>You may view the <a href='https://github.com/stevet/craft'>Source Code</a> behind this project on GitHub.</p>
                            <p>© 2016 Steve Taplin.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;