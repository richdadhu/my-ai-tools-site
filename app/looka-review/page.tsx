/* app/looka-review/page.tsx */
import Image from "next/image";
import nextMdx from '@next/mdx';
import type { NextConfig } from 'next';

/** ——— SEO ——— */
export const metadata = {
  title: "Looka Review 2024 – In-Depth Analysis of AI Logo Maker",
  description:
    "Hands-on testing of Looka's logo generation process, including pros & cons, pricing, Looka vs Canva comparison, and clear recommendations on whether it's worth buying.",
};

/** ——— Simple Star Rating Component ——— */
function Stars({ score = 4.2 }) {
  const full = Math.floor(score);
  const half = score - full >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {[...Array(full)].map((_, i) => (
        <span key={i}>⭐</span>
      ))}
      {half && <span>⭐️‍🌓</span>}
      <span className="ml-2 text-sm text-gray-600">{score}/5</span>
    </div>
  );
}

/** ——— Main Content ——— */
export default function LookaReview() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 font-sans leading-7">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <Image
          src="/looka-hero.png"
          alt="Looka interface"
          width={800}
          height={420}
          priority
          className="rounded-xl shadow-md mx-auto"
        />
        <h1 className="mt-6 text-3xl font-bold">
          Looka Review 2024: Comprehensive Analysis of AI Logo Design Tool
        </h1>
        <p className="mt-2 text-gray-600">
          I personally created 12 brand visual sets using Looka. This article covers the pros and cons, pricing, 
          and Looka vs Canva comparison to give you a clear verdict on whether it's worth purchasing.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
          <Stars score={4.2} />
          <span className="text-sm text-gray-500">(Tested on: July 13, 2025)</span>
        </div>
        <a
          href="/go/looka"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
        >
          Try Looka Now (90-day Cookie)
        </a>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">2. Pricing & Costs</h2>

        <Image
          src="/looka-pricing.png"
          alt="Looka pricing"
          width={800}
          height={380}
          className="mx-auto mb-4 rounded-lg shadow"
        />

        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Plan</th>
              <th className="p-2">One-time Price</th>
              <th className="p-2">What's Included</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Basic</td>
              <td className="p-2">$20</td>
              <td className="p-2">PNG logo with transparent background</td>
            </tr>
            <tr>
              <td className="p-2">Premium</td>
              <td className="p-2">$65</td>
              <td className="p-2">SVG/high-resolution + brand guidelines</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* TODO: Pros/Cons, feature details, alternatives, FAQ... to be added later */}
    </main>
  );
}
