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
    title: "Anti-Islam, far-Right populist, Nupur Sharma supporter—Geert Wilders leads Netherlands’ largest party ",
    date: '24 Nov 2023',
    time: '09:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `Geert Wilders, the far-right leader of the Party for Freedom in the Netherlands, has emerged as the head of the largest party in the country, projected to win 37 seats, more than double its 2021 election count. Focused on anti-Islam and anti-EU sentiments, Wilders faces challenges in forming a government in the diverse Dutch parliamentary landscape, where at least 15 parties are predicted to secure representation. Despite his party's traditional stances, Wilders hinted at a willingness to compromise on certain issues for a potential coalition.`,
    content: `Geert Wilders, the far-Right, anti-Islam, anti-European Union political provocateur has emerged as the leader of the largest party in the Netherlands. By last count, the Party for Freedom led by Wilders was projected to win 37 seats in the 150-seat Dutch house of representatives — more than double the seats it won in the 2021 elections.According to the Dutch public broadcaster Nederlandse Omroep Stichting (NOS), Wilders’ party garnered 24,17,515 or 23.5 percent of the total votes cast during the elections. 

    “The Dutch voter has spoken,” Wilders said in his victory speech late Wednesday, adding, “Voters said, ‘We are sick of it. Sick to our stomachs,” as reported by the Associated Press. He also said that he will now focus on ending the “asylum tsunami” — a reference to the issue of migration that dominated his campaign and led to the fall of the previous Mark Rutte-led government.However, Wilders’ path to government is increasingly difficult in the fractious nature of Dutch parliamentary politics. The NOS predicts that at least 15 parties could win enough votes to have a member in the lower house. 
    
    The Labour-Green alliance led by Frans Timmermans, the former EU commissioner and Dutch minister of foreign affairs, finished second and is projected to win 25 seats in the house of representatives. 
    
     
    
    “I had to pinch my arm,” Wilders joked after the results started pouring in. The Party for Freedom has long argued for a referendum on the Netherlands’ membership of the EU, banning the Quran, taxing headscarves and ending immigration from Muslim countries. 
    
    However, Wilders indicated Wednesday that he was open to compromise on his anti-Islam position to enter government. He was reported by Politico as saying: “I understand very well that parties do not want to be in a government with a party that wants unconstitutional measures…We are not going to talk about mosques, Qurans and Islamic schools.” `,
    image: '../photo19.jpg' // replace with the path to your image
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
