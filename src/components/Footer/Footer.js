import React from 'react';
import {Container} from '../../globalStyles';
import {Section, Info, Links} from './Footer.elements.js';
import FooterScribble from '../../images/background/footer-scribble.png';

const Footer = () => {
  return (
    <Section>
      <img src={FooterScribble} alt=""/>
      <Container>
        <Info>
          <h3>My Log Travels</h3>
          <Links>
            <h5>Quick Links</h5>
            <ul>
              {/*row 1*/}
              <li>Home</li>
              <li>Travels</li>
              <li>Recommendations</li>
              <li>Mission Statement</li>
              {/*row 2*/}
              <li>About Us</li>
              <li>Promo Flights</li>
              <li>Guides</li>
              <li>The Team</li>
              {/*row 3*/}
              <li>My Travel Logs</li>
              <li>Travel Routes</li>
              <li>BLogs</li>
              <li>Contact Us</li>
            </ul>
          </Links>
        </Info>
        <p>2021-2022 My Log Travels. All Rights Reserved.</p>
      </Container>
    </Section>
  )
}

export default Footer