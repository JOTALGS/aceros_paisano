import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './PopUp.css';

const NewsletterSubscription = () => {
  const realEstateRef = useRef(null);
  const financialRef = useRef(null);
  const realEstateButtonRef = useRef(null);
  const financialButtonRef = useRef(null); 
  const realEstateInputRef = useRef(null);
  const financialInputRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(true); // State to handle modal visibility

  useEffect(() => {
    // Animate the real estate section
    if (isModalOpen) {
      gsap.fromTo(realEstateRef.current, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" }
      );

      // Animate the financial literacy section with a slight delay
      gsap.fromTo(financialRef.current, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out", delay: 0.5 }
      );
    }
  }, [isModalOpen]);

  const handleSubscribeClick = (buttonRef, inputRef, e) => {
    e.preventDefault(); // Prevent form submission

    const inputValue = inputRef.current.value.trim(); // Get the input value

    // Check if the input is empty
    if (inputValue === "") {
      alert("Please enter your email address before subscribing.");
      return; // Stop the function if the input is empty
    }

    const button = buttonRef.current;
    const buttonText = button.querySelector('.button-text'); // Find the text element inside the button

    // Animate the button
    gsap.to(button, {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#28a745", // Green color
      x: 200, // Move it to the right (adjust value as needed)
      duration: 0.5,
      ease: "power2.elastic.out",
      onStart: () => {
        // Hide the button text when animation starts
        buttonText.style.display = 'none';
      },
      onComplete: () => {
        buttonText.textContent = '✔';
        buttonText.style.color = '#ffe68e';
        buttonText.style.display = 'block';
      },
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <>
        <div className="modal-background">

        </div>
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-button" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="newsletter-container">
              <div ref={realEstateRef} className="newsletter-section-prim real-estate">
                <h2>Suscribe to our Newsletter</h2>
                <p>Be the first to know about new listings</p>
                <svg className='svg' fill="#bfa64f" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M960 0c530.193 0 960 429.807 960 960s-429.807 960-960 960S0 1490.193 0 960 429.807 0 960 0Zm0 101.053c-474.384 0-858.947 384.563-858.947 858.947S485.616 1818.947 960 1818.947 1818.947 1434.384 1818.947 960 1434.384 101.053 960 101.053Zm-42.074 626.795c-85.075 39.632-157.432 107.975-229.844 207.898-10.327 14.249-10.744 22.907-.135 30.565 7.458 5.384 11.792 3.662 22.656-7.928 1.453-1.562 1.453-1.562 2.94-3.174 9.391-10.17 16.956-18.8 33.115-37.565 53.392-62.005 79.472-87.526 120.003-110.867 35.075-20.198 65.9 9.485 60.03 47.471-1.647 10.664-4.483 18.534-11.791 35.432-2.907 6.722-4.133 9.646-5.496 13.23-13.173 34.63-24.269 63.518-47.519 123.85l-1.112 2.886c-7.03 18.242-7.03 18.242-14.053 36.48-30.45 79.138-48.927 127.666-67.991 178.988l-1.118 3.008a10180.575 10180.575 0 0 0-10.189 27.469c-21.844 59.238-34.337 97.729-43.838 138.668-1.484 6.37-1.484 6.37-2.988 12.845-5.353 23.158-8.218 38.081-9.82 53.42-2.77 26.522-.543 48.24 7.792 66.493 9.432 20.655 29.697 35.43 52.819 38.786 38.518 5.592 75.683 5.194 107.515-2.048 17.914-4.073 35.638-9.405 53.03-15.942 50.352-18.932 98.861-48.472 145.846-87.52 41.11-34.26 80.008-76 120.788-127.872 3.555-4.492 3.555-4.492 7.098-8.976 12.318-15.707 18.352-25.908 20.605-36.683 2.45-11.698-7.439-23.554-15.343-19.587-3.907 1.96-7.993 6.018-14.22 13.872-4.454 5.715-6.875 8.77-9.298 11.514-9.671 10.95-19.883 22.157-30.947 33.998-18.241 19.513-36.775 38.608-63.656 65.789-13.69 13.844-30.908 25.947-49.42 35.046-29.63 14.559-56.358-3.792-53.148-36.635 2.118-21.681 7.37-44.096 15.224-65.767 17.156-47.367 31.183-85.659 62.216-170.048 13.459-36.6 19.27-52.41 26.528-72.201 21.518-58.652 38.696-105.868 55.04-151.425 20.19-56.275 31.596-98.224 36.877-141.543 3.987-32.673-5.103-63.922-25.834-85.405-22.986-23.816-55.68-34.787-96.399-34.305-45.053.535-97.607 15.256-145.963 37.783Zm308.381-388.422c-80.963-31.5-178.114 22.616-194.382 108.33-11.795 62.124 11.412 115.76 58.78 138.225 93.898 44.531 206.587-26.823 206.592-130.826.005-57.855-24.705-97.718-70.99-115.729Z" fill-rule="evenodd"/>
                </svg>
                <img src='./images/01.png' className='image'/>
                <form className="newsletter-form">
                  <input type="email" placeholder="YOUR EMAIL ADDRESS" ref={realEstateInputRef} required />
                  <button
                    type="submit"
                    className="subscribe-button"
                    ref={realEstateButtonRef}
                    onClick={(e) => handleSubscribeClick(realEstateButtonRef, realEstateInputRef, e)}
                  >
                    <span className="button-text">SUBSCRIBE</span>
                  </button>
                </form>
              </div>

              <div ref={financialRef} className="newsletter-section-sec financial-literacy">
                <h3>Subscribe to receive news</h3>
                <p>Subscribe for Financial Literacy Tips</p>
                <svg className='svg' fill="#bfa64f" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M960 0c530.193 0 960 429.807 960 960s-429.807 960-960 960S0 1490.193 0 960 429.807 0 960 0Zm0 101.053c-474.384 0-858.947 384.563-858.947 858.947S485.616 1818.947 960 1818.947 1818.947 1434.384 1818.947 960 1434.384 101.053 960 101.053Zm-42.074 626.795c-85.075 39.632-157.432 107.975-229.844 207.898-10.327 14.249-10.744 22.907-.135 30.565 7.458 5.384 11.792 3.662 22.656-7.928 1.453-1.562 1.453-1.562 2.94-3.174 9.391-10.17 16.956-18.8 33.115-37.565 53.392-62.005 79.472-87.526 120.003-110.867 35.075-20.198 65.9 9.485 60.03 47.471-1.647 10.664-4.483 18.534-11.791 35.432-2.907 6.722-4.133 9.646-5.496 13.23-13.173 34.63-24.269 63.518-47.519 123.85l-1.112 2.886c-7.03 18.242-7.03 18.242-14.053 36.48-30.45 79.138-48.927 127.666-67.991 178.988l-1.118 3.008a10180.575 10180.575 0 0 0-10.189 27.469c-21.844 59.238-34.337 97.729-43.838 138.668-1.484 6.37-1.484 6.37-2.988 12.845-5.353 23.158-8.218 38.081-9.82 53.42-2.77 26.522-.543 48.24 7.792 66.493 9.432 20.655 29.697 35.43 52.819 38.786 38.518 5.592 75.683 5.194 107.515-2.048 17.914-4.073 35.638-9.405 53.03-15.942 50.352-18.932 98.861-48.472 145.846-87.52 41.11-34.26 80.008-76 120.788-127.872 3.555-4.492 3.555-4.492 7.098-8.976 12.318-15.707 18.352-25.908 20.605-36.683 2.45-11.698-7.439-23.554-15.343-19.587-3.907 1.96-7.993 6.018-14.22 13.872-4.454 5.715-6.875 8.77-9.298 11.514-9.671 10.95-19.883 22.157-30.947 33.998-18.241 19.513-36.775 38.608-63.656 65.789-13.69 13.844-30.908 25.947-49.42 35.046-29.63 14.559-56.358-3.792-53.148-36.635 2.118-21.681 7.37-44.096 15.224-65.767 17.156-47.367 31.183-85.659 62.216-170.048 13.459-36.6 19.27-52.41 26.528-72.201 21.518-58.652 38.696-105.868 55.04-151.425 20.19-56.275 31.596-98.224 36.877-141.543 3.987-32.673-5.103-63.922-25.834-85.405-22.986-23.816-55.68-34.787-96.399-34.305-45.053.535-97.607 15.256-145.963 37.783Zm308.381-388.422c-80.963-31.5-178.114 22.616-194.382 108.33-11.795 62.124 11.412 115.76 58.78 138.225 93.898 44.531 206.587-26.823 206.592-130.826.005-57.855-24.705-97.718-70.99-115.729Z" fill-rule="evenodd"/>
                </svg>
                <form className="newsletter-form">
                  <input type="email" placeholder="YOUR EMAIL ADDRESS" ref={financialInputRef} required />
                  <button
                    type="submit"
                    className="subscribe-button"
                    ref={financialButtonRef}
                    onClick={(e) => handleSubscribeClick(financialButtonRef, financialInputRef, e)}
                  >
                    <span className="button-text">SUBSCRIBE</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default NewsletterSubscription;
