
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Index from "./pages/Index";



const queryClient = new QueryClient()
const App = () => {


  return (

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Index />} />
        </Routes>
      </BrowserRouter>

    </QueryClientProvider>
  )
}
export default App
