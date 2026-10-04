import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Check, a as Scissors, b as ArrowRight, c as Moon, d as Maximize2, f as MapPin, g as ChevronDown, h as CircleCheck, i as Star, l as MessageCircle, m as Clock3, n as UserRound, o as RotateCcw, p as Instagram, r as Sun, s as Phone, t as X, u as Menu, v as CalendarDays, x as ArrowLeft, y as ArrowUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DmayJZ7h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_barber_default = "/assets/hero-barber-DqjFvSEm.jpg";
var barber_rafael_default = "/assets/barber-rafael-C7Jyfms8.jpg";
var barber_marcos_default = "/assets/barber-marcos-BH0Qqu3G.jpg";
var barber_thiago_default = "/assets/barber-thiago-CghfFU1O.jpg";
var WHATSAPP_NUMBER = "5546999075054";
var WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
var navLinks = [
	{
		label: "Serviços",
		href: "#servicos"
	},
	{
		label: "Barbeiros",
		href: "#barbeiros"
	},
	{
		label: "Galeria",
		href: "#galeria"
	},
	{
		label: "Avaliações",
		href: "#avaliacoes"
	},
	{
		label: "Horários",
		href: "#agenda"
	},
	{
		label: "Localização",
		href: "#localizacao"
	}
];
var barbers = [
	{
		name: "Rafael Duarte",
		specialty: "Especialista em degradê e cortes modernos",
		price: "A partir de R$ 45",
		image: barber_rafael_default
	},
	{
		name: "Marcos Lima",
		specialty: "Especialista em barba e navalha",
		price: "A partir de R$ 50",
		image: barber_marcos_default
	},
	{
		name: "Thiago Alves",
		specialty: "Cortes clássicos e acabamento",
		price: "A partir de R$ 40",
		image: barber_thiago_default
	}
];
var services = [
	{
		name: "Corte clássico",
		detail: "Tesoura + máquina + acabamento",
		price: "R$ 45",
		duration: "40 min"
	},
	{
		name: "Degradê / fade",
		detail: "Degradê + acabamento na navalha",
		price: "R$ 55",
		duration: "50 min"
	},
	{
		name: "Corte + barba",
		detail: "Pacote completo para renovar o visual",
		price: "R$ 75",
		duration: "1h"
	},
	{
		name: "Barba completa",
		detail: "Toalha quente + navalha + acabamento",
		price: "R$ 40",
		duration: "30 min"
	},
	{
		name: "Sobrancelha",
		detail: "Alinhamento e acabamento na navalha",
		price: "R$ 25",
		duration: "15 min"
	}
];
var timeSlots = [
	"09:00",
	"10:00",
	"11:20",
	"14:00",
	"14:40",
	"16:00",
	"18:20",
	"19:00"
];
var getLocalDateString = () => {
	const now = /* @__PURE__ */ new Date();
	return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
};
var schedule = [
	{
		day: "Segunda a sexta",
		hours: "09h – 21h"
	},
	{
		day: "Sábado",
		hours: "08h – 20h"
	},
	{
		day: "Domingo",
		hours: "Fechado",
		closed: true
	}
];
var getAvailableSlots = (selectedDate, selectedBarber) => {
	if (!selectedDate) return [];
	if ((/* @__PURE__ */ new Date(`${selectedDate}T12:00:00`)).getDay() === 0) return [];
	const seed = [...`${selectedDate}-${selectedBarber}`].reduce((total, character) => total + character.charCodeAt(0), 0);
	const occupiedIndexes = /* @__PURE__ */ new Set([seed % timeSlots.length, (seed * 3 + 1) % timeSlots.length]);
	return timeSlots.filter((_, index) => !occupiedIndexes.has(index));
};
var gallery = [
	{
		image: hero_barber_default,
		title: "Fade + barba",
		label: "Acabamento preciso"
	},
	{
		image: barber_rafael_default,
		title: "Corte moderno",
		label: "Estilo personalizado"
	},
	{
		image: barber_marcos_default,
		title: "Barba na navalha",
		label: "Toalha quente"
	},
	{
		image: barber_thiago_default,
		title: "Corte clássico",
		label: "Tesoura e máquina"
	},
	{
		image: hero_barber_default,
		title: "Degradê",
		label: "Detalhes que fazem diferença"
	},
	{
		image: barber_rafael_default,
		title: "Visual completo",
		label: "Corte + acabamento"
	}
];
var testimonials = [
	{
		name: "Lucas Ferreira",
		text: "Ambiente muito bom e o corte ficou exatamente como eu queria. Atendimento rápido e caprichado.",
		rating: 5
	},
	{
		name: "Pedro Henrique",
		text: "Já virei cliente. O acabamento do fade é muito bom e dá para agendar sem complicação.",
		rating: 5
	},
	{
		name: "Matheus Costa",
		text: "Fiz corte e barba. Profissionais atenciosos e resultado muito bom.",
		rating: 5
	}
];
function Index() {
	const [bookingOpen, setBookingOpen] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [service, setService] = (0, import_react.useState)(services[1].name);
	const [barber, setBarber] = (0, import_react.useState)(barbers[0].name);
	const [date, setDate] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)("");
	const [clientName, setClientName] = (0, import_react.useState)("");
	const [clientPhone, setClientPhone] = (0, import_react.useState)("");
	const [bookingError, setBookingError] = (0, import_react.useState)("");
	const [darkMode, setDarkMode] = (0, import_react.useState)(false);
	const [galleryIndex, setGalleryIndex] = (0, import_react.useState)(null);
	const [bookingSent, setBookingSent] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [showBackToTop, setShowBackToTop] = (0, import_react.useState)(false);
	const [scrollProgress, setScrollProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const scrollable = document.documentElement.scrollHeight - window.innerHeight;
			setScrolled(scrollTop > 18);
			setShowBackToTop(scrollTop > 700);
			setScrollProgress(scrollable > 0 ? Math.min(100, scrollTop / scrollable * 100) : 0);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const elements = Array.from(document.querySelectorAll("[data-reveal]"));
		if (typeof IntersectionObserver === "undefined") {
			elements.forEach((element) => element.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: .08,
			rootMargin: "0px 0px -50px"
		});
		elements.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const previousOverflow = document.body.style.overflow;
		if (bookingOpen || galleryIndex !== null) document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [bookingOpen, galleryIndex]);
	(0, import_react.useEffect)(() => {
		const savedTheme = window.localStorage.getItem("folicula-theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		setDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", darkMode);
		window.localStorage.setItem("folicula-theme", darkMode ? "dark" : "light");
	}, [darkMode]);
	(0, import_react.useEffect)(() => {
		if (!bookingOpen && galleryIndex === null) return;
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setBookingOpen(false);
				setGalleryIndex(null);
			}
			if (galleryIndex !== null && event.key === "ArrowRight") setGalleryIndex((current) => current === null ? null : (current + 1) % gallery.length);
			if (galleryIndex !== null && event.key === "ArrowLeft") setGalleryIndex((current) => current === null ? null : (current - 1 + gallery.length) % gallery.length);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [bookingOpen, galleryIndex]);
	const selectedService = services.find((item) => item.name === service) ?? services[0];
	const selectedGallery = galleryIndex === null ? null : gallery[galleryIndex];
	const availableSlots = getAvailableSlots(date, barber);
	const minDate = getLocalDateString();
	const formattedDate = date ? new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(/* @__PURE__ */ new Date(`${date}T12:00:00`)) : "a combinar";
	const isSunday = date ? (/* @__PURE__ */ new Date(`${date}T12:00:00`)).getDay() === 0 : false;
	const canSubmit = Boolean(clientName.trim() && clientPhone.replace(/\D/g, "").length >= 10 && date && time && availableSlots.includes(time) && !isSunday);
	const bookingMessage = encodeURIComponent(`Olá! Quero agendar um horário na FOLICULA Barber Studio.\n\nNome: ${clientName.trim()}\nTelefone: ${clientPhone.trim()}\nServiço: ${service} — ${selectedService.price} (${selectedService.duration})\nBarbeiro: ${barber}\nData: ${formattedDate}\nHorário: ${time}\n\nPodem confirmar a disponibilidade?`);
	const openBooking = (changes) => {
		if (changes.service) setService(changes.service);
		if (changes.barber) setBarber(changes.barber);
		if (changes.time) setTime(changes.time);
		setBookingError("");
		setBookingSent(false);
		setBookingOpen(true);
	};
	const formatPhone = (value) => {
		const digits = value.replace(/\D/g, "").slice(0, 11);
		if (digits.length <= 2) return digits;
		if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
		return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
	};
	const handlePhoneChange = (value) => setClientPhone(formatPhone(value));
	const handleDateChange = (value) => {
		setDate(value);
		setTime("");
		if (!value) {
			setBookingError("");
			return;
		}
		if ((/* @__PURE__ */ new Date(`${value}T12:00:00`)).getDay() === 0) {
			setBookingError("A FOLICULA não atende aos domingos. Escolha outro dia.");
			return;
		}
		setBookingError("");
	};
	const handleBarberChange = (value) => {
		setBarber(value);
		setTime("");
		setBookingError("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-shell relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-indigo-50 to-teal-50 font-body text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed left-0 right-0 top-0 z-[60] h-0.5 bg-transparent",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-brand transition-[width] duration-150",
					style: { width: `${scrollProgress}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-brand/25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-[-10rem] top-80 size-[30rem] rounded-full bg-cyan-200/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-40 left-1/3 size-80 rounded-full bg-brand/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-5 py-5 sm:px-6 sm:py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: `sticky top-3 z-40 flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 ${scrolled ? "border-white/80 bg-white/85 shadow-xl shadow-ink/10" : "border-white/70 bg-white/70 shadow-lg shadow-ink/5"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#inicio",
								className: "flex items-center gap-3",
								onClick: () => setMobileOpen(false),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-10 place-items-center rounded-xl border border-brand/30 bg-brand/15 font-display text-lg font-bold text-brand",
									children: "F"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold leading-none tracking-tight",
									children: "FOLICULA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[9px] uppercase tracking-[0.2em] text-ink/50",
									children: "Barber Studio"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "hidden items-center gap-6 text-sm font-medium text-ink/65 lg:flex",
								children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: link.href,
									className: "transition-colors hover:text-ink",
									children: link.label
								}, link.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": darkMode ? "Ativar modo claro" : "Ativar modo escuro",
										title: darkMode ? "Modo claro" : "Modo escuro",
										onClick: () => setDarkMode((enabled) => !enabled),
										className: "grid size-10 place-items-center rounded-xl border border-ink/10 bg-white/70 text-ink transition-colors hover:bg-white dark:bg-slate-900/70 dark:text-white dark:hover:bg-slate-800",
										children: darkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 18 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => openBooking({}),
										className: "hidden rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition-transform hover:-translate-y-0.5 sm:block",
										children: "Agendar horário"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": mobileOpen ? "Fechar menu" : "Abrir menu",
										onClick: () => setMobileOpen((open) => !open),
										className: "grid size-10 place-items-center rounded-xl border border-ink/10 bg-white/70 lg:hidden",
										children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 19 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 19 })
									})
								]
							})
						]
					}),
					mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-20 z-30 mt-2 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur-xl lg:hidden",
						children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							onClick: () => setMobileOpen(false),
							className: "block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-100",
							children: link.label
						}, link.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setMobileOpen(false);
								openBooking({});
							},
							className: "mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 font-semibold text-brand-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 17 }), " Agendar horário"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "inicio",
						"data-reveal": true,
						className: "mt-7 grid gap-5 lg:grid-cols-12 lg:pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-xl shadow-ink/5 backdrop-blur-2xl sm:p-8 lg:col-span-7 lg:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-brand" }), " Barbearia premium"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl",
									children: "Seu estilo começa na cadeira certa."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-base leading-7 text-ink/60 sm:text-lg",
									children: "Corte, barba e acabamento feito por profissionais que entendem de estilo. Escolha seu serviço e agende em poucos passos."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => openBooking({}),
										className: "inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5",
										children: ["Agendar horário ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#servicos",
										className: "inline-flex items-center rounded-xl border border-white/80 bg-white/70 px-6 py-3.5 font-semibold transition-colors hover:bg-white",
										children: "Ver serviços"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid grid-cols-3 gap-3 sm:gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											value: "12h",
											label: "Por dia"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											value: "+500",
											label: "Clientes"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											value: "4.9",
											label: "Avaliação"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[2rem] border border-white/70 bg-white/65 p-4 shadow-xl shadow-ink/5 backdrop-blur-2xl sm:p-5 lg:col-span-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg font-bold",
										children: "Próximos horários"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-ink/45",
										children: "Horários populares para começar"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-brand/10 px-3 py-1.5 text-xs font-bold text-brand",
										children: "Agende"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden rounded-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: hero_barber_default,
										alt: "Barbeiro realizando um corte em cliente",
										width: 1088,
										height: 1088,
										fetchPriority: "high",
										className: "aspect-[4/4.5] w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-3 left-3 rounded-xl bg-ink/80 px-3 py-2 text-white backdrop-blur-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-white/60",
											children: "Destaque"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold",
											children: "Corte + barba"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid grid-cols-3 gap-2",
									children: [
										"10:00",
										"11:20",
										"14:40"
									].map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => openBooking({ time: slot }),
										className: "rounded-xl border border-white/80 bg-white/70 px-2 py-2.5 text-center transition hover:-translate-y-0.5 hover:border-brand/40",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "mx-auto mb-1 size-3.5 text-brand" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold",
												children: slot
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[10px] text-brand",
												children: "Sugestão"
											})
										]
									}, slot))
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "servicos",
						"data-reveal": true,
						className: "mt-14 scroll-mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Menu de serviços",
							title: "Cortes e preços",
							text: "Serviços pensados para deixar seu visual alinhado do começo ao fim."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
							children: services.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => openBooking({ service: item.name }),
								className: `group text-left rounded-3xl border p-5 shadow-lg shadow-ink/5 transition-all hover:-translate-y-1 hover:shadow-xl ${index === 1 ? "border-brand/40 bg-brand/10" : "border-white/70 bg-white/65"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-9 place-items-center rounded-xl bg-ink text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scissors, { size: 16 })
										}), index === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-brand px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white",
											children: "Popular"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-lg font-bold",
										children: item.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 min-h-10 text-xs leading-5 text-ink/50",
										children: item.detail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-end justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xl font-extrabold text-brand",
											children: item.price
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[11px] text-ink/45",
											children: item.duration
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-ink/30 transition group-hover:text-brand" })]
									})
								]
							}, item.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "galeria",
						"data-reveal": true,
						className: "mt-14 scroll-mt-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
								eyebrow: "Nosso trabalho",
								title: "Galeria de estilos",
								text: "Alguns dos estilos que fazem parte da experiência FOLICULA."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-4",
								children: gallery.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setGalleryIndex(index),
									"aria-label": `Abrir foto: ${item.title}`,
									className: `group relative overflow-hidden rounded-3xl border border-white/70 bg-white text-left shadow-lg shadow-ink/5 ${index === 0 ? "col-span-2 row-span-2" : index === 3 ? "col-span-2" : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.image,
											alt: item.title,
											loading: "lazy",
											className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/0 transition group-hover:bg-black/15" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute right-3 top-3 grid size-9 place-items-center rounded-xl bg-black/45 text-white opacity-0 backdrop-blur transition group-hover:opacity-100",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { size: 16 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-12 text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display font-bold",
												children: item.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-white/70",
												children: item.label
											})]
										})
									]
								}, `${item.title}-${index}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-ink/40",
								children: "Clique em uma foto para ampliar."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "barbeiros",
						"data-reveal": true,
						className: "mt-14 scroll-mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Nossa equipe",
							title: "Barbeiros que entendem seu estilo",
							text: "Profissionais com especialidades diferentes para você escolher quem combina com seu visual."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: barbers.map((barber) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group rounded-3xl border border-white/70 bg-white/65 p-4 shadow-xl shadow-ink/5 backdrop-blur-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden rounded-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: barber.image,
										alt: `Retrato do barbeiro ${barber.name}`,
										loading: "lazy",
										className: "aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-ink backdrop-blur",
										children: "Disponível para agendamento"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-1 pb-1 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xl font-bold",
											children: barber.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-5 text-ink/50",
											children: barber.specialty
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 16 })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-center justify-between border-t border-ink/10 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-bold text-brand",
											children: barber.price
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => openBooking({ barber: barber.name }),
											className: "text-sm font-bold hover:text-brand",
											children: "Escolher →"
										})]
									})]
								})]
							}, barber.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "avaliacoes",
						"data-reveal": true,
						className: "mt-14 scroll-mt-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[2rem] bg-ink p-6 text-white shadow-2xl shadow-ink/20 sm:p-8 lg:p-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold uppercase tracking-[0.2em] text-brand",
									children: "Quem já passou por aqui"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl",
									children: "O que nossos clientes dizem"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										className: "fill-current text-brand",
										size: 18
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold",
										children: "4.9 / 5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/50",
										children: "avaliação média"
									})] })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7 grid gap-4 lg:grid-cols-3",
								children: testimonials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-2xl bg-white/10 p-5 backdrop-blur",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-1",
											children: Array.from({ length: item.rating }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
												size: 14,
												className: "fill-current text-brand"
											}, index))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-4 text-sm leading-6 text-white/75",
											children: [
												"“",
												item.text,
												"”"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 text-sm font-bold",
											children: item.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-white/40",
											children: "Cliente FOLICULA"
										})
									]
								}, item.name))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "agenda",
						"data-reveal": true,
						className: "mt-14 scroll-mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Horários",
							title: "Veja quando atendemos",
							text: "Escolha um horário abaixo para abrir o agendamento já com a opção selecionada."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4 lg:grid-cols-3",
							children: schedule.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `rounded-3xl border p-5 shadow-lg shadow-ink/5 ${item.closed ? "border-ink/10 bg-white/45 opacity-75" : "border-white/70 bg-white/65"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg font-bold",
										children: item.day
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-ink/45",
										children: item.closed ? "Não atendemos neste dia" : item.hours
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `grid size-10 place-items-center rounded-xl ${item.closed ? "bg-slate-200 text-slate-400" : "bg-brand/10 text-brand"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { size: 18 })
									})]
								}), !item.closed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid grid-cols-3 gap-2",
									children: timeSlots.slice(0, 6).map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => openBooking({ time: slot }),
										className: "rounded-xl border border-ink/10 bg-white/70 px-2 py-2 text-xs font-bold transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand dark:bg-slate-900/50",
										children: slot
									}, `${item.day}-${slot}`))
								})]
							}, item.day))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-center gap-4 rounded-2xl border border-white/70 bg-white/55 px-4 py-3 text-xs text-ink/50 backdrop-blur-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-ink/70",
								children: "Agenda demonstrativa:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-brand" }), " Horário livre"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-slate-300 dark:bg-slate-600" }), " Horário ocupado"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink/35",
								children: "A confirmação real acontece pelo WhatsApp."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "duvidas",
						"data-reveal": true,
						className: "mt-14 scroll-mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Dúvidas rápidas",
							title: "Antes de marcar, tudo bem explicado",
							text: "As principais perguntas para quem está conhecendo a FOLICULA pela primeira vez."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-3 lg:grid-cols-2",
							children: [
								["O horário fica confirmado na hora?", "Não. O pedido é enviado pelo WhatsApp e a equipe confirma a disponibilidade antes de considerar o horário reservado."],
								["Posso escolher o barbeiro?", "Sim. No agendamento você pode escolher Rafael, Marcos, Thiago ou trocar a opção antes de enviar a mensagem."],
								["Posso cancelar ou remarcar?", "Sim. Fale pelo WhatsApp assim que possível para a equipe verificar uma nova opção de horário."],
								["Vocês atendem aos domingos?", "Não. A FOLICULA funciona de segunda a sábado. O formulário também bloqueia a escolha de domingo."],
								["Preciso pagar antecipado?", "Não nesta versão demonstrativa. O site apenas envia a solicitação de agendamento pelo WhatsApp."],
								["O endereço é real?", "Não. Este é um projeto demonstrativo de portfólio. Endereço, preços, nomes e contatos podem ser substituídos para um cliente real."]
							].map(([question, answer]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group rounded-2xl border border-white/70 bg-white/65 p-5 shadow-lg shadow-ink/5 backdrop-blur-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: "flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold [&::-webkit-details-marker]:hidden",
									children: [question, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5 shrink-0 text-brand transition-transform group-open:rotate-180" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xl text-sm leading-6 text-ink/55",
									children: answer
								})]
							}, question))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "localizacao",
						"data-reveal": true,
						className: "mt-14 scroll-mt-24 grid gap-5 lg:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-xl shadow-ink/5 backdrop-blur-xl lg:col-span-7 sm:p-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
									eyebrow: "Onde estamos",
									title: "Seu próximo corte começa aqui",
									text: "Atendimento com hora marcada em um ambiente pensado para você relaxar e sair com o visual em dia."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 grid gap-3 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 17 }),
											title: "Endereço",
											text: "Rua das Tesouras, 128 · Centro"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { size: 17 }),
											title: "Horários",
											text: "Seg–Sex 09h–21h · Sáb 08h–20h"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 17 }),
											title: "WhatsApp",
											text: "Agendamento e dúvidas"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 17 }),
											title: "Instagram",
											text: "@foliculabarber"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => openBooking({}),
										className: "inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-brand-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 17 }), " Agendar agora"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: WHATSAPP_URL,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-white/70 px-5 py-3 font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 17 }), " WhatsApp"]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-h-[300px] overflow-hidden rounded-[2rem] bg-ink p-7 text-white shadow-xl shadow-ink/15 lg:col-span-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 opacity-30",
								style: {
									backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
									backgroundSize: "32px 32px"
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-full flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-12 place-items-center rounded-2xl bg-brand text-brand-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 22 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-[0.2em] text-brand",
										children: "Localização"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-3xl font-extrabold",
										children: "Centro da cidade"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-xs text-sm leading-6 text-white/55",
										children: "Rua das Tesouras, 128 · fácil acesso e estacionamento próximo."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.google.com/maps/search/?api=1&query=Rua%20das%20Tesouras%2C%20128",
										target: "_blank",
										rel: "noreferrer",
										className: "mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand",
										children: ["Como chegar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
									})
								] })]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"data-reveal": true,
						className: "mt-14 rounded-[2rem] border border-brand/20 bg-brand/10 p-7 text-center sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold uppercase tracking-[0.2em] text-brand",
								children: "Pronto para renovar o visual?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mx-auto mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl",
								children: "Escolha seu horário e deixe o resto com a gente."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => openBooking({}),
								className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 font-semibold text-white shadow-xl shadow-ink/15",
								children: ["Agendar meu horário ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-10 flex flex-col gap-3 border-t border-ink/10 py-6 pb-24 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:pb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "FOLICULA Barber Studio — 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rua das Tesouras, 128 · Atendimento por agendamento" })]
					})
				]
			}),
			showBackToTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				"aria-label": "Voltar ao topo",
				title: "Voltar ao topo",
				className: "fixed bottom-24 right-4 z-40 grid size-11 place-items-center rounded-full border border-white/20 bg-ink text-white shadow-xl shadow-ink/20 transition-all hover:-translate-y-1 hover:bg-brand hover:text-brand-foreground sm:bottom-6 sm:right-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 18 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/90 p-3 shadow-2xl backdrop-blur-xl dark:bg-slate-950/90 sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-md items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Abrir WhatsApp",
						className: "grid size-12 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white text-brand dark:bg-slate-900",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 20 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openBooking({}),
						className: "flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 font-bold text-brand-foreground shadow-lg shadow-brand/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 18 }), " Agendar horário"]
					})]
				})
			}),
			selectedGallery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Galeria ampliada",
				onMouseDown: (event) => {
					if (event.target === event.currentTarget) setGalleryIndex(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex w-full max-w-4xl flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -top-12 right-0 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white",
								children: [
									(galleryIndex ?? 0) + 1,
									" / ",
									gallery.length
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setGalleryIndex(null),
								"aria-label": "Fechar galeria",
								className: "grid size-10 place-items-center rounded-xl bg-white/10 text-white hover:bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full overflow-hidden rounded-[2rem] bg-black shadow-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: selectedGallery.image,
									alt: selectedGallery.title,
									className: "max-h-[78vh] w-full object-contain"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setGalleryIndex((current) => current === null ? null : (current - 1 + gallery.length) % gallery.length),
									"aria-label": "Foto anterior",
									className: "absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 20 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setGalleryIndex((current) => current === null ? null : (current + 1) % gallery.length),
									"aria-label": "Próxima foto",
									className: "absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 20 })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 text-center text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-bold",
								children: selectedGallery.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/55",
								children: selectedGallery.label
							})]
						})
					]
				})
			}),
			bookingOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-center bg-ink/55 p-4 backdrop-blur-sm",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "booking-title",
				onMouseDown: (event) => {
					if (event.target === event.currentTarget) setBookingOpen(false);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl dark:bg-slate-900 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold uppercase tracking-[0.2em] text-brand",
								children: "Agendamento online"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "booking-title",
								className: "mt-1 font-display text-3xl font-extrabold tracking-tight",
								children: bookingSent ? "Pedido enviado!" : "Reserve seu horário"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink/50",
								children: bookingSent ? "Agora é só aguardar a confirmação pelo WhatsApp." : "Escolha o atendimento e envie seu pedido em poucos passos."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setBookingOpen(false),
							"aria-label": "Fechar",
							className: "grid size-10 shrink-0 place-items-center rounded-xl bg-slate-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
						})]
					}), bookingSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid place-items-center rounded-[1.5rem] bg-brand/10 px-6 py-8 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-16 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 30 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "mt-5 font-display text-2xl font-extrabold",
										children: [
											"Tudo certo, ",
											clientName.trim() || "cliente",
											"!"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-sm text-sm leading-6 text-ink/55",
										children: "Sua solicitação foi preparada e o WhatsApp foi aberto. A equipe confirma a disponibilidade por lá."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-ink/10 bg-slate-50 p-4 dark:bg-slate-800",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold uppercase tracking-wider text-ink/40",
											children: "Seu pedido"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-display font-bold",
											children: service
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-ink/50",
											children: [
												barber,
												" · ",
												date ? formattedDate : "Data a combinar",
												" · ",
												time
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl font-extrabold text-brand",
										children: selectedService.price
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setBookingSent(false),
									className: "flex items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white px-4 py-3 font-bold dark:bg-slate-900",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 17 }), " Novo agendamento"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setBookingOpen(false),
									className: "rounded-xl bg-brand px-4 py-3 font-bold text-brand-foreground",
									children: "Fechar"
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-4 gap-2",
								children: [
									[Boolean(clientName.trim() && clientPhone.replace(/\D/g, "").length >= 10), "Dados"],
									[Boolean(service), "Serviço"],
									[Boolean(barber), "Barbeiro"],
									[Boolean(date && time && !isSunday), "Horário"]
								].map(([done, label], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1.5 rounded-full ${done ? "bg-brand" : "bg-slate-200 dark:bg-slate-700"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: `text-[9px] font-bold uppercase tracking-wider ${done ? "text-brand" : "text-ink/35"}`,
										children: [
											index + 1,
											". ",
											label
										]
									})]
								}, String(label)))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
									label: "Seu nome",
									value: clientName,
									onChange: setClientName,
									placeholder: "Como podemos te chamar?",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 16 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
									label: "WhatsApp",
									value: clientPhone,
									onChange: handlePhoneChange,
									placeholder: "(46) 99999-9999",
									type: "tel",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Serviço",
								value: service,
								onChange: setService,
								options: services.map((item) => item.name)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Barbeiro",
								value: barber,
								onChange: handleBarberChange,
								options: barbers.map((item) => item.name)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-ink/10 bg-slate-50 p-4 dark:bg-slate-800/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase tracking-wider text-ink/50",
										children: "1. Escolha a data"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-ink/45",
										children: "Domingos ficam bloqueados automaticamente."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-5 text-brand" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									min: minDate,
									value: date,
									onChange: (event) => handleDateChange(event.target.value),
									className: "mt-4 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand dark:bg-slate-900"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-ink/10 bg-slate-50 p-4 dark:bg-slate-800/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase tracking-wider text-ink/50",
										children: "2. Horários disponíveis"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-ink/45",
										children: "Disponibilidade simulada para demonstração."
									})] }), date && !isSunday && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-bold text-brand",
										children: [availableSlots.length, " livres"]
									})]
								}), !date ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 rounded-xl border border-dashed border-ink/10 px-4 py-5 text-center text-xs text-ink/45",
									children: "Selecione uma data para ver os horários."
								}) : isSunday ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-5 text-center text-xs font-medium text-red-600 dark:text-red-300",
									children: "Domingo: barbearia fechada."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",
									children: timeSlots.map((slot) => {
										const available = availableSlots.includes(slot);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: !available,
											onClick: () => {
												setTime(slot);
												setBookingError("");
											},
											className: `rounded-xl border px-3 py-3 text-sm font-bold transition ${time === slot ? "border-brand bg-brand text-brand-foreground shadow-lg shadow-brand/20" : available ? "border-ink/10 bg-white hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand dark:bg-slate-900" : "cursor-not-allowed border-ink/5 bg-slate-200/70 text-ink/25 line-through dark:bg-slate-900/60 dark:text-white/20"}`,
											children: [slot, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-[9px] font-medium no-underline opacity-70",
												children: available ? "Livre" : "Ocupado"
											})]
										}, slot);
									})
								})]
							}),
							bookingError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm font-medium text-red-600 dark:text-red-300",
								children: bookingError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-ink/10 bg-slate-50 p-4 dark:bg-slate-800",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold uppercase tracking-wider text-ink/40",
											children: "Resumo"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-display font-bold",
											children: selectedService.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-ink/50",
											children: [
												barber,
												" · ",
												date ? formattedDate : "Escolha uma data",
												" ·",
												" ",
												time || "Escolha um horário"
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xl font-extrabold text-brand",
											children: selectedService.price
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-ink/45",
											children: selectedService.duration
										})]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-brand/10 p-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-brand" }), " Quase lá!"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-5 text-ink/50",
									children: "Seu pedido será enviado pelo WhatsApp. O horário só fica confirmado depois que a barbearia responder."
								})]
							}),
							canSubmit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${WHATSAPP_NUMBER}?text=${bookingMessage}`,
								target: "_blank",
								rel: "noreferrer",
								onClick: () => {
									window.localStorage.setItem("folicula-last-booking", JSON.stringify({
										name: clientName.trim(),
										phone: clientPhone.trim(),
										service,
										barber,
										date,
										time
									}));
									setBookingSent(true);
								},
								className: "flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 }), " Enviar pelo WhatsApp"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: true,
								className: "flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-5 py-3.5 font-bold text-slate-400 dark:bg-slate-800 dark:text-slate-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 18 }), " Preencha os dados para continuar"]
							})
						]
					})]
				})
			})
		]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-white/80 bg-white/60 p-3 sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-xl font-bold sm:text-2xl",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-[10px] text-ink/45 sm:text-xs",
			children: label
		})]
	});
}
function SectionHeading({ eyebrow, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-bold uppercase tracking-[0.2em] text-brand",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-6 text-ink/50 sm:text-base",
				children: text
			})
		]
	});
}
function InfoRow({ icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 rounded-2xl border border-white/80 bg-white/60 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-bold uppercase tracking-wider text-ink/40",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm font-semibold",
			children: text
		})] })]
	});
}
function InputField({ label, value, onChange, placeholder, type = "text", icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-xs font-bold uppercase tracking-wider text-ink/50",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/35",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type,
				value,
				onChange: (event) => onChange(event.target.value),
				placeholder,
				className: "w-full rounded-xl border border-ink/10 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-ink/30 focus:border-brand dark:bg-slate-800"
			})]
		})]
	});
}
function SelectField({ label, value, onChange, options, disabled = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-xs font-bold uppercase tracking-wider text-ink/50",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			disabled,
			value,
			onChange: (event) => onChange(event.target.value),
			className: "w-full rounded-xl border border-ink/10 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-brand disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-800",
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option,
				children: option
			}, option))
		})]
	});
}
//#endregion
export { Index as component };
