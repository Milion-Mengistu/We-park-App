export const metadata = { title: "How It Works - We Park" };

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Find a Spot",
      desc: "Search nearby parking locations and view real-time availability on the map.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zm0 0c-4.418 0-8 2.239-8 5v2h16v-2c0-2.761-3.582-5-8-5z" />
        </svg>
      ),
    },
    {
      title: "Book & Pay",
      desc: "Reserve instantly and pay securely. You’ll get a QR and a 6-digit check-in code.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M7 6h10M7 18h10" />
        </svg>
      ),
    },
    {
      title: "Check In",
      desc: "Show your QR or code to the attendant to start parking. Manage your time easily.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
        <p className="text-gray-600 text-lg">Three simple steps to stress-free parking.</p>
      </header>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, idx) => (
          <li key={idx} className="glass p-6 rounded-2xl border hover-lift">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <div className="p-2 bg-blue-50 rounded-xl">{s.icon}</div>
              <span className="text-sm font-semibold">Step {idx + 1}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p className="text-gray-600">{s.desc}</p>
          </li>
        ))}
      </ol>
      <section className="mt-12 text-center">
        <a href="/find-parking" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700">
          Get Started
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </section>
    </main>
  );
}
