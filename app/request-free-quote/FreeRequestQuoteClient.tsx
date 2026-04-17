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
  minLen: number;
  maxLen: number;
};

type Badge =
  | { kind: "image"; src: string; alt: string }
  | { kind: "iconText"; src: string; alt: string; line1: string; line2: string };

type FieldErrors = {
  fullName?: string;
  email?: string;
  mobile?: string;
  service?: string;
};

const COUNTRY_OPTIONS: readonly CountryOption[] = [
  { code: "+91", flag: "🇮🇳", label: "India", minLen: 10, maxLen: 10 },
  { code: "+1", flag: "🇺🇸", label: "United States", minLen: 10, maxLen: 10 },
  { code: "+44", flag: "🇬🇧", label: "United Kingdom", minLen: 10, maxLen: 11 },
  { code: "+971", flag: "🇦🇪", label: "United Arab Emirates", minLen: 8, maxLen: 9 },
  { code: "+61", flag: "🇦🇺", label: "Australia", minLen: 9, maxLen: 9 },
  { code: "+49", flag: "🇩🇪", label: "Germany", minLen: 10, maxLen: 11 },
  { code: "+33", flag: "🇫🇷", label: "France", minLen: 9, maxLen: 9 },
  { code: "+81", flag: "🇯🇵", label: "Japan", minLen: 10, maxLen: 10 },
  { code: "+86", flag: "🇨🇳", label: "China", minLen: 11, maxLen: 11 },
  { code: "+65", flag: "🇸🇬", label: "Singapore", minLen: 8, maxLen: 8 },
  { code: "+966", flag: "🇸🇦", label: "Saudi Arabia", minLen: 9, maxLen: 9 },
  { code: "+974", flag: "🇶🇦", label: "Qatar", minLen: 8, maxLen: 8 },
  { code: "+60", flag: "🇲🇾", label: "Malaysia", minLen: 9, maxLen: 10 },
  { code: "+27", flag: "🇿🇦", label: "South Africa", minLen: 9, maxLen: 9 },
  { code: "+64", flag: "🇳🇿", label: "New Zealand", minLen: 8, maxLen: 10 },
] as const;

/* Full catalog of services offered by mTouch Labs (grouped for clarity) */
const SERVICES: readonly { group: string; items: readonly string[] }[] = [
  {
    group: "Mobile App Development",
    items: [
      "Mobile App Development",
      "iOS App Development",
      "Android App Development",
      "Flutter App Development",
      "React Native App Development",
      "Hybrid App Development",
      "Cross-Platform App Development",
      "iPad App Development",
      "Progressive Web App (PWA) Development",
      "Native App Development",
    ],
  },
  {
    group: "Web Development",
    items: [
      "Web Development",
      "Web Application Development",
      "Custom Software Development",
      "Enterprise Application Development",
      "SaaS Development",
      "WordPress Development",
      "Shopify Development",
      "Magento Development",
      "PHP Development",
      "Custom CMS Development",
      "E-commerce Development",
    ],
  },
  {
    group: "AI & Emerging Tech",
    items: [
      "AI Development",
      "Generative AI Development",
      "Machine Learning Development",
      "IoT Development",
      "Blockchain Development",
    ],
  },
  {
    group: "Design & UX",
    items: [
      "UI/UX Design",
      "Product Design",
      "Mobile App Design",
      "Design System Development",
      "360-Degree Photography",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "Cloud Services",
      "AWS Cloud Services",
      "Cloud Migration Services",
      "Cloud Managed Services",
      "Cloud Security Services",
      "DevOps Consulting Services",
    ],
  },
  {
    group: "Salesforce",
    items: [
      "Salesforce Consulting",
      "Salesforce Implementation",
      "Salesforce Integration",
      "Salesforce Sales Cloud",
      "Salesforce Lightning Migration",
      "Custom CRM Development",
    ],
  },
  {
    group: "Digital Marketing",
    items: [
      "Digital Marketing",
      "SEO Services",
      "Content Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "PPC Advertising",
      "Performance Marketing",
      "App Store Optimization (ASO)",
      "Conversion Rate Optimization (CRO)",
    ],
  },
  {
    group: "Quality & Security",
    items: [
      "Quality Assurance & Testing",
      "Cyber Security Services",
      "App Maintenance & Support",
    ],
  },
  {
    group: "Industry Solutions",
    items: [
      "E-commerce App Development",
      "Food Delivery App Development",
      "Grocery Delivery App Development",
      "On-Demand App Development",
      "Real Estate App Development",
      "Hotel Booking App Development",
      "Tickets Booking App Development",
      "Gaming App Development",
      "OTT App Development",
      "E-learning App Development",
      "Social Media App Development",
      "Diagnostic / Healthcare App",
      "Chef / Restaurant Management App",
      "Car Wash App Development",
      "Milk Delivery App Development",
      "Sports & Fitness App Development",
    ],
  },
  {
    group: "Other",
    items: ["IT Services & Digital Transformation", "Other / Not Sure Yet"],
  },
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
   Validators
   ───────────────────────────────────────────── */
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// Basic throw-away disposable-email guard (light touch)
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "10minutemail.com",
  "tempmail.com",
  "trashmail.com",
  "guerrillamail.com",
  "yopmail.com",
]);
const NAME_RE = /^[A-Za-z][A-Za-z\s.'-]{1,}$/;

function validateFullName(v: string): string | undefined {
  const t = v.trim();
  if (!t) return "Full name is required.";
  if (t.length < 2) return "Name must be at least 2 characters.";
  if (t.length > 80) return "Name must be under 80 characters.";
  if (!NAME_RE.test(t))
    return "Only letters, spaces, apostrophes, dots and hyphens are allowed.";
  if (!/\s/.test(t) && t.length < 3)
    return "Please enter your full name.";
  return undefined;
}

function validateEmail(v: string): string | undefined {
  const t = v.trim().toLowerCase();
  if (!t) return "Email is required.";
  if (t.length > 120) return "Email is too long.";
  if (!EMAIL_RE.test(t)) return "Please enter a valid email address.";
  const domain = t.split("@")[1];
  if (domain && DISPOSABLE_DOMAINS.has(domain))
    return "Please use a valid business or personal email.";
  return undefined;
}

function validateMobile(v: string, country: CountryOption): string | undefined {
  const digits = v.replace(/\D/g, "");
  if (!digits) return "Mobile number is required.";
  if (digits.length < country.minLen)
    return `Please enter a valid ${country.label} number (${country.minLen}${
      country.minLen === country.maxLen ? "" : `–${country.maxLen}`
    } digits).`;
  if (digits.length > country.maxLen)
    return `Number looks too long for ${country.label} (max ${country.maxLen} digits).`;
  if (/^0+$/.test(digits)) return "Please enter a valid phone number.";
  return undefined;
}

function validateService(v: string): string | undefined {
  if (!v) return "Please choose a service.";
  return undefined;
}

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

  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMsg, setErrorMsg] = useState("");

  /* ── Turnstile captcha (Cloudflare) ─────────────────────── */
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!SITE_KEY) {
      console.warn("[request-free-quote] NEXT_PUBLIC_TURNSTILE_SITE_KEY not set");
      return;
    }

    let attempts = 0;
    let timer: number | undefined;

    const tryRender = () => {
      attempts++;
      const w = window as any;
      if (!turnstileRef.current) return;
      if (!w.turnstile || !w.turnstile.render) {
        if (attempts < 40) {
          timer = window.setTimeout(tryRender, 300);
        }
        return;
      }
      // Avoid double-rendering across HMR / StrictMode
      if (turnstileWidgetId.current !== null) return;
      try {
        turnstileWidgetId.current = w.turnstile.render(turnstileRef.current, {
          sitekey: SITE_KEY,
          theme: "light",
          size: "normal",
          callback: (token: string) => {
            setCaptchaToken(token || "");
          },
          "expired-callback": () => setCaptchaToken(""),
          "error-callback": () => setCaptchaToken(""),
        });
      } catch (err) {
        console.error("Turnstile render error:", err);
      }
    };

    tryRender();
    return () => {
      if (timer) window.clearTimeout(timer);
      const w = window as any;
      if (w.turnstile && turnstileWidgetId.current !== null) {
        try {
          w.turnstile.remove(turnstileWidgetId.current);
        } catch {
          /* ignore */
        }
        turnstileWidgetId.current = null;
      }
    };
  }, []);

  const resetCaptcha = useCallback(() => {
    const w = window as any;
    setCaptchaToken("");
    if (w.turnstile && turnstileWidgetId.current !== null) {
      try {
        w.turnstile.reset(turnstileWidgetId.current);
      } catch {
        /* ignore */
      }
    }
  }, []);

  const selectedCountry = useMemo(
    () => COUNTRY_OPTIONS.find((c) => c.code === countryCode) ?? COUNTRY_OPTIONS[0],
    [countryCode]
  );

  /* ── Per-field validators that run on blur / change after touched ── */
  const runValidation = useCallback(
    (overrides?: Partial<{ fullName: string; email: string; mobile: string; service: string; countryCode: string }>) => {
      const values = {
        fullName: overrides?.fullName ?? fullName,
        email: overrides?.email ?? email,
        mobile: overrides?.mobile ?? mobile,
        service: overrides?.service ?? service,
        countryCode: overrides?.countryCode ?? countryCode,
      };
      const country =
        COUNTRY_OPTIONS.find((c) => c.code === values.countryCode) ??
        COUNTRY_OPTIONS[0];

      const errors: FieldErrors = {
        fullName: validateFullName(values.fullName),
        email: validateEmail(values.email),
        mobile: validateMobile(values.mobile, country),
        service: validateService(values.service),
      };
      return errors;
    },
    [fullName, email, mobile, service, countryCode]
  );

  // Re-run validation whenever a touched field changes
  useEffect(() => {
    if (Object.keys(touched).length === 0) return;
    const errs = runValidation();
    const filtered: FieldErrors = {};
    (Object.keys(errs) as (keyof FieldErrors)[]).forEach((k) => {
      if (touched[k] && errs[k]) filtered[k] = errs[k];
    });
    setFieldErrors(filtered);
  }, [fullName, email, mobile, service, countryCode, touched, runValidation]);

  const markTouched = (name: keyof FieldErrors) =>
    setTouched((t) => ({ ...t, [name]: true }));

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus(null);
      setErrorMsg("");

      // Mark everything touched so all errors show
      setTouched({ fullName: true, email: true, mobile: true, service: true });
      const errs = runValidation();
      const hasErrors = Object.values(errs).some(Boolean);
      if (hasErrors) {
        setFieldErrors(errs);
        setStatus("error");
        setErrorMsg("Please fix the highlighted fields and try again.");
        return;
      }

      // Captcha presence check (token required if sitekey configured)
      const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
      if (siteKey && !captchaToken) {
        setStatus("error");
        setErrorMsg("Please complete the captcha verification.");
        return;
      }

      setSubmitting(true);
      try {
        const payload = {
          name: fullName.trim(),
          email: email.trim().toLowerCase(),
          countryCode: countryCode.replace("+", ""),
          mobile: mobile.replace(/\D/g, ""),
          service,
          source: "request-free-quote-page",
          page: typeof window !== "undefined" ? window.location.href : "",
          "cf-turnstile-response": captchaToken,
        };

        const res = await fetch("/api/request-quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        let json: any = null;
        try {
          json = await res.json();
        } catch {
          /* ignore */
        }

        if (!res.ok) {
          throw new Error((json && json.error) || "Request failed");
        }

        setStatus("success");
        setFullName("");
        setEmail("");
        setMobile("");
        setService("");
        setTouched({});
        setFieldErrors({});
        resetCaptcha();
      } catch (err: any) {
        console.error(err);
        setStatus("error");
        setErrorMsg(
          (err && err.message) ||
            "Could not send your request. Please try again."
        );
        resetCaptcha();
      } finally {
        setSubmitting(false);
      }
    },
    [fullName, email, countryCode, mobile, service, captchaToken, runValidation, resetCaptcha]
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
            {/* ── Full Name ── */}
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
                className={`rq-input ${
                  fieldErrors.fullName ? "rq-invalid" : ""
                }`}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onBlur={() => markTouched("fullName")}
                aria-invalid={!!fieldErrors.fullName}
                aria-describedby={fieldErrors.fullName ? "err-fullName" : undefined}
                maxLength={80}
                required
              />
              {fieldErrors.fullName && (
                <div id="err-fullName" className="rq-field-err">
                  {fieldErrors.fullName}
                </div>
              )}
            </div>

            {/* ── Email ── */}
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
                className={`rq-input ${fieldErrors.email ? "rq-invalid" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => markTouched("email")}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "err-email" : undefined}
                maxLength={120}
                required
              />
              {fieldErrors.email && (
                <div id="err-email" className="rq-field-err">
                  {fieldErrors.email}
                </div>
              )}
            </div>

            {/* ── Mobile ── */}
            <div className="rq-field">
              <label htmlFor="phoneNumber" className="rq-label">
                Mobile Number <span className="rq-required">*</span>
              </label>
              <div className="rq-phone-row">
                <CountryCodeSelect
                  value={countryCode}
                  onChange={(v) => {
                    setCountryCode(v);
                    // re-trigger mobile validation if already touched
                    if (touched.mobile) markTouched("mobile");
                  }}
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
                  minLength={selectedCountry.minLen}
                  maxLength={selectedCountry.maxLen}
                  className={`rq-input ${
                    fieldErrors.mobile ? "rq-invalid" : ""
                  }`}
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  onBlur={() => markTouched("mobile")}
                  aria-invalid={!!fieldErrors.mobile}
                  aria-describedby={fieldErrors.mobile ? "err-mobile" : undefined}
                  required
                />
              </div>
              {fieldErrors.mobile && (
                <div id="err-mobile" className="rq-field-err">
                  {fieldErrors.mobile}
                </div>
              )}
            </div>

            {/* ── Service ── */}
            <div className="rq-field">
              <label htmlFor="service" className="rq-label">
                Service Interested In <span className="rq-required">*</span>
              </label>
              <div className="rq-select-wrap">
                <select
                  id="service"
                  name="service"
                  className={`rq-select ${
                    fieldErrors.service ? "rq-invalid" : ""
                  }`}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  onBlur={() => markTouched("service")}
                  aria-invalid={!!fieldErrors.service}
                  aria-describedby={fieldErrors.service ? "err-service" : undefined}
                  required
                >
                  <option value="">Select Service Interested</option>
                  {SERVICES.map((group) => (
                    <optgroup key={group.group} label={group.group}>
                      {group.items.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <span className="rq-select-chevron" aria-hidden />
              </div>
              {fieldErrors.service && (
                <div id="err-service" className="rq-field-err">
                  {fieldErrors.service}
                </div>
              )}
            </div>

            {/* ── Cloudflare Turnstile captcha ── */}
            <div className="rq-captcha-wrap">
              <div ref={turnstileRef} className="rq-turnstile" />
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
  <span className="rq-headline-row" style={{ whiteSpace: "nowrap" }}>
    Leading <span className="rq-headline-blue">AI Development</span>
  </span>
  <br />
  <span className="rq-headline-block" style={{ whiteSpace: "nowrap" }}>
    Company for Next-Gen
  </span>
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