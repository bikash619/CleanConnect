export default function TrustIndicators() {
  const trustItems = [
    {
      icon: "fas fa-calendar-check",
      title: "Easy Booking",
      description: "Book online in minutes"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Insured & Bonded",
      description: "Your home is protected"
    },
    {
      icon: "fas fa-user-check",
      title: "Vetted Cleaners",
      description: "Background-checked staff"
    },
    {
      icon: "fas fa-star",
      title: "Satisfaction",
      description: "100% guarantee"
    }
  ];
  
  return (
    <section className="py-8 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustItems.map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="text-accent text-4xl mb-3">
                <i className={item.icon}></i>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
