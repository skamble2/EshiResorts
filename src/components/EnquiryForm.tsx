"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/content/site";

// Free, no-backend form delivery via Web3Forms. Replace the access key with the
// one from web3forms.com (it emails submissions straight to admin@eshiresorts.com).
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "w-full rounded-lg border border-sand-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold-500";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (WEB3FORMS_KEY.startsWith("REPLACE")) {
      // No key configured yet - fall back to a pre-filled WhatsApp message.
      const msg = `Enquiry from ${data.get("name")} (${data.get(
        "phone"
      )}): ${data.get("message")}`;
      window.open(whatsappLink(msg), "_blank");
      return;
    }

    setStatus("sending");
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "New enquiry from eshiresorts.com");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl bg-forest-900 p-8 text-center text-sand-50">
        <p className="font-serif text-2xl">Thank you!</p>
        <p className="mt-3 text-sm text-sand-200/80">
          We&apos;ve received your enquiry and will get back to you shortly. For
          anything urgent, reach us at{" "}
          <a href={`tel:${site.phoneRaw}`} className="text-gold-400">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} />
        <input
          name="phone"
          required
          placeholder="Phone number"
          className={field}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email (optional)"
        className={field}
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell us about your stay - dates, guests, occasion…"
        className={field}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Enquiry"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please WhatsApp or call us instead.
        </p>
      )}
    </form>
  );
}
