"use client";

import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./style.css";

/* ─────────────────────────────────────────────
   Types & Data
   ───────────────────────────────────────────── */
type CountryOption = {
  code: string;
  flag: string;
  label: string;
};

type Badge =
  | { kind: "image"; src: string; alt: string }
  | { kind: "iconText"; src: string; alt: string; line1: string; line2: string };

const COUNTRY_OPTIONS: readonly CountryOption[] = [
  { code: "+91", flag: "🇮🇳", label: "India" },
  { code: "+1", flag: "🇺🇸", label: "United States" },
  { code: "+44", flag: "🇬🇧", label: "United Kingdom" },
  { code: "+971", flag: "🇦🇪", label: "United Arab Emirates" },
  { code: "+61", flag: "🇦🇺", label: "Australia" },
  { code: "+49", flag: "🇩🇪", label: "Germany" },
  { code: "+33", flag: "🇫🇷", label: "France" },
  { code: "+81", flag: "🇯🇵", label: "Japan" },
  { code: "+86", flag: "🇨🇳", label: "China" },
  { code: "+65", flag: "🇸🇬", label: "Singapore" },
  { code: "+966", flag: "🇸🇦", label: "Saudi Arabia" },
  { code: "+974", flag: "🇶🇦", label: "Qatar" },
  { code: "+60", flag: "🇲🇾", label: "Malaysia" },
  { code: "+27", flag: "🇿🇦", label: "South Africa" },
  { code: "+64", flag: "🇳🇿", label: "New Zealand" },
] as const;
const STATS = [
  { end: 1500, suffix: "+", label: "Projects delivered" },
  { end: 20, suffix: "%", label: "Global Reach" },
  { end: 14, suffix: "+", label: "Years of Experience" },
] as const;

const BADGES: readonly Badge[] = [
  {
    kind: "image",
    src: "/images/brand-logo/nasscom.svg",
    alt: "NASSCOM Award Winner 2026",
  },
  {
    kind: "iconText",
    src: "/images/home/awards/App development.png",
    alt: "App Development Company of the Year",
    line1: "App Development",
    line2: "Company of the Year",
  },
  {
    kind: "iconText",
    src: "/images/home/awards/Award winning designers.png",
    alt: "Award Winning Designers",
    line1: "AWARD WINNING",
    line2: "DESIGNERS",
  },
] as const;

const CLIENT_LOGOS = [
  { src: "/images/home/tech/kezad-logo.png", alt: "Kezad Group" },
  { src: "/images/home/tech/kohere.png", alt: "Kohere" },
  { src: "/images/home/tech/aduri.png", alt: "Aburi Group" },
  { src: "/images/home/tech/image1.png", alt: "ADJD" },
  { src: "/images/home/tech/image3.png", alt: "Government of Telangana" },
  { src: "/images/home/tech/zefsci.png", alt: "ZetSci" },
  { src: "/images/home/tech/uptick.png", alt: "UaTiK" },
  { src: "/images/home/tech/saachi.png", alt: "Sacchi" },
  { src: "/images/home/tech/drpicklogo.png", alt: "Dr.Pick" },
  { src: "/images/home/tech/image2.png", alt: "ZuppiBuy" },
] as const;

/* ─────────────────────────────────────────────
   CountUp — animated number with IntersectionObserver
   ───────────────────────────────────────────── */
const nf = new Intl.NumberFormat("en-US");
const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);

function CountUp({
  end,
  suffix = "",
  durationMs = 2200,
  delayMs = 0,
}: {
  end: number;
  suffix?: string;
  durationMs?: number;
  delayMs?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const start = () => {
      if (started.current) return;
      started.current = true;

      if (reduced) {
        setValue(end);
        return;
      }

      let raf = 0;
      let to = 0;

      const run = () => {
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - t0) / durationMs, 1);
          setValue(Math.round(easeOutCubic(p) * end));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      };

      if (delayMs > 0) to = window.setTimeout(run, delayMs);
      else run();
    };

    // Prefer IntersectionObserver; fallback to immediate start
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      start();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(ref.current);

    return () => io.disconnect();
  }, [end, durationMs, delayMs]);

  return (
    <span ref={ref}>
      {nf.format(value)}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Country Code Select
   ───────────────────────────────────────────── */
function CountryCodeSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly CountryOption[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = useMemo(
    () => options.find((o) => o.code === value) ?? options[0],
    [value, options]
  );

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="rq-code-wrap">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="rq-code-btn"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="rq-code-inner">
          <span className="rq-flag" aria-hidden>{selected.flag}</span>
          <span>{selected.code}</span>
        </span>
        <span className={`rq-chevron ${open ? "rq-chevron-open" : ""}`} />
      </button>

      {open && (
        <div role="listbox" className="rq-code-dropdown">
          {options.map((opt) => {
            const sel = opt.code === selected.code;
            return (
              <button
                key={opt.code}
                type="button"
                role="option"
                aria-selected={sel}
                className={`rq-code-option ${sel ? "rq-code-option-sel" : ""}`}
                onClick={() => {
                  onChange(opt.code);
                  setOpen(false);
                }}
              >
                <span className="rq-code-option-inner">
                  <span className="rq-flag" aria-hidden>{opt.flag}</span>
                  <span>
                    <span className="rq-code-option-label">{opt.label}</span>
                    <span className="rq-code-option-code">{opt.code}</span>
                  </span>
                </span>
                {sel && <span className="rq-code-option-check">Selected</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Stat Card
   ───────────────────────────────────────────── */
function StatCard({
  end,
  suffix,
  label,
  idx,
}: {
  end: number;
  suffix: string;
  label: string;
  idx: number;
}) {
  return (
    <div
      className="rq-stat-card"
      style={{ animationDelay: `${0.15 + idx * 0.12}s` }}
    >
      <div className="rq-stat-number">
        <CountUp end={end} suffix={suffix} delayMs={idx * 180} />
      </div>
      <div className="rq-stat-label">{label}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */
export function FreeRequestQuoteClient() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus(null);
      setErrorMsg("");

      if (!fullName.trim() || !email.trim() || !mobile.trim() || !service) {
        setStatus("error");
        setErrorMsg("Please fill in all required fields.");
        return;
      }

      setSubmitting(true);
      try {
        const res = await fetch("/api/request-quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fullName.trim(),
            email: email.trim(),
            countryCode: countryCode.replace("+", ""),
            mobile: mobile.trim(),
            service,
          }),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("success");
        setFullName("");
        setEmail("");
        setMobile("");
        setService("");
      } catch (err) {
        console.error(err);
        setStatus("error");
        setErrorMsg("Could not send your request. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
    [fullName, email, countryCode, mobile, service]
  );

  // Duplicate logos for seamless marquee
  const marqueeLogos = useMemo(
    () => [...CLIENT_LOGOS, ...CLIENT_LOGOS],
    []
  );

  return (
    <main className="rq-main">
      <div className="rq-blob rq-blob-1" aria-hidden />
      <div className="rq-blob rq-blob-2" aria-hidden />

      <div className="rq-grid">
        {/* ───── Left: Form card ───── */}
        <div className="rq-form-card">
          <h1 className="rq-form-title">Start Your Project Today</h1>

          <form className="rq-form" onSubmit={handleSubmit} noValidate>
            <div className="rq-field">
              <label htmlFor="fullName" className="rq-label">
                Full Name <span className="rq-required">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter Your Full Name"
                autoComplete="name"
                className="rq-input"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="rq-field">
              <label htmlFor="email" className="rq-label">
                Email <span className="rq-required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                autoComplete="email"
                className="rq-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="rq-field">
              <label htmlFor="phoneNumber" className="rq-label">
                Mobile Number <span className="rq-required">*</span>
              </label>
              <div className="rq-phone-row">
                <CountryCodeSelect
                  value={countryCode}
                  onChange={setCountryCode}
                  options={COUNTRY_OPTIONS}
                />
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="0000-0000-00"
                  pattern="[0-9]{6,15}"
                  minLength={6}
                  maxLength={15}
                  className="rq-input"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="rq-field">
              <label htmlFor="service" className="rq-label">
                Service Interested In <span className="rq-required">*</span>
              </label>
              <div className="rq-select-wrap">
                <select
                  id="service"
                  name="service"
                  className="rq-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="">Select Service Interested</option>
                  <option value="AI Development">AI Development</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Cloud Services">Cloud Services</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
                <span className="rq-select-chevron" aria-hidden />
              </div>
            </div>

            {status === "success" && (
              <div className="rq-status rq-status-ok" role="status">
                ✓ Thanks! Your quote request has been sent. We&apos;ll reach out shortly.
              </div>
            )}
            {status === "error" && (
              <div className="rq-status rq-status-err" role="alert">
                {errorMsg || "Something went wrong."}
              </div>
            )}

            <button
              type="submit"
              className="rq-submit"
              disabled={submitting}
              aria-busy={submitting}
            >
              <span className="rq-submit-label">
                {submitting ? "Sending..." : "Request Quote"}
              </span>
              <span className="rq-submit-shine" aria-hidden />
            </button>
          </form>

          {/* Badges */}
          <div className="rq-badges">
            {BADGES.map((b, i) =>
              b.kind === "image" ? (
                <div
                  key={b.src}
                  className="rq-badge rq-badge-image"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <img src={b.src} alt={b.alt} className="rq-badge-img-full" />
                </div>
              ) : (
                <div
                  key={b.src}
                  className="rq-badge rq-badge-icontext"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <img src={b.src} alt={b.alt} className="rq-badge-icon" />
                  <div className="rq-badge-text">
                    <span className="rq-badge-line1">{b.line1}</span>
                    <span className="rq-badge-line2">{b.line2}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* ───── Right: Content ───── */}
        <div className="rq-right">
          <div className="rq-logo-wrap">
            <img
              src="/images/logo-black.svg"
              alt="mTouch Labs"
              className="rq-logo"
            />
          </div>

          <h2 className="rq-headline">
            <span className="rq-headline-row">
              Leading <span className="rq-headline-blue">AI Development</span>
            </span>
            <span className="rq-headline-block">Company for Next-Gen</span>
          </h2>

          <p className="rq-subtext">
            Turn your idea into a scalable digital product with expert guidance
            from mTouch Labs.
          </p>

          <div className="rq-stats-section">
            <h3 className="rq-section-label">Delivering Measurable Outcomes</h3>
            <div className="rq-stats-grid">
              {STATS.map((s, i) => (
                <StatCard
                  key={s.label}
                  end={s.end}
                  suffix={s.suffix}
                  label={s.label}
                  idx={i}
                />
              ))}
            </div>
          </div>

          <div className="rq-clients-section">
            <h3 className="rq-section-label-blue">
              Already Helped Business Professional At
            </h3>
            <div className="rq-marquee" aria-hidden="false">
              <div className="rq-marquee-track">
                {marqueeLogos.map((l, i) => (
                  <div key={`${l.src}-${i}`} className="rq-marquee-item">
                    <img src={l.src} alt={l.alt} className="rq-client-logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
