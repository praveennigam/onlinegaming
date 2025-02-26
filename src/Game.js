import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { categories, games } from './data';
import "./App.css";

function Game() {
  const [selectedCategory, setSelectedCategory] = useState("All Games");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getGamesForCategory = (category) => {
    if (category === "All Games") {
      return Object.values(games).flat();
    }
    return games[category] || [];
  };

  const handleGameClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="navbar-title">
          <img 
            src="/logo1.png" 
            alt="Logo" 
            style={{ paddingTop:"10px", height: '50px', width: '50px', borderRadius: '50%', marginRight: '10px' }} 
          />
        </h1>
        <a href="https://t.me/imptip1999" target="_blank" rel="noopener noreferrer" className="telegram-icon">
          <FaTelegramPlane size={30} />
        </a>
      </nav>

      <header className="main-header">
        <div className="header-content">
          <h2 className="headline gradient-text">Welcome to the Ultimate Gaming Experience!</h2>
          <p className="description">
            Explore the most exciting games with amazing bonuses. Choose your category and dive into the action!
          </p>
        </div>
      </header>

      <section className="content-section" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.36)' }}>
        <div className="content-text text-bg" style={{ flex: 1, paddingRight: '20px' }}>
          <h3 className="gradient-text" style={{ fontSize: '24px', color: 'linear-gradient(45deg, #ff6b6b, #f8b400)' }}>
            Why Gambling Can Be an Exciting Escape
          </h3>
          <p className="gamep" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Gambling offers an exhilarating escape from the everyday grind, filled with the thrill of chance and risk. 
            Whether it's the rush of the roulette wheel or the strategy behind poker, the world of gambling offers high stakes excitement.
          </p>
          <p style={{
            fontSize: '12px', 
            color: "white",
            marginTop: '20px', 
            textAlign:"left",
            flexWrap:"wrap",
            padding: '10px', 
            backgroundColor: '#f39c12', 
            borderLeft: '5px solid #e74c3c', 
            borderRadius: '5px', 
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
            width: '100%',       
            display: 'block',    
            wordWrap: 'break-word'
          }}>
            <strong style={{ color: 'red' }}>Disclaimer:</strong>  
            I do not own or operate the app. This website is just to share my referral link. 
            The app and app logo and other materials belong to the app owners. I do not claim to own them in any way. 
            I am not responsible for any actions, outcomes, or consequences resulting from the use of this service. 
            <span style={{ fontWeight: 'bold', color: 'brown' }}>Gambling can be addictive.</span> 
            Please play responsibly and only within your financial limits. 
            If you or someone you know is struggling with gambling addiction, seek help immediately.
            There are many support organizations available to provide assistance.
          </p>
        </div>
        <div className="content-image" style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.1)", position: "relative" }}>
          <video className="gamevideo" style={{ height: "100%", borderRadius: "8px", opacity: 0.5, objectFit: "cover", width: "99%" }} autoPlay loop muted playsInline>
            <source src="https://videos.pexels.com/video-files/7607945/7607945-sd_640_360_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="category-section">
        <div className="category-title gradient-text">Explore Categories</div>
        <div className="cards-container">
          {["All Games", ...categories.map(category => category.name)].map((categoryName, index) => (
            <div
              key={index}
              className="category-card"
              style={{
                backgroundImage: `url(${categoryName === "All Games" ? 'https://images.pexels.com/photos/17471057/pexels-photo-17471057/free-photo-of-group-of-diverse-friends-playing-game-on-mobile-phone.jpeg?auto=compress&cs=tinysrgb&w=600' : categories.find(cat => cat.name === categoryName).image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handleCategoryClick(categoryName)}
            >
              <div className="card-overlay">
                <h3 className="card-title">{categoryName}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="games-section">
        <div className="games-title">
          <h2 className="gradient-text myh">{selectedCategory} Click & Download!</h2>
        </div>
        <div className="cards-container">
          {getGamesForCategory(selectedCategory).map((game, index) => (
            <div
              key={index}
              className="category-card"
              style={{
                backgroundImage: `url(${game.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handleGameClick(game.link)}
            >
              <div className="card-overlay">
                <h3 className="card-title">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="youtube-card-section">
        <div className="youtube-card">
          <div className="youtube-video-container">
            <iframe 
              src="https://www.youtube.com/embed/vcL223RQhro?si=u4FKqjA6KTgwXpY8" 
              title="Exciting Game Highlights!" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="youtube-video"
            ></iframe>
          </div>
          <div className="youtube-card-title">
            <h3 className="gradient-text">Exciting Game Highlights!</h3>
          </div>
          <div className="youtube-card-description">
            <p>Watch the most thrilling moments from our latest gaming adventures! 🚀🎮</p>
          </div>
        </div>
        <div className="youtube-card">
          <div className="youtube-video-container">
            <iframe 
              src="https://www.youtube.com/embed/vcL223RQhro?si=u4FKqjA6KTgwXpY8" 
              title="Exciting Game Highlights!" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="youtube-video"
            ></iframe>
          </div>
          <div className="youtube-card-title">
            <h3 className="gradient-text">Exciting Game Highlights!</h3>
          </div>
          <div className="youtube-card-description">
            <p>Watch the most thrilling moments from our latest gaming adventures! 🚀🎮</p>
          </div>
        </div>

        <div className="youtube-card">
          <div className="youtube-video-container">
            <iframe 
              src="https://www.youtube.com/embed/tF8_-iS29ww?si=RamJqrEyW3yrdAka" 
              title="YouTube Video 1" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="youtube-video"
            ></iframe>
          </div>
          <div className="youtube-card-title">
            <h3 className="gradient-text">Slots Game Tricks $ Tips!</h3>
          </div>
          <div className="youtube-card-description">
            <p>Subscribe for more amazing gaming videos and tips! 🎮</p>
          </div>
        </div>

        <div className="youtube-card">
          <div className="youtube-video-container">
            <iframe 
              src="https://www.youtube.com/embed/AmKzZEEFH3o?si=GDlaZ8gIuNmLNjgp" 
              title="Rummy Game" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="youtube-video"
            ></iframe>
          </div>
          <div className="youtube-card-title">
            <h3 className="gradient-text">Balloon Game Tricks $ Tips!</h3>
          </div>
          <div className="youtube-card-description">
            <p>Don't forget to subscribe for the latest updates on gaming! 🎮</p>
          </div>
        </div>

      </section>

      <section className="footer-section">
        <footer className="footer-content">
          <div className="footer-left">
            <span className="mysdsds">MoneyMaker</span>
            <span>© 2025 All rights reserved.</span>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Game;
