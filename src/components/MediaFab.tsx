"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";

const VIDEO_SRC = "/videos/eshi-home.mp4";

/**
 * Floating media hub (bottom-left): a small popup offering the resort video
 * (play in a modal / download) and the brochure (view / download).
 * Nothing autoplays - the video only starts after the guest clicks Play.
 */
export default function MediaFab() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Video and brochure"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest-800 text-gold-400 shadow-xl ring-1 ring-forest-700/50 transition-transform hover:scale-110"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
            <rect x="3" y="5" width="13" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="m16 10 5-3v10l-5-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="m8.5 9.5 4 2.5-4 2.5v-5Z" fill="currentColor" />
          </svg>
        )}
      </button>

      {/* Popup card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-22 left-5 z-50 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-sand-200"
          >
            <div className="bg-forest-900 px-5 py-3">
              <p className="text-sm font-semibold text-sand-50">Explore Eshi Resorts</p>
            </div>

            <div className="divide-y divide-sand-200">
              {/* Video */}
              <div className="flex items-center gap-3 px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand-100 text-forest-800">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m10 8.5 5 3.5-5 3.5v-7Z" fill="currentColor" />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-forest-900">Resort Video</p>
                  <div className="mt-1 flex gap-3 text-xs font-semibold">
                    <button
                      onClick={() => {
                        setPlaying(true);
                        setOpen(false);
                      }}
                      className="text-gold-600 hover:text-gold-500"
                    >
                      Play
                    </button>
                    <a
                      href={VIDEO_SRC}
                      download="eshi-resorts-video.mp4"
                      className="text-stone-soft hover:text-forest-800"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>

              {/* Brochure */}
              <div className="flex items-center gap-3 px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand-100 text-forest-800">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                    <path d="M6 3.5h8L19 8.5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M14 3.5v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-forest-900">Brochure</p>
                  <div className="mt-1 flex gap-3 text-xs font-semibold">
                    <a
                      href={site.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-600 hover:text-gold-500"
                    >
                      View
                    </a>
                    <a
                      href={site.brochureUrl}
                      download="eshi-resorts-brochure.pdf"
                      className="text-stone-soft hover:text-forest-800"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video modal - opens only on Play, starts on that click */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/90 p-4 backdrop-blur-sm"
            onClick={() => setPlaying(false)}
          >
            <button
              aria-label="Close video"
              onClick={() => setPlaying(false)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-sand-50/10 text-sand-50 hover:bg-sand-50/20"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <video
              src={VIDEO_SRC}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] w-full max-w-4xl rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
