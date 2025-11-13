"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer__area">
      <div className="container">
        <div className="footer__top">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="footer__content">
                <div className="footer__logo">
                  <Link href="/" style={{display: 'inline-flex', alignItems: 'center', gap: '12px'}}>
                    <img src="/logo/avera-icon.png" alt="AVERA Icon" style={{height: '80px', width: 'auto'}} />
                    <img src="/logo/avera-text.png" alt="AVERA" style={{height: '36px', width: 'auto'}} />
                  </Link>
                </div>
                <span className="sub-title">Built on web3. Powered by You</span>
                <h2 className="title">Join with our <span>future</span> of AVERA currency</h2>
                <div className="team__social-wrap">
                  <ul className="list-wrap">
                    <li>
                      <a href="#!">
                        <div className="shape">
                          <img src="/assets/img/icon/icons_bg.svg" alt="shape" />
                        </div>
                        <img src="/assets/img/icon/facebook.svg" alt="icon" className="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <div className="shape">
                          <img src="/assets/img/icon/icons_bg.svg" alt="shape" />
                        </div>
                        <img src="/assets/img/icon/twitter.svg" alt="icon" className="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <div className="shape">
                          <img src="/assets/img/icon/icons_bg.svg" alt="shape" />
                        </div>
                        <img src="/assets/img/icon/telegram.svg" alt="icon" className="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <div className="shape">
                          <img src="/assets/img/icon/icons_bg.svg" alt="shape" />
                        </div>
                        <img src="/assets/img/icon/discord.svg" alt="icon" className="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="copyright-text">
            <p>Copyright & design by <a href="https://themeforest.net/user/themeadapt" target="_blank">@ThemeAdapt</a> - 2025</p>
          </div>
        </div>
      </div>
      <div className="footer__shape">
        <img src="/assets/img/images/footer_shape01.png" alt="shape" className="alltuchtopdown" />
        <img src="/assets/img/images/footer_shape02.png" alt="shape" className="alltuchtopdown" />
      </div>
    </footer>
  );
}
