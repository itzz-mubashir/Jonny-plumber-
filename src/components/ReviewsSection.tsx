import React from 'react';
import { Star, CheckCircle, MessageSquare, Quote } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/businessData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E6E9E6]" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7F1] text-[#256E4E] font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#70CDA5]" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#151B19] tracking-tight">
            What Our Customers Say
          </h2>
          <p className="font-serif text-lg sm:text-xl text-[#151B19]/80 mt-3 leading-relaxed">
            Read verified feedback from homeowners and property owners across Derby and Derbyshire.
          </p>

          {/* Overall rating pill */}
          <div className="inline-flex items-center gap-2.5 mt-6 px-4 py-2 rounded-full bg-[#F7F8F5] border border-[#E6E9E6] font-sans">
            <div className="flex text-[#E87524]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#151B19]">5.0 Star Rated on Google Business</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F7F8F5] p-7 rounded-2xl border border-[#E6E9E6] flex flex-col justify-between hover:border-[#70CDA5] transition-all duration-200"
              id={`review-card-${rev.id}`}
            >
              <div>
                {/* Rating & Service */}
                <div className="flex items-center justify-between mb-4 font-sans">
                  <div className="flex text-[#E87524]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#256E4E] bg-[#EAF7F1] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {rev.service}
                  </span>
                </div>

                {/* Review Text */}
                <p className="font-serif text-base sm:text-lg text-[#151B19]/85 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-5 mt-5 border-t border-[#E6E9E6] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#151B19]">{rev.author}</h4>
                  <p className="font-sans text-xs text-[#151B19]/60">{rev.location}</p>
                </div>
                <div className="flex items-center gap-1 font-sans text-[11px] text-[#256E4E] font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#70CDA5]" />
                  <span>Verified Job</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Profile CTA */}
        <div className="mt-12 text-center font-sans">
          <p className="text-xs text-zinc-500">
            Have you had work completed by Jonny Eagle Plumbing &amp; Heating? We appreciate your feedback on Google.
          </p>
        </div>

      </div>
    </section>
  );
};
