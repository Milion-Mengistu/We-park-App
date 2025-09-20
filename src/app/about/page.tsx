export const metadata = { title: "About - We Park" };

export default function AboutPage() {
  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply blur-2xl opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply blur-2xl opacity-10"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">About We Park</h1>
        <p className="text-gray-600 text-lg max-w-2xl">Our mission is to save time and reduce congestion with a smart, seamless parking experience.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <article className="glass p-6 rounded-2xl border">
          <h2 className="text-xl font-semibold mb-2">What We Do</h2>
          <p className="text-gray-600">We connect drivers with available parking spots in real time, enable instant bookings, and streamline check-ins using QR codes or 6-digit codes.</p>
        </article>
        <article className="glass p-6 rounded-2xl border">
          <h2 className="text-xl font-semibold mb-2">Why It Matters</h2>
          <p className="text-gray-600">Less time spent circling blocks means reduced emissions and more predictable trips for everyone.</p>
        </article>
      </section>

      <section className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border bg-white">
          <h3 className="font-semibold mb-1">Real-time Availability</h3>
          <p className="text-gray-600 text-sm">See open spots instantly and plan ahead.</p>
        </div>
        <div className="p-6 rounded-2xl border bg-white">
          <h3 className="font-semibold mb-1">Secure Payments</h3>
          <p className="text-gray-600 text-sm">Pay with confidence using trusted methods.</p>
        </div>
        <div className="p-6 rounded-2xl border bg-white">
          <h3 className="font-semibold mb-1">Friendly Support</h3>
          <p className="text-gray-600 text-sm">We’re here to help you park without stress.</p>
        </div>
      </section>
      </div>
    </main>
  );
}
