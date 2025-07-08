import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut'
      }
    }),
  };
  return (
    <section id="contact" className="contact-section">
      <motion.h2
                className="about-title"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                 Get In <span>Touch</span>
                <div className="underline" />
              </motion.h2>
      <div className="container">

        <div className="container">
          <div className='col-md-6' style={{marginBottom:"10px", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h3>Let's Talk!</h3>
            <p>
              Have a project in mind or want to discuss opportunities? 
              Feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:mahavarvishal2112001@gmail.com">mahavarvishal2112001@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Vishal-vm02" target="_blank" rel="noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/vishal-mahavar-b48ab6311" target="_blank" rel="noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </motion.div>
          </div><div
  className="col-12 col-md-6 d-flex justify-content-center align-items-center"
  // style={{ minHeight: "100vh" }} // Optional for vertical centering
>
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="contact-form w-100"
    style={{ maxWidth: "500px" }} // Keeps the form from stretching too wide
  >
    <form>
      <div className="form-group">
        <input type="text" placeholder="Your Name" required className="form-control" />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Your Email" required className="form-control" />
      </div>
      <div className="form-group">
        <textarea placeholder="Your Message" rows="5" required className="form-control"></textarea>
      </div>
      <button type="submit" className="submit-btn btn btn-primary w-100">
        Send Message
      </button>
    </form>
  </motion.div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;