import React from 'react';
import Nav from '../Nav';
import ImageListItem from '../ImageListItem';
import Project from '../Project';
import WaveButton from '../WaveButton';
import headerImage from './assets/placeholder.jpeg';
import styles from "./styles.module.scss";
import { ReactComponent as Blob } from './assets/blob.svg';
import { ReactComponent as StaticCircles } from './assets/static-circles.svg';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className={styles.appContainer}>

        <header className={styles.header}>
          <div className={`${styles.headerContent} half`}>
            <p className={styles.slug}>Hello. This is</p>
            <h1>Regan Little</h1>
            <p>(n.) /Ray-gun/</p>
            <p>defn. a <strong>Senior Frontend Engineer</strong> who is passionate about building beautiful, performant, and accessible applications. Always curious and in love with the challenge of learning new technologies —I enjoy writing clean, concise, functional code that provides the best user experience possible.</p>
            <WaveButton />
          </div>
          <div className={`${styles.headerImage} half`}>
            <img src={headerImage} alt="Temp header" />
          </div>
        </header>

        <section id="about">
          <h2>What do I do?</h2>
          <ul className="flex">
            <ImageListItem
              title="Front-end Architecture"
              description="Architect efficient and reusable front-end systems that drive complex web applications"
            />
            <ImageListItem
              title="Project Planning"
              description="Collaborate with Product Designers, Product Managers, and Software Engineers to deliver compelling user-facing products"
            />
            <ImageListItem
              title="Optimized Performance"
              description="Teaching teammates new strategies for better user performance Lazy Loading, responsive images, "
            />
          </ul>
        </section>

        <section id="work">
          <h2>What I have done at Dribbble</h2>
          <Project 
            title="reskin"
          />
          <Project 
            title="performance optimizations"
          />
          <Project 
            title="designer search"
          />
          <Project 
            title="nav"
          />
          <Project 
            title="workshops"
          />
          <Project 
            title="login"
            imageName="login.png"
          />
          <Project 
            title="job board"
            imageName="job-board.jpeg"
          />
          <Project 
            title="marketplace ...coming soon"
          />
          <a href="https://github.com/reganperkins">View more</a>
        </section>

        <section id="contact" className="flex">
          <div className={`${styles.contactArtboard} half`}>
            <div className={styles.bgTriangle}></div>
            {/* <StaticCircles /> */}
          </div>
          <div className="half">
            <h2>Lets talk</h2>
            <p className={styles.subTitle}>I'd love to hear from you</p>
            {/* <p>
              <a className="block" href="mailto:reganllittle@gmail.com">reganllittle@gmail.com</a>
              <a className="block" href="tel:+1-604-992-7526">(604) 992-7526</a>
            </p> */}
            <form className={styles.contactForm}>
              <input type="text" placeholder="Name"></input>
              <input type="email" placeholder="Email"></input>
              <textarea rows={5} placeholder="Message"></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
