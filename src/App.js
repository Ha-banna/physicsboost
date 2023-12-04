import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Sec } from './Sec';
import { Test } from './Test';
import { TestPage } from './TestPage';

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
