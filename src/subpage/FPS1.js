import React from 'react';

const FPS1 = () => {
    return (
        <div className="container">
            <h1>CS:GO</h1>
            <a href="https://www.counter-strike.net/">CS:GO</a>
            <h1>Latest News</h1>
            <ul className="articles-list">
                <li>
                    <h3>Title 1</h3>
                    <p>Summary of the first article...</p>
                </li>
                <li>
                    <h3>Title 2</h3>
                    <p>Summary of the second article...</p>
                </li>
                <li>
                    <div>
                        <h3>Title 3</h3>
                        <p>Summary of the third article...</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default FPS1;
