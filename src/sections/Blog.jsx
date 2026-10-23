// import { useNavigate } from "react-router-dom";
// import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
// import { portfolio } from "../data/portfolioData";

// const Blog = () => {
//   const navigate = useNavigate();

//   return (
//     <section
//       id="blog"
//       className="relative z-10 mx-auto max-w-7xl px-5 py-32 lg:px-8"
//     >
//       {/* Header */}

//       <div className="flex items-end justify-between gap-5">
//         <div>
//           <span className="text-[10px] font-semibold tracking-[0.3em] text-violet-400">
//             INSIGHTS
//           </span>

//           <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
//             Thoughts &<span className="text-zinc-600"> ideas.</span>
//           </h2>

//           <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
//             Things I learn while building modern applications, backend systems,
//             cloud infrastructure and AI-powered products.
//           </p>
//         </div>
//       </div>

//       {/* Articles */}

//       <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {portfolio.blogs?.map((post, index) => (
//           <article
//             key={post.id || index}
//             className="
//               group
//               relative
//               overflow-hidden
//               rounded-3xl
//               border
//               border-white/[0.07]
//               bg-white/[0.025]
//               transition-all
//               duration-500
//               hover:-translate-y-2
//               hover:border-violet-400/30
//               hover:bg-white/[0.04]
//             "
//           >
//             {/* Image */}

//             <div
//               className="
//                 relative
//                 h-52
//                 overflow-hidden
//                 bg-gradient-to-br
//                 from-violet-950
//                 via-zinc-950
//                 to-cyan-950
//               "
//             >
//               {post.image ? (
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="
//                     h-full
//                     w-full
//                     object-cover
//                     transition
//                     duration-700
//                     group-hover:scale-110
//                   "
//                 />
//               ) : (
//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     flex
//                     items-center
//                     justify-center
//                     bg-gradient-to-br
//                     from-violet-600/20
//                     via-fuchsia-600/10
//                     to-cyan-500/20
//                   "
//                 >
//                   <BookOpen
//                     className="
//                       h-12
//                       w-12
//                       text-violet-300/50
//                       transition
//                       duration-500
//                       group-hover:scale-125
//                       group-hover:text-violet-300
//                     "
//                   />
//                 </div>
//               )}

//               {/* Glow */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-black/80
//                   via-transparent
//                   to-transparent
//                 "
//               />

//               {/* Category */}

//               <span
//                 className="
//                   absolute
//                   left-4
//                   top-4
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-black/50
//                   px-3
//                   py-1.5
//                   text-[9px]
//                   font-semibold
//                   tracking-wider
//                   text-violet-300
//                   backdrop-blur-xl
//                 "
//               >
//                 {post.category}
//               </span>
//             </div>

//             {/* Content */}

//             <div className="p-6">
//               <div className="flex items-center gap-3 text-[10px] text-zinc-600">
//                 <span className="flex items-center gap-1">
//                   <Clock className="h-3 w-3" />
//                   {post.readTime || "5 min read"}
//                 </span>

//                 <span>•</span>

//                 <span>{post.date}</span>
//               </div>

//               <h3
//                 className="
//                   mt-4
//                   text-xl
//                   font-semibold
//                   leading-snug
//                   transition
//                   duration-300
//                   group-hover:text-violet-300
//                 "
//               >
//                 {post.title}
//               </h3>

//               <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
//                 {post.description}
//               </p>

//               {/* Read Article */}

//               <button
//                 onClick={() => navigate(`/blog/${post.id || index + 1}`)}
//                 className="
//                   group/read
//                   mt-6
//                   flex
//                   items-center
//                   gap-2
//                   text-xs
//                   font-semibold
//                   text-white
//                   transition
//                   hover:text-violet-300
//                 "
//               >
//                 <span>Read Article</span>

//                 <ArrowUpRight
//                   className="
//                     h-4
//                     w-4
//                     transition-transform
//                     duration-300
//                     group-hover/read:-translate-y-1
//                     group-hover/read:translate-x-1
//                   "
//                 />
//               </button>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Blog;


import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  BookOpen,
  Search,
  PenLine,
  X,
} from "lucide-react";

/* =========================================================
   BLOG — single file. No router or extra pages needed.
   Place at: src/components/Blog.jsx
   Cover images: public/blog/*.svg
   ========================================================= */

/*
 * Blog posts. Inline code: wrap in [[double brackets]].
 * Block types: p, h, list, quote, code.
 * These are written from the work in the resume (TCS, 2021-2025).
 * Edit the wording / dates so they sound exactly like you.
 */
const author = {
  name: "Satendra Kumar",
  role: "Full Stack Developer",
  initials: "SK",
};

const blogPosts = [
  {
    slug: "bullmq-background-jobs",
    title: "If it takes more than a second, it doesn't belong in the request",
    excerpt:
      "Video processing, invoice generation, report exports. Three different projects and the same fix: push the slow part into a BullMQ queue and answer the user immediately.",
    category: "Backend",
    tags: ["Node.js", "BullMQ", "Redis"],
    date: "Oct 2026",
    readTime: "6 min read",
    cover: "/blog/bullmq-queue.svg",
    content: [
      { type: "p", text: "On Zinggerr LMS, a learner pays for a course and wants to start watching. They don't care that an invoice has to be generated or that an uploaded video has to be processed. I do care, because if all of that runs inside the same request, the user sits on a spinner until the slowest step is done." },
      { type: "p", text: "The same thing came back on the healthcare analytics screens, where exporting a large report took far longer than any HTTP request should, and on the finance dashboard, where prices had to refresh on a schedule whether or not anyone was looking. Different products, same fix." },
      { type: "h", text: "The rule I follow" },
      { type: "p", text: "If a task can take more than a second or two, or can fail and needs a retry, it shouldn't run inside the request. The route does the cheap part (validate, save, enqueue) and answers. Everything else becomes a job." },
      { type: "code", lang: "js", text: `import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null, // BullMQ needs this
});

const reportQueue = new Queue("reports", { connection });

// POST /api/reports/export
router.post("/reports/export", auth, async (req, res) => {
  const job = await reportQueue.add(
    "export",
    { userId: req.user.id, filters: req.body.filters },
    {
      attempts: 3,
      backoff: { type: "exponential", delay: 2000 },
      removeOnComplete: 100,
    }
  );

  res.status(202).json({ jobId: job.id, status: "queued" });
});` },
      { type: "p", text: "Look at the status code. [[202]] means accepted, not finished. The frontend then polls a status endpoint (or you push an update when the job completes). Pretending the work is already done is a good way to get confused users." },
      { type: "code", lang: "js", text: `import { Worker } from "bullmq";

new Worker(
  "reports",
  async (job) => {
    const { filters } = job.data;
    const rows = await Report.find(buildQuery(filters)).lean();
    const url = await buildFileAndUpload(rows);
    return { url }; // available later as job.returnvalue
  },
  { connection, concurrency: 3 }
);` },
      { type: "h", text: "Details that matter" },
      { type: "list", items: [
        "Retries with backoff. Calls to a payment gateway or Cloudinary fail sometimes. [[attempts]] plus exponential backoff handles it without you writing a retry loop.",
        "Make jobs safe to run twice. A job can be delivered more than once. Generating the same invoice twice must not create two invoices, so use a stable [[jobId]] or check before inserting.",
        "Clean up finished jobs. Without [[removeOnComplete]], Redis keeps every finished job forever.",
        "Keep job data small. Pass an id and load the record inside the worker. Don't push whole documents through Redis.",
      ] },
      { type: "h", text: "Scheduled work is the same idea" },
      { type: "p", text: "For the price refresh on the wealth dashboard, only the trigger changes. A repeatable job runs every few minutes, fetches prices, writes them to Redis and recalculates portfolio values. The API never calls the market data source while a user is waiting." },
      { type: "quote", text: "A queue doesn't make slow work fast. It just stops slow work from blocking everyone else." },
    ],
  },

  {
    slug: "redis-cache-aside",
    title: "What I cache in Redis, for how long, and when I don't",
    excerpt:
      "Adding Redis takes ten minutes. Deciding what is safe to cache takes judgement. Notes on cache-aside, TTLs for market data, and why payment status never goes in the cache.",
    category: "Backend",
    tags: ["Redis", "Node.js", "Performance"],
    date: "Sep 2026",
    readTime: "5 min read",
    cover: "/blog/redis-cache.svg",
    content: [
      { type: "p", text: "Most of the APIs I worked on at TCS had a Redis cache in front of MongoDB: repeated analytics queries on the healthcare screens, market data on the finance dashboard, repeated reads on the learning platform. Getting Redis running is the easy part. The real work is deciding what is safe to serve from it." },
      { type: "h", text: "Cache-aside, in about ten lines" },
      { type: "p", text: "Check the cache first. On a miss, read from the database and store the result with an expiry. That is the whole pattern." },
      { type: "code", lang: "js", text: `async function getPortfolio(userId) {
  const key = "portfolio:" + userId;

  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const data = await Portfolio.findOne({ userId }).lean();
  await redis.set(key, JSON.stringify(data), "EX", 60);
  return data;
}` },
      { type: "h", text: "Choosing the TTL" },
      { type: "p", text: "Market data can be a few seconds old and nobody notices. A user's own data is different: after they change something, the next page load has to show it. So prices get a short expiry, repeated analytics queries get a longer one, and anything the user just edited is deleted from the cache on write." },
      { type: "code", lang: "js", text: `async function updateHolding(userId, id, payload) {
  await Holding.updateOne({ _id: id, userId }, payload);
  await redis.del("portfolio:" + userId); // next read rebuilds it
}` },
      { type: "h", text: "Key design" },
      { type: "list", items: [
        "Put the scope in the key: [[portfolio:{userId}]], [[report:{hash of filters}]]. If two users can hit the same key, one of them will see the other's data.",
        "Hash the filters for list and report queries so the key stays short and the same filters hit the same entry.",
        "Always set an expiry. A cache without one is a second database that nobody remembers to clean.",
      ] },
      { type: "h", text: "When I skip the cache" },
      { type: "list", items: [
        "Data that changes on almost every request. You'd spend more time invalidating than saving.",
        "Queries that are already fast with a proper index. Check that first (see the MongoDB post).",
        "Anything where a stale answer can cost money. Payment verification always goes to the source.",
      ] },
      { type: "p", text: "Measure before and after. If the database call already takes a few milliseconds, the cache is just one more thing that can break." },
    ],
  },

  {
    slug: "mongodb-explain-indexes",
    title: "Read explain() before you guess: the index work behind a ~35% faster read",
    excerpt:
      "On the learning platform I reworked MongoDB schemas, queries and indexes and cut data retrieval time by about 35%. This is the process, without the guessing.",
    category: "Database",
    tags: ["MongoDB", "Indexes", "Performance"],
    date: "Aug 2026",
    readTime: "7 min read",
    cover: "/blog/mongodb-index.svg",
    content: [
      { type: "p", text: "On Zinggerr LMS I spent time on the MongoDB Atlas side: schemas, queries and indexes. Together they cut data retrieval time by about 35%. None of it was clever. It came from looking at what the database was actually doing instead of assuming." },
      { type: "h", text: "Start with explain" },
      { type: "p", text: "Take the slow query and ask MongoDB how it ran it." },
      { type: "code", lang: "js", text: `db.payments
  .find({ userId: ObjectId("..."), status: "paid" })
  .sort({ createdAt: -1 })
  .explain("executionStats")` },
      { type: "p", text: "Two things to look at. First, the stage: [[COLLSCAN]] means it read the whole collection, [[IXSCAN]] means it used an index. Second, [[totalDocsExamined]] against [[nReturned]]. If it examined 50,000 documents to return 20, the query is doing 2,500 times the work it needs to." },
      { type: "h", text: "Build the index to match the query" },
      { type: "code", lang: "js", text: `db.payments.createIndex({ userId: 1, status: 1, createdAt: -1 })` },
      { type: "p", text: "The order of fields matters. A rule that works well: equality fields first (userId, status), then the sort field (createdAt), then any range filter. Run explain again and the examined count should drop close to the returned count." },
      { type: "h", text: "Schema choices that matter as much as indexes" },
      { type: "list", items: [
        "Embed data you always read together. Reference data that can grow without limit.",
        "List screens rarely need the full document. Use projection to return only the fields the screen shows.",
        "Use [[.lean()]] in Mongoose when you only read. It skips building full Mongoose documents.",
      ] },
      { type: "h", text: "Indexes are not free" },
      { type: "p", text: "Every index slows down writes and uses memory. If an index isn't used by any real query, drop it. The [[$indexStats]] aggregation stage shows how often each index is hit, which makes this an easy check rather than a debate." },
    ],
  },

  {
    slug: "redux-toolkit-big-tables",
    title: "Big tables in Redux Toolkit: keep the component dumb",
    excerpt:
      "The wealth dashboard had large financial tables that still had to feel quick on a phone. Server-side paging, normalised rows and memoised selectors did most of the work.",
    category: "Frontend",
    tags: ["React", "Redux Toolkit", "TypeScript"],
    date: "Jul 2026",
    readTime: "6 min read",
    cover: "/blog/redux-table.svg",
    content: [
      { type: "p", text: "The finance dashboard I built with Next.js and Redux Toolkit had a lot of tabular data: stocks, mutual funds, performance numbers. Tables like that get slow in two ways, too much data arriving and too much work on every render. Three habits kept it fast, including on phones." },
      { type: "h", text: "1. Don't load everything" },
      { type: "p", text: "Page and filter on the server. The API takes [[page]], [[limit]] and filters, and returns one page plus the total count. The same approach kept large analytics queries fast on the healthcare project. The browser never has to hold ten thousand rows it can't show anyway." },
      { type: "h", text: "2. Store rows normalised" },
      { type: "code", lang: "ts", text: `import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const adapter = createEntityAdapter<Holding>();

const holdingsSlice = createSlice({
  name: "holdings",
  initialState: adapter.getInitialState({ total: 0, page: 1 }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHoldings.fulfilled, (state, { payload }) => {
      adapter.setAll(state, payload.rows);
      state.total = payload.total;
    });
  },
});

const { selectAll: selectAllHoldings } =
  adapter.getSelectors((s: RootState) => s.holdings);` },
      { type: "p", text: "Entities keyed by id make single-row updates cheap. When one price changes you update one entity, not a whole array." },
      { type: "h", text: "3. Select, don't compute in render" },
      { type: "code", lang: "ts", text: `import { createSelector } from "@reduxjs/toolkit";

const selectTotalValue = createSelector(
  selectAllHoldings,
  (rows) => rows.reduce((sum, r) => sum + r.value, 0)
);` },
      { type: "p", text: "Totals and other derived numbers belong in memoised selectors. They only recompute when the rows change. Wrap row components in [[React.memo]] so one changed row doesn't re-render all the others." },
      { type: "h", text: "Mistakes worth avoiding" },
      { type: "list", items: [
        "Storing derived data in state. It goes out of sync with the rows it came from.",
        "Creating new objects or inline functions as props for every row. It defeats [[React.memo]].",
        "Doing formatting (currency, dates) inside a loop on every render. Format once, in a selector or a small memoised helper.",
      ] },
      { type: "p", text: "On a phone, load time and wasted re-renders are the difference between a dashboard that feels instant and one that doesn't. None of these changes is large, but they add up." },
    ],
  },
];

/* ---------- small pieces ---------- */

const Cover = ({ post, className = "" }) => (
  <div className={`relative overflow-hidden bg-gradient-to-br from-violet-950 via-zinc-950 to-cyan-950 ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <BookOpen className="h-10 w-10 text-violet-300/30" />
    </div>
    {post.cover && (
      <img
        src={post.cover}
        alt={post.title}
        loading="lazy"
        className="relative h-full w-full object-cover transition duration-700 group-hover:scale-105"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    )}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
  </div>
);

const Meta = ({ post }) => (
  <div className="flex items-center gap-3 text-[10px] text-zinc-500">
    <span className="flex items-center gap-1">
      <Clock className="h-3 w-3" />
      {post.readTime}
    </span>
    <span>•</span>
    <span>{post.date}</span>
  </div>
);

const Author = () => (
  <div className="flex items-center gap-2.5">
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-[9px] font-bold text-black">
      {author.initials}
    </div>
    <div className="text-[10px] leading-tight">
      <p className="font-medium text-zinc-300">{author.name}</p>
      <p className="text-zinc-600">{author.role}</p>
    </div>
  </div>
);

/* turns [[code]] inside text into <code> */
const Inline = ({ text }) =>
  text.split(/\[\[(.+?)\]\]/g).map((part, i) =>
    i % 2 ? (
      <code key={i} className="rounded-md border border-white/[0.08] bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-violet-200">
        {part}
      </code>
    ) : (
      <span key={i}>{part}</span>
    )
  );

const CodeBlock = ({ lang, text }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };
  return (
    <div className="my-7 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a10]">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.03] px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 font-mono text-[10px] uppercase text-zinc-500">{lang}</span>
        </div>
        <button onClick={copy} className="flex items-center gap-1.5 text-[10px] text-zinc-500 transition hover:text-white">
          {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-zinc-300">
        <code>{text}</code>
      </pre>
    </div>
  );
};

const Block = ({ block }) => {
  switch (block.type) {
    case "h":
      return <h2 className="mb-3 mt-12 text-2xl font-semibold tracking-tight text-white">{block.text}</h2>;
    case "p":
      return <p className="mt-5 text-[15px] leading-8 text-zinc-400"><Inline text={block.text} /></p>;
    case "list":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-8 text-zinc-400">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
              <span><Inline text={item} /></span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-9 border-l-2 border-violet-400/60 pl-6 text-xl font-medium leading-9 text-zinc-200">
          {block.text}
        </blockquote>
      );
    case "code":
      return <CodeBlock lang={block.lang} text={block.text} />;
    default:
      return null;
  }
};

/* ---------- article reader (opens over the page) ---------- */

const Reader = ({ post, onClose, onOpen }) => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
    setProgress(0);
  }, [post.slug]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const onScroll = (e) => {
    const el = e.currentTarget;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
  };

  const goContact = () => {
    onClose();
    setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 120);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="absolute left-0 top-0 z-30 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400" style={{ width: `${progress}%` }} />

      <button
        onClick={onClose}
        aria-label="Close article"
        className="fixed right-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-zinc-300 backdrop-blur-xl transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-white sm:right-8 sm:top-6"
      >
        <X className="h-4 w-4" />
      </button>

      <div ref={scrollRef} onScroll={onScroll} className="h-full overflow-y-auto">
        <article className="mx-auto max-w-3xl px-5 pb-24 pt-20 sm:pt-24">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-[9px] font-semibold tracking-wider text-violet-300">
              {post.category.toUpperCase()}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-zinc-500">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
            <span className="text-[11px] text-zinc-600">{post.date}</span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-base leading-8 text-zinc-500">{post.excerpt}</p>

          <div className="mt-7 flex items-center gap-3 border-y border-white/[0.07] py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-[11px] font-bold text-black">
              {author.initials}
            </div>
            <div className="text-xs">
              <p className="font-medium text-zinc-200">{author.name}</p>
              <p className="text-zinc-600">{author.role}</p>
            </div>
          </div>

          {post.cover && (
            <img
              src={post.cover}
              alt={post.title}
              className="mt-9 w-full rounded-2xl border border-white/[0.08]"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          )}

          <div className="mt-6">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-t border-white/[0.07] pt-6">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] text-zinc-500">{t}</span>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-[10px] font-semibold tracking-[0.3em] text-violet-400">KEEP READING</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {more.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => onOpen(p)}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-left transition hover:border-violet-400/30 hover:bg-white/[0.04]"
                >
                  <span className="text-[9px] tracking-wider text-violet-300">{p.category.toUpperCase()}</span>
                  <h3 className="mt-2 text-sm font-semibold leading-snug text-zinc-200 group-hover:text-white">{p.title}</h3>
                  <span className="mt-4 flex items-center gap-1 text-[10px] text-zinc-500 group-hover:text-violet-300">
                    Read <ArrowUpRight className="h-3 w-3" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/[0.07] bg-gradient-to-r from-violet-500/[0.07] to-cyan-500/[0.05] p-6">
            <p className="text-sm font-medium text-zinc-200">Working on something similar?</p>
            <p className="mt-1 text-xs text-zinc-500">I'm happy to talk about queues, caching, databases or dashboards.</p>
            <button onClick={goContact} className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black">
              Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

/* ---------- blog section ---------- */

const Blog = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q ||
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)))
    );
  }, [category, query]);

  // lock page scroll while an article is open
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  const showFeatured = category === "All" && !query.trim() && filtered.length > 1;
  const featured = showFeatured ? filtered[0] : null;
  const rest = showFeatured ? filtered.slice(1) : filtered;

  return (
    <>
      <section id="blog" className="relative z-10 mx-auto max-w-7xl px-5 py-32 lg:px-8">
        <div className="pointer-events-none absolute left-[5%] top-[10%] h-[320px] w-[320px] rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Header */}
        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-violet-400">
              <PenLine className="h-3.5 w-3.5" /> THE BLOG
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Notes from the <span className="text-zinc-600">codebase.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
              Short, practical write-ups about things I've actually built: queues,
              caching, databases and UI that holds up with real data. Written so
              I remember them, shared in case they save you an afternoon.
            </p>
          </div>

          <div className="flex w-full items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 lg:w-72">
            <Search className="h-4 w-4 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts or tags"
              className="w-full bg-transparent text-xs text-white outline-none placeholder:text-zinc-600"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="relative mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-[11px] font-medium transition-all ${
                category === c
                  ? "border-violet-400/40 bg-violet-500/15 text-violet-200"
                  : "border-white/[0.07] text-zinc-500 hover:border-white/20 hover:text-zinc-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured */}
        {featured && (
          <article
            onClick={() => setActive(featured)}
            className="group relative mt-10 grid cursor-pointer overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] transition-all duration-500 hover:border-violet-400/30 hover:bg-white/[0.04] lg:grid-cols-[1.2fr_1fr]"
          >
            <Cover post={featured} className="h-64 sm:h-80 lg:h-full lg:min-h-[360px]" />

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-[9px] font-semibold tracking-wider text-violet-300">
                  LATEST · {featured.category.toUpperCase()}
                </span>
                <Meta post={featured} />
              </div>

              <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-violet-300 sm:text-3xl">
                {featured.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">{featured.excerpt}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {featured.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[9px] text-zinc-500">{t}</span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between">
                <Author />
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white transition group-hover:text-violet-300">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </article>
        )}

        {/* Grid */}
        <div className="relative mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.slug}
              onClick={() => setActive(post)}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.04]"
            >
              <Cover post={post} className="aspect-[1200/630] w-full" />

              <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[9px] font-semibold tracking-wider text-violet-300 backdrop-blur-xl">
                {post.category}
              </span>

              <div className="flex flex-1 flex-col p-6">
                <Meta post={post} />

                <h3 className="mt-4 text-lg font-semibold leading-snug transition duration-300 group-hover:text-violet-300">
                  {post.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">{post.excerpt}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[9px] text-zinc-500">{t}</span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <Author />
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="relative mt-16 text-center text-sm text-zinc-600">
            No posts match that search. Try another tag.
          </p>
        )}
      </section>

      {active && <Reader post={active} onClose={() => setActive(null)} onOpen={setActive} />}
    </>
  );
};

export default Blog;