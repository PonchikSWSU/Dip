import React from 'react';
import '../styles/footer.css'
import { SlSocialVkontakte } from "react-icons/sl";

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className='footer-left-1'>
                    <div>Александра Г.</div>
                    <a href="https://vk.com/the_abrikos">
                        <SlSocialVkontakte className='social-vk' />
                    </a>
                </div>
                <div className='footer-left-2'>
                    <div>Даниил Г.</div>
                    <a href="https://vk.com/daniilon">
                        <SlSocialVkontakte className='social-vk' />
                    </a>
                </div>
                <div className="footer-right">
                    Copyright © КиТ 2024
                </div>
            </footer>
        );
    }
}

export default Footer;