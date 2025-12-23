import { ListFoto } from './foto.js'
import { useState, useEffect } from 'react';

function App({ query = query?.trim().toLowerCase() || '' }) {

  const [active, setActive] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 150) {
          setActive(true);
        } else {
          setActive(false);
        }
      };

      // run once on mount to set initial visibility if page is already scrolled
      handleScroll();

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const [activeState, setActiveState] = useState('terbaru');

  const filtered = ListFoto.filter(foto => {
    const q = query.trim().toLowerCase();
    const kategori = foto.kategori;

    const kategoriMatches = (term) => {
      if (!kategori) return false;
      if (Array.isArray(kategori)) {
        return kategori.some(k => k.toLowerCase().includes(term));
      }
      return String(kategori).toLowerCase().includes(term);
    };

    if (!q) return kategoriMatches(activeState);

    return (
      foto.nama.toLowerCase().includes(q) ||
      kategoriMatches(q)
    );
  });

  return (
    <div className="App container mx-auto xl:px-20 mb-10 xl:min-h-110 md:min-h-203 min-h-120">
      <div className="box-fill bg-gray-100 rounded-2xl mt-10 shadow-lg">
        <div className='p-6'>
          <h1 className='text-4xl font-bold'>
            Stiker Bagus <span className='text-sky-500'>Wok</span>
          </h1>
        </div>
        {!query && (
        <div className='px-6 flex gap-3 overflow-x-auto flex-nowrap'>
          <button onClick={() => setActiveState('terbaru')} className={`p-2 px-4 bg-blue-400 ${activeState !== 'terbaru' ? 'bg-white text-black' : 'text-white'} cursor-pointer rounded-3xl font-semibold text-lg whitespace-nowrap flex-shrink-0`}>Terbaru</button>
          <button onClick={() => setActiveState('stiker')} className={`p-2 px-4 ${activeState !== 'stiker' ? 'bg-white text-black' : 'bg-blue-400 text-white'} cursor-pointer rounded-3xl font-semibold text-lg items-center whitespace-nowrap flex-shrink-0`}><span className='text-xl'>😂</span> Stiker </button>
          <button onClick={() => setActiveState('jomok')} className={`p-2 px-4 ${activeState !== 'jomok' ? 'bg-white text-black' : 'bg-blue-400 text-white'} cursor-pointer rounded-3xl font-semibold text-lg items-center whitespace-nowrap flex-shrink-0`}><span className='text-xl'>❌</span> Jomok </button>
        </div>
        )}
        <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 '>
          {filtered.map(foto => (
          <div className="p-4 bg-white overflow-auto rounded-2xl m-6 shadow-md" key={foto.id}>
            <div className='2xl:h-100 md:h-80 rounded-xl overflow-hidden shadow'>
              <div className='w-full h-full bg-gray-100'>
                <img src={foto.gambar} alt={foto.nama} loading='lazy' className='w-full h-full object-cover'/>
              </div>
            </div>
            <div className='p-3 flex justify-between items-center mt-3'>
              <h1 className='text-2xl font-semibold capitalize'>{foto.nama}</h1>
              <a href={foto.gambar} download aria-label={`Download ${foto.nama}`}>
                <button className='p-3 bg-sky-500 rounded-3xl cursor-pointer shadow-xl hover:bg-sky-600 text-white transition' aria-label={`Download ${foto.nama}`}>
                <i className="ri-download-2-line text-4xl"></i>
              </button>
              </a>
            </div>
          </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full p-6 text-center text-gray-500">Tidak ada hasil untuk "{query}"</div>
          )}
        </div>
        <a href="#home" aria-hidden={!active} className={`${active ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <button className="fixed bottom-6 md:bottom-20 right-6 md:right-10 z-50 bg-sky-500 text-white p-2 md:p-4 rounded-full shadow-lg cursor-pointer" aria-label="Tombol Fix">
            <i className="ri-arrow-up-line text-4xl md:text-5xl"></i>
          </button>
        </a>
      </div>
    </div>
  )
}

export default App
