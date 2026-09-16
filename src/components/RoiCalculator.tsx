"use client";

import { useState } from "react";

export default function RoiCalculator() {
  const [amountInvested, setAmountInvested] = useState<number | "">("");
  const [amountReturned, setAmountReturned] = useState<number | "">("");
  const [roi, setRoi] = useState<number | null>(null);

  const calculateRoi = () => {
    if (amountInvested === "" || amountReturned === "") return;
    
    const invested = Number(amountInvested);
    const returned = Number(amountReturned);
    
    if (invested === 0) return;

    const calculatedRoi = ((returned - invested) / invested) * 100;
    setRoi(calculatedRoi);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">ROI Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount Invested ($)</label>
          <input
            type="number"
            value={amountInvested}
            onChange={(e) => setAmountInvested(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500"
            placeholder="e.g. 1000"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount Returned ($)</label>
          <input
            type="number"
            value={amountReturned}
            onChange={(e) => setAmountReturned(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500"
            placeholder="e.g. 1500"
          />
        </div>
        
        <button
          onClick={calculateRoi}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Calculate
        </button>
        
        {roi !== null && (
          <div className="mt-4 p-4 bg-purple-50 rounded-md border border-purple-100">
            <p className="text-sm text-purple-800 font-medium">Return on Investment (ROI):</p>
            <p className="text-2xl font-bold text-purple-900">{roi.toFixed(2)}%</p>
            
            <p className="text-sm text-purple-700 mt-2">
              Profit: ${(Number(amountReturned) - Number(amountInvested)).toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
