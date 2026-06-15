"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";

const VIDEO_SRC = "/videos/eshi-home.mp4";

/**
 * Two floating media buttons (bottom-left), present site-wide via the layout:
 *  - Video:    popup with Play (opens a modal) / Download
 *  - Brochure: popup with View / Download
 * Nothing autoplays - the video only starts after the guest clicks Play.
 */
export default function MediaFab() {
  const [panel, setPanel] = useState<null | "video" | "brochure">(null);
  const [playing, setPlaying] = useState(false);

  const toggle = (which: "video" | "brochure") =>
    setPanel((p) => (p === which ? null : which));

  return (
    <>
      {/* Stacked buttons */}
      <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
        {/* Brochure button (top) */}
        <div className="relative">
          <AnimatePresence>
            {panel === "brochure" && (
              <Popup title="Brochure">
                <Action
                  primary
                  href={site.brochureUrl}
                  external
                  label="View"
                />
                <Action
                  href={site.brochureUrl}
                  download="eshi-resorts-brochure.pdf"
                  label="Download"
                />
              </Popup>
            )}
          </AnimatePresence>
          <FabButton
            label="Brochure"
            active={panel === "brochure"}
            onClick={() => toggle("brochure")}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
              <path d="M6 3.5h8L19 8.5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M14 3.5v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </FabButton>
        </div>

        {/* Video button (bottom) */}
        <div className="relative">
          <AnimatePresence>
            {panel === "video" && (
              <Popup title="Resort Video">
                <button
                  onClick={() => {
                    setPlaying(true);
                    setPanel(null);
                  }}
                  className="rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold text-forest-950 transition-colors hover:bg-gold-400"
                >
                  Play
                </button>
                <Action
                  href={VIDEO_SRC}
                  download="eshi-resorts-video.mp4"
                  label="Download"
                />
              </Popup>
            )}
          </AnimatePresence>
          <FabButton
            label="Resort video"
            active={panel === "video"}
            onClick={() => toggle("video")}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
              <rect x="3" y="5" width="13" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="m16 10 5-3v10l-5-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="m8.5 9.5 4 2.5-4 2.5v-5Z" fill="currentColor" />
            </svg>
          </FabButton>
        </div>
      </div>

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

function FabButton({
  children,
  label,
  active,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`flex h-13 w-13 items-center justify-center rounded-full shadow-xl ring-1 transition-transform hover:scale-110 ${
        active
          ? "bg-forest-900 text-gold-400 ring-forest-700/50"
          : "bg-forest-800 text-gold-400 ring-forest-700/50"
      }`}
      style={{ height: "3.25rem", width: "3.25rem" }}
    >
      {children}
    </button>
  );
}

function Popup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -8, scale: 0.96 }}
      transition={{ duration: 0.18 }}
      className="absolute left-[4.25rem] top-1/2 flex -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white py-2 pl-4 pr-2 shadow-2xl ring-1 ring-sand-200"
    >
      <span className="text-sm font-semibold text-forest-900">{title}</span>
      {children}
    </motion.div>
  );
}

function Action({
  href,
  label,
  download,
  external,
  primary,
}: {
  href: string;
  label: string;
  download?: string;
  external?: boolean;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={
        primary
          ? "rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold text-forest-950 transition-colors hover:bg-gold-400"
          : "rounded-full px-3 py-1.5 text-xs font-semibold text-stone-soft transition-colors hover:text-forest-800"
      }
    >
      {label}
    </a>
  );
}
