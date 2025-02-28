import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <>
      <div className='cards'>

        {/* Info Blocks */}
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

        {/* About Section */}
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
            <li><span className='timeline-date'>6:30 AM</span><span className='timeline-event'>Reporting</span></li>
            <li><span className='timeline-date'>7:00 AM</span><span className='timeline-event'>Final Check-ins</span></li>
            <li><span className='timeline-date'>7:30 AM</span><span className='timeline-event'>Hacking Session Starts</span></li>
            <li><span className='timeline-date'>9:30 AM</span><span className='timeline-event'>Breakfast Distribution</span></li>
            <li><span className='timeline-date'>1:00 PM</span><span className='timeline-event'>Lunch Distribution</span></li>
            <li><span className='timeline-date'>5:30 PM</span><span className='timeline-event'>High Tea</span></li>
            <li><span className='timeline-date'>6:00 PM</span><span className='timeline-event'>Judges Arrive</span></li>
            <li><span className='timeline-date'>6:30 PM</span><span className='timeline-event'>Judging & Evaluation Begins</span></li>
            <li><span className='timeline-date'>7:45 PM</span><span className='timeline-event'>Closing Ceremony</span></li>
            <li><span className='timeline-date'>8:30 PM</span><span className='timeline-event'>Results Announcement</span></li>
          </ul>
        </div>

        {/* OC Committee Section */}
        <div className="oc-committee">
          <div>
            <h2 className="core-heading">Core Committee</h2>
            <ul className="committee-list">
              <li className="committee-member">Vinit Jain</li>
              <li className="committee-member">Arjun Raja</li>
              <li className="committee-member">Aman Agarwal</li>
              <li className="committee-member">Pavitra</li>
              <li className="committee-member">Syed Imran</li>
              <li className="committee-member">Varsha</li>
            </ul>
          </div>
          <h2 className="oc-heading">OC Committee</h2>
          <ul className="committee-list">
            <li className="committee-member">Nagpranav N</li>
            <li className="committee-member">Durgashree</li>
            <li className="committee-member">Alok Aeri</li>
          </ul>
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
