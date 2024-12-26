import React from 'react';

function FAQSection() {
  return (
    <section className="bg-gray-100 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="faq">
        <h3 className="text-lg font-medium">Q. What if I vomit after taking Paracetamol?</h3>
        <p className="text-sm text-grayText">
          If you vomit within 30 minutes after taking a dose of Paracetamol, retake the same dose again...
        </p>
      </div>
    </section>
  );
}

export default FAQSection;
