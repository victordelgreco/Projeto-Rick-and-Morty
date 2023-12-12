import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu'
import CardsComponent from './components/cards/Cards';
// import Banners from './components/banners/Banner'
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<>    
<Menu/>
<div className='div-componentes'>
<CardsComponent/>
</div>

<Footer/>

{/* <Banners/> */}
    
  </>
  );
}

export default App;
