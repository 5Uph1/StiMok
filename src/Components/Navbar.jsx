import React, { useState } from 'react'

const Navbar = ({ onSearch = () => {}, onPage = () => {} }) => {
  const [q, setQ] = useState('');
  const [page, setPage] = useState('home');
  return (
    <nav className='xl:px-20 py-4 pb-10 mx-auto shadow-md' id="home">
        <div className='flex pb-4 px-2'>
            <div className='ms-auto md:mr-6'>
                <a onClick={() => {setPage('home'); onPage('home')}} className={`${page === 'home' ? 'text-sky-600 font-bold' : 'text-gray-400 hover:text-sky-400'} mx-4 mr-6 md:text-2xl cursor-pointer`}><i className="ri-home-9-fill mr-3"></i>Home</a>
                <a onClick={() => {setPage('tentang'); onPage('tentang')}} className={`${page === 'tentang' ? 'text-sky-600 font-bold' : 'text-gray-400 hover:text-sky-400'} mx-4 md:text-2xl cursor-pointer`}><i className="ri-user-fill mr-3"></i>Tentang</a>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-4 px-2 items-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-black-200 text-center md:text-left md:ml-6 xl:ml-0'>Sti<span className='text-sky-500'>M</span>ok</h1>
            <form onSubmit={(e) => { e.preventDefault(); onSearch(q); }} className='ml-auto md:mr-6'>
                <div className="flex items-center border border-3 border-sky-300 rounded-xl overflow-hidden hover:ring-2 hover:ring-sky-200 focus-within:ring-4 focus-within:ring-sky-200 focus-within:shadow-xl transition">
                    <input
                        value={q}
                        onChange={(e) => { setQ(e.target.value); onSearch(e.target.value); }}
                        type="text"
                        name="search"
                        placeholder="Cari..."
                        className="px-4 py-2 outline-none w-full focus:outline-none placeholder:text-xl"
                    />
                    <button
                        type="submit"
                        aria-label="Search"
                        className="bg-sky-300 text-white p-2 md:p-3 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    >
                        <i className="ri-search-line"></i>
                    </button>
                </div>
            </form>
        </div>
        
    </nav>
  )
}

export default Navbar