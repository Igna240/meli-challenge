import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productos/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;