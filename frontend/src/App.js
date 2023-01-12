import { BrowserRouter, Route , Routes, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to ="/">Flipcart</Link>
      </header>
      <main>
        <Routes>
           <Route path="/product/:slug" element={<ProductScreen/>}/>
           <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
