import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header text='Movie Database Searcher' />

      <Search />

      <Movie />
    </div>
  );
}

export default App;
