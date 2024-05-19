const AboutPage = () => {
  return (
    <div className="about">
      <h2>A Little Bit About Me</h2>
      <p>
      Hello there! 👋 I'm Ketan Raj, a passionate and creative computer science graduate from Chandigarh University. Standing tall at 6ft, I bring a towering enthusiasm for front-end development and a love for crafting seamless digital experiences.
      </p>

      <h3>Education:</h3>
      <p>
      I honed my skills at Chandigarh University, specializing in computer science with a CGPA of 8.0. This journey ignited my curiosity and deepened my understanding of languages like Python, JavaScript, TypeScript, C++, HTML, CSS and more.
      </p>
      <h3>Tech Stack:</h3>
      <p>
      Proficient in a versatile tech stack, I have hands-on experience with React, Next.js, Tailwind CSS, Firebase, MongoDB, and AWS. These tools empower me to transform ideas into visually stunning and functional web applications.
      </p>
      <h3>Passion for Full Stack:</h3>
      <p>
      As a full stack developer, I find joy in translating design concepts into interactive and user-friendly interfaces. With a keen eye for detail and a commitment to staying on the cutting edge of web development trends, I strive to create delightful and responsive user experiences.
      </p>
      <h3>Problem Solver:</h3>
      <p>
      I thrive on challenges and view coding as a problem-solving art. Whether it's implementing complex features or optimizing performance, I approach each task with determination and a solutions-oriented mindset. For instance, my project 'Imagine' led to a 30% boost in user engagement and a 40% faster page load time.
      </p>
      <h3>Achievements and Projects:</h3>
      <p>
     <li> Secured 2nd spot in the LGBTQ+ website category at the "Hack the Mountain Hackathon".</li>
   <li> Google Hash Code 2022: Global runners-up with 1881905 points.</li>
   <li> Created a SaaS product for advanced image customization, leading to a 25% decrease in image editing time.</li>
   <li> Engineered a backend system for Luxe Lenses that handled a 300% surge in traffic during peak promotional periods.</li>
      </p>
      <h3>Beyond Coding:</h3>
      <p>
      Outside the realm of coding, you might find me exploring the latest tech innovations or experimenting with new design trends. I believe in continuous learning and staying curious in the ever-evolving tech landscape. Additionally, I enjoy mentoring students and sharing my knowledge through teaching roles and competitive coding clubs.
      </p>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
