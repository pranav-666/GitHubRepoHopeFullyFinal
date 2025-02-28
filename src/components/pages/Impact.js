import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Impact.css';

const opportunitiesData = [
  {
    company: 'Tech Innovators Inc.',
    position: 'Software Engineer Intern',
    description: 'Work on cutting-edge AI and ML projects with a dynamic team.',
    deadline: 'March 15, 2025'
  },
  {
    company: 'CyberSecure Solutions',
    position: 'Cybersecurity Analyst',
    description: 'Analyze security vulnerabilities and implement advanced protection measures.',
    deadline: 'April 10, 2025'
  },
  {
    company: 'GreenTech Ventures',
    position: 'Sustainable Systems Engineer',
    description: 'Develop eco-friendly technological solutions for modern problems.',
    deadline: 'May 5, 2025'
  }
];

export default function OpportunitiesPage() {
  return (
    <div className='opportunities-container'>
      <main className='opportunities-content'>
        <h1 className='opportunities-title'>Current Opportunities</h1>
        <div className='opportunities-list'>
          {opportunitiesData.map((item, index) => (
            <div key={index} className='opportunity-item'>
              <h2 className='company-name'>{item.company}</h2>
              <p className='position-title'><strong>Position:</strong> {item.position}</p>
              <p className='description'>{item.description}</p>
              <p className='deadline'><strong>Application Deadline:</strong> {item.deadline}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}