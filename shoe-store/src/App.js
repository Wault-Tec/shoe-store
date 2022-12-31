import './Style.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes} from 'react-router-dom';
import Main from './components/Pages/Main/Main';
import Banner from './components/Banner/Banner';
import Catalog from './components/Pages/Catalog/Catalog';
import About from './components/Pages/About/About';
import Contacts from './components/Pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/catalog' element={<Catalog searchOn={true}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
