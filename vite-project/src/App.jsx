import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="header">
        <h1>Nandhini S</h1>
        <img src="woman.jpg" alt="woman"/>
        <p>Aspiring Electronic Engineer | 2nd YR Student | Problem Solver</p>
      </header>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
        I am a passionate and driven student aspiring to become an Electronic Engineer. With a strong foundation in electronics and a keen interest in sustainable technologies, I have worked on projects like greywater management and participated in various technical workshops. My goal is to contribute to innovative solutions that address real-world challenges.
        </p>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Programming: Python, Java, C</li>
          <li>Web Development: HTML, CSS, JavaScript</li>
          <li>Electronics: Circuit Design, Arduino</li>
          <li>Tools: Git, VS Code, MATLAB</li>
          <li>Soft Skills: Teamwork, Communication, Problem-Solving</li>
        </ul>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Smart Home Automation</h3>
            <p>Developed a home automation system using IoT and Arduino to control appliances remotely.</p>
            <a href="https://github.com/your-username/smart-home" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
          <div className="project-card">
            <h3>E-Commerce Website</h3>
            <p>Built a fully functional e-commerce website using React and Node.js.</p>
            <a href="https://github.com/your-username/ecommerce" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
          <div className="project-card">
            <h3>Weather App</h3>
            <p>Created a weather application using Python and OpenWeatherMap API.</p>
            <a href="https://github.com/your-username/weather-app" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Bachelor of Engineering (B.E.)</h3>
            <p>ABC University, 2022 - 2026</p>
            <p>Major: Electronics and Communication Engineering</p>
          </li>
          <li>
            <h3>Higher Secondary School</h3>
            <p>XYZ School, 2020 - 2022</p>
            <p>Percentage: 95%</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Email: nandhini.v@example.com</p>
        <p>GitHub: <a href="https://github.com/nandhiniv" target="_blank" rel="noopener noreferrer">github.com/nandhiniv</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/nandhiniv" target="_blank" rel="noopener noreferrer">linkedin.com/in/nandhiniv</a></p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Created with React| &copy; 2023</p>
      </footer>
    </>
  );
}

export default App;