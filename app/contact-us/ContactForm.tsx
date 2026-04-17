"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  mobile: string;
  company: string;
  subject: string;
  interest: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  countryCode: "91",
  mobile: "",
  company: "",
  subject: "",
  interest: "",
  message: "",
};

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Partial lead capture — fires on blur of name/email/mobile fields
  const handlePartialLead = async () => {
    if (!formData.name || (!formData.email && !formData.mobile)) return;
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ ...formData, partial: true }),
        headers: { "Content-Type": "application/json" },
      });
    } catch {
      // fire-and-forget, don't block UX
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        // Fire Google Analytics generate_lead event
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "generate_lead", {
            event_category: "form",
            event_label: "contact_form",
          });
        }

        // Redirect to thank-you page
        router.push("/thank-you");
      } else {
        const data = await res.json();
        setError(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="name"
        placeholder="Your Name *"
        value={formData.name}
        onChange={handleChange}
        onBlur={handlePartialLead}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Work Email *"
        value={formData.email}
        onChange={handleChange}
        onBlur={handlePartialLead}
        required
      />

      <div>
        <input
          type="text"
          name="countryCode"
          placeholder="+91"
          value={formData.countryCode}
          onChange={handleChange}
          style={{ width: "70px" }}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          onBlur={handlePartialLead}
        />
      </div>

      <input
        type="text"
        name="company"
        placeholder="Company Name (Optional)"
        value={formData.company}
        onChange={handleChange}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject (Optional)"
        value={formData.subject}
        onChange={handleChange}
      />

      <select
        name="interest"
        value={formData.interest}
        onChange={handleChange}
      >
        <option value="">Interested In (Optional)</option>
        <option value="SaaS Development">SaaS Development</option>
        <option value="Cloud Architecture">Cloud Architecture</option>
        <option value="AI / ML Solutions">AI / ML Solutions</option>
        <option value="Mobile App Development">Mobile App Development</option>
        <option value="Enterprise Software">Enterprise Software</option>
        <option value="Digital Transformation">Digital Transformation</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your project..."
        value={formData.message}
        onChange={handleChange}
        rows={5}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}