import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Pages/Main';
import { Sec } from './Pages/Sec';
import { Test } from './Pages/Test';
import { TestPage } from './Pages/TestPage';

function App() {
  return (
    <>
      <Header></Header>

      <HashRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/section' element={<Sec/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='/testpage' element={<TestPage/>}/>
        </Routes>
      </HashRouter>

      <Footer></Footer>
    </>
  );
}

export default App;
