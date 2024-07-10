import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/miekopyak2.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/miekopyak2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const MieKopyak2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/miekopyak/30">
          <img src={Back} alt="" />
          </a>
        </div>
       <div className="map">
                    <img src={Map} alt="logo" />
                </div>
            <div className="toko-container">
                <div className="toko-title">
                  <div className="toko-img-rating">
                      <img src={Tokoimg} alt="" />
                      <div className="rating-container">
                          <h2>Mie Kopyok Pak Zain Badak</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Badak 8 No.31, Pandean Lamper, Kec. Gayamsari, Kota Semarang, Jawa Tengah 50249</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>089524570682</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/Fxuzc3wfMYVEWXAi9" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default MieKopyak2;
