import React from 'react';
import Map from '../../../assets/toko_minuman_semarang/map/esmarem2.png'
import Tokoimg from '../../../assets/toko_minuman_semarang/esmarem2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const EsMarem2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/esmarem/38">
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
                          <h2>Es Marem Pak Zaenal</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>2CFF+RGR, Jl. K.H. Wahid Hasyim, Kranggan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>081542477288</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@esmarem_buningkranggan</p>
                    <a href="https://maps.app.goo.gl/nfQNg55gMhhX7mA6A" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default EsMarem2;
