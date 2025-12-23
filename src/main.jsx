import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tentang from './Tentang.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

function Root() {
  const [query, setQuery] = useState('');

  const [page, setPage] = useState('home');
  return (
    <>
      <Navbar onSearch={setQuery} onPage={setPage} />
        {page === 'home' && <App query={query} />}
        {page === 'tentang' && <Tentang />}
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
