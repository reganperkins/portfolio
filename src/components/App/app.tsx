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
      <div>
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
          <h2 className="section-padding">What do I do?</h2>
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
          <h2 className="section-padding">Achievements</h2>
          <Project 
            title="Dribbble 1.5"
            description="A completely new look for Dribbble, this was a massive under takeing with a fairly tight deadline. It involved working closely with many parties including project managers, leadership and the design team to plan and execute."
            imageName="dribbble-1-5.png"
            topics={[
              {
                title: 'First major update in 10 years',
                description: 'We updated all our color schemes, form elements, icons, as well as our default padding, margins, and basic elements. Because we needed to launch this all at once we used a webpack-level feature flag to keep showing the old styles well building the new.'
              },
              {
                title: 'A shared ecosystem',
                description: 'Previous to the re-skin Dribbble did not have a set design system. This meant that every time a dropdown was needed there was a good chance a new one would be created. In order to put an end to the madness and ensure that design and engineering where in sync we worked to create a shared design system and component library. This has since greatly improved our development time and cohesiveness of our site.',
              }
            ]}
          />

          {/* <div className="flex">
            <img src={`/images/projects/dribbble-1-5.png`} alt="reskin" />
            <div>
              <h3>Dribbble 1.5</h3>
              <p>
                A completely new look for Dribbble, this was a massive under takeing with a fairly 
                tight deadline. It involved working closely with many parties including project managers, 
                leadership and the design team to plan and execute.
              </p>

              <div className="grid">
                <div className="grid-item">
                  <h4>First major update in 10 years</h4>
                  <p>
                    We updated all our color schemes, form elements, icons, as well as our default padding, 
                    margins, and basic elements. Because we needed to launch this all at once we used a 
                    webpack-level feature flag to keep showing the old styles well building the new.
                  </p>
                </div>
                <div className="grid-item">
                  <h4>A shared ecosystem</h4>
                  <p>
                    Previous to the re-skin Dribbble did not have a set design system. This meant that
                    every time a dropdown was needed there was a good chance a new one would be created. In order
                    to put an end to the madness and ensure that design and engineering where in sync we worked 
                    to create a shared design system and component library. This has since greatly improved our
                    development time and cohesiveness of our site.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="flex section-padding">
            <div>
              <h3>Modernizing</h3>
              <p></p>

              <div className="grid">
                <div className="grid-item">
                  <h4>Storybook</h4>
                  <p></p>
                </div>
                <div className="grid-item">
                  <h4>Vue</h4>
                  <p></p>
                </div>
                <div className="grid-item">
                  <h4>Style guide</h4>
                  <p>lazyloading, responsive images, css audit, webpack</p>
                </div>
                <div className="grid-item">
                  <h4></h4>
                  <p></p>
                </div>
              </div>
            </div>
            <img src={`/images/projects/new-dribbble.jpeg`} alt="reskin" />
          </div>

          {/* <Project 
            title="performance optimizations"
          /> */}
          {/* <Project 
            title="designer search"
          /> */}
          {/* <Project 
            title="nav"
            imageName="nav.png"
          /> */}
          {/* <Project 
            title="workshops"
            imageName="learn.png"
          /> */}
          {/* <Project 
            title="login"
            imageName="login.png"
          /> */}
          {/* <Project 
            title="job board"
            imageName="job-board.jpeg"
          /> */}
          {/* <Project 
            title="marketplace ...coming soon"
          /> */}
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
              <a href="https://github.com/reganperkins">View more</a>
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
