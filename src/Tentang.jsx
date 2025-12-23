import React from 'react'

const Tentang = () => {
  return (
    <div className="Tentang container mx-auto xl:px-20 mb-10 xl:min-h-110 md:min-h-203 min-h-120">
      <div className='rounded-xl p-4 my-8 max-w-6xl mx-auto md:flex gap-6'>
        <div className='w-80 h-fit flex-shrink-0 bg-gray-200 rounded-xl p-3 shadow-lg hidden md:block'>
          <img src="./foto goat.jpg" alt="Tim Mok" className='rounded-xl' loading="lazy" />
          <h1 className='mt-4 text-center'>Mansur/Suria Andi <span className='text-sky-500 font-bold'>&</span> Alif Sufi</h1>
        </div>
        <div className='bg-gray-200 w-full rounded-xl shadow-xl'>
          <h1 className='p-3 px-5 text-xl font-bold underline underline-offset-8 decoration-3 decoration-wavy decoration-sky-500'>Tentang StiMok</h1>
          <div className='p-5 text-justify text-lg leading-relaxed'>
            <p>Halo! Saya Alif dan Mansur, pengembang di balik StiMok. Saya seorang pengembang web dan aplikasi yang memiliki hasrat untuk menciptakan solusi nyeleneh yang bermanfaat dan menyenangkan.</p>
            <br />
            <p>StiMok lahir dari kebutuhan pribadi saya akan stiker untuk digunakan dalam aplikasi pesan instan. Saya menyadari bahwa banyak orang juga mencari stiker yang lucu dan nyeleneh, sehingga saya memutuskan untuk membuat StiMok sebagai platform yang menyediakan berbagai stiker gratis untuk diunduh.</p>
            <br />
            <p>Saya berkomitmen untuk terus memperbarui koleksi stiker aneh dan lucu di StiMok serta menghadirkan fitur-fitur baru yang akan meningkatkan pengalaman pengguna. Terima kasih telah mengunjungi StiMok, dan saya harap Anda menemukan stiker yang Anda sukai!</p>
            <br />
            <p>Salam JMK<br /></p>
          </div>
        </div>
        <div className='w-80 flex-shrink-0 bg-gray-200 rounded-xl p-3 shadow-lg block md:hidden mt-6 mx-auto'>
          <img src="./foto goat.jpg" alt="Tim Mok" className='rounded-xl' />
          <h1 className='mt-4 text-center'>Mansur/Suria Andi <span className='text-sky-500 font-bold'>&</span>  Alif Sufi</h1>
        </div>
      </div>
    </div>
  )
}

export default Tentang