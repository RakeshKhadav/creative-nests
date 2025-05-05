import React, { useState } from 'react';
import '../styles/Blog.css';
import blog1 from '../assets/images/blog/blog-1.jpg';
import blog2 from '../assets/images/blog/blog-2.jpg';
import blog3 from '../assets/images/blog/blog-3.jpg';
import blog4 from '../assets/images/blog/blog-4.jpg';
import blog5 from '../assets/images/blog/blog-5.jpg';
import blog6 from '../assets/images/blog/blog-6.jpg';

const Blog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      category: 'UX Design',
      title: '5 UX Design Trends That Will Dominate in 2025',
      date: 'April 29, 2025',
      author: 'By <span>Tushar Parihar</span>',
      content: `
        <p>The world of UX design is constantly evolving, with new trends and techniques emerging each year. As we move through 2025, several key trends are shaping how users interact with digital interfaces across websites and applications.</p>
        
        <h3>1. Advanced 3D Elements</h3>
        <p>3D design elements are becoming increasingly popular, allowing designers to create more immersive and engaging user experiences. With improvements in technology and browser capabilities, incorporating 3D elements is more accessible than ever, adding depth and interactivity to otherwise flat interfaces.</p>
        
        <h3>2. Voice User Interfaces (VUI)</h3>
        <p>Voice-controlled interfaces continue to gain traction, with more users relying on voice commands to navigate websites and applications. Designers are now focusing on creating seamless voice interactions that complement traditional visual interfaces, making digital products more accessible and convenient.</p>
        
        <h3>3. Micro-interactions</h3>
        <p>These subtle animations and feedback elements greatly enhance user experience by providing visual cues and making interfaces feel more responsive. From button state changes to loading animations, micro-interactions add personality to digital products while guiding users through their journey.</p>
        
        <h3>4. Dark Mode as Standard</h3>
        <p>Dark mode has evolved from a trend to an expected feature. Users appreciate the reduced eye strain, especially in low-light conditions, as well as the potential battery savings on OLED screens. Designing for both light and dark modes is now considered best practice.</p>
        
        <h3>5. Augmented Reality Integration</h3>
        <p>AR experiences are becoming more common in everyday applications, particularly in e-commerce and education. Users can now visualize products in their space before purchasing or interact with educational content in new, immersive ways.</p>
      `
    },
    {
      id: 2,
      image: blog2,
      category: 'SEO',
      title: 'How Core Web Vitals Affect Your SEO Rankings',
      date: 'April 25, 2025',
      author: 'By <span>Rakesh Khadav</span>',
      content: `
        <p>Google's Core Web Vitals have become essential metrics for website owners and SEO professionals to monitor. These user-centric performance measurements directly impact search rankings and overall user experience.</p>
        
        <h3>Understanding Core Web Vitals</h3>
        <p>Core Web Vitals consist of three specific measurements of user experience: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Each metric evaluates a different aspect of page loading, interactivity, and visual stability.</p>
        
        <h3>Impact on Search Rankings</h3>
        <p>Since Google's Page Experience update in 2025, Core Web Vitals have become official ranking factors. Websites that meet the recommended thresholds for all three metrics are more likely to rank higher in search results, potentially gaining a competitive edge over similar content that performs poorly.</p>
        
        <h3>Improving Your Core Web Vitals</h3>
        <p>To enhance your website's performance scores, consider implementing these strategies:</p>
        <ul>
            <li>Optimize image sizing and formats to improve loading speed</li>
            <li>Minimize or defer non-critical JavaScript</li>
            <li>Implement proper dimension attributes for images and embed elements</li>
            <li>Leverage browser caching and CDN services</li>
            <li>Reduce server response times</li>
        </ul>
        
        <h3>Measuring Your Performance</h3>
        <p>Tools like Google PageSpeed Insights, Lighthouse, and the Core Web Vitals report in Google Search Console provide valuable insights into your website's performance. Regular monitoring helps identify issues that need addressing before they significantly impact your rankings.</p>
      `
    },
    {
      id: 3,
      image: blog3,
      category: 'Mobile Design',
      title: 'Creating Engaging Mobile Experiences That Convert',
      date: 'April 21, 2025',
      author: 'By <span>Sheetal</span>',
      content: `
        <p>With mobile traffic continuing to dominate internet usage in 2025, designing effective mobile experiences has never been more crucial. A well-designed mobile interface not only engages users but also drives meaningful conversions for your business.</p>
        
        <h3>Prioritize Speed and Performance</h3>
        <p>Mobile users expect instant results. Even a one-second delay in page load time can significantly impact conversion rates. Optimize images, leverage browser caching, and implement lazy loading to ensure your mobile experience is lightning-fast.</p>
        
        <h3>Design for Thumb-Friendly Navigation</h3>
        <p>Consider how users physically interact with their devices. Place important navigation elements and call-to-action buttons within easy reach of thumbs. The most accessible areas are in the center and bottom portions of the screen.</p>
        
        <h3>Simplify Forms and Checkout Processes</h3>
        <p>Long, complicated forms are conversion killers on mobile devices. Minimize form fields, use appropriate input types (like number pads for phone numbers), and offer alternative payment methods like digital wallets to streamline the conversion process.</p>
        
        <h3>Implement Persuasive Micro-Interactions</h3>
        <p>Subtle animations and feedback mechanisms can guide users toward desired actions. From progress indicators to satisfying button animations, these small details create engaging experiences that encourage users to complete conversion paths.</p>
        
        <h3>Optimize for Different Screen Sizes</h3>
        <p>Mobile devices come in countless screen dimensions. Ensure your design responds appropriately to different sizes while maintaining critical elements' visibility and functionality, especially conversion-focused components like add-to-cart buttons.</p>
      `
    },
    {
      id: 4,
      image: blog4,
      category: 'E-commerce',
      title: '7 Essential Features Every E-commerce Website Should Have',
      date: 'April 18, 2025',
      author: 'By <span>Tushar Parihar</span>',
      content: `
        <p>In today's competitive online marketplace of 2025, having a well-designed e-commerce website with the right features can significantly impact your business success. Here are seven essential features that every e-commerce site should implement:</p>
        
        <h3>1. Advanced Product Filtering</h3>
        <p>Help customers find exactly what they're looking for with robust filtering options. Allow sorting by price, popularity, ratings, and product-specific attributes. Faceted navigation enables users to narrow down options quickly, reducing frustration and abandoned searches.</p>
        
        <h3>2. High-Quality Product Images</h3>
        <p>Since customers can't physically examine products, provide multiple high-resolution images from different angles. Zoom functionality, 360-degree views, and videos further enhance the shopping experience by giving customers a comprehensive look at what they're purchasing.</p>
        
        <h3>3. Transparent Pricing and Shipping Information</h3>
        <p>Hidden costs are one of the leading causes of cart abandonment. Display all costs upfront, including taxes and shipping fees. Offering a shipping calculator early in the shopping process builds trust and reduces checkout surprises.</p>
        
        <h3>4. Customer Reviews and Ratings</h3>
        <p>Social proof is powerful in influencing purchase decisions. Implement a robust review system that allows customers to share their experiences and rate products. Consider including features like verified purchase badges and the ability to upload photos of products in use.</p>
        
        <h3>5. Streamlined Checkout Process</h3>
        <p>A complicated checkout process leads to abandoned carts. Simplify yours by reducing the number of steps, offering guest checkout, and providing multiple payment options. Progress indicators help customers understand where they are in the process.</p>
        
        <h3>6. Mobile-Optimized Shopping Experience</h3>
        <p>With more than half of e-commerce traffic coming from mobile devices in 2025, your site must provide an exceptional mobile shopping experience with easy navigation, appropriately sized buttons, and simplified forms.</p>
        
        <h3>7. Related Products and Recommendations</h</p>
        <p>Increase average order value by intelligently suggesting complementary or alternative products based on browsing history and purchase patterns. Well-implemented recommendation engines can significantly boost revenue while improving the shopping experience.</p>
      `
    },
    {
      id: 5,
      image: blog5,
      category: 'Web Development',
      title: 'The Rise of Jamstack: Why Modern Websites Are Going Headless',
      date: 'April 15, 2025',
      author: 'By <span>Rakesh Khadav</span>',
      content: `
        <p>The Jamstack architecture has emerged as a revolutionary approach to web development, offering significant advantages over traditional monolithic systems. This modern web architecture is changing how developers build and deploy websites and applications.</p>
        
        <h3>What is Jamstack?</h3>
        <p>Jamstack stands for JavaScript, APIs, and Markup. It's an architecture that decouples the frontend from the backend, with pre-rendered content served directly from a CDN, and dynamic functionality handled through API calls. This separation creates more flexible, scalable, and secure websites.</p>
        
        <h3>Performance Benefits</h3>
        <p>By serving pre-rendered files over a CDN, Jamstack sites achieve incredibly fast loading times. There's no server-side rendering or database queries needed for each request, which dramatically reduces Time to First Byte (TTFB) and improves Core Web Vitals scores.</p>
        
        <h3>Enhanced Security</h3>
        <p>With no direct connection between the frontend and the database or backend systems, Jamstack sites present a smaller attack surface. The decoupled nature means fewer vulnerabilities and reduced risk of database breaches or server-side exploits.</p>
        
        <h3>Better Developer Experience</h3>
        <p>Developers enjoy working with Jamstack because it allows them to use their preferred frameworks and tools. The clear separation of concerns makes codebases more maintainable, and the ability to use version control for the entire site improves collaboration.</p>
        
        <h3>Scalability Without Complexity</h3>
        <p>Traditional sites often require complex scaling solutions as traffic grows. Jamstack sites, served entirely from CDNs, scale automatically to handle virtually any traffic level without additional configuration or infrastructure concerns.</p>
      `
    },
    {
      id: 6,
      image: blog6,
      category: 'Social Media',
      title: 'Effective Social Media Strategies for Small Businesses in 2025',
      date: 'April 12, 2025',
      author: 'By <span>Sheetal</span>',
      content: `
        <p>For small businesses with limited resources in 2025, creating an effective social media strategy is about working smarter, not harder. By focusing on the right platforms, content, and engagement tactics, even businesses with modest budgets can achieve significant results.</p>
        
        <h3>Focus on Platform Selection</h3>
        <p>Rather than trying to maintain a presence on every social platform, small businesses should identify where their target audience is most active. For B2B companies, LinkedIn and Twitter often provide the best ROI, while visual brands might focus on Instagram and Pinterest. Research your audience demographics and platform usage patterns before investing your resources.</p>
        
        <h3>Content Strategy: Quality Over Quantity</h3>
        <p>Consistency matters more than volume. Develop a realistic posting schedule that you can maintain, focusing on high-quality, valuable content rather than frequency. Create a content calendar that incorporates different content types—educational posts, behind-the-scenes glimpses, customer spotlights, and promotional content—to keep your audience engaged.</p>
        
        <h3>Leverage User-Generated Content</h3>
        <p>Encourage customers to share their experiences with your products or services. User-generated content not only provides authentic social proof but also helps fill your content calendar without requiring extensive resources. Create branded hashtags and consider running contests that incentivize customers to share their stories.</p>
        
        <h3>Invest in Community Building</h3>
        <p>Social media isn't just a broadcasting platform—it's an opportunity to build relationships. Allocate time for engaging with your audience through comments, messages, and shares. This community-building approach often yields better results than purely promotional strategies and helps develop brand loyalty.</p>
        
        <h3>Optimize with Analytics</h3>
        <p>Use platform analytics to understand what's working and what isn't. Track engagement metrics, click-through rates, and conversions to refine your approach over time. Small businesses can't afford to waste resources on ineffective strategies, so let data guide your decisions.</p>
      `
    }
  ];

  const openModal = (blog) => {
    setCurrentBlog(blog);
    setModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest <span className="text-gradient">Insights</span></h2>
          <p className="section-subtitle">Stay updated with our latest thoughts on design, development, and digital marketing.</p>
        </div>
        
        <div className="blog-grid" data-animation="fade-up">
          {blogPosts.map(blog => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <span className="blog-category">{blog.category}</span>
                <h3 className="blog-title">{blog.title}</h3>
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  <span className="blog-author" dangerouslySetInnerHTML={{ __html: blog.author }}></span>
                </div>
                <button className="blog-link" onClick={() => openModal(blog)}>Read More <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Blog Modal */}
      {modalOpen && currentBlog && (
        <div id="blogModal" className="blog-modal active" onClick={(e) => {
          if (e.target.className === 'blog-modal active') {
            closeModal();
          }
        }}>
          <div className="blog-modal-content">
            <div className="blog-modal-header">
              <h2 className="modal-title">{currentBlog.title}</h2>
              <div className="modal-meta">
                <span className="modal-category">{currentBlog.category}</span>
                <span className="modal-date">{currentBlog.date}</span>
                <span className="modal-author" dangerouslySetInnerHTML={{ __html: currentBlog.author }}></span>
              </div>
              <button className="blog-modal-close" onClick={closeModal} title="Close">
                {/* X mark is created with CSS */}
              </button>
            </div>
            <div className="blog-modal-body">
              <div className="modal-featured-image">
                <img src={currentBlog.image} alt={currentBlog.title} />
              </div>
              <div className="modal-text" dangerouslySetInnerHTML={{ __html: currentBlog.content }}></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;