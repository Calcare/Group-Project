import React, { useEffect, useState } from 'react'
import '../style/css/TrackCal.css'
import Footer from '../components/Footer'
import NavbarIndex from '../components/NavbarIndex'
import { Link } from 'react-router-dom'

const TrackCal = () =>{
    

    


    return(
        <div className='Track-Cal'>
            <NavbarIndex url="/SignUp" name="Daftar"/>
            <main>
            <div class="container-fluid">
            <div class="container section-atas">
                <div class="row backIcon">
                    <a href="../homepage.html" class="" id="back"><i class="fa-solid fa-chevron-left fa-2xl"></i></a>
                </div>
                <div class="teks">
                    <h6 class="heading">Track Kalori</h6>
                    <p class="paragraf">Hai, menu Track Kalori menampilkan informasi detail tentang kebutuhan kalori harianmu dan jumlah kalori yang sudah  terpenuhi. Yuk, semangat, pasti bisa memenuhi hidup sehat !</p>
                </div>
                
            </div>
            <div class="container section-track-kal">
                <div class="container track-left">
                    <div class="card card-left" style={{width:(750)}}>
                        <div class="row g-0">
                            <h6 class="heading-card">Kebutuhan Kalori Harian</h6>
                            <div class="col-md-6 chart-item">
                                <div class="chart-container">
                                    <div class="chart " data-percent="92" data-bar-color="#11999E">
                                    
                                    </div>
                                </div>
                            </div>
                          
                          <div class="col-md-3">
                            <div class="card-body">
                              <h5 class="card-title">Dibutuhkan</h5>
                              <p class="card-text"> <span class="fw-bold" id="hitung-cal"></span>  Kkal</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Terpenuhi</h5>
                                <p class="card-text"> <span class="fw-bold" id="cal-terpenuhi"></span> Kkal</p>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="container track-right">
                    <div class="card card-right" >
                        <div class="row g-0 row-right">
                            <div class="col-md-6 chart-item-right">
                                <div class="chart-container-right">
                                    <div class="chart chart-right" data-percent="72" data-bar-color="#11999E">
                                        <span class="percent" data-after="Kkal"></span>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                          <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="jumlah-nutrisi">0.00g</h6>
                                <p class="keterangan-nutrisi">Karbohidrat</p>
                              
                            </div>
                          </div>
                        </div>

                        <div class="row g-0 row-right">
                            <div class="col-md-6 chart-item-right">
                                <div class="chart-container-right">
                                    <div class="chart chart-right" data-percent="32" data-bar-color="#11999E">
                                        <span class="percent" data-after="Kkal"></span>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                          <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="jumlah-nutrisi">0.00g</h6>
                                <p class="keterangan-nutrisi">Protein</p>
                              
                            </div>
                          </div>
                        </div>


                        <div class="row g-0 row-right">
                            <div class="col-md-6 chart-item-right">
                                <div class="chart-container-right">
                                    <div class="chart chart-right" data-percent="62" data-bar-color="#11999E">
                                        <span class="percent" data-after="Kkal"></span>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                          <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="jumlah-nutrisi">0.00g</h6>
                                <p class="keterangan-nutrisi">Lemak</p>
                              
                            </div>
                          </div>
                        </div>


                        <div class="row g-0 row-right">
                            <div class="col-md-6 chart-item-right">
                                <div class="chart-container-right">
                                    <div class="chart chart-right" data-percent="42" data-bar-color="#11999E">
                                        <span class="percent" data-after="Kkal"></span>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                          <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="jumlah-nutrisi">0.00g</h6>
                                <p class="keterangan-nutrisi">Karbondioksida</p>
                              
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            
                <div class='container section-button' style={{justifyContent: 'center'}}>
                    <button type="button" class="btn-lg" > <Link to="/pilihMakanan"> Pilih Makanan </Link></button>
                </div>
                <div class='container section-link' style={{justifyContent: 'center'}}>
                    <Link className="detail" to='/detail' >Lihat Detail</Link>
                </div>
            
        </div>
            </main>
            <Footer/>
        </div>
    )
    
}

export default TrackCal;