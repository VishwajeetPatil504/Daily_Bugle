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
    title: "Qatar accepts India's appeal against death penalty to 8 ex-Navy personnel: Sources",
    date: '24 Nov 2023',
    time: '11:30 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `A Qatari court has accepted the appeal filed by the Indian government in the case of eight ex-Indian Navy personnel sentenced to death by Qatar's Court of First Instance last month. The court is studying the appeal, and the next hearing is expected soon. The individuals, detained in August 2022 on suspicion of working as spies for Israel, were employed by the private company Al Dahra Global Technologies and Consultancy Services.`,
    content: `A Qatari court on Thursday accepted the appeal filed by the Indian government in connection with the death penalty given to eight ex-Indian Navy personnel by a court last month.The court said that they are studying the appeal and the next hearing is expected soon, sources told India Today. 

    On October 26, Qatar's Court of First Instance awarded the death sentence to the eight men, who used to work with private company Al Dahra Global Technologies and Consultancy Services and were arrested in August 2022. 
    
    However, neither the Qatari authorities nor New Delhi made the charges against the Indian nationals public. When the news of death penalty emerged, India had described the ruling as "deeply" shocking and vowed to explore all legal options in the case. 
    
    "I would again urge everyone not to engage in speculation considering the sensitive nature of the case," he said. 
    
    In August 2022, Qatar detained eight former Indian Navy officers on suspicion of working as spies for Israel while they were employed by a company based in the Middle Eastern nation. The former officers — Captain Navtej Singh Gill, Captain Birendra Kumar Verma, Captain Saurabh Vasisht, Commander Amit Nagpal, Commander Purnendu Tiwari, Commander Sugunakar Pakala, Commander Sanjeev Gupta, and Sailor Ragesh — were arrested by Qatar intelligence agency from Doha on August 30, 2022. `,
    image: '../photo23.jpg' // replace with the path to your image
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
