'use client';
import { Navigation } from "@/components/navigation";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "How do I book accommodation?", answer: "Simply enter your desired destination, travel dates, and the number of guests into the search bar on the homepage. Browse the available options, select your accommodation, and follow the steps to complete your booking." },
    { question: "Can I cancel my booking?", answer: "Yes, cancellation policies depend on the accommodation. Log in to your account, open your booking, and check the cancellation details." },
    { question: "How can I contact the host?", answer: "After completing your booking, you can contact the host via our platform in the Messages section or directly through the provided contact information if available." },
    { question: "Are all accommodations verified?", answer: "All accommodations go through our verification process, and guest reviews further ensure authenticity and quality. We recommend reading other users’ reviews before booking." },
    { question: "What should I do if I’m late for check-in?", answer: "If you are running late for check-in, we recommend immediately informing the host through messages on the platform or by phone if the contact is provided. Most hosts can adjust check-in times based on your situation." },
    { question: "What if I have an issue with my booking?", answer: "If you encounter a problem, contact our customer support team, available 24/7 via chat, email, or phone. Our team will assist you in resolving the issue as quickly as possible." },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border rounded-lg">
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="font-semibold text-primary-900">{faq.question}</h3>
            <button
              className="w-6 h-6 flex items-center justify-center text-primary-900 border border-primary-900 rounded-full"
            >
              {activeIndex === index ? "-" : "+"}
            </button>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-primary-900 text-gray-500">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function SupportFAQsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navigation setIsOpen={setIsOpen} />
      <FAQ />
    </>
  );
}
