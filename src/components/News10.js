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
    title: "Black Friday Sales 2023: Max, Hulu, Paramount+ slash prices",
    date: '22 Nov 2023',
    time: '09:30 PM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `For Black Friday, streaming services Max, Hulu, and Paramount+ have substantially discounted their ad-supported plans. Max's ad-supported tier is reduced by 70% to $2.99 from $9.99, while Hulu offers its ad-supported service for 99 cents per month for up to a year, and Paramount+ provides a 67% discount on its "essential" tier, priced at $1.98 per month.`,
    content: `Max reportedly cut down its monthly price for the ad-supported tier by 70%, to $2.99, from its usual rate of $9.99.

    Max, Hulu and Paramount+ have significantly reduced the monthly price of their ad-supported streaming services for Black Friday. Max reportedly cut down its monthly price for the ad-supported tier by 70%, to $2.99, from its usual rate of $9.99.
    
    For new Max customers and those returning, the sale price had been available through Monday, November 20, via max.com. Roku, Google Play and AppleTV users could also avail the discount, as could new customers, via Amazon Fire. Also included in the price was the streamer’s B/R Sports, which includes livestreamed NBA, NHL and MLB games. The promotion is set to expire in three months, with the service getting back to its regular price of $9.99.
    
    Hulu, on the other hand, is offering its customers its ad-supported service for 99 cents per month for as long as a year, as opposed to Max’s six months. This is an 87% cut from the $7.99 price. For one year, new customers can add Disney+ for $2 per month.
    
    New subscribers can avail the deal, and so can returning subscribers who left the service at least one month back. However, subscribers who have a Disney+ Basic or Disney Bundle account are not eligible. The limited offer deal ends on Tuesday, November 21.
    
    Further, a 99-cent deal for Starz on Hulu will be available for six months. After that, the price will go up to $9.99. A Hulu base plan is required for this subscription.
    
    Paramount+ has a deal for a 67% discount. It has slashed the price of its “essential” tier to $1.98 per month, while it was previously $5.99. Paramount+ with Showtime will be available for $3.96, instead of the usual $11.99. The promotional prices are set to expire after three months.`,
    image: '../photo10.avif' // replace with the path to your image
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
