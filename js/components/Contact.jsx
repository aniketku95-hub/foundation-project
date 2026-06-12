const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Get Involved</h2>
      <div className="contact-container">
        <div>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Join the Cause</h3>
          <p style={{ marginBottom: '2rem' }}>
            Whether you want to volunteer, donate, or just learn more about our work, 
            we'd love to hear from you. Drop us a message and our team will get back to you shortly.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <i className="fa-solid fa-location-dot" style={{ width: '30px', color: 'var(--primary)' }}></i>
              123 Earth Avenue, Green City, Planet
            </div>
            <div>
              <i className="fa-solid fa-envelope" style={{ width: '30px', color: 'var(--primary)' }}></i>
              hello@natureguard.org
            </div>
            <div>
              <i className="fa-solid fa-phone" style={{ width: '30px', color: 'var(--primary)' }}></i>
              +1 (555) 123-4567
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'var(--secondary)', 
              color: 'var(--primary-dark)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <i className="fa-solid fa-circle-check" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}></i>
              <h3>Thank you for reaching out!</h3>
              <p>We have received your message and will reply soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  className="form-control" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  className="form-control" 
                  placeholder="Your Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  className="form-control" 
                  rows="5" 
                  placeholder="How would you like to help?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
