import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import AdExperiment from "@/components/AdExperiment";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Anime MBTI Personality Test`,
  description:
    "Discover which anime character matches your MBTI type. Story-driven personality test across multiple anime worlds including One Piece, Naruto, and Pokémon. Find your character match in 2–3 minutes.",
  alternates: localizedAlternates("/", "en"),
  openGraph: {
    title: `${SITE_NAME} — Anime MBTI Personality Test`,
    description:
      "Discover which anime character matches your MBTI type across multiple iconic anime worlds.",
    type: "website",
    url: `${SITE_ORIGIN}/en`,
    images: [
      {
        url: `${SITE_ORIGIN}/og-image.png`,
        width: 800,
        height: 800,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Anime MBTI Personality Test`,
    description:
      "Discover which anime character matches your MBTI type. Story-driven test across iconic anime worlds.",
    images: [`${SITE_ORIGIN}/og-image.png`],
  },
};

const WHY_CARDS = [
  {
    icon: "🎬",
    title: "Scene-Based Immersive Questions",
    body: "Instead of abstract checkboxes, we place you inside memorable anime moments. By reacting to real story situations, your natural decision-making patterns emerge without overthinking.",
  },
  {
    icon: "🔗",
    title: "Results Tied to Character Narrative",
    body: "Your result isn't just a 4-letter label — it explains why that character resonates with you. Strengths, stress responses, and relationship patterns are all connected to the character's own story.",
  },
  {
    icon: "⚖️",
    title: "Balanced 4-Axis Design",
    body: "All 16 questions are distributed equally across E/I, S/N, T/F, and J/P — 4 questions each. This prevents bias toward any single dimension and produces consistent, reliable results.",
  },
  {
    icon: "🛡️",
    title: "Neutral & Respectful Tone",
    body: "No type is better or worse. Every result description uses positive, balanced language. We avoid stereotypes and never frame any personality tendency as a flaw.",
  },
  {
    icon: "📊",
    title: "In-Depth Result Report",
    body: "Beyond your type summary, the result page covers relationship style, work approach, stress patterns, and growth focus. It's a fun test — but one that genuinely makes you think.",
  },
  {
    icon: "🌐",
    title: "Multiple Anime Worlds × 16 MBTI Types",
    body: "From One Piece and Naruto to Pokémon and Jujutsu Kaisen — each world features 16 unique character matches across all MBTI types. Start with your favorite anime.",
  },
];

const FAQ = [
  {
    q: "What does this site offer?",
    a: "Story-driven MBTI tests set in anime worlds, paired with character matching and a detailed personality report.",
    schema: true,
  },
  {
    q: "How long does the test take?",
    a: "Each world has 16 questions and typically takes 2 to 3 minutes to complete.",
    schema: true,
  },
  {
    q: "How are the questions designed?",
    a: "Each world uses 16 scenario-based questions, with 4 questions per MBTI axis (E/I, S/N, T/F, J/P), ensuring a balanced and consistent result.",
    schema: true,
  },
  {
    q: "How should I use the result?",
    a: "Use it as a self-reflection guide, not an absolute diagnosis. The strength, stress, and relationship sections can offer real-life insights.",
    schema: true,
  },
  {
    q: "Does this result diagnose my personality?",
    a: "No. This is entertainment and self-reflection content. MBTI types represent relative tendencies, not fixed identities — treat it as a starting point for self-exploration.",
    schema: true,
  },
  {
    q: "Can I retake the test?",
    a: "Yes. You can retake the same world or try a different anime world at any time. No sign-up required.",
    schema: false,
  },
  {
    q: "Are my results saved?",
    a: "No. Results are not stored on our servers. You can copy the result link or share it via Kakao or X to keep a record.",
    schema: false,
  },
  {
    q: "Why do results differ across anime worlds?",
    a: "The same person may respond differently depending on the situation. Each world presents a unique narrative context, so testing across multiple worlds can reveal different facets of your personality.",
    schema: false,
  },
];

export default function HomeEn() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/en`,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "Entertainment",
      operatingSystem: "Web",
      description: `Discover which anime character matches your MBTI type. Story-driven personality test by ${SITE_NAME}.`,
      url: `${SITE_ORIGIN}/en`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.filter((f) => f.schema).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-12">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#16324f]/10 text-[#16324f] text-xs font-bold tracking-widest uppercase mb-2">
          Story-driven Personality Test
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0b1220] leading-tight">
          <span className="block font-slab">MBTI WORLD</span>
          <span className="block mt-0.5 text-base sm:text-lg md:text-xl font-extrabold tracking-[0.22em] text-[#16324f]/70 uppercase font-sans">
            Animation Edition
          </span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          What would you do if you were inside a legendary anime scene?<br />
          Multiple anime worlds × 16 MBTI types — find the character that matches your soul.
        </p>
      </div>

      <section className="w-full max-w-3xl text-left space-y-10">
        <AdExperiment
          experimentKey="home_primary_en"
          className="bg-white rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-sm"
          format="horizontal"
        />

        {/* How It Works */}
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">🧭 How the Test Works</h2>
          <p className="text-gray-600 leading-relaxed">
            Choose an anime world you love, then answer 16 scenario-based questions set inside that world.
            For each question, pick the option that feels most natural to you — there are no right or wrong answers.
            Because these feel like real story choices rather than a checklist, you can answer intuitively and quickly.
            After finishing, you'll instantly see which of the 16 MBTI characters matches you best, along with a detailed personality report.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f] mb-1">Questions</p>
              <p>16 per world<br />(4 per MBTI axis)</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f] mb-1">Time</p>
              <p>2–3 minutes<br />(No sign-up needed)</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f] mb-1">Output</p>
              <p>Character match +<br />In-depth report</p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-4 text-sm text-gray-500">
            <p className="font-bold text-[#16324f] mb-1">📌 Design Principle</p>
            <p>
              Questions are balanced across all four MBTI axes (E/I, S/N, T/F, J/P) with 4 questions each,
              ensuring no single dimension is over-represented in your result.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 w-full">
          <Link
            href="/en/select"
            className="w-full max-w-sm px-12 py-4 rounded-full bg-[#16324f] text-white font-bold text-lg shadow-xl shadow-[#16324f]/25 hover:scale-105 transition-transform active:scale-95 text-center"
          >
            Start the Test
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-bold text-[#16324f]">
            <Link
              href="/en/about"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              About
            </Link>
            <span className="text-[#16324f]/40" aria-hidden="true">·</span>
            <Link
              href="/en/privacy"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              Privacy
            </Link>
            <span className="text-[#16324f]/40" aria-hidden="true">·</span>
            <Link
              href="/en/terms"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>

        <div className="h-6 sm:h-8" />

        {/* Why Special */}
        <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black font-serif text-[#16324f]">Why This Test Feels Different</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
              Unlike most MBTI quizzes, MBTI WORLD uses <strong className="text-[#16324f]/80">story-based choices</strong> to surface
              more natural and believable results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-2 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className="font-bold text-[#16324f]">{card.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 text-sm text-gray-600 leading-relaxed space-y-2">
            <p className="font-bold text-[#16324f]">💡 In One Line</p>
            <p>
              MBTI WORLD is entertaining — but it's designed so that after reading your result,
              you'll want to think more carefully about your strengths, relationship patterns, and how you handle stress.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            {["#Story-based MBTI", "#Anime Personality Test", "#Character Match", "#MBTI Insights", "#Self-Reflection", "#Relationship Patterns"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">{tag}</span>
            ))}
          </div>
        </section>

        <div className="h-6 sm:h-8" />

        {/* FAQ */}
        <div className="bg-white/80 rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f]">💬 Frequently Asked Questions</h2>
          <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
            {FAQ.map((item) => (
              <div key={item.q} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <p className="font-bold text-[#16324f] mb-1">Q. {item.q}</p>
                <p className="text-gray-500">A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
