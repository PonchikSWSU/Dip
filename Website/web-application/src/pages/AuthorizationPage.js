import React from 'react';
import Header from '../components/header'
import TestAuthorization from '../components/testAuth'
import Footer from '../components/footer'

class AuthorizationPage extends React.Component {

    render() {
        return (
            <div className='authorization-page'>
                <Header namePage='authorization'/>
                <TestAuthorization />
                <Footer />
            </div>
        );
    }
}

export default AuthorizationPage;