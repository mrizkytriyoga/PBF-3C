import React from 'react';
import logo from './logo.svg';
import gambar from './asd.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>B I O D A T A</h3>
        <br></br>
        <img src={gambar} width="300" />
        <p>Nama : M. Rizky Triyoga</p>
        <p>Kelas : TI-3C</p>
        <p>Absen : 13 </p>
        <p>NIM : 1741720176</p>
        <p>Alamat : MALANG</p>
        
        
      </header>
    </div>
  );
}

export default App;
