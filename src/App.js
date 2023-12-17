// import logo from './logo.svg';
import './App.css';
import myHeader from "./components/header/Header";
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
// import Navbar from './components/header/Navbar';

function App() {
  return (
    <div className="App">
     {myHeader()}
      <myHeader/>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
