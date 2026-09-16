import KprCalculator from "@/components/KprCalculator";
import CompoundInterestCalculator from "@/components/CompoundInterestCalculator";
import RoiCalculator from "@/components/RoiCalculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Financial Calculators
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Free, easy-to-use tools to plan your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <KprCalculator />
          <CompoundInterestCalculator />
          <RoiCalculator />
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Financial Tools. For informational purposes only.</p>
        </div>
      </div>
    </div>
  );
}
