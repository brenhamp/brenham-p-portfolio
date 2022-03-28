import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
    return (
        <section className="container">
        <h1 id="about">Brenham Pozzi</h1>
        <img src={coverImage} className="my-2" style={{ }} alt="cover" />
        <div>
          <p>
            Trinity University Class of 2016 graduate in Business. Now an amateur dev through UTSA/Trilogy coding boot camp.
          </p>

          <p>I have knowledge of JavaScript, React, node, Express, MySQL, and other technologies.</p>

          <p>Prior experience in furniture sales and food service.</p>
        </div>
      </section>
    )
}

export default About;