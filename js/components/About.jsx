const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="section-title">Who We Are</h2>
      <div className="about-content">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Nature Conservation" 
            className="about-img" 
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>Our Mission</h3>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            NatureGuard is dedicated to safeguarding the world's most vulnerable ecosystems. 
            We believe that humanity and nature can thrive together. Through science-based 
            conservation, community engagement, and policy advocacy, we strive to build a 
            sustainable future.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Since our founding, we have protected over 5 million acres of land and restored 
            vital habitats for endangered species. But our work is just beginning.
          </p>
        </div>
      </div>
    </section>
  );
};
