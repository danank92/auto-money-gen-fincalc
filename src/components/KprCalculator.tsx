"use client";

import { useState } from "react";

export default function KprCalculator() {
  const [principal, setPrincipal] = useState<number | "">("");
  const [interestRate, setInterestRate] = useState<number | "">("");
  const [years, setYears] = useState<number | "">("");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateKpr = () => {
    if (!principal || !interestRate || !years) return;

    const p = Number(principal);
    const r = Number(interestRate) / 100 / 12;
    const n = Number(years) * 12;

    if (r === 0) {
      setMonthlyPayment(p / n);
      return;
    }

    const payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(payment);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">KPR / Mortgage Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Principal Amount ($)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. 300000"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Annual Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. 5"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. 30"
          />
        </div>
        
        <button
          onClick={calculateKpr}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Calculate
        </button>
        
        {monthlyPayment !== null && (
          <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
            <p className="text-sm text-blue-800 font-medium">Estimated Monthly Payment:</p>
            <p className="text-2xl font-bold text-blue-900">${monthlyPayment.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
