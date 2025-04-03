import CV from "../assets/Manoteja's_Resume@40.pdf";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Passionate About Creating
            </h3>
            <p className="text-gray-600 mb-6">
              Driven by a deep passion for building seamless, user-friendly web applications,
              I specializein in Python Full Stack Development with expertise in Django, JavaScript,
              and MySQL. I thrive on crafting dynamic, scalable, and interactive solutions,
              ensuring a smooth connection between the frontend and backend.
            </p>
            <p className="text-gray-600 mb-6">
            With hands-on experience in projects like Nexons DNA, Car_Zone, and PetStore,
            I have developed and optimized web platforms that enhance user engagement and
            performance.
          
            </p>
            <a
              href={CV} download="Manoteja's_Resume@40.pdf"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;