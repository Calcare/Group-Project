import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "../style/css/pilihMakanan.css"

const PilihMakanan = () => {
  return (
    <div>
      <Navbar/>

        <div className='pilihMakanan'>
            <main>
                <div className="container-fluid">
                    <div className="container section-atas">
                        <div className="row backIcon">
                            <a href="makanan.html" className="" id="back"><i className="fa-solid fa-chevron-left fa-2xl"></i></a>
                        </div>
                        <div className="teks">
                            <h6 className="heading">Daftar Pilihan Makanan</h6>
                            <p className="paragraf">Pilihlah makanan yang sesuai dengan yang kamu makan dari daftar yang tersedia.
                                Jika tidak ada, coba gunakan fitur pencarian</p>
                        </div>
                    </div>
                    <div className='container pb-5'>
                        <div className="d-flex" role="search">
                            <input className="form-control me-2" type="search" id="search"placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" id='submit' type="submit">Search</button>
                        </div>
                    </div>
                    <div className='container pb-5'>
                        <div className='row justify-content-center row-cols-1 row-cols-md-3 lg-3 g-4'>
                            <Card/>
                        </div>
                    </div>
                    </div>
            </main>
        </div>

      <Footer/>
    </div>
  )
}

export default PilihMakanan
