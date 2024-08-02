import React from 'react';
import './styles.css';
import profile from './images/collegeprofilepicture.jpg';

const Profile = () => {
    return (
        <div>
            <div className="container">
                <div className="profile-container">
                    <img src={profile} alt="profile picture" />
                    <div className="profile-details">
                        <h2>John Smith</h2>
                        <p>Bio: Hi, I'm John Smith. I did my undergrad at UIUC and am currently doing grad school at Northwestern University.</p>
                        <p>Contact: johnsmith@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="container-bottom">
                <h3>History</h3>
                <p>Past: UIUC</p>
                <p>Current: Northwestern University</p>
                <h2>Interests</h2>
                <p>Likes playing FPS games such as Valorant and CS:GO.</p>
                <h2>Messages</h2>
                <p>If you would like to connect, follow me on LinkedIn @JohnSmith123</p>
            </div>
        </div>
    );
};

export default Profile;
