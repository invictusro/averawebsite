"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blog() {
  return (
    <>
      <Header />

      <main className="main-area fix">
        <section className="blog__area section-py-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section__title text-center mb-80">
                  <span className="sub-title">our blog</span>
                  <h2 className="title">Latest <span>News</span> & Articles</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="blog__post-wrap">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="blog__post-item">
                      <div className="blog__post-thumb">
                        <img src={`/assets/img/blog/blog_img0${num}.jpg`} alt="blog" />
                      </div>
                      <div className="blog__post-content">
                        <div className="blog__post-meta">
                          <ul className="list-wrap">
                            <li><i className="far fa-user"></i>Admin</li>
                            <li><i className="far fa-calendar"></i>Nov 13, 2025</li>
                          </ul>
                        </div>
                        <h3 className="title">
                          <a href="/blog-details">Understanding Cryptocurrency Markets</a>
                        </h3>
                        <p>Explore the fundamentals of cryptocurrency trading and market dynamics. Learn how to navigate the volatile crypto landscape.</p>
                        <a href="/blog-details" className="tg-btn tg-btn-two">Read More</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
