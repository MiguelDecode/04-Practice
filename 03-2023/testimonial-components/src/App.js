import "./App.css";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <main className="App">
      <h1 className="main-title">
        Here is what our alumni say about freeCodeCamp:
      </h1>
      <Testimonial
        image="shawn"
        name="Shawn Wang"
        country="Singapore"
        job="Software Engineer"
        company="Amazon"
        opinion="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      />
      <Testimonial
        image="sarah"
        name="Sarah Chima"
        country="Nigeria"
        job="Software Engineer"
        company="ChatDesk"
        opinion="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
      />
      <Testimonial
        image="emma"
        name="Emma Bostian"
        country="Sweden"
        job="Software Engineer"
        company="Spotify"
        opinion="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
      />
    </main>
  );
}

export default App;
