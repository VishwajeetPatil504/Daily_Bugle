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
    title: "Violent Clashes In Dublin After Children Stabbed Outside School",
    date: '24 Nov 2023',
    time: '11:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `Violent clashes erupted in Dublin as protesters clashed with police, torched vehicles, and looted shops following a knife attack outside a school that left three young children injured. Social media rumors about the assailant's nationality fueled unrest, prompting police chief Drew Harris to blame a "complete lunatic faction driven by far-right ideology."`,
    content: `Protesters on Thursday fought running battles with police, torched vehicles and looted shops in Dublin, after three young children were injured in a knife attack outside a school.Police in riot gear stood guard on the streets in the Irish capital as crowds taunted them with chants and set off fireworks. Near O'Connell Bridge, over the River Liffey, flames rose from a torched car and bus, while crowds broke into stores and looted one of the city's main shopping streets.The unrest -- the worst in Dublin in years -- came after a five-year-old girl sustained serious injuries in a suspected stabbing in Parnell Square East, north central Dublin.Two other children and two adults -- a woman and the suspected perpetrator of the attack -- were taken to hospital after the incident around 1:30 pm (1330 GMT). 

    Rumours on social media about the nationality of the assailant, who police only described as a man in his fifties, helped fuel unrest following the attack.Police chief Drew Harris blamed a "complete lunatic faction driven by far-right ideology" and warned against "misinformation".  
    
    Some protesters carried signs reading "Irish Lives Matter" and waved Irish flags through a neighbourhood home to a large immigrant community.Ireland has been facing a chronic housing crisis, with the government estimating that there is a deficit of hundreds of thousands of homes for the general population. 
    
    Widespread dissatisfaction has fed into a backlash against asylum seekers and refugees, and far-right figures have promoted anti-immigration sentiment at rallies and on social media with claims that "Ireland is full".`,
    image: '../photo18.jpg' // replace with the path to your image
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
