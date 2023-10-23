import './App.css';
import NavBar from './components/NavBar';
import NewsArea from './components/NewsArea';

function App() {
  return (
    <>
    <NavBar/>
    <NewsArea pageSize={5}/>
    </>
  );
}

export default App;
