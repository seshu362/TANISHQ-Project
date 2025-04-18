// App.js
import React from "react";
import "./App.css";
import {
  FaSearch,
  FaMicrophone,
  FaCamera,
  FaStore,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744915672/Screenshot_2025-04-18_001514_ikcfvg.png"
              alt="Tanishq Logo"
            />
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
            />
            <div className="search-icons">
              <span className="icon">
                <FaCamera />
              </span>
              <span className="icon">
                <FaMicrophone />
              </span>
              <span className="icon">
                <FaSearch />
              </span>
            </div>
          </div>

          <div className="nav-menu">
            <div className="nav-item">
              <span className="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3H6C5.17 3 4.46 3.5 4.16 4.22L2.14 8.27C2.05 8.5 2 8.74 2 9V10C2 10.55 2.45 11 3 11H21C21.55 11 22 10.55 22 10V9C22 8.74 21.95 8.5 21.86 8.27L19.84 4.22C19.54 3.5 18.83 3 18 3Z"
                    fill="#932729"
                  />
                  <path
                    d="M7 11V20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20V11H7Z"
                    fill="#932729"
                  />
                </svg>
              </span>
              <span>DAILYWEAR</span>
            </div>
            <div className="nav-item">
              <span className="icon">
                <FaStore />
              </span>
              <span>STORES</span>
            </div>
            <div className="nav-item">
              <span className="icon">
                <FaUser />
              </span>
              <span>ACCOUNT</span>
            </div>
            <div className="nav-item">
              <span className="icon">
                <FaHeart />
              </span>
              <span>WISHLIST</span>
            </div>
            <div className="nav-item cart">
              <span className="icon">
                <FaShoppingCart />
              </span>
              <span className="cart-badge">0</span>
              <span>CART</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <h2 className="tanishq-diamonds">TANISHQ DIAMONDS</h2>
          <h1 className="hero-heading">
            Where every Natural Diamond
            <br />
            tells a story
          </h1>

          <div className="play-button">
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744915884/Group_1171282047_zufdp7.png"
              alt="Play Button"
            />
          </div>
        </div>
      </main>

      <section className="diamond-showcase">
        <div className="showcase-tagline">
          <h2>Real is Rare. Real is Diamond</h2>
          <p>A COMPANION TO SPECIAL MOMENTS</p>
        </div>

        <div className="image-slider">
          <div className="slider-images">
            <div className="slider-image left">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744917230/Rectangle_34631096_ugngga.png"
                alt="Diamond Jewelry"
              />
              <button className="arrow-button left">
                <FaArrowLeft />
              </button>
            </div>

            <div className="slider-image center">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744917200/Rectangle_34630962_ry9osk.png"
                alt="Diamond Ring"
              />
            </div>

            <div className="slider-image right">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744917199/Rectangle_34631095_mwznyi.png"
                alt="Diamond Bracelet"
              />
              <button className="arrow-button right">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="finger-rings-section">
          <h3>Finger Rings</h3>
          <div className="ring-categories">
            <div className="ring-category">
              <img
                className="ring-image"
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744917331/502889FCIAI02_1-removebg-preview_1_jqlcgr.png"
                alt="Engagement Rings"
              />
              <p>
                Engagement
                <br />
                Rings
              </p>
            </div>

            <div className="ring-category">
              <img
                className="ring-image"
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744917331/502889FCIAI02_1-removebg-preview_3_wrdhz0.png"
                alt="Rings For Him"
              />
              <p>
                Rings
                <br />
                For Him
              </p>
            </div>

            <div className="ring-category">
              <img
                className="ring-image"
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744917331/image_53860_kzutwd.png"
                alt="Platinum Rings"
              />
              <p>
                Platinum
                <br />
                Rings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="diamond-banner-container">
        <div className="diamond-banner-content-left">
          <h3>10,000+</h3>
          <p>Varieties and designs to choose from.</p>
        </div>

        <div className="diamond-banner-image-left">
          <img
            src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744919516/pngegg_1_1_ct3apd.png"
            alt="Diamond Jewelry"
          />
        </div>

        <div className="diamond-banner-content-right">
          <h3>15k onwards</h3>
          <p>High quality diamonds for every occasion</p>
        </div>

        <div className="diamond-banner-image-right">
          <img
            className="diamond-banner-image-large"
            src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744919516/pngegg_1_2_befi24.png"
            alt="Diamond Collection"
          />
        </div>
      </section>

      <div className="banner-container">
        <div className="header-content">
          <p className="companion-text">A COMPANION FOR EVERY OCCASION</p>
          <h1 className="main-heading">Captivate With Diamond Jewellery</h1>
        </div>

        <div className="jewelry-gallery">
          <div className="jewelry-item">
            <div className="image-container first-item">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744921490/Frame_20_vstnll.png"
                alt="Solitaire Diamond Ring"
              />
            </div>
            <div className="item-details">
              <div className="title-row">
                <h2>
                  SOLITAIRES <span className="count">(255)</span>
                </h2>
                <BsArrowUpRight className="arrow-icon" />
              </div>
              <p className="description">
                A captivating statement of elegance and sophistication
              </p>
            </div>
          </div>

        
          <div className="jewelry-item">
            <div className="image-container middle-item">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744921490/Rectangle_450_cglrdy.png"
                alt="High Value Diamond Necklace"
              />

              <div className="drag-indicator">
                <div className="drag-circle">
                  <span className="drag-arrow">&lt;</span>
                  <span className="drag-text">DRAG</span>
                  <span className="drag-arrow">&gt;</span>
                </div>
              </div>
            </div>
            <div className="item-details">
              <div className="title-row">
                <h2>
                  HIGH VALUE <span className="count">(320)</span>
                </h2>
                <BsArrowUpRight className="arrow-icon" />
              </div>
              <p className="description">
                The epitome of luxury and refinement
              </p>
            </div>
          </div>

  
          <div className="jewelry-item">
            <div className="image-container">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744921490/Rectangle_451_ay1y71.png"
                alt="Everyday Diamond Earrings"
              />
            </div>
            <div className="item-details">
              <div className="title-row">
                <h2>
                  EVERYDAY DIAMONDS <span className="count">(449)</span>
                </h2>
                <BsArrowUpRight className="arrow-icon" />
              </div>
              <p className="description">
                Styling Diamond Jewellery for effortless Glamour
              </p>
            </div>
          </div>
        </div>

        <div className="pagination-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <div className="heritage-showcase-container">
      
        <div className="heritage-showcase-header">
          <div className="heritage-showcase-title">
            <span className="heritage-showcase-title-white">HERITAGE</span>
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744924737/image-removebg-preview_2_1_ifn4dq.png"
              alt="Diamond Ring"
              className="heritage-showcase-ring-image"
            />
            <span className="heritage-showcase-title-blue">SINCE 1999</span>
          </div>
        </div>

        <div className="heritage-showcase-subheading">
          <h2>A pristine solitaire for every new chapter</h2>
          <p>
            Every Tanishq diamond shines at{" "}
            <span className="heritage-showcase-highlight">30 cents</span> or
            above
            <br />
            setting the benchmark for ages to come.
          </p>
        </div>

        <div className="heritage-showcase-categories">
          <img
            src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744924412/Group_1171282091_hdidvl.png"
            alt="Diamond Pendant"
            className="heritage-showcase-category-image"
          />

          <img
            src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744924412/Group_1171282092_a53vbk.png"
            alt="Diamond Bracelet"
            className="heritage-showcase-category-image"
          />

          <img
            src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744924411/Group_1171282089_wfvdyj.png"
            alt="Diamond Ring"
            className="heritage-showcase-category-image"
          />
        </div>
      </div>

      <div className="showcase-container">
        <div className="rings-showcase">
          <div className="ring-item">
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744925540/Group_1171282080_ogeycl.png"
              alt="Classic Solitaire Ring"
              className="ring-image"
            />
          </div>

          <div className="ring-item">
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744925540/Group_1171282081_p3riqx.png"
              alt="Celeste Solitaire Ring"
              className="ring-image"
            />
          </div>
        </div>

        <div className="curved-shadow"></div>
      </div>

      <div className="app-container">
        <div className="content-wrapper">
          <div className="header-section">
            <p className="eternity-text">A PIECE OF ETERNITY</p>
            <h1 className="diamonds-text">Diamonds as special as you</h1>
          </div>

          <div className="content-container">
            <div className="text-section">
              <div className="divider"></div>

              <h2 className="rhythms-text">Rhythms of Rain</h2>
              <p className="description-text">
                Within the delicate embrace of time-worn elegance, the Tales of
                Mystique Collection weaves a spellbinding tapestry. Each
                luminescent ornament holds secrets whispered across centuries.
              </p>

              <button className="shop-button">
                SHOP NOW
                <span className="arrow">→</span>
              </button>

              <div className="product-thumbnails">
                <div className="thumbnail-wrapper">
                  <img
                    src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744926570/Frame_1261158357_i8z3cr.png"
                    alt="Blue earrings"
                    className="thumbnail"
                  />
                </div>
                <div className="thumbnail-wrapper">
                  <img
                    src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744926569/Frame_1261158358_vhugiu.png"
                    alt="Diamond ring"
                    className="thumbnail"
                  />
                </div>
                <div className="thumbnail-wrapper">
                  <img
                    src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744928422/Screenshot_2025-04-18_035005_eacrtp.png"
                    alt="Green emerald earrings"
                    className="thumbnail thumbnail-3"
                  />
                </div>
              </div>

              <div className="diamond-badge">
                <img
                  src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744927346/Screenshot_2025-04-18_033207_mszra7.png"
                  alt="100% Natural Diamonds"
                  className="diamond-icon"
                />
                <span className="diamond-text">100% Natural Diamonds</span>
              </div>
            </div>

            <div className="image-section">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744926697/Mask_group_a8e3wk.png"
                alt="Woman wearing diamond jewelry"
                className="main-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="custom-curve-container">
        <div className="custom-curved-shape"></div>
        <div className="bubble">
          <img
            src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744928657/Group_1171282087_fb1h7w.png"
            alt="Gold and silver engagement rings"
            className="custom-rings-image"
          />
        </div>
        <div className="custom-content-container">
          <div className="custom-text-container">
            <h1 className="custom-main-heading">
              Pop the question when it rings true.
            </h1>
            <p className="custom-sub-heading">SYMBOL OF AN ETERNAL BOND</p>
            <button className="custom-shop-button">
              BROWSE ENGAGEMENT RINGS
              <span className="custom-arrow">→</span>
            </button>
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744928644/image_53872_qgopsb.png"
              alt="Happy couple"
              className="custom-couple-image"
            />
          </div>
        </div>
      </div>

      <div className="sparkle-page">
        <header className="sparkle-header">
          <h1 className="sparkle-title">
            Adorn yourself with unmatched brilliance
          </h1>
          <p className="sparkle-subtitle">A SYMBOL OF AN ETERNAL BOND</p>
        </header>

        <div className="sparkle-gallery">
          <div className="gallery-card">
            <div className="gallery-img-box">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744956175/Frame_20_oiqjqn.png"
                alt="Diamond ring on a hand"
                className="gallery-img"
              />
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-img-box">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744956330/Frame_19_kpflgh.png"
                alt="Diamond necklace on a woman"
                className="gallery-img"
              />
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-img-box">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744956175/Frame_18_cayewt.png"
                alt="Diamond earring on a woman"
                className="gallery-img"
              />
            </div>
          </div>
        </div>

        <div className="cta-container">
          <button className="custom-shop-button">
            SHOP EVERYDAY JEWELLERY
            <span className="custom-arrow">→</span>
          </button>
        </div>
      </div>

      <div className="bs-page">
        <header className="bs-header">
          <h1 className="bs-main-title">Stories from Tanishq Brides</h1>
          <p className="bs-subtitle">UNVEILING UNFORGETTABLE JOURNEYS</p>
        </header>

        <div className="bs-video-wrapper">
          <img
            src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744957302/Frame_1261158370_omz681.png"
            alt="Sakshi Sindwani with her Mother wearing jewelry"
            className="bs-video-thumb"
          />
          <div className="bs-play-button">
            <div className="bs-play-icon"></div>
          </div>
        </div>

        <div className="bs-slider-indicators">
          <div className="bs-indicator bs-active"></div>
          <div className="bs-indicator"></div>
          <div className="bs-indicator"></div>
        </div>

        <div className="bs-story-content">
          <h2 className="bs-story-title">
            Sakshi Sindwani's Diamond Story with her Mother
          </h2>
          <p className="bs-story-desc">
            This season, our collection embraces a refined sensibility. Discover
            delicate floral motifs crafted from precious gemstones, or explore
            lightweight designs in pearl and wood, perfect for effortless summer
            chic. We invite you to explore a curation that celebrates tradition
            with a touch of modern grace.
          </p>
        </div>

        <div className="bs-cta">
          <button className="bs-shop-button">
            DISCOVER COLLECTION
            <span className="bs-arrow">→</span>
          </button>
        </div>
      </div>

      <div className="parade-diamond-banner">
        <div className="banner-content">
          <h1 className="banner-title">Join the Style Parade!</h1>
          <p className="banner-subtitle">
            See what our famous influencers chose for their weddings
          </p>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/tanishqjewellery" className="social-icon" rel="noopener noreferrer" target="_blank">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com/tanishqllery" className="social-icon" rel="noopener noreferrer" target="_blank">
            <FaFacebookF size={18} />
          </a>
        </div>
      </div>

      <div className="spotlight-container">
        <div className="spotlight-image-container">
          <img
            src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744958747/Frame_1261158373_j5qipr.png"
            alt="Woman in green dress wearing jewelry"
            className="spotlight-image"
          />
          <div className="spotlight-overlay">
            <div className="divider"></div>
            <h2 className="spotlight-title">What's Stealing the Spotlight</h2>
            <p className="spotlight-subtitle">TRENDING TREASURES YOU NEED</p>
          </div>
        </div>
      </div>

      <div className="jewelry-showcase-container">
        <div className="showcase-product-grid">
          <div className="showcase-product-item">
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744959193/Frame_19_1_nu24fv.png"
              alt="Floral Design Kundan & Diamond Earrings"
              className="showcase-product-image"
            />
          </div>

          <div className="showcase-product-item">
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744959191/Frame_1261158379_btxxyk.png"
              alt="Floral Design Kundan & Diamond Earrings"
              className="showcase-product-image"
            />
          </div>

          <div className="showcase-product-item">
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744959190/Frame_1261158380_l38sfz.png"
              alt="Floral Design Kundan & Diamond Earrings"
              className="showcase-product-image"
            />
          </div>
        </div>
      </div>

      <div className="bridal-container">
        <div className="bridal-header">
          <h1 className="bridal-title">
            Brides who Sparkled with our
            <br />
            Dazzling Diamonds
          </h1>
          <p className="bridal-subtitle">GLITTERING STORIES FROM TANISHQ</p>
        </div>

        <div className="bridal-content">
          <div className="bridal-left">
            <div className="bridal-image-container">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744959833/Screenshot_2024-05-29_at_2.50_1_sb9dtf.png"
                alt="Bride wearing diamond jewelry"
                className="bridal-image"
              />
            </div>
            <p className="bridal-credit">Image via Yolo Entertainments</p>
            <p className="bridal-advice">
              If you are looking to wear multiple pieces instead of
              <br />
              one, all we would recommend is layering them!
            </p>
          </div>

          <div className="bridal-right">
            <div className="jewelry-wrapper">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744959825/Frame_1261158388_xfgiq1.png"
                alt="Diamond and Emerald Bridal Set"
                className="jewelry-img"
              />
            </div>

            <div className="jewelry-divider"></div>

            <div className="jewelry-info">
              <div className="jewelry-title-container">
                <h3 className="jewelry-title">
                  Diamond and Emerald Bridal Set
                </h3>
                <button className="jewelry-heart-button">
                  <FaRegHeart size={20} />
                </button>
              </div>
              <p className="jewelry-pieces">5 Piece set</p>
            </div>

            <div className="brand-info">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744959824/path44_us9a4r.png"
                alt="Tanishq Logo"
                className="brand-logo-img"
              />
              <p className="brand-description">
                Diamonds are forever! Investing in diamond jewelry is an
                absolute no-brainer. Not only does it look stunning, but it also
                complements every kind of look.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-button-wrapper">
          <button className="custom-shop-button">
            VIEW ALL BRIDAL SETS <span className="custom-arrow">→</span>
          </button>
        </div>
      </div>

      <div className="jewelry-page">
        <div className="banner-container">
          <img
            src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744961812/BANNER_vytcip.png"
            alt="Luxury Diamond Jewelry"
            className="banner-image"
          />
        </div>
      </div>

      <div className="featured-articles">
        <div className="header">
          <div className="title-area">
            <h1 className="title">Featured Articles</h1>
            <p className="subtitle">READ MORE ABOUT THE TANISHQ JOURNEY</p>
          </div>

          <div className="navigation">
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744962610/Nav_Arrows_jbnbmy.png"
              alt="Previous"
              className="nav-arrow"
            />
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744962607/Nav_Arrows_1_gcszuz.png"
              alt="Next"
              className="nav-arrow"
            />
          </div>
        </div>

        <div className="articles-container">

          <div className="article-card main-article">
            <div className="article-image-container main-image-container">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744962474/Image_halpch.png"
                alt="Jewellery design process"
                className="article-image"
              />
            </div>
            <div className="article-content">
              <h2 className="article-title main-title">
                Evolve Your Styling With Traditional Indian Jewellery
              </h2>
              <p className="article-description">
                It encompasses various stages, from the initial inspiration to
                the final creation, and often involves a deep understanding of
                materials, techniques, and artistic vision.
              </p>
              <div className="article-meta">
                <div className="meta-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6667 1.33333V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.33333 1.33333V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 6.66667H14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>20 April, 2022</span>
                </div>
                <div className="meta-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 4.66667V8L10 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>10 Mins</span>
                </div>
              </div>
            </div>
          </div>

          <div className="article-card side-article">
            <div className="article-image-container side-image-container">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1744962471/Image_1_u7zaft.png"
                alt="Traditional Indian jewellery design"
                className="article-image"
              />
            </div>
            <div className="article-content side-content">
              <h2 className="article-title side-title">
                Evolve Your Styling With Traditional Indian Jewellery
              </h2>
              <div className="article-meta">
                <div className="meta-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6667 1.33333V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.33333 1.33333V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 6.66667H14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>20 April, 2022</span>
                </div>
                <div className="meta-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 4.66667V8L10 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>10 Mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
