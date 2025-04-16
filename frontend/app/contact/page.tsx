'use client';

import React from 'react';

const ContactPage = () => {
  // Enhanced styles for more aesthetic appeal
  const styles = {
    contactPage: {
      fontFamily: '"Poppins", "Segoe UI", Roboto, sans-serif',
      color: '#2d3748',
      backgroundColor: '#f7fafc',
      minHeight: '100vh',
      lineHeight: '1.6',
    },
    header: {
      background: 'linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '3rem 1rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    headerContent: {
      position: 'relative',
      zIndex: '10',
    },
    headerTitle: {
      fontSize: '2.5rem',
      marginBottom: '0.5rem',
      fontWeight: '600',
      letterSpacing: '0.5px',
    },
    headerSubtitle: {
      fontSize: '1.25rem',
      fontWeight: '300',
      opacity: '0.9',
      maxWidth: '600px',
      margin: '0 auto',
    },
    headerShape: {
      position: 'absolute',
      bottom: '-10px',
      left: '0',
      width: '100%',
      height: '60px',
      background: '#f7fafc',
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      transform: 'scaleX(1.5)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1.5rem',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '1.875rem',
      color: '#2b6cb0',
      marginBottom: '2.5rem',
      fontWeight: '600',
      position: 'relative',
      paddingBottom: '15px',
    },
    titleUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      width: '80px',
      height: '3px',
      background: 'linear-gradient(90deg, #2b6cb0, #63b3ed)',
      transform: 'translateX(-50%)',
      borderRadius: '2px',
    },
    contactInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '4rem',
    },
    contactCard: {
      backgroundColor: 'white',
      padding: '2.5rem 2rem',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      flex: '1 1 270px',
      maxWidth: '350px',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cardIconWrapper: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #ebf4ff 0%, #c3dafe 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
    },
    cardDecor: {
      position: 'absolute',
      top: '0',
      right: '0',
      width: '100px',
      height: '100px',
      background: 'linear-gradient(225deg, rgba(235, 244, 255, 0.5) 0%, transparent 70%)',
      borderBottomLeftRadius: '100%',
    },
    cardHeading: {
      color: '#2b6cb0',
      marginBottom: '1rem',
      fontSize: '1.4rem',
      fontWeight: '600',
    },
    cardText: {
      marginBottom: '0.7rem',
      color: '#4a5568',
      fontSize: '1rem',
    },
    hoursSection: {
      backgroundColor: 'white',
      padding: '3rem 2.5rem',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      marginBottom: '4rem',
      position: 'relative',
      overflow: 'hidden',
    },
    hoursBg: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundImage: 'radial-gradient(circle at 15% 85%, rgba(235, 244, 255, 0.7) 0%, transparent 25%), radial-gradient(circle at 85% 15%, rgba(235, 244, 255, 0.7) 0%, transparent 25%)',
      opacity: '0.5',
    },
    hoursContent: {
      position: 'relative',
      zIndex: '5',
    },
    hoursGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '3rem',
      justifyContent: 'center',
    },
    hoursColumn: {
      flex: '1 1 300px',
      maxWidth: '500px',
    },
    hoursSectionHeading: {
      color: '#2b6cb0',
      marginBottom: '1.5rem',
      paddingBottom: '0.7rem',
      borderBottom: '2px solid #ebf4ff',
      fontSize: '1.2rem',
      fontWeight: '600',
    },
    hoursItem: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '0.75rem',
      marginBottom: '0.75rem',
      borderBottom: '1px dashed #e2e8f0',
    },
    day: {
      fontWeight: '500',
    },
    time: {
      color: '#718096',
    },
    mapSection: {
      backgroundColor: 'white',
      padding: '3rem 2.5rem',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      marginBottom: '4rem',
      overflow: 'hidden',
    },
    mapPlaceholder: {
      backgroundColor: '#ebf4ff',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #ebf4ff 0%, #c3dafe 100%)',
      color: '#4a5568',
      fontSize: '1.1rem',
      boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.05)',
    },
    footer: {
      backgroundColor: '#1a365d',
      color: 'white',
      textAlign: 'center',
      padding: '2.5rem 1rem',
      position: 'relative',
    },
    footerWave: {
      position: 'absolute',
      top: '-1px',
      left: '0',
      width: '100%',
      height: '70px',
      background: '#f7fafc',
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',
      transform: 'scaleX(1.5)',
    },
    footerContent: {
      position: 'relative',
      zIndex: '5',
    },
    footerText: {
      opacity: '0.8',
      marginBottom: '0.5rem',
      fontSize: '0.95rem',
    }
  };

  return (
    <div style={styles.contactPage}>
      <header style={{
  ...styles.header,
  padding: '4rem 1.5rem', // increased padding
}}>
  <div style={styles.headerContent}>
    <h1 style={{
      ...styles.headerTitle,
      fontSize: '3.5rem', // larger hero title
      fontWeight: '700',
      marginBottom: '1rem'
    }}>
      Contact Us
    </h1>
    <p style={{
      ...styles.headerSubtitle,
      fontSize: '1.5rem', // more pronounced subtitle
      maxWidth: '700px',
    }}>
      We’re here to help you navigate your healthcare needs with ease and confidence.
    </p>
  </div>
  <div style={{
    ...styles.headerShape,
    height: '80px', // smoother curve
    bottom: '-20px'
  }}></div>
</header>

      
      <div style={styles.container}>
        <div style={styles.contactInfo}>
          <div style={styles.contactCard}>
            <div style={styles.cardDecor}></div>
            <div style={styles.cardIconWrapper}>
              <span role="img" aria-label="location" style={{fontSize: '1.875rem'}}>📍</span>
            </div>
            <h3 style={styles.cardHeading}>Our Location</h3>
            <p style={styles.cardText}>123 Healthcare Avenue</p>
            <p style={styles.cardText}>Medical District, City 12345</p>
            <p style={styles.cardText}>United States</p>
          </div>
          
          <div style={styles.contactCard}>
            <div style={styles.cardDecor}></div>
            <div style={styles.cardIconWrapper}>
              <span role="img" aria-label="phone" style={{fontSize: '1.875rem'}}>📞</span>
            </div>
            <h3 style={styles.cardHeading}>Call Us</h3>
            <p style={styles.cardText}>Main Office: (555) 123-4567</p>
            <p style={styles.cardText}>Support Desk: (555) 987-6543</p>
            <p style={styles.cardText}>Emergency: (555) 555-5555</p>
          </div>
          
          <div style={styles.contactCard}>
            <div style={styles.cardDecor}></div>
            <div style={styles.cardIconWrapper}>
              <span role="img" aria-label="email" style={{fontSize: '1.875rem'}}>✉</span>
            </div>
            <h3 style={styles.cardHeading}>Email Us</h3>
            <p style={styles.cardText}>General: info@healthcare.com</p>
            <p style={styles.cardText}>Support: support@healthcare.com</p>
            <p style={styles.cardText}>Admin: admin@healthcare.com</p>
          </div>
        </div>
        
        <div style={styles.hoursSection}>
          <div style={styles.hoursBg}></div>
          <div style={styles.hoursContent}>
            <h2 style={styles.sectionTitle}>
              Hours of Operation
              <div style={styles.titleUnderline}></div>
            </h2>
            <div style={styles.hoursGrid}>
              <div style={styles.hoursColumn}>
                <h3 style={styles.hoursSectionHeading}>Administrative Office</h3>
                <div style={styles.hoursItem}>
                  <span style={styles.day}>Monday - Friday</span>
                  <span style={styles.time}>8:00 AM - 5:00 PM</span>
                </div>
                <div style={styles.hoursItem}>
                  <span style={styles.day}>Saturday</span>
                  <span style={styles.time}>9:00 AM - 12:00 PM</span>
                </div>
                <div style={styles.hoursItem}>
                  <span style={styles.day}>Sunday</span>
                  <span style={styles.time}>Closed</span>
                </div>
              </div>
              
              <div style={styles.hoursColumn}>
                <h3 style={styles.hoursSectionHeading}>Technical Support</h3>
                <div style={styles.hoursItem}>
                  <span style={styles.day}>Monday - Friday</span>
                  <span style={styles.time}>7:00 AM - 7:00 PM</span>
                </div>
                <div style={styles.hoursItem}>
                  <span style={styles.day}>Saturday</span>
                  <span style={styles.time}>9:00 AM - 5:00 PM</span>
                </div>
                <div style={styles.hoursItem}>
                  <span style={styles.day}>Sunday</span>
                  <span style={styles.time}>10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.mapSection}>
          <h2 style={styles.sectionTitle}>
            Our Location
            <div style={styles.titleUnderline}></div>
          </h2>
          <div style={styles.mapPlaceholder}>
            <p>Interactive map will be displayed here</p>
            {/* You can replace this with a Google Maps component */}
          </div>
        </div>
      </div>
      
      <footer style={styles.footer}>
        <div style={styles.footerWave}></div>
        <div style={styles.footerContent}>
          <p style={styles.footerText}>© 2025 Healthcare Management System</p>
          <p style={styles.footerText}>All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
