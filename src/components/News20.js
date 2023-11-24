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
    title: "Group follows 'shortcut' to Las Vegas on Google Map, ends up stranded in desert",
    date: '23 Nov 2023',
    time: '10:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `A group traveling from Las Vegas to Los Angeles faced a harrowing experience after Google Maps suggested a shortcut to avoid traffic, leading them into the Nevada Desert. The attempt to save time resulted in getting stuck on a dirt road, requiring a tow truck for rescue. The incident highlights the importance of caution and verification when following alternative navigation routes. `,
    content: `A group of people was heading home to Los Angeles from Las Vegas on November 19. As the journey progressed, the Google Map navigation system advised them to take a ‘shorter’ route to avoid traffic congestion ahead due to dust storms and thus save time. 

    Shelby Easler, her brother, and some others decided to follow the suggestion, thinking that the suggested route would be faster and safer. But it led to them ending up in the middle of the Nevada Desert.After getting stuck on the dirt road, they had to call a tow truck to pick up their car. An attempt to save 50 minutes gave them a "horrible experience" of a lifetime. 
    
    As they drove through the muddy path suggested by Google Maps, a truck driver who turned around told them that the road, as they went higher into the mountain, led nowhere. 
    
    Easler and others tried to contact the California Highway Patrol for help, but they were busy dealing with the dust storm emergency.The group then called a tow truck, which managed to reach their position and rescue them.She said, "In the future, I’ll stick to the road I know and double-check somewhere else if the route seems sketchy". `,
    image: '../photo20.jpg' // replace with the path to your image
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
