import React from 'react';
import Header from '../components/header'
import Stories from '../components/stories'
import Post from '../components/post'

class MainPage extends React.Component {

    render() {
        return (
            <div className='main-page'>
                <Header namePage='authorization'/>
                <Stories />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}

export default MainPage;