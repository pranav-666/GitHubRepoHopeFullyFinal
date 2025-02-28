import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './About.css';

export default function RulesAndRegulations() {
  return (
    <div className='rules-container'>
      <main className='rules-content'>
        <h1 className='rules-title'>Rules & Regulations</h1>

        <section>
          <h2 className='rules-subtitle'>Eligibility</h2>
          <p>
            Attendees from all backgrounds, genders, and geographies are welcome. 
            There is no age restriction to attend the hackathon. In case you are under 18, 
            your parents/legal guardian should contact the hackathon to request a waiver 
            authorizing you to attend.
          </p>
        </section>

        <section>
          <h2 className='rules-subtitle'>Team Formation</h2>
          <ul className='rules-list'>
            <li>Teams can consist of at least two members to a maximum of four members.</li>
            <li>Changes to team members are not permitted after Friday, March 14, at 12:00 Noon.</li>
            <li>Exceptions can be made on a case-by-case basis as decided by the rules committee.</li>
          </ul>
        </section>

        <section>
          <h2 className='rules-subtitle'>Project Development</h2>
          <ul className='rules-list'>
            <li>No development may start before the actual event date and time.</li>
            <li>Any software tools, game engines, IDEs, and programming languages can be used.</li>
            <li>All code must be created only at the hackathon. Publicly available APIs and SDKs are allowed.</li>
            <li>Only one entry per team is permitted.</li>
            <li>All intellectual property must be open-source.</li>
            <li>Projects violating the code of conduct will be disqualified.</li>
          </ul>
        </section>

        <section>
          <h2 className='rules-subtitle'>Project Submission</h2>
          <ul className='rules-list'>
            <li>Teams must register on DevPost and list their project details.</li>
            <li>Projects must be submitted to the hackathon GitHub account before Saturday, March 15 at 7:00 pm.</li>
            <li>Submissions will be reviewed for originality and compliance with open-source licenses.</li>
            <li>Finalist projects will undergo code review.</li>
          </ul>
        </section>

        <section>
          <h2 className='rules-subtitle'>Attendee Code of Conduct</h2>
          <p>
            We are dedicated to providing a harassment-free experience for everyone. 
            Harassment in any form will not be tolerated. Violations may result in expulsion from the hackathon.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
