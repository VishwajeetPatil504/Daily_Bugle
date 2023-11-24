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
    title: "Israel approves 4-day ceasefire deal with Hamas for release of 50 hostages",
    date: '22 Nov 2023',
    time: '09:30 PM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `
    Israel and Hamas have agreed to a four-day ceasefire, the first pause in the ongoing conflict that began on October 7. The deal, mediated by Qatar with the assistance of US President Joe Biden, involves Israel stopping its bombardment in exchange for the release of 50 hostages held by Hamas, with the possibility of extending the lull for every 10 hostages freed. Israeli Prime Minister Benjamin Netanyahu stated that the war will continue until Hamas is eliminated, all hostages are freed, and Gaza can no longer threaten Israel.`,
    content: `Israel-Hamas 4-day ceasefire deal will be the first halt in the ongoing conflict that started on October 7.In the first truce between Israel and Hamas amid the war going on for over six weeks, the Israeli government on Wednesday approved a deal of ceasefire in which 50 women and children would be freed by Hamas. This, however, is not the end of the war, Israel Prime Minister Benjamin Netanyahu said before his war cabinet voted on the deal. The war will go on until Hamas is eliminated and all hostages are freed, Netanyahu said. "We are at war and we will continue the war until we achieve all our goals. To destroy Hamas, return all our hostages and ensure that no entity in Gaza can threaten Israel," Netanyahu said before the meeting.

    Israel will stop its bombardment in Gaza for four days in exchange for 50 hostages held captive by Hamas.(AP)
    Israel will stop its bombardment in Gaza for four days in exchange for 50 hostages held captive by Hamas.(AP)
    Officials from Qatar mediated the deal between Israel and Hamas. Netanyahu said US President Joe Biden had helped to reach the agreement so that it included more hostages and fewer concessions.
    
    1. This will be the first pause in the ongoing bombardment. Humanitarian aid will also get access into Gaza owing to this halt.
    
    2. In the four-day halt, 50 women and children would be freed by the Hamas.
    
    3. Though it was not clear when the truce would go into effect, the hostages could be freed starting on Thursday.
    
    4. The Israeli government said it would extend the lull by an additional day for every 10 hostages released.
    
    5. In the statement released by Hamas in which it welcomed the humanitarian truce, it said 150 Palestinians would be released from Israeli jails as part of the deal.
    
    Both sides confirmed the agreement following an all-night meeting. Netanyahu said it was a difficult decision but the right one. Netanyahu faced resistance from his war cabinet as some believed that the agreement would give "too much" to Hamas.
    
    About 240 people were taken hostage by the Hamas after they attacked Israel on October 7. The hostages were mainly people who attended the music festival that Hamas targetted. In addition to Israeli citizens, more than half the hostages held foreign and dual citizenship from some 40 countries including the U.S., Thailand, Britain, France, Argentina, Germany, Chile, Spain and Portugal, Israel's government has said.
    
    Hamas so far released four captives: US citizens Judith Raanan, 59, and her daughter, Natalie Raanan, 17, on October 20, citing "humanitarian reasons," and Israeli women Nurit Cooper, 79, and Yocheved Lifshitz, 85, on October 23.
    
    Israeli forces freed one hostage, Ori Megidish, a soldier on October 30 during their ground invasion. The Israeli military said earlier this month that it recovered the bodies of two hostages in Gaza City, including 19-year-old soldier Noa Marciano.`,
    image: '../photo9.avif' // replace with the path to your image
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
