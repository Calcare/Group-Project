import React from 'react'
import '../style/css/signUp.css'
import Footer from '../components/Footer'
import NavbarIndex from '../components/NavbarIndex'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signUp'>

      <NavbarIndex url="/LogIn" name="Masuk"/>
      <main>
        <div className="container">
            <header>
                <h4>Buat Akun</h4>
                <p>Daftar untuk memulai menggunakan CalCare</p>
            </header>
            <form >
                <div className=" container">
                    <div className="formKiri">
                        <div className="mb-3">
                            <label htmlFor="nama" className="form-label">
                                <h6>Nama</h6>
                            </label>
                            <input type="text" className="form-control" id="nama" name="nama" 
                                placeholder="Nama" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                <h6>Email</h6>
                            </label>
                            <input type="email" className="form-control" id="email" name="email"
                                 placeholder="Email" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nomorTelepon" className="form-label">
                                <h6>Nomor Telepon</h6>
                            </label>
                            <input type="text" className="form-control" id="nomorTelepon" name="nomorTelepon"
                                 placeholder="Nomor Telepon" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass" className="form-label">
                                <h6>Password</h6>
                            </label>
                            <input type="password" className="form-control" id="pass" name="pass"
                                 placeholder="Password" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPass" className="form-label">
                                <h6>Konfirmasi Password</h6>
                            </label>
                            <input type="password" className="form-control" id="confirmPass" name="confirmPass"
                                 placeholder="Konfirmasi Password" required/>
                        </div>
                    </div>
                    <div className="formKanan">
                        <div className="mb-3">
                            <label htmlFor="kelamin" className="form-label">
                                <h6>Jenis Kelamin</h6>
                            </label>
                            <select className="form-select" id="kelamin" name="kelamin">
                                <option selected>Pilih Jenis Kelamin</option>
                                <option value="Laki - Laki">Laki - Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tinggi" className="form-label">
                                <h6>Tinggi Badan (Cm)</h6>
                            </label>
                            <input type="text" className="form-control" id="tinggi" name="tinggi"
                                 placeholder="Tinggi Badan" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="berat" className="form-label">
                                <h6>Berat Badan (Kg)</h6>
                            </label>
                            <input type="text" className="form-control" id="berat" name="berat"
                                 placeholder="Berat Badan" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="umur" className="form-label">
                                <h6>Umur (Tahun)</h6>
                            </label>
                            <input type="text" className="form-control" id="umur" name="umur" 
                                placeholder="Umur" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="aktivitas" className="form-label">
                                <h6>Aktivitas Fisik</h6>
                            </label>
                            <select className="form-select" id="aktivitas" name="aktivitas"
                                required>
                                <option selected>Pilih Aktivitas Fisik</option>
                                <option value="Sering Berolahraga">Sering Berolahraga</option>
                                <option value="Jarang Berolahraga">Jarang Berolahraga</option>
                                <option value="Tidak Pernah Berolahraga">Tidak Pernah Berolahraga</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className="btn btn-info mb-3 mt-2" id="signUp" onclick="signUp(event)">Daftar</button>
                <h6 id="atau" >Atau</h6>
                <button className="btn btn-info mb-3" id="google"><i className="bi bi-google"></i>
                    SignUp with Google</button>
                <button className="btn btn-info mb-3" id="facebook"><i className="bi bi-facebook"></i>
                    SignUp with Facebook</button>
                <p>Sudah Punya Akun? <Link to="/LogIn" className="masuk">Masuk</Link></p>
            </form>
        </div>
        </main>

      <Footer/>
      
    </div>
  )
}

export default SignUp
