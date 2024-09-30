// Create the button element
const contactButton = document.createElement('div');
contactButton.classList.add('contact-button');
contactButton.innerHTML = `
  <button class="contact-redirect-btn">تواصل مع المطور</button>
`;

// Append the button to the body
document.body.appendChild(contactButton);

// Add click event listener to the button
const redirectBtn = document.querySelector('.contact-redirect-btn');
redirectBtn.addEventListener('click', () => {
    window.open('https://osamamabkhot.vercel.app', '_blank'); // Open the link in a new tab
});

// CSS styles for the button
const style = document.createElement('style');
style.innerHTML = `
  .contact-button {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 1000;
    
  }

  .contact-redirect-btn {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 15px 20px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .contact-redirect-btn:hover {
    background-color: #0056b3;
  }
`;
document.head.appendChild(style);
