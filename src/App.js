import './App.css';
import './components/All.css';
import Card from './components/Card';
import Main from './components/Main';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
          <Main />
          <Movie/>
          <Card />
    </div>
  );
}

export default App;
