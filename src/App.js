import './App.css';

const reactProperties = [
  {
    logo: '/images/icon1.png',
    title: 'Declarative',
    description: 'React makes it painless to create interactive UIs.'
  },
  {
    logo: '/images/icon2.png',
    title: 'Components',
    description: 'Build encapsulated components that manage their state.'
  },
  {
    logo: '/images/icon3.png',
    title: 'Single-Way',
    description: "A set of inmmutable values are passed to the component's"
  },
  {
    logo: '/images/icon4.png',
    title: 'JSX',
    description: 'Statically-typed. designed to run on modern browsers'
  }
]

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="/"><img src="/images/ironhack-logo.svg" alt="Ironhack" /></a>
            <img src="/images/menu-top.svg" alt="Menu Icon" />
          </div>
        </nav>
        <div className="container">
          <div className="info-panel">
            <h1 className="text-lg fw-bold mb-2">Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button className="btn btn-lg btn-primary mt-5">Awesome!</button>
          </div>
        </div>
      </header>
      <section className="container mt-5 pb-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
          {reactProperties.map((property, i) => (
            <div key={i} className="box col text-center text-lg-start">
              <img className="img-fluid" src={property.logo} alt={property.title} />
              <div className="box-content">
                <h3>{property.title}</h3>
                <p className="text-muted">{property.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
