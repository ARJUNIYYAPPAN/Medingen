import React from "react";

const MedicineDetails = () => {
  return (
   
    <div className="bg-gray-100 rounded-lg p-6 mb-6">
      <div>
        <h1 className="text-2xl black font-semibold flex item-center space-x-10">MedicineDetails</h1>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          About UDILIV 300MG TABLET 15'S
        </h2>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-4">
          UDILIV 300MG TABLET 15'S (UDCA) is a naturally occurring bile acid derived from bear bile, and it is also
          produced synthetically. It has been used for several decades as a therapeutic agent to manage various liver
          disorders. UDCA is primarily known for its hepatoprotective properties and is used in the treatment of
          gallstones, primary biliary cholangitis (PBC), and other cholestatic liver conditions. This tablet works by
          reducing cholesterol absorption, improving bile flow, and exerting anti-inflammatory effects, thereby
          promoting liver health.
        </p>

        {/* Uses Section */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Uses of UDILIV 300MG TABLET 15'S</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Helps in dissolving gallstones.</li>
          <li>Used in the treatment of primary biliary cholangitis (PBC).</li>
          <li>Aids in managing other cholestatic liver disorders.</li>
          <li>Can be used to prevent gallstone formation.</li>
          <li>Assists in improving liver function.</li>
        </ul>

        {/* How it Works Section */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">How UDILIV 300MG TABLET 15'S Works</h3>
        <p className="text-gray-700 leading-relaxed">
          For children, the dosage of UDILIV 300MG TABLET 15'S depends on their body weight and the severity of the
          disorder being treated. It is typically prescribed by a pediatrician or healthcare specialist after
          determining the appropriate dosage. For adults, the recommended dosage ranges from 8-10 mg/kg body weight per
          day, divided into multiple doses. However, dosages may differ based on the condition being treated.
        </p>

        {/* Side Effects Section */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Side Effects of UDILIV 300MG TABLET 15'S</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Diarrhea</li>
          <li>Abdominal pain</li>
          <li>Nausea and discomfort</li>
          <li>Dizziness</li>
          <li>Hair loss (rare)</li>
        </ul>
      </div>
    </div>
  );
};

export default MedicineDetails;
