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
    title: "US warship cruising Red Sea shoots down attack drones fired from Yemen ",
    date: '23 Nov 2023',
    time: '10:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `A US warship in the Red Sea intercepted and shot down drones launched from Houthi-held territory in Yemen. The USS Thomas Hudner, a guided-missile destroyer, engaged "multiple one-way attack drones" according to the US Central Command, highlighting ongoing tensions in the region with Houthi rebels targeting Israel with missiles and drones. `,
    content: `A US warship cruising the Red Sea has shot down drones fired from Houthi-held territory in Yemen, according to the US Central Command. 

    The USS Thomas Hudner, a guided-missile destroyer, shot down “multiple one-way attack drones” launched on Thursday morning from Yemen’s Houthi-controlled areas, CENTCOM said in a post on X, formerly Twitter. 
    
    Yemen’s Houthi rebels have declared themselves part of the “axis of resistance” of Iran’s allies and launched a series of drones and missiles towards Israel since the start of the war in Gaza. 
    
    On Wednesday, Israel said it had intercepted a “cruise missile” heading for the south of the country, a shot claimed by the Houthi rebels. 
    
    The spokesperson for the Houthis’ armed wing, Yahya Saree, said such operations would continue “until the Israeli aggression against the Palestinian people in Gaza and the West Bank stops”. 
    
    The Houthis have also threatened to target Israeli shipping over the country’s war with the Palestinian group Hamas that rules Gaza. 
    
    Israel’s military on Sunday said the seizure was a “very grave incident of global consequence”, and a US military official said it was “a flagrant violation of international law”.`,
    image: '../photo21.jpg' // replace with the path to your image
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
