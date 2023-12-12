import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu'
import CardsComponent from './components/cards/Cards';
import Footer from './components/footer/Footer';
import BannerImg from './components/BannerRick/BannerRick'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <Menu />
      <BannerImg />
      <div className='div-componentes'>

        <CardsComponent />
      </div>

      <Footer />


    </>
  );
}

export default App;
