import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";

import { BookingModal } from "@/components/booking-modal";
import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { Header } from "@/components/header";
import { Barbers } from "@/components/sections/barbers";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { Schedule } from "@/components/sections/schedule";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { useBookingForm } from "@/hooks/use-booking-form";
import { useReveal } from "@/hooks/use-reveal";
import { useScrollState } from "@/hooks/use-scroll-state";
import { useTheme } from "@/hooks/use-theme";
import type { BookingPreset } from "@/lib/booking";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Folicula Barber Studio — Cortes, barba e estilo" },
      {
        name: "description",
        content:
          "Barbearia premium com cortes, barba e atendimento personalizado. Escolha seu serviço, barbeiro e agende pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Folicula Barber Studio — Cortes, barba e estilo",
      },
      {
        property: "og:description",
        content:
          "Cortes, barba e estilo com atendimento personalizado. Agende seu horário pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { darkMode, toggleTheme } = useTheme();
  const { scrolled, showBackToTop, scrollProgress } = useScrollState();
  const form = useBookingForm();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  useReveal();
  useBodyScrollLock(bookingOpen || galleryIndex !== null);

  const openBooking = (preset: BookingPreset = {}) => {
    form.applyPreset(preset);
    setBookingOpen(true);
  };
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <div className="site-shell relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-indigo-50 to-teal-50 font-body text-ink">
      <div className="fixed left-0 right-0 top-0 z-[60] h-0.5 bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-brand transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-brand/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-80 size-[30rem] rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-40 left-1/3 size-80 rounded-full bg-brand/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-5 sm:px-6 sm:py-8">
        <Header
          darkMode={darkMode}
          scrolled={scrolled}
          onToggleTheme={toggleTheme}
          onBook={openBooking}
        />
        <main>
          <Hero onBook={openBooking} />
          <Services onBook={openBooking} />
          <Gallery onOpen={setGalleryIndex} />
          <Barbers onBook={openBooking} />
          <Testimonials />
          <Schedule onBook={openBooking} />
          <Faq />
          <Location onBook={openBooking} />
          <Cta onBook={openBooking} />
        </main>
        <Footer />
      </div>

      <FloatingActions showBackToTop={showBackToTop} onBook={openBooking} />
      {galleryIndex !== null && <GalleryLightbox index={galleryIndex} onChange={setGalleryIndex} />}
      {bookingOpen && <BookingModal form={form} onClose={closeBooking} />}
    </div>
  );
}
