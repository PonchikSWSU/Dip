import React from 'react';
import '../styles/header.css'

class Header extends React.Component {

    render() {
        if (this.props.namePage === 'authorization')
            return (
                <header>
                    <div><a href='*'>КиТ - Качество и транспорт</a></div>
                    <div className="header-right">
                        <a href='*'>Регистрация</a>
                        <a href='*'>О проекте</a>
                        <a href='*'>Контакты</a>
                    </div>
                </header>
            );
        else if (this.props.namePage === 'registration')
            return (
                <header>
                    <div><a href='*'>КиТ - Качество и транспорт</a></div>
                    <div className="header-right">
                        <a href='*'>Авторизация</a>
                        <a href='*'>О проекте</a>
                        <a href='*'>Контакты</a>
                    </div>
                </header>
            );
    }
}

export default Header;