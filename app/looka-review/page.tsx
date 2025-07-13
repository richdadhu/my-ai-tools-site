/* app/looka-review/page.tsx */
import Image from "next/image";

/** ——— SEO ——— */
export const metadata = {
  title: "Looka Review 2024 – AI Logo Maker 深度测评",
  description:
    "亲测 Looka 生成 Logo 全流程，包含优缺点、定价、Looka vs Canva 对比，帮你判断是否值得购买。",
};

/** ——— 简易星级组件 ——— */
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

/** ——— 页面主体 ——— */
export default function LookaReview() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 font-sans leading-7">
      {/* Hero 区 */}
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
          Looka Review 2024：AI Logo 设计工具深度测评
        </h1>
        <p className="mt-2 text-gray-600">
          我亲手用 Looka 生成了 12 套品牌视觉，这篇文章带你看优缺点、价格，
          以及 Looka VS Canva，对你是否购买给出明确结论。
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
          <Stars score={4.2} />
          <span className="text-sm text-gray-500">（测试日期：2025-07-13）</span>
        </div>
        <a
          href="/go/looka"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
        >
          立即试用 Looka（90 天 Cookie）
        </a>
      </section>

      {/* 定价 */}
      <section id="pricing" className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">2. 定价 & 费用</h2>

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
              <th className="p-2">套餐</th>
              <th className="p-2">一次性价格</th>
              <th className="p-2">包含内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Basic</td>
              <td className="p-2">$20</td>
              <td className="p-2">PNG 透明背景 Logo</td>
            </tr>
            <tr>
              <td className="p-2">Premium</td>
              <td className="p-2">$65</td>
              <td className="p-2">SVG/高分辨率 + 品牌指南</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* TODO: Pros/Cons、功能详解、替代方案、FAQ …… 之后再补 */}
    </main>
  );
}
