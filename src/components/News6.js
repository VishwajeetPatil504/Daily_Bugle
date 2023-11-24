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
    title: "Israeli Cabinet approves cease-fire with Hamas that includes release of some 50 hostages",
    date: '22 Nov 2023',
    time: '10:30 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `Families and friends of about 240 hostages held by Hamas in Gaza call for Israeli Prime Minister Benjamin Netanyahu to bring them home during a demonstration in Tel Aviv, Israel on November 21, 2023.Israel’s Cabinet on Wednesday approved a cease-fire deal with the Hamas militant group that would bring a temporary halt to a devastating war.Hamas is to free 50 of the roughly 240 hostages it is holding in the Gaza Strip over a four-day period, the Israeli government said Wednesday.`,
    content: `Israel’s Cabinet on Wednesday approved a cease-fire deal with the Hamas militant group that would bring a temporary halt to a devastating war that has stretched on for over six weeks and release dozens of hostages being held in the Gaza Strip in exchange for Palestinians in Israeli prisons.

    Under the deal, Hamas is to free 50 of the roughly 240 hostages it is holding in the Gaza Strip over a four-day period, the Israeli government said Wednesday. It said it would extend the lull by an additional day for every 10 hostages released.
    
    The government said the first hostages to be released would be women and children.
    Ahead of Wednesday morning’s Cabinet vote, Prime Minister Benjamin Netanyahu said Israel would resume its offensive against Hamas after the cease-fire expires.

    It was not immediately clear when the truce would go into effect.

    Netanyahu convened his Cabinet for the vote late Tuesday. The meeting stretched well into the early hours Wednesday, underscoring the sensitivity of a proposal that would suspend an Israeli offensive against Hamas before it has reached its goals.

    Ahead of the vote, Netanyahu sought to assure the government ministers that the break was only tactical, vowing to resume the offensive after the truce expires. Top security officials also attended the meeting.

    “We are at war, and we will continue the war,” Netanyahu said. “We will continue until we achieve all our goals.”

    Israel has vowed to continue the war until it destroys Hamas’ military capabilities and returns all hostages.

    Netanyahu said that during the lull, intelligence efforts will be maintained, allowing the army to prepare for the next stages of battle. He said the battle would continue until “Gaza will not threaten Israel.”

    The announcement came as Israeli troops battled Palestinian militants in an urban refugee camp in northern Gaza and around hospitals overcrowded with patients and sheltering families.

    The deal does not mean an end to the war, which erupted on Oct. 7 after Hamas militants stormed across the border into southern Israel and killed at least 1,200 people, most of them civilians, and kidnapped some 240 others.

    In weeks of Israeli airstrikes and a ground invasion, more than 11,000 Palestinians have been killed, two-thirds of them women and minors, and more than 2,700 others are missing and believed to be buried under rubble, according to Gaza’s Health Ministry. The ministry says it has been unable to update its count since Nov. 11 because of the health sector’s collapse.

    Gaza health officials say the toll has risen sharply since, and hospitals continue to report deaths from daily strikes, often dozens at a time.

    The Health Ministry in the West Bank last reported a toll of 13,300 but stopped providing its own count Tuesday without giving a reason. Because of that, and because officials there declined to explain in detail how they tracked deaths after Nov. 11, the AP decided to stop reporting its count.

    The Health Ministry toll does not differentiate between civilians and combatants. Israel says it has killed thousands of Hamas militants but has not provided evidence for its count.

    In southern Lebanon, an Israeli strike killed two journalists with Al-Mayadeen TV, according to the Hezbollah-allied Pan-Arab network and Lebanese officials. There was no immediate comment from the Israeli military. A separate Israeli drone strike in Lebanon killed four Hamas members, a Palestinian official and a Lebanon security official said.

    The Israeli military has been trading fire almost daily across the border with Lebanon’s Hezbollah group and Palestinian militants since the outbreak of the war.

    Israel, the United States and Qatar, which mediates with Hamas, had negotiated for weeks over a hostage release that would be paired with a temporary cease-fire and the entry of more aid.

    In Washington, President Joe Biden said Tuesday that a deal on releasing some hostages was “very close.”

    Qatar’s Foreign Ministry spokesman, Majed al-Ansari expressed optimism, telling reporters that “we are at the closest point we ever had been in reaching an agreement.”

    Izzat Rishq, a senior Hamas official, said Tuesday that an agreement could be reached “in the coming hours.”

    Inside Gaza, the front line of the war shifted to the Jabaliya refugee camp, a densely built district of concrete buildings near Gaza City that houses families displaced in the 1948 war surrounding Israel’s creation. Israel has bombarded the area for weeks, and the military said Hamas fighters have regrouped there and in other eastern districts after being pushed out of much of Gaza City.

    The fighting in Jabaliya also affected two nearby hospitals, trapping hundreds of patients and displaced people sheltering inside. A strike Tuesday hit inside one of the facilities, al-Awda, killing four people, including three doctors, the hospital director told Al-Jazeera TV. The director, Ahmed Mahna, blamed the strike on Israel, a claim that AP could not independently confirm. The medical aid group Doctors Without Borders confirmed that two of the doctors killed worked for it.

    Residents of Jabaliya said there was heavy fighting as Israeli forces tried to advance under the cover of airstrikes. “They are facing stiff resistance,” said Hamza Abu Mansour, a university student.

    The Israeli military said strikes hit three tunnel shafts where fighters were hiding and destroyed rocket launchers. Footage released by the military showed Israeli soldiers patrolling on foot as gunfire echoed around them.

    It was not possible to independently confirm details of the fighting.

    It’s unclear how many Palestinian civilians remain in northern Gaza, but the U.N. agency for Palestinian refugees estimates that some 160,000 people are still in its shelters there, though it can no longer provide services. Thousands more still shelter in several hospitals in the north even after many fled south in recent weeks.

    Most hospitals are no longer operational. The hospital situation in Gaza is “catastrophic,” Michael Ryan, a senior World Health Organization official, said Monday.

    With Israeli troops surrounding the Indonesia Hospital, also near Jabaliya, staff had to bury 50 dead in the facility's courtyard, a senior Health Ministry official in the hospital, Munir al-Boursh, told Al-Jazeera TV.

    Up to 600 wounded people and some 2,000 displaced Palestinians remain stranded at the hospital, according to Gaza’s Health Ministry.

    A similar standoff played out in recent days at Shifa Hospital, Gaza’s largest, where over 250 patients and medical workers are stranded after the evacuation of 31 premature babies.

    Israel has provided evidence in recent days of a militant presence at Shifa. But it has yet to substantiate its claims that Hamas had a major command center beneath the facility, allegations denied by Hamas and hospital staff.

    Most of Gaza's population of 2.3 million have crowded into the southern section of the Gaza Strip, where Israeli strikes have continued and where the military says it intends to extend its ground invasion. Many are packed into U.N.-run schools and other facilities across the territory’s south or sleeping on the streets outside, even as winter rains have pelted the coastal enclave in recent days.

    There are shortages of food, water and fuel for generators across all of Gaza, which has had no central electricity for over a month.

    Strikes overnight crushed residential buildings in the Nusseirat refugee camp in central Gaza, killing at least 20 people, according to hospital officials. Footage from the scene showed the legs of five young boys sticking out from under a collapsed concrete slab of one home.

    Israel continues to strike what it says are militant targets throughout Gaza, often killing women and children. Israel accuses Hamas of using civilians as human shields.`,
    image: '../photo6.avif' // replace with the path to your image
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
