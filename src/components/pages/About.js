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
            authorizing you to attend and submit a plan for your attendance and transportation.
          </p>
        </section>

        <section>
          <h2 className='rules-subtitle'>Team Formation</h2>
          <ul className='rules-list'>
            <li>Teams must have between two and four members.</li>
            <li>Changes to team members are not allowed after Friday, March 14, at 12:00 Noon.</li>
            <li>Exceptions may be granted at the discretion of the rules committee.</li>
          </ul>
        </section>

        <section>
          <h2 className='rules-subtitle'>Project Development</h2>
          <ul className='rules-list'>
            <li>Development must begin only during the hackathon event.</li>
            <li>Any software tools, game engines, IDEs, and programming languages may be used.</li>
            <li>All code must be written at the hackathon, except for publicly available APIs and SDKs.</li>
            <li>Each team is allowed only one submission.</li>
            <li>Projects violating the code of conduct will be disqualified.</li>
          </ul>
        </section>

        <section>
          <h2 className='rules-subtitle'>Project Submission</h2>
          <ul className='rules-list'>
            <li>Teams must have a team name and be registered on GitHub.</li>
            <li>A PowerPoint presentation is required, including team details, project summary, tools used, and a GitHub link.</li>
            <li>Projects must be submitted to the hackathon GitHub before Saturday, March 15, at 7:00 pm.</li>
            <li>Finalist projects will undergo a code review to verify originality.</li>
          </ul>
        </section>

        <section>
          <h2 className='rules-subtitle'>Attendee Code of Conduct</h2>
          <p>
            Our hackathon is committed to providing a harassment-free experience for all participants. 
            Harassment of any kind, including but not limited to verbal comments, inappropriate imagery, or intimidation, will not be tolerated. 
            Violators may be sanctioned or expelled at the discretion of the organizers.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
