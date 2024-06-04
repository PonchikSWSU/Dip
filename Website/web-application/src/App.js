import './styles/App.css';
/*import Header from './components/header'
import Authorization from './components/authorization'
import TestAuthorization from './components/testAuth'
import Footer from './components/footer'
import AuthorizationPage from './pages/AuthorizationPage';
import RegistrationPage from './pages/RegistrationPage'*/
import NewsFeed from './components/newsFeed';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './components/main';
import Post from './components/post';

const theme = createTheme();

const newsData = [
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 1',
    description: 'Описание новости 1',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 2',
    description: 'Описание новости 2',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
  {
    title: 'Новость 3',
    description: 'Описание новости 3',
    image: 'url(https://source.unsplash.com/random?wallpapers)',
  },
];

/*
<div className="App">
      <Main />
    </div>

    <ThemeProvider theme={theme}>
      <div className="App">
        <NewsFeed news={newsData} />
      </div>
    </ThemeProvider>
  */

function App() {
  return (
    <div className="App">
      <Post />
    </div>
  );
}

export default App;