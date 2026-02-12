import { useEffect, useState } from "react";

function App() {
  const [stats, setStats] = useState({
    onboarding: 0,
    conversion: 0,
    efficiency: 0
  });

  const [sliderValues, setSliderValues] = useState({
    monthlyOnboardings: 200,
    avgSalary: 4000,
    manualHours: 3
  });

  const [errors, setErrors] = useState({
    monthlyOnboardings: "",
    avgSalary: "",
    manualHours: ""
  });

  const { monthlyOnboardings, avgSalary, manualHours } = sliderValues;

  // ========== CALCULATIONS ==========
  
  // Manual process cost calculation
  // Formula: (Monthly onboardings × Hours per onboarding × Hourly rate)
  const hourlyRate = avgSalary / 160; // Assuming 160 working hours per month
  const totalManualCost = monthlyOnboardings * manualHours * hourlyRate;

  // AI reduces manual work by 60% (keeps only 40% of manual cost)
  const totalAiCost = totalManualCost * 0.4;

  // Monthly savings
  const monthlySavings = totalManualCost - totalAiCost;

  // Annual savings
  const annualSavings = monthlySavings * 12;

  // Time saved monthly (in hours)
  const timeSavedMonthly = monthlyOnboardings * manualHours * 0.6; // 60% time saved
  
  // Time saved yearly (in hours)
  const timeSavedAnnually = timeSavedMonthly * 12;

  const validateNumber = (value) => {
    if (value === "") return "Required";
    if (!/^[1-9]\d*$/.test(value)) {
      return "Enter a valid positive number";
    }
    return "";
  };

  const handleChange = (name, value) => {
    // Update the input value immediately for typing
    setSliderValues((prev) => ({
      ...prev,
      [name]: value
    }));

    // Validate
    const error = validateNumber(value);
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  };

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
            <span className="inline-block transition-transform duration-1200 group-hover:rotate-45 text-2xl md:-ml-32">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:rotate-45"
              >
                <path
                  d="M12 2V22M12 2L12 22M20.66 7L3.34 17M20.66 17L3.34 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
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

          <button className="bg-[#1a1622] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition md:-mr-32">
            Schedule a demo
          </button>
        </div>
      </header>

      {/* ================= HERO STATS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">

        {/* Heading */}
        <div className="max-w-2xl md:ml-18">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Designed to convert.
            <br />
            Built to scale.
          </h1>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap md:ml-18 text-5xl md:text-2xl font-semibold gap-8 md:gap-14 mt-14">
          <div>
            <h2 className="text-5xl md:text-7xl font-semibold">{stats.onboarding.toFixed(1)}x</h2>
            <p className="text-gray-900 mt-3 text-base">
              Faster onboarding
            </p>
          </div>

          <div>
            <h2 className="text-5xl md:text-7xl font-semibold">{stats.conversion}%</h2>
            <p className="text-gray-900 mt-3 text-base">
              Conversion increase
            </p>
          </div>

          <div>
            <h2 className="text-5xl md:text-7xl font-semibold">{stats.efficiency.toFixed(1)}x</h2>
            <p className="text-gray-900 mt-3 text-base">
              Analyst efficiency
            </p>
          </div>
        </div>

        {/* ================= ROI CALCULATOR ================= */}
        <div className="mt-24 md:ml-18 md:mr-6 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">

            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Estimate your ROI with Duna AI
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

              <div>
                <label className="text-sm text-gray-500">
                  Monthly onboardings
                </label>
                <input
                  type="text"
                  value={monthlyOnboardings}
                  onChange={(e) =>
                    handleChange("monthlyOnboardings", e.target.value)
                  }
                  className="w-full mt-2 border rounded-lg px-4 py-2"
                />
                {errors.monthlyOnboardings && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.monthlyOnboardings}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Avg analyst monthly salary ($)
                </label>
                <input
                  type="text"
                  value={avgSalary}
                  onChange={(e) =>
                    handleChange("avgSalary", e.target.value)
                  }
                  className="w-full mt-2 border rounded-lg px-4 py-2"
                />
                {errors.avgSalary && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.avgSalary}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Manual hours per onboarding
                </label>
                <input
                  type="text"
                  value={manualHours}
                  onChange={(e) =>
                    handleChange("manualHours", e.target.value)
                  }
                  className="w-full mt-2 border rounded-lg px-4 py-2"
                />
                {errors.manualHours && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.manualHours}
                  </p>
                )}
              </div>

            </div>

            {/* RESULTS */}
            <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-sm text-gray-500">Manual monthly cost</p>
                <h3 className="text-2xl font-semibold mt-2">
                  ${totalManualCost.toFixed(0)}
                </h3>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-sm text-gray-500">With Duna AI</p>
                <h3 className="text-2xl font-semibold mt-2">
                  ${totalAiCost.toFixed(0)}
                </h3>
              </div>

              <div className="bg-black text-white p-6 rounded-xl">
                <p className="text-sm opacity-70">Monthly savings</p>
                <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                  ${monthlySavings.toFixed(0)}
                </h3>
              </div>

            </div>

            <div className="mt-10 md:mt-12">

              <div className="text-sm text-gray-500 mb-3">
                Cost comparison
              </div>

              <div className="space-y-4">

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Manual process</span>
                    <span>${totalManualCost.toFixed(0)}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-gray-800 h-3 transition-all duration-700"
                      style={{
                        width: `100%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Duna AI</span>
                    <span>${totalAiCost.toFixed(0)}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-green-500 h-3 transition-all duration-700"
                      style={{
                        width: `${(totalAiCost / totalManualCost) * 100}%`,
                      }}
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-12">

                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-500">Annual savings</p>
                  <h3 className="text-2xl font-semibold mt-2">
                    ${annualSavings.toFixed(0)}
                  </h3>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-500">Time saved monthly</p>
                  <h3 className="text-2xl font-semibold mt-2">
                    {timeSavedMonthly.toFixed(0)} hrs
                  </h3>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-500">Time saved yearly</p>
                  <h3 className="text-2xl font-semibold mt-2">
                    {timeSavedAnnually.toFixed(0)} hrs
                  </h3>
                </div>

              </div>

            </div>

            <a
              href="https://duna.com/product/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              See how Duna AI works →
            </a>

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

export default App;