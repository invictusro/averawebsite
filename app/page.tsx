"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Countdown from '@/components/Countdown';
import BackgroundImage from '@/components/BackgroundImage';
import ClientInit from '@/components/ClientInit';
import AppDownload from '@/components/AppDownload';

export default function Home() {
  return (
    <>
      <ClientInit />
      <Header />

      <main className="main-area fix">
        {/* Banner Area */}
        <BackgroundImage src="/assets/img/banner/hero_bg.svg" className="banner__area banner__bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="banner__content">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                    Built on web3. Powered by You
                  </span>
                  <h2 className="title wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                    The <span>future</span> of mobile crypto mining
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                    Start mining cryptocurrency directly from your phone with our optimized mobile app.
                    Join millions earning crypto on the go.
                  </p>
                  <div className="banner__download-buttons wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1s">
                    <div className="d-flex gap-3 flex-wrap justify-content-center">
                      <a href="#app-download" className="app-download-btn">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        <div>
                          <div style={{fontSize: '10px', lineHeight: 1}}>Download on the</div>
                          <div style={{fontSize: '18px', fontWeight: 'bold'}}>App Store</div>
                        </div>
                      </a>
                      <a href="#app-download" className="app-download-btn android">
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
                  <span className="banner__content-bottom wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1s">
                    Over 10 million downloads worldwide • 4.8★ Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="banner__shape">
            <img src="/assets/img/banner/hero_img01.png" alt="shape" className="alltuchtopdown" />
            <img src="/assets/img/banner/hero_img02.png" alt="shape" className="rotateme" />
            <img src="/assets/img/banner/hero_img03.png" alt="shape" className="alltuchtopdown" />
            <img src="/assets/img/banner/hero_bg_shape.svg" alt="shape" className="banner__bg-shape" />
          </div>
        </BackgroundImage>

        {/* Features Area */}
        <section id="features" className="features__area section-pt-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-80">
                  <span className="sub-title">accessible for everyone</span>
                  <h2 className="title">Crypto <span>mining</span> accessible</h2>
                </div>
              </div>
            </div>
            <div className="row gutter-y-40">
              <div className="col-lg-6">
                <div className="features__item">
                  <div className="features__icon">
                    <img src="/assets/img/icon/features_icon01.png" alt="icon" />
                  </div>
                  <div className="features__content">
                    <h4 className="title">Crypto <span>management</span></h4>
                    <p>Automated identity verification and anti-money</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features__item">
                  <div className="features__icon">
                    <img src="/assets/img/icon/features_icon02.png" alt="icon" />
                  </div>
                  <div className="features__content">
                    <h4 className="title">Crypto <span>exchange</span></h4>
                    <p>A built-in explorer to track transactions</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features__item features__item-two">
                  <div className="features__icon">
                    <img src="/assets/img/icon/features_icon03.png" alt="icon" />
                  </div>
                  <div className="features__content">
                    <h4 className="title">Real-time <span>data</span></h4>
                    <p>Global reach with content available in multiple</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features__item features__item-two">
                  <div className="features__icon">
                    <img src="/assets/img/icon/features_icon04.png" alt="icon" />
                  </div>
                  <div className="features__content">
                    <h4 className="title">Advanced <span>trading</span></h4>
                    <p>Visual dashboards for trade performance</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features__item features__item-two">
                  <div className="features__icon">
                    <img src="/assets/img/icon/features_icon05.png" alt="icon" />
                  </div>
                  <div className="features__content">
                    <h4 className="title">Blockchain <span>compliance</span></h4>
                    <p>Exportable reports for tax and accounting purposes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features__shape">
            <img src="/assets/img/images/features_shape.png" alt="shape" />
          </div>
        </section>

        {/* App Download Section */}
        <div id="app-download">
          <AppDownload />
        </div>

        {/* Marquee Area */}
        <section className="marquee__area section-pt-120">
          <div className="slider__marquee clearfix marquee-wrap">
            <div className="marquee_mode">
              <div className="marquee__group">
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
              </div>
              <div className="marquee__group" aria-hidden="true">
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
                <h6 className="marquee__item">You will hold the way you love AVERA</h6>
              </div>
            </div>
          </div>
        </section>

        {/* Token Area */}
        <section id="token" className="token__area section-py-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="token__content" data-aos="fade-right" data-aos-delay="0">
                  <div className="section__title mb-40">
                    <span className="sub-title">accessible for everyone</span>
                    <h2 className="title">Trading <span>platform</span> <br /> of the future!</h2>
                  </div>
                  <p>AVERA brings our love for cryptocurrency into Web3! Like a frog&apos;s leap, the chart can jump at any moment. Boom!</p>
                  <a href="#!" className="tg-btn tg-btn-two">purchase now</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="token__wrap" data-aos="fade-left" data-aos-delay="0">
                  <div className="token__wrap-inner">
                    <h4 className="title">Token sale ends in:</h4>
                    <Countdown targetDate="2026/12/30" />
                    <h3 className="token__received"><span>$49,222,300</span> contribution received</h3>
                    <div className="token__progress-wrap">
                      <ul className="list-wrap token__progress-title">
                        <li>$5M</li>
                        <li>$99M</li>
                      </ul>
                      <div className="progress" role="progressbar" aria-label="Token Progress" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar" style={{width: '50%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="copy-text">
                    <mark>0x2170Ed0880ac9A755fd29B2688956BD959F933F8</mark>
                    <button className="copy-btn"><img src="/assets/img/icon/copy.svg" alt="" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="token__shape">
            <img src="/assets/img/images/features_shape.png" alt="" />
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <div className="container">
            <span></span>
          </div>
        </div>

        {/* Work Area */}
        <section id="work" className="work__area section-py-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-80">
                  <span className="sub-title">how it works?</span>
                  <h2 className="title">Core asset of the <span>crypto</span> marketplace</h2>
                </div>
              </div>
            </div>
            <div className="work__item-wrap">
              <div className="work__img">
                <img src="/assets/img/images/work_img.png" alt="img" className="alltuchtopdown" />
              </div>
              <div className="row">
                <div className="col-lg-6" data-aos="fade-right" data-aos-delay="0">
                  <div className="work__item">
                    <h1 className="number">01</h1>
                    <h4 className="title">Currency <span>conversion</span></h4>
                    <p>Exportable reports for tax and accounting purposes.</p>
                  </div>
                  <div className="work__item mb-0">
                    <h1 className="number">02</h1>
                    <h4 className="title">Data <span>encryption</span></h4>
                    <p>Visual dashboards for trade performance.</p>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left" data-aos-delay="0">
                  <div className="work__item work__item-right">
                    <h1 className="number">03</h1>
                    <h4 className="title">Cold wallet <span>storage</span></h4>
                    <p>Regular updates on crypto trends and platform features.</p>
                  </div>
                  <div className="work__item work__item-right mb-0">
                    <h1 className="number">04</h1>
                    <h4 className="title">Transfer crypto <span>& data</span></h4>
                    <p>Guides for beginners on crypto basics and trading.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="work__shape">
            <img src="/assets/img/images/features_shape.png" alt="shape" />
          </div>
        </section>

        {/* Exchange Area */}
        <section className="exchange__area section-pb-120" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="exchange__inner-wrap">
              <div className="exchange__content">
                <div className="icon">
                  <img src="/assets/img/images/exchange_img.png" alt="img" />
                </div>
                <div className="content">
                  <h4 className="title">Exchange <span>availability</span></h4>
                  <p>AI-powered tools to detect and prevent fraudulent activities.</p>
                </div>
              </div>
              <div className="exchange__icons">
                <ul className="list-wrap">
                  {[1, 2, 3, 4].map((num) => (
                    <li key={num}><img src={`/assets/img/icon/exchange_icon0${num}.svg`} alt="icon" /></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Crypto Area */}
        <section className="crypto__area section-py-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section__title text-center mb-80">
                  <span className="sub-title">crypto direction</span>
                  <h2 className="title">Goods & assets <span>according</span> <br /> to users interests.</h2>
                </div>
              </div>
            </div>
            <div className="row gutter-y-30 justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="crypto__item">
                  <div className="crypto__icon">
                    <img src="/assets/img/icon/crypto_icon01.svg" alt="icon" />
                  </div>
                  <div className="crypto__content">
                    <h2 className="title">Read our <span>white paper</span></h2>
                    <a href="#!" className="tg-btn tg-btn-two">open whitepaper</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="crypto__item">
                  <div className="crypto__icon">
                    <img src="/assets/img/icon/crypto_icon02.svg" alt="icon" />
                  </div>
                  <div className="crypto__content">
                    <h2 className="title">1 CRN token price <span>0.00014 BTC</span></h2>
                    <a href="#!" className="tg-btn tg-btn-two">Buy tokens <span>(-25%)</span></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="crypto__item">
                  <div className="crypto__icon">
                    <img src="/assets/img/icon/crypto_icon03.svg" alt="icon" />
                  </div>
                  <div className="crypto__content">
                    <h2 className="title">ICO Participants <span>370,000+</span></h2>
                    <a href="#!" className="tg-btn tg-btn-two">join our telegram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="crypto__shape">
            <img src="/assets/img/images/features_shape.png" alt="shape" />
          </div>
        </section>

        {/* FAQ Area */}
        <section className="faq__area section-py-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="faq__img" data-aos="fade-right" data-aos-delay="0">
                  <img src="/assets/img/images/faq_img.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq__content" data-aos="fade-left" data-aos-delay="0">
                  <div className="section__title mb-60">
                    <span className="sub-title">faq & ans</span>
                    <h2 className="title">Get every <span>single</span> <br /> answer</h2>
                  </div>
                  <div className="faq__wrap">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Main purpose of a cryptocurrency
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>The private key, stored securely in the wallet, allows you to sign transactions and prove ownership of the funds cryptocurrency wallet.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How can I make refund?
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>The private key, stored securely in the wallet, allows you to sign transactions and prove ownership of the funds cryptocurrency wallet.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How do they operate on blockchain?
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>The private key, stored securely in the wallet, allows you to sign transactions and prove ownership of the funds cryptocurrency wallet.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <div className="container">
            <span></span>
          </div>
        </div>

        {/* Roadmap Area */}
        <section id="roadmap" className="roadmap__area section-py-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-80" data-aos="fade-up" data-aos-delay="0">
                  <span className="sub-title">roadmap</span>
                  <h2 className="title">Our <span>strategy</span> & Planning</h2>
                </div>
              </div>
            </div>
            <div className="roadmap__item-wrap" data-aos="fade-up" data-aos-delay="300">
              <div className="row gutter-y-40">
                {[
                  { year: '2014', desc: 'Definitions of key terms in cryptocurrency', icon: '01' },
                  { year: '2017', desc: 'Automated tools for executing strategies', icon: '02' },
                  { year: '2022', desc: 'APIs for developers to build custom tools', icon: '03' },
                  { year: '2025', desc: 'A space for users to discuss trends', icon: '04' }
                ].map((item) => (
                  <div key={item.year} className="col-lg-3 col-md-6">
                    <div className="roadmap__item">
                      <div className="roadmap__icon">
                        <img src={`/assets/img/icon/roadmap_icon${item.icon}.png`} alt="icon" />
                      </div>
                      <div className="roadmap__content">
                        <h3 className="title">{item.year}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="roadmap__shape">
            <img src="/assets/img/images/features_shape.png" alt="shape" />
          </div>
        </section>

        {/* Team Area */}
        <section className="team__area section-py-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="team__content-wrap">
                  <div className="section__title mb-40">
                    <span className="sub-title">our avengers</span>
                    <h2 className="title">Meet with <span>our</span> avengers!</h2>
                  </div>
                  <p>AVERA brings our love for cryptocurrency into Web3! Like a frog&apos;s leap, the chart can jump at any moment. Boom!</p>
                  <div className="team__social-wrap">
                    <h6 className="title">Follow us</h6>
                    <ul className="list-wrap">
                      {['facebook', 'twitter', 'telegram', 'discord'].map((platform) => (
                        <li key={platform}>
                          <a href="#!">
                            <div className="shape">
                              <img src="/assets/img/icon/icons_bg.svg" alt="shape" />
                            </div>
                            <img src={`/assets/img/icon/${platform}.svg`} alt="icon" className="icon" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="team__item-wrap">
                  <div className="row gutter-y-30">
                    {[
                      { name: 'Rosalina William', role: 'founder', img: '01', social: 'facebook' },
                      { name: 'Alonso Dowson', role: 'ceo', img: '02', social: 'telegram' },
                      { name: 'Elson Nelzoon', role: 'Designer', img: '03', social: 'twitter' },
                      { name: 'Miranda Halim', role: 'developer', img: '04', social: 'telegram' }
                    ].map((member) => (
                      <div key={member.name} className="col-md-6">
                        <div className="team__item">
                          <div className="team__thumb">
                            <img src={`/assets/img/team/team_img${member.img}.png`} alt="img" />
                          </div>
                          <div className="team__content">
                            <span>{member.role}</span>
                            <h3 className="title">{member.name}</h3>
                          </div>
                          <div className="social__icon">
                            <a href="#!">
                              <div className="shape">
                                <img src="/assets/img/icon/icons_bg.svg" alt="shape" />
                              </div>
                              <img src={`/assets/img/icon/${member.social}.svg`} alt="icon" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team__shape">
            <img src="/assets/img/images/features_shape.png" alt="shape" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
