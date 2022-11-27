
const Validation = (nama, email, pass, confirmPass, tinggi, berat, aktivitas, kelamin, umur,nomorTelepon) => {
    let errors={};

    if(!nama){
        errors.nama ="Nama tidak boleh kosong"
    }
    if(!email){
        errors.email = "Email tidak boleh kosong"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        errors.email = "Email tidak valid"
    }
    if(!pass){
        errors.pass = "Password tidak boleh kosong"
    }else if (pass.length < 6 ){
        errors.email = "Password harus memiliki lebih dari 5 karakter"
    }
    if(!confirmPass){
        errors.confirmPass = "Konfirmasi Password tidak boleh kosong"
    }else if(confirmPass !== pass){
        errors.confirmPass = "Konfirmasi Password harus sama dengan password yang telah dimasukkan sebelumnya"
    }
    if(!umur){
        errors.umur = "Umur tidak boleh kosong"
    }
    if(!tinggi){
        errors.tinggi = "Tinggi tidak boleh kosong"
    }
    if(!berat){
        errors.berat = "Berat tidak boleh kosong"
    }
    if(!nomorTelepon){
        errors.nomorTelepon = "Nomor Telepon tidak boleh kosong"
    }
    if(!aktivitas){
        errors.aktivitas = "Aktivitas tidak boleh kosong"
    }
    if(!kelamin){
        errors.kelamin = "Jenis Kelamin tidak boleh kosong"
    }

  return errors;
}

export default Validation
