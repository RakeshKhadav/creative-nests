import React, { useState } from 'react';
import '../styles/Portfolio.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import project1 from '../assets/images/portfolio/project-1.jpg';
import project2 from '../assets/images/portfolio/project-2.jpg';
import project3 from '../assets/images/portfolio/project-3.jpg';
import project4 from '../assets/images/portfolio/project-4.jpg';
import project5 from '../assets/images/portfolio/project-5.jpg';
import project6 from '../assets/images/portfolio/project-6.jpg';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const portfolioItems = [
        {
            id: 1,
            image: project1,
            title: 'Artisan Café & Bakery',
            category: 'web-design branding',
            description: 'Complete branding and website design for an artisanal café, including logo design, menu design, and online ordering system implementation.'
        },
        {
            id: 2,
            image: project2,
            title: 'Eco-Friendly Packaging',
            category: 'graphic-design packaging',
            description: 'Sustainable packaging design for an eco-conscious skincare brand, featuring recycled materials and biodegradable elements.'
        },
        {
            id: 3,
            image: project3,
            title: 'Financial Analytics Dashboard',
            category: 'web-development ui-design',
            description: 'Interactive financial dashboard that visualizes complex data in an intuitive interface, helping users make informed investment decisions.'
        },
        {
            id: 4,
            image: project4,
            title: 'Luxury Fashion E-commerce',
            category: 'web-design web-development',
            description: 'Fully responsive e-commerce platform for a luxury fashion brand with custom product filtering, wishlist functionality, and seamless checkout experience.'
        },
        {
            id: 5,
            image: project5,
            title: 'Mobile Fitness App',
            category: 'ui-design web-development',
            description: 'User-friendly fitness application with workout tracking, nutrition planning, and progress visualization to help users achieve their health goals.'
        },
        {
            id: 6,
            image: project6,
            title: 'Corporate Brand Redesign',
            category: 'branding graphic-design',
            description: 'Complete corporate identity refresh for an established tech company, including logo redesign, style guide development, and marketing materials.'
        }
    ];

    const handleFilterClick = (category) => {
        setFilter(category);
    };

    const filteredItems = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category.includes(filter));

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our <span className="text-gradient">Portfolio</span></h2>
                    <p className="section-subtitle">Explore our recent projects and see how we've helped businesses achieve their goals.</p>
                </div>

                <div className="portfolio-filter">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        data-filter="all"
                        onClick={() => handleFilterClick('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${filter === 'web-design' ? 'active' : ''}`}
                        data-filter="web-design"
                        onClick={() => handleFilterClick('web-design')}
                    >
                        Web Design
                    </button>
                    <button
                        className={`filter-btn ${filter === 'graphic-design' ? 'active' : ''}`}
                        data-filter="graphic-design"
                        onClick={() => handleFilterClick('graphic-design')}
                    >
                        Graphic Design
                    </button>
                    <button
                        className={`filter-btn ${filter === 'branding' ? 'active' : ''}`}
                        data-filter="branding"
                        onClick={() => handleFilterClick('branding')}
                    >
                        Branding
                    </button>
                    <button
                        className={`filter-btn ${filter === 'web-development' ? 'active' : ''}`}
                        data-filter="web-development"
                        onClick={() => handleFilterClick('web-development')}
                    >
                        Development
                    </button>
                </div>

                <div className="portfolio-swiper-container" data-animation="fade-up">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="portfolio-swiper"
                    >
                        {filteredItems.map(item => (
                            <SwiperSlide key={item.id} className="portfolio-slide">
                                <div className="portfolio-item" data-category={item.category}>
                                    <div className="portfolio-image">
                                        <img src={item.image} alt={item.title} />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-content">
                                                <span className="portfolio-category">{item.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                                                <h3 className="portfolio-title">{item.title}</h3>
                                                <p className="portfolio-description">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="services-cta" data-animation="fade-up">
                    <div className="cta-content">
                        <h3>Have a project in mind?</h3>
                        <p style={{color:'white'}}>Let's discuss how we can create something amazing together.</p>
                    </div>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="btn btn-primary">
                        Get Started <FaArrowRight className="btn-icon" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;