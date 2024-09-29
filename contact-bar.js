// Create the contact bar element
const contactBar = document.createElement('div');
contactBar.classList.add('contact-bar');
contactBar.innerHTML = `
  <p>Contact us: +123-456-7890 | Email: info@example.com</p>
`;

// Append the contact bar to the body
document.body.appendChild(contactBar);

// CSS styles for the contact bar
const style = document.createElement('style');
style.innerHTML = `
  .contact-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    z-index: 1000;
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  body {
    padding-top: 50px;
  }
`;
document.head.appendChild(style);
