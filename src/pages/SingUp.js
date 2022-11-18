import React, { useState } from 'react'
import '../style/css/signUp.css'
import Footer from '../components/Footer'
import NavbarIndex from '../components/NavbarIndex'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
        const [nama, setNama ] = useState("");
        const [email, setEmail ] = useState("");
        const [pass, setPass ] = useState("");
        const [confirmPass, setConfirmPass ] = useState("");
        const [tinggi, setTinggi ] = useState("");
        const [berat, setBerat ] = useState("");
        const [nomorTelepon, setNomorTelepon ] = useState("");
        const [aktivitas, setAktivitas ] = useState("");
        const [kelamin, setKelamin ] = useState("");
        const [umur, setUmur ] = useState("");
        
        const handleSubmit = (e) =>{
            e.preventDefault();
            localStorage.setItem("nama",nama);
            localStorage.setItem("email",email);
            localStorage.setItem("nomorTelepon",nomorTelepon);
            localStorage.setItem("pass",pass);
            localStorage.setItem("confirmPass",confirmPass);
            localStorage.setItem("kelamin",kelamin);
            localStorage.setItem("tinggi",tinggi);
            localStorage.setItem("berat",berat);
            localStorage.setItem("umur",umur);
            localStorage.setItem("aktivitas",aktivitas);
            navigate("/logIn")
        }
    
  return (
    <div className='signUp'>

      <NavbarIndex url="/LogIn" name="Masuk"/>
      <main>
        <div className="container">
            <header>
                <h4>Buat Akun</h4>
                <p>Daftar untuk memulai menggunakan CalCare</p>
            </header>
            <form onSubmit={handleSubmit}>
                <div className=" container">
                    <div className="formKiri">
                        <div className="mb-3">
                            <label htmlFor="nama" className="form-label">
                                <h6>Nama</h6>
                            </label>
                            <input type="text" className="form-control" id="nama" name="nama" 
                                placeholder="Nama" required value={nama} onChange={(e)=> setNama(e.target.value
                                )}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                <h6>Email</h6>
                            </label>
                            <input type="email" className="form-control" id="email" name="email"
                                 placeholder="Email" required value={email} onChange={(e)=> setEmail(e.target.value
                                )}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nomorTelepon" className="form-label">
                                <h6>Nomor Telepon</h6>
                            </label>
                            <input type="text" className="form-control" id="nomorTelepon" name="nomorTelepon"
                                 placeholder="Nomor Telepon" required value={nomorTelepon} onChange={(e)=> setNomorTelepon(e.target.value
                                )}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass" className="form-label">
                                <h6>Password</h6>
                            </label>
                            <input type="password" className="form-control" id="pass" name="pass"
                                 placeholder="Password" required value={pass} onChange={(e)=> setPass(e.target.value
                                )}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPass" className="form-label">
                                <h6>Konfirmasi Password</h6>
                            </label>
                            <input type="password" className="form-control" id="confirmPass" name="confirmPass"
                                 placeholder="Konfirmasi Password" required value={confirmPass} onChange={(e)=> setConfirmPass(e.target.value
                                )}/>
                        </div>
                    </div>
                    <div className="formKanan">
                        <div className="mb-3">
                            <label htmlFor="kelamin" className="form-label">
                                <h6>Jenis Kelamin</h6>
                            </label>
                            <select className="form-select" id="kelamin" name="kelamin"  value={kelamin} onChange={(e)=> setKelamin(e.target.value
                                )}>
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
                                 placeholder="Tinggi Badan" required value={tinggi} onChange={(e)=> setTinggi(e.target.value
                                )}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="berat" className="form-label">
                                <h6>Berat Badan (Kg)</h6>
                            </label>
                            <input type="text" className="form-control" id="berat" name="berat"
                                 placeholder="Berat Badan" required value={berat} onChange={(e)=> setBerat(e.target.value
                                )}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="umur" className="form-label">
                                <h6>Umur (Tahun)</h6>
                            </label>
                            <input type="text" className="form-control" id="umur" name="umur" 
                                placeholder="Umur" required value={umur} onChange={(e)=> setUmur(e.target.value
                                )}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="aktivitas" className="form-label">
                                <h6>Aktivitas Fisik</h6>
                            </label>
                                <select className="form-select" id="aktivitas" name="aktivitas"
                                required value={aktivitas} onChange={(e)=> setAktivitas(e.target.value
                                )}>
                                    <option  selected>Pilih Aktivitas Fisik</option>
                                    <option value="Sering Berolahraga">Sering Berolahraga</option>
                                    <option value="Jarang Berolahraga">Jarang Berolahraga</option>
                                    <option value="Tidak Pernah Berolahraga">Tidak Pernah Berolahraga</option>
                                </select>
                        </div>
                    </div>
                </div>

                <button className="btn btn-info mb-3 mt-2" id="signUp" >Daftar</button>
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
