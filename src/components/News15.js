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
    title: "Uttarkashi tunnel collapse: NDRF shows how 41 stranded workers will be rescued",
    date: '24 Nov 2023',
    time: '10:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `The rescue operation in the Uttarkashi tunnel, where 41 workers were trapped due to a collapse on November 12, is progressing cautiously. The 9th pipe push faced a minor setback as a bent part of the tunnel lining caused vibrations, prompting reassessment. The trapped workers are reported safe, and communication has been established. A recent food shipment was dispatched, emphasizing ongoing efforts amid challenges in the rescue mission.`,
    content: `According to the official update, the initiation of pushing the 9th pipe began at 1:10 am on Friday, progressing an additional 1.8 meters. However, a minor vibration was detected, prompting the auger to be momentarily pushed back for a reassessment of the force to be applied. During this evaluation, the rescue team identified obstructions in the process. 

    "A bent part of forepole (pipe) from tunnel lining was struck in the auger assembly which led to vibration. The platform for the auger machine is strengthened using an accelerating agent for rapid hardening of concrete," the official bulletin said. 
    
    “The trapped workers are safe," the bulletin said, adding, “Modified communication system with wire connectivity has already been developed by State Disaster Response Force and through which clear communication is being made regularly. People inside have reported that they are safe." 
    
    The latest food shipment, comprising 200 pieces of roti, 12 litres of dal, and mixed vegetables, was dispatched at 6:30 pm on Thursday. 
    
    Also Read: Uttarkashi tunnel collapse: 'Chor-police, yoga', stranded workers struggle to alleviate stress 
    
    On November 12, a segment of the tunnel under construction, stretching from Silkyara to Barkot, suffered a collapse. Debris accumulated in a 60-meter section on the Silkyara side of the tunnel, resulting in the entrapment of 41 labourers. 
    
    The trapped workers find themselves confined within a 2-kilometre segment that is fully constructed, encompassing completed concrete work designed to ensure the safety of the labourers. `,
    image: '../photo15.jpg' // replace with the path to your image
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
