import React from 'react';

const Legal: React.FC = () => {
  return (
    <>
      <section style={{ background: '#167C80', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px' }}>Legal</h1>
          <p style={{ fontSize: '1.125rem', fontWeight: 300 }}>Terms of Service and Privacy Policy</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ padding: '50px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            
            <h2 style={{ marginBottom: '30px', paddingBottom: '15px', borderBottom: '2px solid #167C80' }}>Terms of Service</h2>
            
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', fontWeight: 500 }}>DISCLAIMER</h3>
              <p style={{ color: '#666', lineHeight: 1.8 }}>
                All information and services are provided on an "as is" basis. No guarantees or warranties are given or implied. 
                The user assumes all risks of any damages that may occur. IQUXAe.org is a hobby project with no service level agreements.
              </p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', fontWeight: 500 }}>TERMS OF USE</h3>
              <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '15px' }}>
                Certain images, logos, and works originating with organizations other than IQUXAe may be trademarks of those organizations. 
                IQUXAe's usage constitutes 'fair use' as provided for in section 107 of the US Copyright Law.
              </p>
              <p style={{ color: '#666', lineHeight: 1.8 }}>
                Requests for removal of copyright material may be sent to <a href="mailto:iquxae@proton.me">iquxae@proton.me</a>.
              </p>
            </div>

            <div style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', fontWeight: 500 }}>SERVICE AVAILABILITY</h3>
              <p style={{ color: '#666', lineHeight: 1.8 }}>
                IQUXAe.org services are provided as a hobby project. The administrator reserves the right to modify, suspend, 
                or discontinue any service at any time without notice.
              </p>
            </div>

            <h2 style={{ marginBottom: '30px', paddingBottom: '15px', borderBottom: '2px solid #167C80' }}>Privacy Policy</h2>
            
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '30px' }}>
              Your privacy is important to IQUXAe. This Privacy Policy explains how we collect, use, and store your information.
            </p>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', fontWeight: 500 }}>INFORMATION WE COLLECT</h3>
              <ul style={{ color: '#666', lineHeight: 2, paddingLeft: '20px' }}>
                <li>Account information: username, email address (if provided), display name</li>
                <li>Matrix homeserver data: messages, room memberships, device information</li>
                <li>Server logs: IP addresses, connection timestamps for maintenance and security</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', fontWeight: 500 }}>HOW WE USE YOUR INFORMATION</h3>
              <ul style={{ color: '#666', lineHeight: 2, paddingLeft: '20px' }}>
                <li>To provide and maintain Matrix homeserver services</li>
                <li>To monitor service performance and reliability</li>
                <li>To detect and address security threats</li>
                <li>To comply with legal obligations if required</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', fontWeight: 500 }}>END-TO-END ENCRYPTION</h3>
              <p style={{ color: '#666', lineHeight: 1.8 }}>
                Matrix supports end-to-end encryption for private conversations. When E2EE is enabled, message content is encrypted 
                on your device and can only be decrypted by intended recipients. The server administrator cannot read E2EE messages.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', fontWeight: 500 }}>INFORMATION WE SHARE</h3>
              <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '10px' }}>
                We do not sell or rent your personal information. Your data may be shared only in these circumstances:
              </p>
              <ul style={{ color: '#666', lineHeight: 2, paddingLeft: '20px' }}>
                <li><strong>Federation:</strong> When communicating with users on other Matrix servers</li>
                <li><strong>Legal requirements:</strong> When legally required by law</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', fontWeight: 500 }}>YOUR RIGHTS</h3>
              <ul style={{ color: '#666', lineHeight: 2, paddingLeft: '20px' }}>
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account</li>
                <li>Export your data</li>
              </ul>
              <p style={{ color: '#666', lineHeight: 1.8, marginTop: '15px' }}>
                To exercise these rights, contact: <a href="mailto:iquxae@proton.me">iquxae@proton.me</a>
              </p>
            </div>

            <div style={{ paddingTop: '30px', borderTop: '1px solid #ddd' }}>
              <p style={{ fontSize: '14px', color: '#999' }}>Last updated: November 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Legal;
