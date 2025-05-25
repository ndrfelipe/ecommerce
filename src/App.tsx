import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster/>
        <CartProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
                {/* <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
