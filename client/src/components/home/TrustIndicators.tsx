export default function TrustIndicators() {
  const trustItems = [
    {
      icon: "fas fa-calendar-check",
      title: "Easy Online Booking",
      description: "Book your service in under 2 minutes"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Insured & Bonded",
      description: "Your property is fully protected"
    },
    {
      icon: "fas fa-user-check",
      title: "Vetted Professionals",
      description: "Background-checked, trained staff"
    },
    {
      icon: "fas fa-star",
      title: "Satisfaction Guarantee",
      description: "100% happiness or we'll re-clean free"
    }
  ];
  
  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {trustItems.map((item, index) => (
            <div 
              className="flex flex-col items-center p-4 rounded-xl hover-lift transition-all duration-300 slide-up" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 shadow-sm">
                <i className={`${item.icon} text-2xl`}></i>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-primary">{item.title}</h3>
              <p className="text-gray-600 text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Trust partners */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="text-center mb-6">
            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Trusted By</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Domain_logo.svg/320px-Domain_logo.svg.png" alt="Domain" className="h-6 md:h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Airbnb_Logo_B%C3%A9lo.svg/320px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="Airbnb" className="h-6 md:h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mirvac_logo.svg/320px-Mirvac_logo.svg.png" alt="Mirvac" className="h-6 md:h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ray_White_logo.svg/320px-Ray_White_logo.svg.png" alt="Ray White" className="h-6 md:h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
