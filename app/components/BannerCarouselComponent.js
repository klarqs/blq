"use client"

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerCarouselComponent = () => {
  const [mainBanners, setMainBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMainBanners = async () => {
      try {
        const response = await fetch('https://api.testvalley.kr/main-banner/all');
        if (response.ok) {
          const data = await response.json();
          const mainBannersData = data.map(item => ({
            pcImageUrl: item.pcImageUrl,
            // Add other properties as needed
          }));
          setMainBanners(mainBannersData);
        }
      } catch (error) {
        console.error('Error fetching main banners:', error);
      } finally {
        setLoading(false);
      }
    };

    getMainBanners();
  }, []);


  const sliderSettings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    centerMode: true,
    centerPadding: '15px',
    speed: 400,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000,
    className: 'slider',
    arrows: true,
    customPaging: index => (
      <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '8px 0px 0px 0px', color: 'white', height: '16', width: '16' }}>{index + 1}</button>
    ),
    appendDots: dots => (
      <div style={{ bottom: '10px', textAlign: 'center', color: 'white' }}>
        <ul style={{ margin: '0', padding: '0', listStyle: 'none', color: 'white' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div style={{
      width: '100%',
      margin: '0 auto',
      padding: '0 16px',
      boxSizing: 'border-box',
      // height: '72px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#333333',
    }}> <div style={{ width: '1025px', height: '320px', position: 'relative' }}>
        {loading ? (
          <div style={{ textAlign: 'center', color: 'black' }}>Loading...</div>
        ) : (
          <div style={{ position: 'relative' }}>
            <Slider {...sliderSettings}>
              {mainBanners.map((banner, index) => (
                <div key={index} style={{ width: '1025px', height: '320px' }}>
                  <img src={banner.pcImageUrl} alt={`Banner ${index + 1}`} style={{ width: '1025px', height: '320px', objectFit: 'cover', borderRadius: '4px', padding: '0px 12px 0px 12px' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '1025px', height: '320px', objectFit: 'cover', borderRadius: '4px', padding: '0px 12px 0px 12px', backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '4px' }} />
                </div>
              ))}
            </Slider>
          </div>
        )
        }
      </div >
    </div >
  );
};

export default BannerCarouselComponent;

