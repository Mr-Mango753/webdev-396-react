import React from 'react';
import './styles.css';
import moba1 from './images/moba1.webp';
import moba2 from './images/moba2.webp';
import shooter1 from './images/shooter1.jpg';
import shooter2 from './images/shooter2.webp';
import role1 from './images/role1.jpeg';
import role2 from './images/role2.jpg';
import racing1 from './images/racing1.jpg';
import racing2 from './images/racing2.jpg';


const Topics = () => {
    return (
        <div>
            <div className="container">
                <div className="grid-container">
                    <h1>MOBA</h1>
                    <div className="grid-row">
                        <a className="grid-item" href="/subpage/topics/moba1"> <img src={moba1} alt="Moba 1" /></a>
                        <a className="grid-item" href="subpage/topics/moba2"><img src={moba2} alt="Moba 2" /></a>
                    </div>
                    <h1>First Person Shooter</h1>
                    <div className="grid-row">
                        <a className="grid-item" href="subpage/topics/FPS1"><img src={shooter1} alt="FPS 1" /></a>
                        <a className="grid-item" href="subpage/topics/FPS2"><img src={shooter2} alt="FPS 2" /></a>
                    </div>
                    <h1>Role Playing Games</h1>
                    <div className="grid-row">
                        <a className="grid-item" href="subpage/topics/Role1"><img src={role1} alt="RPG 1" /></a>
                        <a className="grid-item" href="subpage/topics/Role2"><img src={role2} alt="RPG 2" /></a>
                    </div>
                    <h1>Racing</h1>
                    <div className="grid-row">
                        <a className="grid-item" href="subpage/topics/Racing1"><img src={racing1} alt="Racing 1" /></a>
                        <a className="grid-item" href="subpage/topics/Racing2"><img src={racing2} alt="Racing 2" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topics;
