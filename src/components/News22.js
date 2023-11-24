import React from 'react';
import './News.css'; // Import the CSS file
import Banner from './Banner';

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <hr className="separator" />
      <h2>{article.title}</h2>
      <div className="overview"><b>Overview:</b> {article.overview}</div>
      <div className="article-meta">
        <span className="date-time">{article.date} | {article.time}</span>
        <span className="publication">{article.publication}</span>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
};

// Define your main App component
const App = () => {
  // Sample article data
  const article = {
    title: "Rafale Fighters: Another Russian Ally Looks For French Warplanes As Many Nations ‘Dump’ Russian Jets ",
    date: '24 Nov 2023',
    time: '11:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `Uzbekistan has reportedly expressed interest in acquiring French Rafale fighter jets, marking a significant diplomatic shift from its traditional reliance on Russian military support. The desire for French aircraft was discussed during French President Emmanuel Macron's visit, where a "strategic partnership" between France and Uzbekistan was announced. `,
    content: `According to the French industry-specific portal Intelligence Online, citing French governmental sources, Tashkent expressed its desire for French aircraft during French President Emmanuel Macron’s visit to the country on November 2, 2023.  

    During President Macron’s visit, discussions between the two countries expanded beyond specific projects in agriculture and uranium. The French President announced the development of a “strategic partnership” between France and Uzbekistan.  
    
    While the exact details of this strategic partnership were not elaborated, in Uzbekistan, the term “strategic” typically denotes the highest level of partnership with another country.  
    
    However, it seems that discussions during this diplomatic exchange included the potential procurement of Rafale fighter jets. However, the specific terms and funding arrangements for this aircraft acquisition remain undisclosed.  
    
    Nevertheless, this reported interest from Uzbekistan represents a significant diplomatic departure, considering the country’s historical alignment with and reliance on Russian military support.  
    
    Uzbekistan’s pursuit of the Rafale fighter jets aligns with its broader goal of modernizing its military capabilities, particularly its extensive fleet of combat aircraft sourced from Russia.  
    
    As of the latest data, the Uzbekistan Air Force is armed with 38 MiG-29 fighters, 20 Su-27 fighters, and 20 Su-25 ground support aircraft, all of which are of Russian origin. In 2019, the country submitted a request to the Russian Federation for the modernization of its fleet of MiG-29 fighters. `,
    image: '../photo22.jpg' // replace with the path to your image
  };

  return (
    <div className="App">
      <NewsArticle article={article} />
      <div className="banner-container">
          <Banner /> {/* Include the Banner component here */}
      </div>
    </div>
  );
};

export default App;
