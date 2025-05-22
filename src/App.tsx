import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
   </BrowserRouter>
  )
}

export default App
