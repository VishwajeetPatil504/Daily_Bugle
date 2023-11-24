import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';

function Content() {
    const handleClick = () => {
        console.log('Link clicked!');
      };
  return (
    <main class="container">
        <div class="row">
            <div class="container">
            <Link to="/news7" onClick={handleClick}>
                <div class="card" id="news1">
                <img class="card-img-top" src="photo7.avif" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://www.google.com/" >'Friends' actor Matthew Perry passes away after apparent drowning: Report</a></p>
                    </div>
                </div>
                </Link>
            </div>
            <div class="container">
                <Link to="/news3" onClick={handleClick}>
                <div class="card" id="news2">
                <img class="card-img-top" src="delhi.webp" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://www.google.com/" >Delhi Air Pollution News Live Updates: Marginal dip in pollution levels in capital, AQI in 'very poor' category</a></p>
                    </div>
                </div>
                </Link>
            </div>
            <div class="container">
                <Link to="/news2" onClick={handleClick}>
                <div class="card" id="news3">
                <img class="card-img-top" src="virat.jpeg" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://www.google.com/" >Virat Kohli equals Sachin Tendulkar's record for most hundreds in one-day internationals</a></p>
                    </div>
                </div>
                </Link>
            </div>
            <div className="container">
                <Link to ="/news1" onClick={handleClick}>
                <div className="card" id="news4">
                    <img className="card-img-top" src="emergency relief.jpg" alt="BigCo Inc. logo" />
                    <div className="card-body">
                        <p className="card-text"><a id="linkc" href="https://www.google.com/" >India sends emergency relief to earthquake-hit Nepal, reaffirms PM Modi's 'Neighbourhood First' policy</a></p>
                    </div>
                </div>
                </Link>
            </div>
            <div class="container">
                <Link to="/news4" onClick={handleClick}>
                <div class="card" id="news5">
                <img class="card-img-top" src="moon.webp" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://www.google.com/" >NASA surprised to discover 'dinky' moon orbiting asteroid in close flyby</a></p>
                    </div>
                </div>
                </Link>
            </div>
            <div class="container">
                <div id="para">
                    <p id="para"><h3>Civilians Suffer as Israel-Palestine Conflict Worsens</h3></p>
                    </div>
            </div>
            <div class="container">
                <Link to="/News5" onClick={handleClick}>
                <div class="card" id="news6">
                <img class="card-img-top" src="gaza 1.jpg" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://www.google.com/" >Recent Developments in the Israel-Palestine Conflict</a></p>
                    </div>
                </div>
                </Link>
            </div>
            <div class="container">
                <Link to="/News6" onClick={handleClick}>
                <div class="card" id="news7">
                <img class="card-img-top" src="gaza 2.jpg" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://www.google.com/" >Israeli-Palestinian Conflict Flares Up</a></p>
                    </div>
                </div>
                </Link>
            </div>
            <div class="container">
                <div class="card" id="news8">
                <img class="card-img-top" src="gaza3.jpg" alt="BigCo Inc. logo"/>
                </div>
            </div>
            <div class="container">
            <Link to="/News11" onClick={handleClick}>
                <div class="card" id="news9">
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://www.google.com/" onClick={handleClick}>More than 10,300 Palestinians, including 4,200 children have been killed. In Israel, more than 1,400 people have been killed and 242 hostages taken from Israel into Gaza by the militant group.</a></p>
                    </div>
                </div>
            </Link>
            </div>
            <div class="container">
            <Link to="/News14" onClick={handleClick}>
                <div class="card card bg-white text-center text-dark" id="news10">
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://www.google.com/" onClick={handleClick}><h4>Crisis of the <br/> MiddleEast</h4></a></p>
                    </div>
                </div>
            </Link>
            </div>
            <div class="container">
            <Link to="/News12" onClick={handleClick}>
                <div class="card card bg-white text-center text-dark" id="news11">
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://www.google.com/" onClick={handleClick}>"True massacre": Gaza child casualties cross 4,000 as Israeli raids expand
                        At least 9,770 people killed in nearly a month of Israeli strikes.</a></p>
                    </div>
                </div>
            </Link>
            </div>
            <div class="container">
            <Link to="/News13" onClick={handleClick}>
                <div class="card" id="news12">
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://www.google.com/" onClick={handleClick}>Pro-Palestinian demonstrators in cities across Europe rallied together and called for a cease fire.</a></p>
                    </div>
                </div>
            </Link>
            </div>
            <div id="line1"></div>
            <div class="container">
            <div class="card"id="spotlight">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" ><a id="linkd" class="DB" href="https://www.google.com/" onClick={handleClick}><h4>DB Spotlight</h4></a></li> 
                    <li class="list-group-item" ><a id="linkc" href="https://www.google.com/" onClick={handleClick}>DB Spotlight</a></li> 
                    <li class="list-group-item" ><a id="linkc" href="https://www.google.com/" onClick={handleClick}>DB Spotlight</a></li> 
                    <li class="list-group-item" ><a id="linkc" href="https://www.google.com/" onClick={handleClick}>DB Spotlight</a></li> 
                </ul>
              </div>
        </div>
        </div>       
    </main>
  );
}

export default Content;
