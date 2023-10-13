'use client'

import Slider from 'react-slick'
import Slide from '@/components/Slide'

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    pauseOnHover: false,
    arrows: false,
  }

  const slideData = [
    {
      id: 0,
      img: '/banner-1.jpg',
      title: 'Trending Item',
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: '$20',
    },
    {
      id: 1,
      img: '/banner-2.jpg',
      title: 'Trending Accessories',
      mainTitle: 'MODERN SUNGLASSES',
      price: '$15',
    },
    {
      id: 2,
      img: '/banner-3.jpg',
      title: 'Sale Offer',
      mainTitle: 'NEW FASHION SUMMER SALE',
      price: '$30',
    },
  ]

  return (
    <div className='h-[700px]'>
      <Slider {...settings}>
        {slideData.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  )
}
