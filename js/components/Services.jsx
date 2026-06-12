const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h3 style={{ color: 'var(--primary)' }}>
          <i className={`fa-solid ${icon}`} style={{ marginRight: '0.5rem' }}></i>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const initiatives = [
    {
      id: 1,
      icon: 'fa-tree',
      title: 'Reforestation',
      description: 'Planting native trees to restore degraded landscapes and combat carbon emissions.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      icon: 'fa-water',
      title: 'Ocean Cleanup',
      description: 'Removing plastic waste from marine ecosystems to protect marine life and coral reefs.',
      image: 'https://images.unsplash.com/photo-1621451537084-482c73073e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      icon: 'fa-paw',
      title: 'Wildlife Protection',
      description: 'Creating safe havens for endangered species and fighting against illegal poaching.',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="section" id="services">
      <h2 className="section-title">Our Initiatives</h2>
      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
        We tackle the most pressing environmental challenges through targeted, impactful projects across the globe.
      </p>
      <div className="grid-container">
        {initiatives.map(item => (
          <ServiceCard 
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};
