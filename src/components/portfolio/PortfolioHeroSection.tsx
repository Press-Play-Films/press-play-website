
const PortfolioHeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-20 relative">
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Portfolio</h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Explore my collection of professional work across video production, AI integration, and sales projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeroSection;
