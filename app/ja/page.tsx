import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import AdExperiment from "@/components/AdExperiment";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `${SITE_NAME} — アニメMBTI性格テスト`,
  description:
    "ワンピース・NARUTO・ポケモンなど人気アニメの世界観で、あなたのMBTIに近いキャラクターを見つけよう。ストーリー型の選択で直感的に答えられるMBTI性格テストです。",
  alternates: localizedAlternates("/", "ja"),
  openGraph: {
    title: `${SITE_NAME} — アニメMBTI性格テスト`,
    description:
      "人気アニメの世界観でMBTIキャラクターを探そう。ストーリー型の性格テストで直感的に診断。",
    type: "website",
    url: `${SITE_ORIGIN}/ja`,
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
    title: `${SITE_NAME} — アニメMBTI性格テスト`,
    description:
      "人気アニメの世界観でMBTIキャラクターを探そう。ストーリー型の性格テストで直感的に診断。",
    images: [`${SITE_ORIGIN}/og-image.png`],
  },
};

const WHY_CARDS = [
  {
    icon: "🎬",
    title: "シーン型の没入質問",
    body: "抽象的な選択肢ではなく、アニメの名シーンに自分を置いた状況で回答します。物語に没入しながら答えることで、普段は意識しない自分の判断パターンが自然に浮かび上がります。",
  },
  {
    icon: "🔗",
    title: "キャラクターの物語と連動した結果",
    body: "ただのタイプ名ではなく、「なぜそのキャラクターに近いのか」をストーリーで説明します。強み・ストレス反応・対人パターンをキャラクターの行動と結びつけて、納得感ある形で伝えます。",
  },
  {
    icon: "⚖️",
    title: "4軸バランス設計",
    body: "16問はE/I・S/N・T/F・J/Pの4軸それぞれ4問ずつ均等に配置されています。特定の軸に偏らず、安定したタイプ判定が得られます。",
  },
  {
    icon: "🛡️",
    title: "中立でフラットな表現",
    body: "どのタイプにも優劣はありません。結果の説明はポジティブでバランスのとれた言葉で記述されており、固定観念を強化したり特定の傾向を否定する表現は使いません。",
  },
  {
    icon: "📊",
    title: "詳細な結果レポート",
    body: "タイプの概要にとどまらず、対人スタイル・仕事スタイル・ストレスパターン・成長ポイントを別セクションで提供します。楽しいテストでありながら、読むほど気づきが得られる内容を目指しています。",
  },
  {
    icon: "🌐",
    title: "複数のアニメ世界観 × 16 MBTIタイプ",
    body: "ワンピース・NARUTO・鋼の錬金術師・進撃の巨人・クレヨンしんちゃん・ポケモン・呪術廻戦など、多彩な世界観でそれぞれ16名のキャラクターをマッチング。好きなアニメから始めてみてください。",
  },
];

const FAQ = [
  {
    q: "このサイトでは何ができますか？",
    a: "複数のアニメ世界観を舞台にしたMBTIテストと、あなたに近いキャラクターのマッチング結果・詳細な性格レポートを確認できます。",
    schema: true,
  },
  {
    q: "テスト時間はどれくらいですか？",
    a: "各テーマ16問で構成されており、集中すれば約2〜3分で完了します。",
    schema: true,
  },
  {
    q: "質問はどのように設計されていますか？",
    a: "各アニメの名シーンをもとにしたシナリオ型の質問で、E/I・S/N・T/F・J/Pの4軸をそれぞれ4問ずつ均等に測定します。",
    schema: true,
  },
  {
    q: "結果はどう活用すればいいですか？",
    a: "専門的な心理診断ではなく、自己理解と対話改善のための参考情報として活用することをおすすめします。",
    schema: true,
  },
  {
    q: "結果が実際の性格を確定しますか？",
    a: "いいえ。このサービスはエンタメ型の自己探求コンテンツです。MBTIタイプは相対的な傾向の要約であり、固定されたアイデンティティではありません。気軽な自己理解の出発点としてご活用ください。",
    schema: true,
  },
  {
    q: "もう一度テストできますか？",
    a: "はい。同じ世界観でやり直したり、別の世界観に変えていつでも試せます。会員登録は不要です。",
    schema: false,
  },
  {
    q: "結果は保存されますか？",
    a: "いいえ。結果はサーバーに保存されません。結果のリンクをコピーするか、KakaoやXでシェアして記録を残すことができます。",
    schema: false,
  },
  {
    q: "世界観によって結果が違う理由は？",
    a: "同じ人でも、状況（世界観）によって反応が変わることがあります。世界観ごとに質問文脈が異なるため、複数の世界観でテストすると自分のさまざまな側面を確認できます。",
    schema: false,
  },
];

export default function HomeJa() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/ja`,
      inLanguage: "ja-JP",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "Entertainment",
      operatingSystem: "Web",
      description: `ワンピース・NARUTO・ポケモンなどのアニメ世界観であなたのMBTIキャラクターを探そう。${SITE_NAME}のストーリー型MBTIテスト。`,
      url: `${SITE_ORIGIN}/ja`,
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
          ストーリー型 性格テスト
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0b1220] leading-tight">
          <span className="block font-slab">MBTI WORLD</span>
          <span className="block mt-0.5 text-base sm:text-lg md:text-xl font-extrabold tracking-[0.22em] text-[#16324f]/70 uppercase font-sans">
            Animation Edition
          </span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          もしあなたがアニメの名シーンの中にいたら、どう選びますか？<br />
          多彩なアニメ世界観 × 16 MBTIタイプ — あなたに近いキャラクターを見つけよう。
        </p>
      </div>

      <section className="w-full max-w-3xl text-left space-y-10">
        <AdExperiment
          experimentKey="home_primary_ja"
          className="bg-white rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-sm"
          format="horizontal"
        />

        {/* How It Works */}
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">🧭 テストの流れ</h2>
          <p className="text-gray-600 leading-relaxed">
            好きなアニメ世界観を選ぶと、その世界観のシーンを舞台にした16問の質問が表示されます。
            各質問で2つの選択肢から自分に近いと感じる反応を選ぶだけです。
            チェックリストではなくストーリーの中の選択として設計されているので、直感的に答えることができます。
            完了後、16のMBTIタイプの中からあなたに最も近いキャラクターと詳細な性格レポートをすぐ確認できます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f] mb-1">質問数</p>
              <p>各テーマ16問<br />（4軸 × 4問均等配置）</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f] mb-1">所要時間</p>
              <p>約2〜3分<br />（会員登録不要）</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f] mb-1">結果</p>
              <p>キャラクター +<br />詳細レポート</p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-4 text-sm text-gray-500">
            <p className="font-bold text-[#16324f] mb-1">📌 設計方針</p>
            <p>
              E/I・S/N・T/F・J/Pの4軸をそれぞれ4問ずつ均等に配置し、
              特定の軸に偏ることなく一貫性のある結果を導き出すよう設計しています。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 w-full">
          <Link
            href="/ja/select"
            className="w-full max-w-sm px-12 py-4 rounded-full bg-[#16324f] text-white font-bold text-lg shadow-xl shadow-[#16324f]/25 hover:scale-105 transition-transform active:scale-95 text-center"
          >
            テストを始める
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-bold text-[#16324f]">
            <Link
              href="/ja/about"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              サービス紹介
            </Link>
            <span className="text-[#16324f]/40" aria-hidden="true">·</span>
            <Link
              href="/ja/privacy"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              プライバシー
            </Link>
            <span className="text-[#16324f]/40" aria-hidden="true">·</span>
            <Link
              href="/ja/terms"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              利用規約
            </Link>
          </div>
        </div>

        <div className="h-6 sm:h-8" />

        {/* Why Special */}
        <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black font-serif text-[#16324f]">このテストの特徴</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
              よくあるMBTIテストとは違い、MBTI WORLDは<strong className="text-[#16324f]/80">ストーリー型の選択</strong>によって、
              より自然で納得感のある結果を導き出します。
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
            <p className="font-bold text-[#16324f]">💡 一言でまとめると</p>
            <p>
              MBTI WORLDは楽しいエンタメですが、結果を読んだあとで自分の強み・対人パターン・
              ストレス反応についてもう一度考えたくなるような内容を目指しています。
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            {["#ストーリー型MBTI", "#アニメ性格テスト", "#キャラクター相性", "#MBTI解釈", "#自己理解", "#対人パターン"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">{tag}</span>
            ))}
          </div>
        </section>

        <div className="h-6 sm:h-8" />

        {/* FAQ */}
        <div className="bg-white/80 rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f]">💬 よくある質問</h2>
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
