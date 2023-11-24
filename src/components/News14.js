import React from 'react';
import './News.css'; // Import the CSS file
import Banner from './Banner';

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <hr className="separator" />
      <h2>{article.title}</h2>
      <div className="overview"> {article.overview}</div>
      <div className="article-meta">
        <span className="date-time">{article.date} | {article.time}</span>
        <span className="publication">{article.publication}</span>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <p>{article.content1}</p>
      <b><h3>What was the Balfour Declaration?</h3></b>
      <p>{article.content2}</p>
      <b><h3>What happened during the 1930s?</h3></b>
      <p>{article.content3}</p>
      <img src={article.image1} alt={article.title} className="article-image" />
      <b><h3>What was the UN partition plan?</h3></b>
      <p>{article.content4}</p>
      <img src={article.image2} alt={article.title} className="article-image" />

    </div>
  );
};

// Define your main App component
const App = () => {
  // Sample article data
  const article = {
    title: "What’s the Israel-Palestine conflict about?",
    date: '04 Nov 2023',
    time: '11:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `It’s killed tens of thousands of people and displaced millions. And its future lies in its past. We break it down.`,
    content1: `The Israeli-Palestinian conflict has claimed tens of thousands of lives and displaced many millions of people and has its roots in a colonial act carried out more than a century ago.

    With Israel declaring war on the Gaza Strip after an unprecedented attack by the armed Palestinian group Hamas on Saturday, the world’s eyes are again sharply focused on what might come next.
    Hamas fighters have killed more than 800 Israelis in assaults on multiple towns in southern Israel. In response, Israel has launched a bombing campaign in the Gaza Strip, killing more than 500 Palestinians. It has mobilised troops along the Gaza border, apparently in preparation for a ground attack. And on Monday, it announced a “total blockade” of the Gaza Strip, stopping the supply of food, fuel and other essential commodities to the already besieged enclave in an act that under international law amounts to a war crime.

    But what unfolds in the coming days and weeks has its seed in history.

    For decades, Western media outlets, academics, military experts and world leaders have described the Israeli-Palestinian conflict as intractable, complicated and deadlocked.`,
    content2: `More than 100 years ago, on November 2, 1917, Britain’s then-foreign secretary, Arthur Balfour, wrote a letter addressed to Lionel Walter Rothschild, a figurehead of the British Jewish community.
    The letter was short – just 67 words – but its contents had a seismic effect on Palestine that is still felt to this day.
    It committed the British government to “the establishment in Palestine of a national home for the Jewish people” and to facilitating “the achievement of this object”. The letter is known as the Balfour Declaration.
    In essence, a European power promised the Zionist movement a country where Palestinian Arab natives made up more than 90 percent of the population.
    A British Mandate was created in 1923 and lasted until 1948. During that period, the British facilitated mass Jewish immigration – many of the new residents were fleeing Nazism in Europe – and they also faced protests and strikes. Palestinians were alarmed by their country’s changing demographics and British confiscation of their lands to be handed over to Jewish settlers.`,

    content3:`Escalating tensions eventually led to the Arab Revolt, which lasted from 1936 to 1939.
    In April 1936, the newly formed Arab National Committee called on Palestinians to launch a general strike, withhold tax payments and boycott Jewish products to protest British colonialism and growing Jewish immigration.
    The six-month strike was brutally repressed by the British, who launched a mass arrest campaign and carried out punitive home demolitions, a practice that Israel continues to implement against Palestinians today.
    The second phase of the revolt began in late 1937 and was led by the Palestinian peasant resistance movement, which targeted British forces and colonialism.
    By the second half of 1939, Britain had massed 30,000 troops in Palestine. Villages were bombed by air, curfews imposed, homes demolished, and administrative detentions and summary killings were widespread.
    In tandem, the British collaborated with the Jewish settler community and formed armed groups and a British-led “counterinsurgency force” of Jewish fighters named the Special Night Squads.
    Within the Yishuv, the pre-state settler community, arms were secretly imported and weapons factories established to expand the Haganah, the Jewish paramilitary that later became the core of the Israeli army.
    In those three years of revolt, 5,000 Palestinians were killed, 15,000 to 20,000 were wounded and 5,600 were imprisoned.`,

    content4:`By 1947, the Jewish population had ballooned to 33 percent of Palestine, but they owned only 6 percent of the land.
    The United Nations adopted Resolution 181, which called for the partition of Palestine into Arab and Jewish states.
    The Palestinians rejected the plan because it allotted about 55 percent of Palestine to the Jewish state, including most of the fertile coastal region.
    At the time, the Palestinians owned 94 percent of historic Palestine and comprised 67 percent of its population.`,

    image: '../photo14.avif',
    image1:'../photo14a.avif',
    image2:'../photo14b.avif'
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
