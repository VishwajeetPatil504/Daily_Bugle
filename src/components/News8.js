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
    title: "Elon Musk says X will donate ad revenue linked to war to hospitals in Israel and Gaza",
    date: '22 Nov 2023',
    time: '05:30 PM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `Elon Musk's social media platform X will donate advertising and subscription revenue to hospitals in Israel and Gaza amid the conflict. This decision follows major corporations pulling ads due to concerns about pro-Nazi content and hate speech on the platform, with Musk addressing accusations of promoting antisemitism..`,
    content: `US billionaire Elon Musk announced Tuesday (Nov 21) that his social media platform X will donate a share of its advertising and subscription revenue to hospitals both in Israel and war-torn Gaza.

    "X Corp will be donating all revenue from advertising and subscriptions associated with the war in Gaza to hospitals in Israel and the Red Cross/Crescent in Gaza," Musk wrote in a post on X.
    
    The announcement comes as Israel continues to pound terror infrastructure in Gaza, including hospitals where the Israeli forces say Hamas operatives have been hiding.
    
    Musk in another post provided details on how the funds will be wired to the Israeli and Gazan hospitals.
    
    "We will track how funds are spent and go through the Red Cross/Crescent. Better ideas are welcome. We should care about the innocent, regardless of race, creed, religion or anything else," he wrote.
    
    Musk took the decision after several big corporations including Apple, Disney and IBM pulled their ads off his X platform, accusing it of failing to contain pro-Nazi content and hate speech.
    
    Similar concerns were raised after some of the ads were shown right next to the alleged ‘antisemitic’ posts on X.
    
    Earlier, Musk faced allegations of himself promoting the antisemitic behaviour on X by supporting a conspiracy theory that suggests Jewish people "have been pushing the exact kind of dialectical hatred against whites that they claim to want people to stop using against them.”
    
    While quoting a post on X bearing the above message, Musk had said the user had "said the actual truth".
    
    The controversy caused several advertisers including Warner Bros., Paramount Global and Comcast to temporarily stop spending on the platform.
    
    The White House on Nov 17 also waded into the controversy, condemning Musk’s post and calling it an "abhorrent promotion of antisemitic and racist hate”.
    
    "We condemn this abhorrent promotion of anti-semitic and racist hate in the strongest terms, which runs against our core values as Americans," White House spokesperson Andrew Bates said in a statement.`,
    image: '../photo8.avif' // replace with the path to your image
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
