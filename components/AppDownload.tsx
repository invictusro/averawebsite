"use client";

import React from 'react';

export default function AppDownload() {
  return (
    <section className="app-download__area section-py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section__title text-center mb-80">
              <span className="sub-title">Download AVERA Mobile App</span>
              <h2 className="title">Start <span>Mining Crypto</span> on Your Phone</h2>
              <p className="mt-4">
                Join millions of users mining cryptocurrency directly from their mobile devices.
                Available on iOS and Android - start earning today!
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="app-download__content">
              <h3 className="title mb-4">Mine Crypto <span>Anywhere</span>, Anytime</h3>
              <ul className="app-features list-wrap">
                <li className="mb-3">
                  <i className="fas fa-check-circle" style={{color: '#10b981', marginRight: '10px'}}></i>
                  Low battery consumption with optimized mining algorithms
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle" style={{color: '#10b981', marginRight: '10px'}}></i>
                  Real-time earnings tracking and withdrawal
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle" style={{color: '#10b981', marginRight: '10px'}}></i>
                  Secure wallet integration with cold storage
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle" style={{color: '#10b981', marginRight: '10px'}}></i>
                  Daily rewards and referral bonuses
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle" style={{color: '#10b981', marginRight: '10px'}}></i>
                  Support for multiple cryptocurrencies
                </li>
              </ul>

              <div className="download-buttons mt-5">
                <div className="d-flex gap-3 flex-wrap">
                  <a href="#" className="app-download-btn">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <div>
                      <div style={{fontSize: '10px', lineHeight: 1}}>Download on the</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>App Store</div>
                    </div>
                  </a>

                  <a href="#" className="app-download-btn android">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1 18q.225-2.675 1.638-4.925Q4.05 10.825 6.4 9.5L12 3l5.6 6.5q2.35 1.325 3.763 3.575Q22.775 15.325 23 18zm6-2.975q.2 0 .375-.063.175-.062.325-.212l1.425-1.425q.15-.15.212-.325.063-.175.063-.375 0-.2-.063-.375-.062-.175-.212-.325L7.7 10.5q-.15-.15-.325-.212-.175-.063-.375-.063-.2 0-.375.063-.175.062-.325.212l-1.425 1.425q-.15.15-.212.325-.063.175-.063.375 0 .2.063.375.062.175.212.325l1.425 1.425q.15.15.325.212.175.063.375.063m10 0q.2 0 .375-.063.175-.062.325-.212l1.425-1.425q.15-.15.212-.325.063-.175.063-.375 0-.2-.063-.375-.062-.175-.212-.325L17.7 10.5q-.15-.15-.325-.212-.175-.063-.375-.063-.2 0-.375.063-.175.062-.325.212l-1.425 1.425q-.15.15-.212.325-.063.175-.063.375 0 .2.063.375.062.175.212.325l1.425 1.425q.15.15.325.212.175.063.375.063M5.9 20.3q-.475 0-.8-.325-.325-.325-.325-.8 0-.475.325-.8.325-.325.8-.325.475 0 .8.325.325.325.325.8 0 .475-.325.8-.325.325-.8.325m12.2 0q-.475 0-.8-.325-.325-.325-.325-.8 0-.475.325-.8.325-.325.8-.325.475 0 .8.325.325.325.325.8 0 .475-.325.8-.325.325-.8.325"/>
                    </svg>
                    <div>
                      <div style={{fontSize: '10px', lineHeight: 1}}>GET IT ON</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="app-stats mt-5">
                <div className="row">
                  <div className="col-4">
                    <h3 style={{color: '#10b981'}}>10M+</h3>
                    <p>Downloads</p>
                  </div>
                  <div className="col-4">
                    <h3 style={{color: '#10b981'}}>4.8★</h3>
                    <p>Rating</p>
                  </div>
                  <div className="col-4">
                    <h3 style={{color: '#10b981'}}>150+</h3>
                    <p>Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="app-download__img text-center">
              {/* Phone mockup with gradient background */}
              <div className="phone-mockup-container" style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: '30px',
                padding: '60px',
                position: 'relative'
              }}>
                <div className="phone-device" style={{
                  background: '#000',
                  borderRadius: '40px',
                  width: '300px',
                  height: '600px',
                  margin: '0 auto',
                  border: '8px solid #222',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Phone screen content */}
                  <div style={{
                    background: 'linear-gradient(180deg, #10b981 0%, #064e3b 100%)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    padding: '20px'
                  }}>
                    <h3 style={{fontSize: '24px', marginBottom: '20px'}}>AVERA</h3>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <i className="fas fa-coins" style={{fontSize: '48px'}}></i>
                    </div>
                    <p style={{fontSize: '18px', marginBottom: '10px'}}>Mining Active</p>
                    <h2 style={{fontSize: '36px', marginBottom: '20px'}}>0.0347 BTC</h2>
                    <div style={{
                      width: '80%',
                      height: '40px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '20px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '60%',
                        height: '100%',
                        background: 'white',
                        borderRadius: '20px',
                        animation: 'pulse 2s infinite'
                      }}></div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '40px',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features__shape">
        <img src="/assets/img/images/features_shape.png" alt="shape" />
      </div>
    </section>
  );
}