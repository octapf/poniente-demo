import Image from "next/image";
import {
  buildGoogleMapsUrls,
  renderStars,
  siteMock,
} from "@/lib/siteMock";
import { PonienteLogo } from "@/components/PonienteLogo";

const { mapsLink: MAPS_LINK, mapsEmbed: MAPS_EMBED } = buildGoogleMapsUrls(
  siteMock.location.lat,
  siteMock.location.lng,
);

export default function Home() {
  const heroTitle = siteMock.brand.name.split(",")[0] || siteMock.brand.name;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow"
      >
        Saltar al contenido
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-foreground/15 text-white backdrop-blur supports-[backdrop-filter]:bg-foreground/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <PonienteLogo className="h-10 w-10 text-white" />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">PONIENTE</p>
              <p className="text-xs text-white/70">{siteMock.brand.subtitle}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#menu">
              Menú
            </a>
            <a className="hover:text-white" href="#galeria">
              Galería
            </a>
            <a className="hover:text-white" href="#resenas">
              Reseñas
            </a>
            <a className="hover:text-white" href="#ubicacion">
              Ubicación
            </a>
            <a className="hover:text-white" href="#contacto">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 sm:inline-flex"
            >
              Cómo llegar
            </a>
            <a
              href={siteMock.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Reservar
            </a>
          </div>
        </div>
      </header>

      <section className="relative isolate w-full">
        <div className="relative h-[92vh] min-h-[640px] w-full">
          <Image
            src={siteMock.gallery.hero}
            alt="Portada del bar"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-background" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
                {siteMock.brand.city} · {siteMock.hours.days} · {siteMock.hours.open}–{siteMock.hours.close}
              </p>

              <h1 className="font-display mt-5 max-w-3xl text-balance text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                {heroTitle}
              </h1>
              <p className="font-display mt-2 text-2xl font-semibold tracking-tight text-white/95 sm:text-3xl">
                Bar de Playa
              </p>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/85 sm:text-lg">
                {siteMock.brand.tagline}. Bajás, pedís algo rico y te quedás a ver el atardecer.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteMock.links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground hover:opacity-90"
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#menu"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Ver menú
                </a>
              </div>

              <p className="mt-4 text-xs text-white/70">{siteMock.gallery.note}</p>
            </div>
          </div>
        </div>
      </section>

      <main id="contenido" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">

        <section className="grid gap-6 border-t border-foreground/10 py-12 md:grid-cols-3">
          {[
            {
              title: "Secciones que venden",
              body: "Propuesta, menú, galería, reseñas, ubicación y contacto en una sola página.",
            },
            {
              title: "Rápida y responsive",
              body: "Optimizada para móviles, ideal para QR en mesas o anuncios.",
            },
            {
              title: "Lista para escalar",
              body: "Se puede agregar reservas, eventos, carta dinámica y analytics cuando lo necesiten.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-foreground/10 bg-surface p-6"
            >
              <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-foreground/75">{item.body}</p>
            </div>
          ))}
        </section>

        <section id="menu" className="scroll-mt-24 border-t border-foreground/10 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Menú (muestra)</h2>
              <p className="mt-2 max-w-2xl text-sm text-foreground/75">
                Carta de ejemplo para que puedan visualizar cómo se ve una propuesta
                real. Se reemplaza por el menú oficial.
              </p>
            </div>
            <a
              href={siteMock.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Pedir por WhatsApp
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {siteMock.menuPreview.map((dish) => (
              <div
                key={dish.name}
                className="flex items-start justify-between gap-4 rounded-2xl border border-foreground/10 bg-surface p-5"
              >
                <div>
                  <p className="font-semibold tracking-tight">{dish.name}</p>
                  <p className="mt-1 text-sm text-foreground/70">
                    {dish.description}
                  </p>
                </div>
                <span className="text-sm font-semibold text-foreground/60">
                  {dish.priceLabel}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="galeria" className="scroll-mt-24 border-t border-foreground/10 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Galería (demo)</h2>
          <p className="mt-2 max-w-2xl text-sm text-foreground/75">
            Para esta muestra uso imágenes ilustrativas propias. Si los dueños
            quieren, se reemplaza por fotos reales del local.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteMock.gallery.items.map((src, idx) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface"
              >
                <Image
                  src={src}
                  alt={`Imagen ilustrativa ${idx + 1} (demo)`}
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="resenas" className="scroll-mt-24 border-t border-foreground/10 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Reseñas de Google
              </h2>
              <p className="mt-2 text-sm text-foreground/75">
                Muestras para visualizar cómo se verían reseñas reales en la web.
              </p>
            </div>
            <div className="grid gap-4 md:col-span-2 md:grid-cols-2">
              {siteMock.googleReviews.map((review) => (
                <figure
                  key={`${review.authorName}-${review.relativeTimeDescription}`}
                  className="rounded-2xl border border-foreground/10 bg-surface p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <figcaption className="text-xs font-medium text-foreground/70">
                      {review.authorName} · {review.relativeTimeDescription}
                    </figcaption>
                    <span className="text-xs font-semibold text-foreground/70">
                      {renderStars(review.rating)}
                    </span>
                  </div>
                  <blockquote className="mt-3 text-sm leading-6 text-foreground/80">
                    “{review.text}”
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="scroll-mt-24 border-t border-foreground/10 py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Ubicación</h2>
              <p className="mt-2 text-sm text-foreground/75">
                Integración simple con Google Maps para “Cómo llegar” y mapa
                embebido.
              </p>

              <div className="mt-6 rounded-2xl border border-foreground/10 p-6">
                <p className="text-sm font-semibold tracking-tight">
                  {siteMock.brand.name}
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  {siteMock.brand.city}
                </p>
                <p className="mt-3 text-sm text-foreground/70">
                  <span className="font-medium text-foreground/80">
                    {siteMock.hours.label}:
                  </span>{" "}
                  {siteMock.hours.days} · {siteMock.hours.open}–{siteMock.hours.close}
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground hover:opacity-90"
                  >
                    Abrir en Google Maps
                  </a>
                  <a
                    href={siteMock.links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-foreground/15 px-5 text-sm font-semibold text-foreground/90 hover:border-foreground/25 hover:text-foreground"
                  >
                    Ver Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface">
              <iframe
                title="Mapa de ubicación"
                src={MAPS_EMBED}
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-24 border-t border-foreground/10 py-14">
          <div className="rounded-3xl border border-foreground/10 bg-gradient-to-b from-foreground/5 to-transparent p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  ¿Te gustaría algo así para tu bar?
                </h2>
                <p className="mt-2 text-sm text-foreground/75">
                  Esta es una demo temporal para mostrar estilos, secciones y
                  estructura. Se personaliza con fotos reales, carta oficial y
                  links finales.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href={siteMock.links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground hover:opacity-90"
                >
                  Pedir presupuesto
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/15 px-7 text-sm font-semibold text-foreground/90 hover:border-foreground/25 hover:text-foreground"
                >
                  Ver ubicación
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-foreground/10 py-10">
          <div className="flex flex-col gap-3 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} PONIENTE (Demo) · Sitio de muestra
            </p>
            <div className="flex flex-col gap-1 sm:items-end">
              <div className="flex items-center gap-2 sm:justify-end">
                <PonienteLogo className="h-7 w-7 text-accent" />
                <span className="text-xs font-medium text-foreground/70">
                  Mar del Plata · Bar de Playa
                </span>
              </div>
              <a
                className="font-medium text-foreground/80 hover:text-foreground"
                href={siteMock.links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: {siteMock.links.whatsappDisplay}
              </a>
              <p>Hecho con Next.js · “Fotos” ilustrativas · Link a Google Maps</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
