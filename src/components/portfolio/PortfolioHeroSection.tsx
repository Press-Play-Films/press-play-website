
const PortfolioHeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-20 relative">
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rounded-lg px-6 py-3 backdrop-blur-sm bg-white/10 border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
            <h1 className="text-4xl md:text-6xl font-trajan font-bold animate-fade-in section-title-gradient">Portfolio</h1>
          </div>
          <p className="text-xl text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Explore my collection of professional work across video production, AI integration, and sales projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeroSection;
