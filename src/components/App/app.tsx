import React from 'react';
import Nav from '../nav/Nav';
import IconListItem from '../icon-list-item/IconListItem';
import Projects from '../project/Projects';
import WaveButton from '../wave-button/WaveButton';
import headerImage from './assets/placeholder.jpeg';
import styles from "./App.module.scss";

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
            <p>defn. a <strong>Senior Frontend Engineer</strong> who is passionate about building beautiful, performant, and accessible applications. Always curious and in love with the challenge of learning new technologies —I enjoy writing clean, concise, functional code that provides the best user experience possible.</p>
            <WaveButton />
          </div>
          <div className={`${styles.headerImage} half fade-in-down animation-delay-450`}>
            <img src={headerImage} alt="Temp header" />
          </div>
        </header>

        <section id="about" className={styles.sectionMargin}>
          <h2 className={`section-padding ${styles.sectionTitle}`}>My specialties</h2>
          <ul className={`flex section-padding ${styles.iconList}`}>
            <IconListItem
              imageName="frontend.svg"
              title="Frontend Architecture"
              description="Architect efficient and reusable frontend systems that drive complex web applications"
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

        <section id="work" className={styles.sectionMargin}>
          <h2 className={`section-padding ${styles.sectionTitle}`}>Achievements</h2>
          <Projects />
        </section>

        <section id="contact" className={styles.contact}>
          <div className={`${styles.contactArtboard} half`}>
            <div className={styles.bgTriangle}></div>
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
