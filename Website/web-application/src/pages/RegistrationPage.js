import React from 'react';
import Header from '../components/header'
import Registration from '../components/registration'
import Footer from '../components/footer'

class RegistrationPage extends React.Component {

    render() {
        return (
            <div className='registration-page'>
                <Header namePage='registration'/>
                <Registration />
                <Footer />
            </div>
        );
    }
}

export default RegistrationPage;