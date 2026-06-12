const Home = ({ setCurrentPage }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Protecting Our Planet, Together.</h1>
        <p>Join the movement to preserve wildlife, restore forests, and combat climate change for future generations. Our actions today define tomorrow.</p>
        <button className="btn btn-primary" onClick={() => setCurrentPage('services')}>
          Discover Our Initiatives
        </button>
      </div>
    </section>
  );
};
