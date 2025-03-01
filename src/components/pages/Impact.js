import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Impact.css';

const opportunitiesData = [
  {
    company: 'Para',
    position: 'Software Engineer Intern',
    description: 'Real Time Deployement of developed product and internship oppurtunity',
  },
  {
    company: 'Various Startups',
    position: 'Internship for various roles',
    description: 'Guranteed Internship for participitants under industry experts',
  },
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
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}