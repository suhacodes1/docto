const processSteps = [
  {
    title: "Discovery &\nStrategy",
    description:
      "We understand your clinic’s goals, operations, and patient journey.",
  },
  {
    title: "Design &\nDevelopment",
    description:
      "We build modern digital platforms designed for healthcare businesses.",
  },
  {
    title: "Launch & Marketing",
    description:
      "We implement SEO, paid ads, and growth strategies to attract patients.",
  },
  {
    title: "Optimization &\nGrowth",
    description:
      "We continuously improve performance and scale your digital systems.",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-bg-text">Process</div>

      <div className="container process-container">
        <p className="process-subtitle">Our Process</p>

        <h2 className="process-title">
          A Simple Process Designed For Healthcare
          <br />
          Businesses
        </h2>

        <div className="process-line" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 relative"
            >
              <h3 className="text-xl font-semibold mb-3 leading-snug">
                {step.title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < step.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h3>

              <p className="text-gray-600 text-sm mb-6">{step.description}</p>

              <div className="absolute bottom-4 right-4 text-2xl text-gray-400">
                »
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
