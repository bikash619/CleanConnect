export default function AboutSection() {
  const features = [
    { icon: "fas fa-gem", text: "Premium Quality" },
    { icon: "fas fa-leaf", text: "Eco-Friendly" },
    { icon: "fas fa-clock", text: "Reliable & Punctual" },
    { icon: "fas fa-users", text: "Expert Cleaners" }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Our cleaning team" 
              className="rounded-lg shadow-lg w-full" 
              width="600" 
              height="400"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary">About Spark Pro Cleaning</h2>
            <p className="text-gray-600 mb-4">
              Spark Pro Cleaning is a professional cleaning service dedicated to providing exceptional cleaning services for homes and businesses. 
              Founded with a passion for cleanliness and a commitment to excellent service, we've quickly become a trusted name in the industry.
            </p>
            <p className="text-gray-600 mb-4">
              Our team consists of carefully selected, background-checked professional cleaners who are trained to deliver consistent, 
              high-quality results. We use eco-friendly products and the latest cleaning techniques to ensure your space is not only clean but also healthy.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              {features.map((feature, index) => (
                <div className="flex items-center" key={index}>
                  <i className={`${feature.icon} text-accent text-xl mr-3`}></i>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
