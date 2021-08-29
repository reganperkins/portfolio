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
            title="Update Navigation"
            description=""
            imageName="nav.png"
            containerClass="hero-section"
            topics={[
              {
                title: 'Easily surface information',
                description: 'Quick access to the profile, highlighting hiring platforms and job listings, adding quick search.'
              },
              {
                title: 'Better data analytics',
                description: 'Leveraging Iteratively to better understand our users in order tailor a better experience.'
              },
              {
                title: 'Increased click through rate',
                description: 'Driving traffic to revenue generating pages and surface the pages users want.'
              },
            ]}
          />

          <Project 
            title="Modernizing"
            description="Dribbble is a ten year old Rails app. In the time I have been here we have made massive gains in feature release cadence, increasing code clarity and onboarding new developers"
            imageName="login.png"
            containerClass="right-section"
            topics={[
              {
                title: 'Storybook',
                description: 'Building UI components and pages in isolation makes it easier to QA, add new behavior after a component has been made, and develop without interference.'
              },
              {
                title: 'Tooling',
                description: 'I set up our Eslint, Prettier, and increased usage of tools like Bundle Wizard and Lighthouse which have made our site more preferment and code consistent.'
              },
              {
                title: 'Vue',
                description: 'Vue has made our development easier with the addition of a component library that matches our design system, better testing tools, built in reactivity and easy readability.'
              },
              {
                title: 'Developer guide',
                description: 'Created our internal development guide which helps onboard new users. It outlines important concepts like lazyloading, responsive images, using scoped styles and patterns for testing.'
              },
            ]}
          />

          <Project 
            title="Dribbble 1.5"
            description="A completely new look for Dribbble, this was a massive under takeing with a fairly tight deadline. It involved working closely with many parties including project managers, leadership and the design team to plan and execute."
            imageName="dribbble-1-5.png"
            containerClass="left-section"
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

          <Project 
            title="Designer Search"
            description="One of Dribbbles bigger projects and one I was lead on. This turned out to be one of the biggest revenue streams for Dribbble; helping our users find the perfect fit for their company."
            imageName="login.png"
            containerClass="right-section"
            topics={[
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
            ]}
          />

          <Project 
            title="Job Board"
            description=""
            imageName="job-board.jpeg"
            containerClass="left-section"
            topics={[
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
            ]}
          />

          <Project 
            title="Workshops"
            description=""
            imageName="learn.png"
            containerClass="right-section"
            topics={[
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
            ]}
          />

          <Project 
            title="Login"
            description=""
            imageName="login.png"
            containerClass="left-section"
            topics={[
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
              {
                title: '',
                description: ''
              },
            ]}
          />


          {/* <Project 
            title="performance optimizations"
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
