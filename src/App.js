import './App.css';
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className="container">
        <MainPage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
