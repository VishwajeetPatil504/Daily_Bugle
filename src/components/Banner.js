// Banner.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import News8 from './News8';
import News9 from './News9';
import News10 from './News10';
import News15 from './News15';
import News16 from './News16';
import News17 from './News17';
import News18 from './News18';
import News19 from './News19';
import News20 from './News20';
import News21 from './News21';
import News22 from './News22';
import News23 from './News23';
import News24 from './News24';
import './Banner.css';

function Banner() {
  // You can fetch the latest news and display it here
  const latestNews = "Breaking News: [Latest News Headline]";
  const newsItems = [
    "Elon Musk's X Corp to donate revenue linked with war to Israeli, Gazan hospitals",
    "Israel approves 4-day ceasefire deal with Hamas for release of 50 hostages",
    "Black Friday Sales 2023: Max, Hulu, Paramount+ slash prices",
    "Uttarkashi tunnel collapse: NDRF shows how 41 stranded workers will be rescued ",
    "How Kim's Daughter, North Korea Scientists Celebrated Spy Satellite Launch ",
    "Royal Enfield Himalayan 450 price announcement today",
    "Violent Clashes In Dublin After Children Stabbed Outside School",
    "Anti-Islam, far-Right populist, Nupur Sharma supporter—Geert Wilders leads Netherlands’ largest party ",
    "Group follows 'shortcut' to Las Vegas on Google Map, ends up stranded in desert ",
    "US warship cruising Red Sea shoots down attack drones fired from Yemen ",
    "Rafale Fighters: Another Russian Ally Looks For French Warplanes As Many Nations ‘Dump’ Russian Jets ",
    "Qatar accepts India's appeal against death penalty to 8 ex-Navy personnel: Sources",
    "Europe’s new Ariane 6 rocket completes key test after many delays"
    // Add more news items as needed
  ];

  return (
    <div className="banner-container">
      <div className="banner">
        <h2>{latestNews}</h2>
        <div className="card-container">
          {newsItems.map((news, index) => (
            <Link
              to={`/news${index + 8}`}
              key={index}
              className="card-link"
            >
              <div className="card">
                <p>{news}</p>
              </div>
            </Link>
          ))}
        </div>

        <Routes>
          <Route path="/news8" element={<News8 />} />
          <Route path="/news9" element={<News9 />} />
          <Route path="/news10" element={<News10/>}/>
          <Route path="/news15" element={<News15/>}/>
          <Route path="/news16" element={<News16/>}/>
          <Route path="/news17" element={<News17/>}/>
          <Route path="/news18" element={<News18/>}/>
          <Route path="/news19" element={<News19/>}/>
          <Route path="/news20" element={<News20/>}/>
          <Route path="/news21" element={<News21/>}/>
          <Route path="/news22" element={<News22/>}/>
          <Route path="/news23" element={<News23/>}/>
          <Route path="/news24" element={<News24/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default Banner;
