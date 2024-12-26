import React from 'react';

function MedicineDetails() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">About UDILIV 300MG TABLET 15'S</h2>
      <p className="text-grayText">
        UDILIV 300MG TABLET 15'S (UDCA) is a naturally occurring bile acid derived from bear bile...
      </p>
      <h3 className="text-lg font-semibold mt-4">Uses:</h3>
      <ul className="list-disc ml-5 text-grayText">
        <li>Helps in dissolving gallstones.</li>
        <li>Used in the treatment of primary biliary cholangitis (PBC).</li>
        <li>... and more.</li>
      </ul>
    </section>
  );
}

export default MedicineDetails;
