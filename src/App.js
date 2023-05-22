
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router';
import Header from './components/header/Header';
import FavList from '../../netflix-clone/src/components/FavList/FavList';
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/FavList' element ={<FavList/>}/>
     </Routes>
    </div>
  );
}

export default App;
