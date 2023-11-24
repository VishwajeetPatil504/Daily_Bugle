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
    title: "India sends emergency relief to earthquake-hit Nepal,reaffirms PM Modi's 'Neighbourhood First' policy",
    date: '05 Nov 2023',
    time: '05:30 PM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `India has sent an emergency aid package to Nepal in response to the magnitude 6.4
    earthquake that struck the country. The first consignment of relief materials, including
    medical equipment, arrived in Nepal on Sunday. India's rapid response aligns with
    Prime Minister Narendra Modi's "Neighbourhood First Policy" and reaffirms India's
    commitment to supporting its neighboring nations in times of crisis, Following the
    201S earthquake, India was also the first responder and carried out its largest
    disaster relief operation abroad.`,
    content: `NEW DELHI: India on Sunday sent an emergency aid package, comprising
    medical equipment, relief materials and more, for people affected by the
    magnitude 6.4 earthquake in Nepal.
    The strong temblor, which even jolted the national capital and parts of north
    India, left 144 dead and scores injured.
    Serving as the first responder, India shipped essential medicines and relief
    materials to assist the earthquake-affected communities.
    This rapid response aligns with Prime Minister Narendra Modi's "Neighbourhood
    First Policy," External Affairs Minister S Jaishankar said, emphasising India's
    commitment to supporting its neighbouring nations in times of crisis.
    "Providing emergency relief assistance to earthquake-affected areas of Nepal.
    As a first responder, India delivers medicines and relief material. PM Narendra
    Modi's Neighbourhood First policy in action," EAM Jaishankar posted from his
    official handle on X.
    The first consignment of Rs 10 crore worth of emergency relief materials
    arrived at Nepalgunj, Nepal, on Sunday, the Indian Embassy in Nepal informed
    through an official release.
    A special Indian Air Force C-130 flight transported the consignment of over 11
    tonnes of emergency relief materials, including tents and tarpaulin sheets,
    blankets, and sleeping bags, as well as essential medicines and medical
    equipment such as portable ventilators, for the affected people, it said.
    The relief materials were handed over by the Ambassador of India to Nepal,
    Naveen Srivastava, on behalf of the Indian government to Nepal's Deputy
    Prime Minister and Defence Minister, Purna Bahadur Khadka, in the presence of
    Chief Minister of Karnali, Raj Kumar Sharma.
    Further consignments of relief materials from India are expected to arrive in
    the erstwhile Himalayan kingdom in the coming days.
    As a close friend and neighbour, India remains committed to extending all
    possible support to those affected by the earthquake in Nepal, the MEA added.
    The emergency aid package to Nepal reaffirmed India's commitment to be the
    first responder in crisis situations in its neighbourhood and beyond. Following
    the 2015 earthquake in Nepal, New Delhi was the first responder as it carried
    out its largest disaster relief operation abroad -- 'Operation Maitri'.
    India had also extended USD 1 billion to Nepal as part of its long-term
    assistance for post-earthquake reconstruction in the housing, education,
    health, and cultural heritage sectors, which included the reconstruction of
    50,000 houses in Nepal's Gorkha and Nuwakot districts, the MEA release said.
    Meanwhile, Nepal's Ministry of Home Affairs, in collaboration with the Armed
    Police Force and UNICEF, dispatched critical relief supplies to Jajarkot and
    Rukum West in Nepal. The relief materials include 6,263 tarps, 1,250 tents,
    300 blankets, and 2,050 sleeping bags, all aimed at providing essential shelter
    and comfort to the affected families.
    Deputy Prime Minister and Home Minister Narayan Kaji Shrestha, along with a
    team of ministers and lawmakers, took the lead in delivering these relief
    supplies to the affected areas. The team comprises Minister of Physical
    Infrastructure and Transport Prakash Jwala, Health Minister Mohan Bahadur
    Basnet, Energy Minister Shakti Basnet, and MP Janardan Sharma, among
    others.
    Nepal's Prime Minister, Pushpa Kamal Dahal, also emphasised the importance
    of relief and rescue efforts in the affected regions. He noted that while relief
    and rescue operations have been conducted in a certain manner thus far,
    further intensified efforts are in the pipeline. In a significant decision, the
    Cabinet has decided to adopt a new approach, including the construction of
    earthquake relief homes, for resettlement in the affected areas. This approach
    will prioritise the pre-positioning of disaster relief materials in all districts,
    according to the Nepal PMO.
    Even as the search and rescue operation for the Nepal earthquake ends, the
    focus has shifted to mobilising aid to those affected by the disaster. Home
    Minister Narayan Kaji Shrestha highlighted the importance of extending
    assistance to those affected by the earthquake.
    "The search and rescue operation for the Nepal earthquake is over," Home
    Minister Narayan Kaji Shrestha told ANI.
    This earthquake not only impacted Nepal but also sent tremors across several
    districts of North India, including Delhi-NCR, Uttar Pradesh, and Bihar.
    Prime Minister Narendra Modi expressed his condolences for the lives lost and
    the extensive damage caused by the earthquake in Nepal. He reaffirmed
    India's willingness to extend all possible assistance to Nepal in the aftermath of
    this natural disaster.
    The Director of the National Center for Seismology (NCS), OP Mishra,
    underlined on Saturday how the building structures contributed to exacerbating
    the damage from the earthquake.
    He emphasised that while the intensity in Nepal was significant, the magnitude
    of 6.4 was a measure of its energy content, and it is the structures that
    determine the extent of damage and loss during such events.`,
    image: '../photo1.avif' // replace with the path to your image
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
