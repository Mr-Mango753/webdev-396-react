import { useState, React } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Topics from './Topics';
import News from './News';
import Profile from './Profile';
import News1 from './subpage/News1';
import News2 from './subpage/News2';
import News3 from './subpage/News3';
import Moba1 from './subpage/Moba1';
import Moba2 from './subpage/Moba2';
import FPS1 from './subpage/FPS1';
import FPS2 from './subpage/FPS2';
import Role1 from './subpage/Role1';
import Role2 from './subpage/Role2';
import Racing1 from './subpage/Racing1';
import Racing2 from './subpage/Racing2';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [fontSize, setFontSize] = useState(16);

    const switchTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const increaseFontSize = () => {
        setFontSize((prevFontSize) => prevFontSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize((prevFontSize) => (prevFontSize > 10 ? prevFontSize - 2 : prevFontSize));
    };

    return (
        <div className={`app ${theme}`} style={{ fontSize: `${fontSize}px` }}>
            <Router>
                <nav>
                    <Link to="/news">News</Link>
                    <Link to="/topics">Topics</Link>
                    <Link to="/profile">Profile</Link>
                    <button id="theme-switcher" onClick={switchTheme}>Switch Theme</button>
                    <div className="font-size-controls">
                        <button id="increase-font" onClick={increaseFontSize}>A+</button>
                        <button id="decrease-font" onClick={decreaseFontSize}>A-</button>
                    </div>
                </nav>
                <Routes>
                    <Route path="/news" element={<News />} />
                    <Route path="/topics" element={<Topics />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/subpage/news/news1" element={<News1 />} />
                    <Route path="/subpage/news/news2" element={<News2 />} />
                    <Route path="/subpage/news/news3" element={<News3 />} />
                    <Route path="/subpage/topics/moba1" element={<Moba1 />} />
                    <Route path="/subpage/topics/moba2" element={<Moba2 />} />
                    <Route path="/subpage/topics/fps1" element={<FPS1 />} />
                    <Route path="/subpage/topics/fps2" element={<FPS2 />} />
                    <Route path="/subpage/topics/role1" element={<Role1 />} />
                    <Route path="/subpage/topics/role2" element={<Role2 />} />
                    <Route path="/subpage/topics/racing1" element={<Racing1 />} />
                    <Route path="/subpage/topics/racing2" element={<Racing2 />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
