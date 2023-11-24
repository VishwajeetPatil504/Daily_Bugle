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
    title: "Europe’s new Ariane 6 rocket completes key test after many delays",
    date: '24 Nov 2023',
    time: '11:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `The European-built Ariane 6 rocket, developed by Arianespace for the European Space Agency, successfully completed its first full-scale rehearsal, including a full firing of the core stage engine for seven minutes. The test, simulating a normal flight into space, utilized the Vulcain 2.1 engine, an evolution of the Ariane 5's engine, with improved performance and cost efficiency. `,
    content: `The European-built Ariane 6 rocket completed its important first full-scale rehearsal in preparation for its first test flight, announced the European Space Agency on Thursday. During the test, crews went through a complete launch countdown, followed by full firing of the rocket’s core stage engine for seven minutes. 

    The Ariane 6 rocket is developed by Arianespace, which is co-owned by Airbus and Safran, on behalf of the European Space Agency. 
    
    The engine-firing test reenacted how the Ariane 6 rocket’s core stage will fire during a normal flight into space. The rocket was strapped to the ground for takeoff, but during an actual launch, the main engine would shut down at the end of that time, and the core stage would separate from the upper stage. The upper stage would then take over propulsion for the test of the mission. 
    
    The Vulcain 2.1 engine on Ariane 6 burnt through nearly 150 tonnes of liquid hydrogen and liquid oxygen. It is an evolution of the Vulcain 2 engine which was used on the Ariane 5 rocket, which, according to the agency, is Europe’s most successful launch system yet. The upgraded engine has a simplified design to make it perform better while being cheaper to operate. 
    
    While the test was an important milestone, it belies the awkward situation of the European space program—the Ariane 5 system has been retired, and Ariane 6, which is supposed to be its replacement, is not yet ready. Even the smaller Vega C rocket is facing issues and faced a failure during its second-ever launch in March this year. `,
    image: '../photo24.jpg' // replace with the path to your image
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
