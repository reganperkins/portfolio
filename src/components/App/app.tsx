import Nav from '../Nav/nav';
import ImageListItem from '../ImageListItem/item';
import Project from '../Project/project';
import './app.scss';

function App() {
  return (
    <div className="container">
      <Nav />

      <header>
        <div>
          <p>Hello. This is</p>
          <h1>Regan Little</h1>
          <p>(n.) /Ray-gun/</p>
          <p>defn. a Senior Frontend Engineer who is passionate about building beautiful, performant, and accessible applications. Always curious and in love with the challenge of learning new technologies</p>
          <a href="#contact">Say hi</a>
        </div>
        <div>image goes here</div>
      </header>

      <section id="about">
        <h2>What do I do?</h2>
        <ImageListItem />
        <ImageListItem />
        <ImageListItem />
      </section>

      <section id="work">
        <h2>What I have done</h2>
        <Project />
        <Project />
        <Project />
        <a href="https://github.com/reganperkins">View more</a>
      </section>

      <section id="contact">
        <h2>Lets talk</h2>
        <div>
          Image
          reganllittle@gmail.com
          604 992 7526
        </div>
        <div>
          <p>I'd love to hear from you</p>
          <form>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <textarea placeholder="Message"></textarea>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
