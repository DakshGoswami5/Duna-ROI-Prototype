import { useEffect, useState } from "react";


function App() {
  const [stats, setStats] = useState({
  onboarding: 0,
  conversion: 0,
  efficiency: 0
});

useEffect(() => {
  let onboarding = 0;
  let conversion = 0;
  let efficiency = 0;

  const interval = setInterval(() => {
    if (onboarding < 10.6) onboarding += 0.26;
    if (conversion < 37) conversion += 1;
    if (efficiency < 4.8) efficiency += 0.125;

    setStats({
      onboarding: onboarding > 10.6 ? 10.6 : onboarding,
      conversion: conversion > 37 ? 37 : conversion,
      efficiency: efficiency > 4.8 ? 4.8 : efficiency,
    });

    if (onboarding >= 10.6 && conversion >= 37 && efficiency >= 4.8) {
      clearInterval(interval);
    }
  }, 40);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="min-h-screen bg-[#f6f6f7] text-[#1a1622]">
      
      {/* ================= NAVBAR ================= */}
      <header className="w-full bg-[#f6f6f7]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
  <span className="inline-block transition-transform ease-in-out duration-600 group-hover:rotate-45 text-2xl -ml-32">
    <svg
  width="26"
  height="26"
  viewBox="0 0 24 24"
  fill="none"
  className="transition-transform duration-300 group-hover:rotate-45"
>
  <path
    d="M12 2
       C12 2 13 8 16 8
       C16 8 22 9 22 12
       C22 12 16 13 16 16
       C16 16 13 22 12 22
       C12 22 11 16 8 16
       C8 16 2 15 2 12
       C2 12 8 11 8 8
       C8 8 11 2 12 2Z"
    fill="currentColor"
  />
</svg>


  </span>
  <span className="text-xl font-semibold tracking-wide">
    DUNA
  </span>
</div>



          <nav className="hidden md:flex gap-10 text-sm text-gray-500 font-medium">
            <a href="#">Product</a>
            <a href="#">Customers</a>
            <a href="#">Company</a>
            <a href="#">Resources</a>
          </nav>

          <button className="bg-[#1a1622] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition -mr-32">
            Schedule a demo
          </button>
        </div>
      </header>

      {/* ================= HERO STATS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">

        {/* Heading */}
        <div className="max-w-2xl ml-18">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Designed to convert.
            <br />
            Built to scale.
          </h1>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap ml-18 text-5xl md:text-2xl font-semibold gap-14 mt-14">
          <div>
            <h2 className="text-4xl md:text-7xl sm:text-5xl font-semibold">{stats.onboarding.toFixed(1)}x</h2>
            <p className="text-gray-900 mt-3 text-base">
              Faster onboarding
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-7xl sm:text-5xl font-semibold">{stats.conversion}%</h2>
            <p className="text-gray-900 mt-3 text-base">
              Conversion increase
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-7xl sm:text-5xl font-semibold">{stats.efficiency.toFixed(1)}x</h2>
            <p className="text-gray-900 mt-3 text-base">
              Analyst efficiency
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-14 ml-18" />

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-2 mt-14 ml-18 relative">

          <div className="border-b border-gray-200 pb-8 md:border-b-0 md:border-r md:border-gray-200 md:pr-10">
            <div className="mb-4 text-xl">📈</div>
            <h3 className="font-semibold text-lg">Drive revenue</h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              Duna's platform is built to help enterprises grow. 
              Optimised to eliminate friction and instantly deliver higher conversion.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8 md:border-b-0 md:border-r md:border-gray-200 md:pr-10">
            <div className="mb-4 text-xl">🔒</div>
            <h3 className="font-semibold text-lg">Future-proof compliance</h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              A powerful policy engine translates KYC, KYB and AML into code — 
              enabling the industry's most detailed audit trails.
            </p>
          </div>

          <div>
            <div className="mb-4 text-xl">➖</div>
            <h3 className="font-semibold text-lg">Reduce costs</h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              Eliminate manual checks, endless emails and lengthy reviews — 
              by automating manual work with compliant, auditable AI.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-24 ml-18" />

        {/* Trusted by Leaders */}
        <div className="text-center mt-24">
          <h2 className="text-4xl font-medium tracking-tighter">Trusted by leaders</h2>
          <p className="text-gray-600 text-base mt-3 max-w-xl mx-auto">
            Run your business onboarding like the world's best companies — 
            without needing a 100+ people team.
          </p>
        </div>

      </section>

    </div>
  );
}

export default App
