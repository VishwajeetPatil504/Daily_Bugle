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
    title: "Royal Enfield Himalayan 450 price announcement today! ",
    date: '24 Nov 2023',
    time: '10:30 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `Royal Enfield unveils the prices for its highly-anticipated adventure-touring motorcycle, the Himalayan 450, at Motoverse 2023 in Goa. With three variants and distinct color schemes, the base model is expected to start around Rs 2.50 lakh, offering competition to bikes like KTM 390 Adventure and BMW G310 GS.`,
    content: `Royal Enfield will finally reveal the prices of the new Himalayan 450 in India at the ongoing Motoverse 2023 in Goa. The bookings for the highly-awaited adventure-touring motorcycle have already commenced on the brand’s website. 

    Now, the Royal Enfield Himalayan 450 is available in three variants- Base, Pass and Summit and has different colour schemes for each version. We expect the motorcycle to come with a starting price of around Rs 2.50 lakh to Rs 2.60 lakh for the base variant. The Pass and Summit versions of the Himalayan 450 could demand an additional Rs 12,000 to Rs 20,000 over the starting price. However, even the top-spec variant will be priced under Rs 3 lakh. 
    
     
    
    - Could start from Rs 2.50 lakh 
    
    - Available in three variants 
    
    - Competes against KTM 390 Adventure, BMW G310 GS 
    
     
    
    Powering the new Himalayan 450 is Royal Enfield’s first liquid-cooled engine that is capable of churning out 40bhp and 40Nm. It comes mated to a six-speed gearbox and an assist and slipper clutch as well. Weighing in at 196kg, the Royal Enfield Himalayan 450 is lighter than the outgoing Himalayan 411 on paper. Well, it even comes with better features like full-LED lighting, TFT screen integrated with Google Maps navigation. The list also includes switachable ABS and ride-by-wire throttle. 
    
    The new Himalayan 450 will have quite some competition like the BMW G310 GS, KTM 390 Adventure and the KTM 250 Adventure as well. `,
    image: '../photo17.jpg' // replace with the path to your image
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
