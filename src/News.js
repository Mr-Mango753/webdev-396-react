import React from 'react';
import './styles.css';
import { BrowserRouter as useNavigate, Routes, Route, Link } from 'react-router-dom';
import breakingNewsImage from './images/breaking.webp';

const News = () => {
    return (
        <div>
            <div className="container">
                <h1>Top Stories</h1>
                <div className="breaking-news">
                    <div>
                        <img src={breakingNewsImage} alt="breakingNewsImage" className="breakingnews" />
                    </div>
                    <div>
                        <h3>
                            Today's breaking news. 2023 Worlds - T1 win final. Faker and T1 beat China's Weibo Gaming 3-0 to win Worlds 2023 after running it back with the same roster that lost the Worlds final the previous year. The 2023 League of Legends World Championship was the first time Faker and T1 competed at Worlds in their home country of South Korea.
                        </h3>
                    </div>
                </div>
                <h2>Latest News</h2>
                <ul className="articles-list">
                    <li>
                        <Link to="/subpage/news/news1">
                            <h3>Google Play and Niantic partner for Pokémon GO event</h3>
                            <p>Esports and gaming company 100 Thieves has partnered with app marketplace Google Play and Niantic, the developer of mobile game Pokémon GO, for activations during the Pokémon GO Fest 2024.</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/subpage/news/news2">
                            <h3>Google Play and Niantic partner for Pokémon GO event</h3>
                            <p>Esports and gaming company 100 Thieves has partnered with app marketplace Google Play and Niantic, the developer of mobile game Pokémon GO, for activations during the Pokémon GO Fest 2024.</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/subpage/news/news3">
                            <h3>Google Play and Niantic partner for Pokémon GO event</h3>
                            <p>Esports and gaming company 100 Thieves has partnered with app marketplace Google Play and Niantic, the developer of mobile game Pokémon GO, for activations during the Pokémon GO Fest 2024.</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default News;
