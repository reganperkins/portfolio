import React from 'react';
import Nav from '../nav/Nav';
import IconListItem from '../icon-list-item/IconListItem';
import Project from '../project/Project';
import WaveButton from '../wave-button/WaveButton';
import headerImage from './assets/placeholder.jpeg';
import styles from "./App.module.scss";
import { ReactComponent as BlobSlant } from './assets/blob-slant.svg';
import { ReactComponent as Blob } from './assets/blob.svg';
import { ReactComponent as StaticCircles } from './assets/static-circles.svg';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <header className={styles.header}>
          <div className={`${styles.headerContent} half fade-in-up animation-delay-350`}>
            <p className={styles.slug}>Hello. This is</p>
            <h1>Regan Little</h1>
            <p>(n.) /Ray-gun/</p>
            <p>defn. a <strong>Senior Front-end Engineer</strong> who is passionate about building beautiful, performant, and accessible applications. Always curious and in love with the challenge of learning new technologies —I enjoy writing clean, concise, functional code that provides the best user experience possible.</p>
            <WaveButton />
          </div>
          <div className={`${styles.headerImage} half fade-in-down animation-delay-450`}>
            <img src={headerImage} alt="Temp header" />
          </div>
        </header>

        <section id="about">
          <h2 className={`section-padding ${styles.sectionTitle}`}>My specialties</h2>
          <ul className="flex section-padding">
            <IconListItem
              imageName="front-end.svg"
              title="Front-end Architecture"
              description="Architect efficient and reusable front-end systems that drive complex web applications"
            />
            <IconListItem
              imageName="brain.svg"
              title="Project Planning"
              description="Collaborate with Product Designers, Product Managers, and Software Engineers to deliver compelling user-facing products"
            />
            <IconListItem
              imageName="bolt.svg"
              title="Optimized Performance"
              description="Teaching teammates new strategies for better user performance Lazy Loading, responsive images, "
            />
          </ul>
        </section>

        <section id="work">
          <h2 className="section-padding">Achievements</h2>

          <Project 
            title="Modernizing"
            description="Dribbble is a ten year old Rails app. In the time I have been here we have made massive gains in feature release cadence, increasing code clarity and onboarding new developers"
            containerClass={`right-section ${styles.modernizingProject}`}
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
                description: 'I helped to create our internal development guide which helps onboard new users. It outlines important concepts like lazyloading, responsive images, using scoped styles and patterns for testing.'
              },
            ]}
          >
            <div className="project-display">
              <img src="/images/projects/login.png" className="full-width" alt="A new, modernized developer experience" />
              <BlobSlant className={styles.blob}/>
            </div>
          </Project>
          

          <Project 
            title="Dribbble 1.5"
            description="A completely new look for Dribbble, this was a massive under takeing with a fairly tight deadline. It involved working closely with many parties including project managers, leadership and the design team to plan and execute."
            containerClass={`left-section ${styles.dribbbleProject}`}
            topics={[
              {
                title: 'First major update in 10 years',
                description: 'I worked to update all our color schemes, form elements, icons, as well as our default padding, margins, and basic elements. Because we needed to launch this all at once we used a webpack-level feature flag to keep showing the old styles well building the new.'
              },
              {
                title: 'A shared ecosystem',
                description: 'Previous to the re-skin Dribbble did not have a set design system. This meant that every time a dropdown was needed there was a good chance a new one would be created. In order to put an end to the madness and ensure that design and engineering where in sync I worked to create a shared design system and component library. This has since greatly improved our development time and cohesiveness of our site.',
              }
            ]}
          >
          <div className={`project-display`}>
            <img src="/images/projects/dribbble-1-5.png" className="full-width" alt="Stunning, clean and user friendly redesign of Dribbble" />
            <BlobSlant className={styles.blob}/>
          </div>
        </Project>

          <Project 
            title="Marketplace ...coming soon"
            description="Front-end lead on the biggest change to our marketplace ever"
            containerClass="right-section"
            topics={[
              {
                title: 'Goods upload flow',
                description: 'A complete re-write of our upload flow, this change also splits a \'good\' into its own first world citizen.'
              },
              {
                title: 'A central marketplace',
                description: 'Created a new marketplace hub with suggested goods, daily features, filters and category pages.'
              },
              {
                title: 'Admin queue',
                description: 'Mentored a junior dev on using Vue, project scoping and helped them create our new admin review queue for posted goods.'
              },
              {
                title: 'Refactoring old (hairy) code',
                description: 'Our concept of shots and shots as a good is old highly coupled code. I took this opportunity to refactor and cleanup that logic.'
              },
            ]}
            >
            <div className={`project-display`}>
              <img src="/images/projects/marketplace.png" className="full-width" alt="A new, modernized developer experience" />
            </div>
          </Project>

          <Project 
            title="Update Navigation"
            description=""
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
            >
            <div className={`project-display`}>
              <img src="/images/projects/nav.png" className="full-width" alt="A new, modernized developer experience" />
            </div>
          </Project>

          <Project 
            title="Designer Search"
            description="One of Dribbble's bigger projects and one I was lead on. This turned out to be one of the biggest revenue streams for Dribbble; helping our users find the perfect fit for their company."
            containerClass="right-section"
            topics={[
              {
                title: 'Saved Searches',
                description: 'Allow clients to name and save their filters, bookmarks and conversations for perspective roles.'
              },
              {
                title: 'Advanced Filtering',
                description: 'Allows for the filtering of talent based on their settings and preferences.'
              },
              {
                title: 'Responsive',
                description: 'This design works flawlessly on desktop and mobile platforms and utilizes responsive images and lazyloading.'
              },
            ]}
            >
            <div className={`project-display`}>
              <img src="/images/projects/designer-search.png" className="full-width" alt="A new, modernized developer experience" />
            </div>
          </Project>

          <Project 
            title="Job Board"
            description="Though a simple project I scoped, planned and created these pages and filters that showcase jobs relevant to our community."
            containerClass="left-section"
            topics={[
              {
                title: 'Posting jobs',
                description: 'Allow the posting of new roles when a user purchases a job board listing. Also creating job post details pages.'
              },
              {
                title: 'Filtering roles',
                description: 'Created param based filters to help users find the jobs they want.'
              },
            ]}
            >
            <div className={`project-display`}>
              <img src="/images/projects/job-board.png" className="full-width" alt="A new, modernized developer experience" />
            </div>
          </Project>

          <Project 
            title="Workshops"
            description="A new addition to our revenue stream, Dribbble workshops are added frequently and we needed a solution that enabled us to quickly add new events without taking developer time to implement"
            containerClass="right-section"
            topics={[
              {
                title: 'Quick rollout of new events',
                description: 'I utilized ERB templates and a yaml file to easily create new pages.'
              },
              {
                title: 'Responsive layout',
                description: 'I created the templates for the index and workshop pages, these pages.'
              },
              {
                title: 'Eventbrite',
                description: 'Set up Eventbrite as an intermediary way of collecting payments well we build our own.'
              },
            ]}
            >
            <div className={`project-display`}>
              <img src="/images/projects/learn.png" className="full-width" alt="A new, modernized developer experience" />
            </div>
          </Project>

          <Project 
            title="Login"
            description=""
            containerClass="left-section"
            topics={[
              {
                title: 'Google Authentication',
                description: 'I implemented Google One tap for quick and easy logins, this increased our login rate dramatically'
              },
              {
                title: 'Clean User Interface',
                description: 'With logins simplicity is key, the updated login and sign up pages are clear, clean and convenient'
              },
            ]}
            >
            <div className={`project-display`}>
              <img src="/images/projects/login.png" className="full-width" alt="A new, modernized developer experience" />
            </div>
          </Project>
        </section>

        {/* <Project 
          title="marketplace ...coming soon"
        /> */}

        <section id="contact" className="flex">
          <div className={`${styles.contactArtboard} half`}>
            <div className={styles.bgTriangle}></div>
            {/* <StaticCircles /> */}
          </div>
          <div className="half">
            <h2>Lets talk</h2>
            <p className={styles.subTitle}>I'd love to hear from you</p>
            <p>
              <a className="block" href="mailto:reganllittle@gmail.com">reganllittle@gmail.com</a>
              <a className="block" href="tel:+1-604-992-7526">(604) 992-7526</a>
              <a href="https://github.com/reganperkins">Github</a>
            </p>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Name"></input>
              <input type="email" placeholder="Email"></input>
              <textarea rows={5} placeholder="Message"></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
