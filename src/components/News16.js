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
    title: "How Kim's Daughter, North Korea Scientists Celebrated Spy Satellite Launch ",
    date: '24 Nov 2023',
    time: '11:30 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `North Korea marks the deployment of a new spy satellite with televised celebrations and banquets, featuring T-shirts with the logo of the National Aerospace Technology Administration (NATA). Leader Kim Jong Un's inclusion of his daughter, around 10 years old, in missile tests underscores the continuity of the family dynasty's rule, emphasizing the nation's reliance on nuclear weapons for survival.`,
    content: `Kim Jong Un has also brought along his daughter to missile tests, signaling there is another generation of the family dynasty that has ruled the country since the Cold War 

    North Korea celebrated the deployment of its new spy satellite with breathless displays on state television, a banquet with rocket scientists and space agency T-shirts - including one prominently worn by leader Kim Jong Un's daughter. 
    
    While the celebratory broadcasts and banquets have been a staple of the state's propaganda apparatus, the T-shirts were a new twist. Scores of technicians from the National Aerospace Technology Administration and Kim's daughter, thought to be about 10 years old, wore one of the white, blue and red shirts that bore the logo of NATA. 
    
    While Kim has continued propaganda staples of appearing with senior cadres, top military officials and soldiers, one of the new twists of his leadership has been to celebrate young scientists working on the state's nuclear, missile and space programs. 
    
    He has also brought along his daughter to missile tests, signaling there is another generation of the family dynasty that has ruled the country since the Cold War and it will depend on nuclear weapons for its survival.`,
    image: '../photo16.jpg' // replace with the path to your image
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
