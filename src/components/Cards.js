import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <>
      <div className='cards'>
        
        {/* New Section: Three Blocks */}
        <div className='info-blocks'>
          <div className='info-box'>
            <h2>₹30,000</h2>
            <p>Prize Pool</p>
          </div>
          <div className='info-box brochure'>
            <a href='/1001.pdf' download>
              <h2>Download</h2>
              <p>Brochure</p>
            </a>
          </div>
          <div className='info-box'>
            <h2>₹400</h2>
            <p>Registration Fee</p>
          </div>
        </div>

        <h1>About RoTech</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                text="Gear up for Rotech, where innovation meets impact! This 12-hour challenge isn’t just about coding—it’s about crafting real solutions for real-world problems.

                On March 15, 2024, BMS College of Engineering will turn into a battleground of ideas, where tech enthusiasts and problem-solvers collaborate to build groundbreaking web applications. But here’s the twist—your innovation doesn’t stop at the competition. The winning projects will be handed over to a nonprofit organization, ensuring that your code drives social good and makes a tangible impact.

                If you’re ready to code for a cause, push your boundaries, and be part of something bigger, then Rotech is the place to be.

                Join us, bring your best ideas, and let’s hack our way to a better future!"
                label="Adventure"
              />
            </ul>
          </div>
        </div>

        {/* Timeline Section */}
        <div className='timeline'>
          <h2>Event Timeline</h2>
          <ul className='timeline-list'>
            <li>
              <span className='timeline-date'>10:00 AM</span>
              <span className='timeline-event'>Opening Ceremony</span>
            </li>
            <li>
              <span className='timeline-date'>11:00 AM</span>
              <span className='timeline-event'>Problem Statement Reveal</span>
            </li>
            <li>
              <span className='timeline-date'>12:00 PM</span>
              <span className='timeline-event'>Coding Begins</span>
            </li>
            <li>
              <span className='timeline-date'>4:00 PM</span>
              <span className='timeline-event'>Mentorship Round</span>
            </li>
            <li>
              <span className='timeline-date'>8:00 PM</span>
              <span className='timeline-event'>Final Submissions</span>
            </li>
            <li>
              <span className='timeline-date'>9:00 PM</span>
              <span className='timeline-event'>Winner Announcement</span>
            </li>
          </ul>
        </div>

        {/* OC Committee Section */}
        <div className='oc-committee'>
          <h2>OC Committee</h2>
          <div className='oc-committee__grid'>
            <img src='/IMG-20250226-WA0214.jpg' alt='OC Member 1' />
            <img src='/IMG-20250226-WA0212.jpg' alt='OC Member 2' />
            <img src='/IMG-20250226-WA0213.jpg' alt='OC Member 3' />
            <img src='/IMG-20250226-WA0210.jpg' alt='OC Member 4' />
            <img src='/3.jpg' alt='OC Member 5' />
            <img src='/2.jpg' alt='OC Member 6' />
            <img src='/1000001.jpg' alt='OC Member 7' />
            <img src='/images/member8.png' alt='OC Member 8' />
            <img src='/1.jpg' alt='OC Member 9' />
          </div>
        </div>

        {/* Sponsors Section */}
        <div className='sponsors'>
          <h2>Our Sponsors</h2>
          <div className='sponsors__scroll'>
            <img src='/101.jpeg' alt='Sponsor 1' />
            <img src='/101.jpeg' alt='Sponsor 2' />
            <img src='/101.jpeg' alt='Sponsor 3' />
            <img src='/101.jpeg' alt='Sponsor 4' />
            <img src='/101.jpeg' alt='Sponsor 5' />
            <img src='/101.jpeg' alt='Sponsor 6' />
            <img src='/101.jpeg' alt='Sponsor 7' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
