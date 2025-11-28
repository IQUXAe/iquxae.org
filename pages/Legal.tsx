import React from 'react';

const Legal: React.FC = () => {
  return (
    <>
      <section style={{ background: '#2C3E50', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '15px', fontSize: '3.5rem', fontWeight: 300 }}>Legal</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>Terms of Service and Privacy Policy</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>Terms of Service</h2>
          
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>DISCLAIMER</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
              All information and services are provided on an "as is" basis. No guarantees or warranties are given or implied. 
              The user assumes all risks of any damages that may occur. IQUXAe.org is a hobby project with no service level agreements.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>TERMS OF USE</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666', marginBottom: '15px' }}>
              Certain images, logos, and works originating with organizations other than IQUXAe may be trademarks of those organizations. 
              IQUXAe's usage constitutes 'fair use' as provided for in section 107 of the US Copyright Law.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
              Requests for removal of copyright material may be sent to <a href="mailto:iquxae@proton.me">iquxae@proton.me</a>.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>SERVICE AVAILABILITY</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#666' }}>
              IQUXAe.org services are provided as a hobby project. The administrator reserves the right to modify, suspend, 
              or discontinue any service at any time without notice.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '40px' }}>Privacy Policy</h2>
          
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '40px' }}>
            Your privacy is important to IQUXAe. This Privacy Policy explains how we collect, use, and store your information.
          </p>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>INFORMATION WE COLLECT</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
              • Account information: username, email address (if provided), display name<br/>
              • Matrix homeserver data: messages, room memberships, device information<br/>
              • Server logs: IP addresses, connection timestamps for maintenance and security
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>HOW WE USE YOUR INFORMATION</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
              • To provide and maintain Matrix homeserver services<br/>
              • To monitor service performance and reliability<br/>
              • To detect and address security threats<br/>
              • To comply with legal obligations if required
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>END-TO-END ENCRYPTION</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
              Matrix supports end-to-end encryption for private conversations. When E2EE is enabled, message content is encrypted 
              on your device and can only be decrypted by intended recipients. The server administrator cannot read E2EE messages.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>INFORMATION WE SHARE</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
              We do not sell or rent your personal information. Your data may be shared only in these circumstances:<br/>
              • <strong>Federation:</strong> When communicating with users on other Matrix servers<br/>
              • <strong>Legal requirements:</strong> When legally required by law
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '15px' }}>YOUR RIGHTS</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555', marginBottom: '15px' }}>
              • Access your personal data<br/>
              • Request correction of inaccurate data<br/>
              • Request deletion of your account<br/>
              • Export your data
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#555' }}>
              To exercise these rights, contact: <a href="mailto:iquxae@proton.me">iquxae@proton.me</a>
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '14px', color: '#999' }}>Last updated: November 2025</p>
        </div>
      </section>
    </>
  );
};

export default Legal;
