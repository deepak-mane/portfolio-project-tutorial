import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Particles from 'react-tsparticles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

function App() {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Particles
        className='particles-canvas'
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{    
          fpsLimit: 30,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 60,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: '#f9ab00',
            },
            links: {
              color: '#f9ab00',
              distance: 300,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 30,
            },
            opacity: {
              value: 0.05,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 8,
            },
          },
          detectRetina: true,
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}

export default App;
