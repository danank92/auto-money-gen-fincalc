"use client";

import { useState } from "react";

export default function CompoundInterestCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<number | "">("");
  const [monthlyContribution, setMonthlyContribution] = useState<number | "">("");
  const [interestRate, setInterestRate] = useState<number | "">("");
  const [years, setYears] = useState<number | "">("");
  const [futureValue, setFutureValue] = useState<number | null>(null);

  const calculateCompoundInterest = () => {
    if (initialInvestment === "" || interestRate === "" || years === "") return;

    const p = Number(initialInvestment);
    const pmt = Number(monthlyContribution) || 0;
    const r = Number(interestRate) / 100;
    const t = Number(years);
    const n = 12; // Compounding monthly

    // Compound interest for principal
    const compoundPrincipal = p * Math.pow(1 + r / n, n * t);
    
    // Future value of a series (monthly contributions)
    const futureValueOfSeries = pmt * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

    setFutureValue(compoundPrincipal + futureValueOfSeries);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Compound Interest Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Initial Investment ($)</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500"
            placeholder="e.g. 10000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution ($)</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500"
            placeholder="e.g. 500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Annual Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500"
            placeholder="e.g. 7"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Years to Grow</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500"
            placeholder="e.g. 10"
          />
        </div>
        
        <button
          onClick={calculateCompoundInterest}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Calculate
        </button>
        
        {futureValue !== null && (
          <div className="mt-4 p-4 bg-green-50 rounded-md border border-green-100">
            <p className="text-sm text-green-800 font-medium">Future Value:</p>
            <p className="text-2xl font-bold text-green-900">${futureValue.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
