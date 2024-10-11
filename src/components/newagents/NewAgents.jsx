import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './NewAgents.css';

const agents = [
  { id: 1, name: 'Agent 1', age: 32, dateJoined: '2021-01-15', image: './images/agent1.jpg' },
  { id: 2, name: 'Agent 2', age: 28, dateJoined: '2019-07-23', image: './images/agent2.jpg' },
  { id: 3, name: 'Agent 3', age: 35, dateJoined: '2018-03-10', image: './images/agent3.jpg' },
  { id: 4, name: 'Agent 4', age: 30, dateJoined: '2020-05-17', image: './images/agent4.jpg' },
  { id: 5, name: 'Agent 5', age: 40, dateJoined: '2017-09-05', image: './images/agent5.jpg' },
];

const NewAgents = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const imageRefs = useRef([]);
  const detailsRefs = useRef([]); // New ref for agent details

  useEffect(() => {
    // Detect clicks outside of the image to reset animation
    const handleClickOutside = (e) => {
      if (selectedAgent && !imageRefs.current.some((ref) => ref.contains(e.target))) {
        resetAnimation(selectedAgent);
        setSelectedAgent(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [selectedAgent]);

  const handleImageClick = (index) => {
    // If clicking the same agent, return to the original position
    if (selectedAgent && selectedAgent.id === agents[index].id) {
      resetAnimation(agents[index]);
      setSelectedAgent(null);
    } else {
      // Otherwise, animate the clicked image
      setSelectedAgent(agents[index]);
      animateImage(index);
    }
  };

  const animateImage = (index) => {
    const image = imageRefs.current[index];
    const details = detailsRefs.current[index]; // Get the corresponding details ref

    gsap.to(image, {
      x: -100, // Move the image to the left
      duration: 0.2,
      ease: 'power2.out',
      scale: 1.1,
      border: '4px solid #bfa64f',
    });

    // Animate the details to slide in after the image has moved
    gsap.to(details, {
      opacity: 1,
      y: -400,
      duration: 0.5,
      delay: 0.5,
      ease: 'power2.out',
    });
  };

  const resetAnimation = (agent) => {
    const index = agents.findIndex((a) => a.id === agent.id);
    const image = imageRefs.current[index];
    const details = detailsRefs.current[index];

    // Reset image to original position
    gsap.to(image, {
      x: 0, // Move back to the original position
      duration: 0.5,
      ease: 'power2.out',
      scale: 1,
      border: '0px solid #bfa64f',
    });

    // Hide the agent details
    gsap.to(details, {
      opacity: 0,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div className="new-agents-container">
      <h2>Get to Know Our Agents</h2>
      <p className="subtitle">Explore our success stories and meet the agents who have built their careers with us.</p>
      
      <div className="agents-row">
        {agents.map((agent, index) => (
          <div key={agent.id} className="agent-container">
            <img
              src={agent.image}
              alt={agent.name}
              className="agent-photo"
              ref={(el) => (imageRefs.current[index] = el)} // Store image ref
              onClick={(e) => {
                e.stopPropagation(); // Prevents the click from being detected by the document event listener
                handleImageClick(index);
              }}
            />
            <ul 
              className="agent-details"
              ref={(el) => (detailsRefs.current[index] = el)} // Store details ref
            >
              <li><strong>Name:</strong> {agent.name}</li>
              <li><strong>Age:</strong> {agent.age}</li>
              <li><strong>Date Joined:</strong> {agent.dateJoined}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewAgents;
