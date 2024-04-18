import React from 'react';
import gif from '../asserts/img/front.mp4';
import '../index.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div>
            <div className="video-container">
                <video className="video-background" src={gif} autoPlay loop muted />
            </div>
            <div className='heading'>
                <div className='title'>
                    <h1>Hello Admin</h1>
                </div>
                <div className='note'>
                    <h2>Here's Your Spirit</h2>
                </div>
                <div className='question'>
                    <h3>What are you waiting for?</h3>
                </div>
                <Link to='./sketch'>
                    <button className='button'>
                        <span>Get Started</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
