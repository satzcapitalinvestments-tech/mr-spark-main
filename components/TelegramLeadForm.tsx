"use client";

import { useState } from "react";
import type { LocaleCode } from "@/data/i18n/languages";
import { defaultLocale, isLocale } from "@/lib/i18n";

type LeadFormState = {
  name: string;
  contact: string;
  city: string;
  service: string;
  urgency: "Normal" | "Heute" | "Sofort";
  message: string;
  website: string;
};

type LeadFormCopy = {
  eyebrow: string;
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  contactLabel: string;
  contactPlaceholder: string;
  cityLabel: string;
  cityPlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  serviceOptions: Array<{ value: string; label: string }>;
  urgencyLabel: string;
  urgencyOptions: Record<LeadFormState["urgency"], string>;
  messageLabel: string;
  messagePlaceholder: string;
  submitIdle: string;
  submitBusy: string;
  success: string;
  genericError: string;
  preparationError: string;
};

const leadFormCopy: Record<LocaleCode, LeadFormCopy> = {
  de: {
    eyebrow: "Telegram-Anfrage",
    title: "Anfrage direkt an Mr Spark senden",
    description:
      "Beschreiben Sie kurz Ihr Elektroproblem. Wir bereiten eine schnelle Rueckmeldung vor und leiten Ihre Anfrage ueber Telegram weiter.",
    nameLabel: "Name",
    namePlaceholder: "Ihr Name",
    contactLabel: "Telefon oder E-Mail",
    contactPlaceholder: "Wie duerfen wir Sie erreichen?",
    cityLabel: "Stadt",
    cityPlaceholder: "z. B. Berlin",
    serviceLabel: "Service",
    servicePlaceholder: "Bitte Service waehlen",
    serviceOptions: [
      { value: "Elektro-Notdienst", label: "Elektro-Notdienst" },
      { value: "Fehlersuche", label: "Fehlersuche" },
      { value: "Sicherungskasten", label: "Sicherungskasten" },
      { value: "Steckdosen & Licht", label: "Steckdosen & Licht" },
      { value: "Elektroinstallation", label: "Elektroinstallation" },
      { value: "Modernisierung", label: "Modernisierung" },
    ],
    urgencyLabel: "Dringlichkeit",
    urgencyOptions: { Normal: "Normal", Heute: "Heute", Sofort: "Sofort" },
    messageLabel: "Nachricht",
    messagePlaceholder: "Was ist passiert oder welche Elektroarbeit soll erledigt werden?",
    submitIdle: "Ueber Telegram anfragen",
    submitBusy: "Anfrage wird vorbereitet...",
    success: "Ihre Anfrage ist vorbereitet. Telegram wurde in einem neuen Tab geoeffnet.",
    genericError: "Bitte erneut versuchen.",
    preparationError: "Die Anfrage konnte nicht vorbereitet werden.",
  },
  en: {
    eyebrow: "Telegram request",
    title: "Send your request directly to Mr Spark",
    description:
      "Briefly describe your electrical issue. We prepare a quick reply and continue the conversation via Telegram.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    contactLabel: "Phone or email",
    contactPlaceholder: "How should we reach you?",
    cityLabel: "City",
    cityPlaceholder: "e.g. Berlin",
    serviceLabel: "Service",
    servicePlaceholder: "Choose a service",
    serviceOptions: [
      { value: "Emergency service", label: "Emergency service" },
      { value: "Fault diagnosis", label: "Fault diagnosis" },
      { value: "Fuse box", label: "Fuse box" },
      { value: "Sockets & lighting", label: "Sockets & lighting" },
      { value: "Electrical installation", label: "Electrical installation" },
      { value: "Modernisation", label: "Modernisation" },
    ],
    urgencyLabel: "Urgency",
    urgencyOptions: { Normal: "Normal", Heute: "Today", Sofort: "Immediate" },
    messageLabel: "Message",
    messagePlaceholder: "What happened or what electrical work do you need?",
    submitIdle: "Request via Telegram",
    submitBusy: "Preparing request...",
    success: "Your request is ready. Telegram opened in a new tab.",
    genericError: "Please try again.",
    preparationError: "The request could not be prepared.",
  },
  tr: {
    eyebrow: "Telegram talebi",
    title: "Talebinizi dogrudan Mr Spark'a gonderin",
    description:
      "Elektrik sorununuzu kisaca anlatin. Hizli bir geri donus hazirlar ve devamini Telegram uzerinden surdururuz.",
    nameLabel: "Ad",
    namePlaceholder: "Adiniz",
    contactLabel: "Telefon veya e-posta",
    contactPlaceholder: "Size nasil ulasabiliriz?",
    cityLabel: "Sehir",
    cityPlaceholder: "orn. Berlin",
    serviceLabel: "Hizmet",
    servicePlaceholder: "Bir hizmet secin",
    serviceOptions: [
      { value: "Acil servis", label: "Acil servis" },
      { value: "Ariza tespiti", label: "Ariza tespiti" },
      { value: "Sigorta kutusu", label: "Sigorta kutusu" },
      { value: "Priz ve aydinlatma", label: "Priz ve aydinlatma" },
      { value: "Elektrik tesisati", label: "Elektrik tesisati" },
      { value: "Modernizasyon", label: "Modernizasyon" },
    ],
    urgencyLabel: "Aciliyet",
    urgencyOptions: { Normal: "Normal", Heute: "Bugun", Sofort: "Hemen" },
    messageLabel: "Mesaj",
    messagePlaceholder: "Ne oldu ya da hangi elektrik isine ihtiyaciniz var?",
    submitIdle: "Telegram ile talep gonder",
    submitBusy: "Talep hazirlaniyor...",
    success: "Talebiniz hazir. Telegram yeni sekmede acildi.",
    genericError: "Lutfen tekrar deneyin.",
    preparationError: "Talep hazirlanamadi.",
  },
  ar: {
    eyebrow: "طلب تيليجرام",
    title: "أرسل طلبك مباشرة إلى Mr Spark",
    description: "اشرح مشكلة الكهرباء باختصار. نجهز رداً سريعاً ونتابع معك عبر تيليجرام.",
    nameLabel: "الاسم",
    namePlaceholder: "اسمك",
    contactLabel: "الهاتف أو البريد الإلكتروني",
    contactPlaceholder: "كيف يمكننا التواصل معك؟",
    cityLabel: "المدينة",
    cityPlaceholder: "مثال: برلين",
    serviceLabel: "الخدمة",
    servicePlaceholder: "اختر الخدمة",
    serviceOptions: [
      { value: "خدمة الطوارئ", label: "خدمة الطوارئ" },
      { value: "تشخيص الأعطال", label: "تشخيص الأعطال" },
      { value: "لوحة الكهرباء", label: "لوحة الكهرباء" },
      { value: "المقابس والإنارة", label: "المقابس والإنارة" },
      { value: "تمديدات كهربائية", label: "تمديدات كهربائية" },
      { value: "تحديث وتجديد", label: "تحديث وتجديد" },
    ],
    urgencyLabel: "درجة الاستعجال",
    urgencyOptions: { Normal: "عادي", Heute: "اليوم", Sofort: "فوري" },
    messageLabel: "الرسالة",
    messagePlaceholder: "ماذا حدث أو ما العمل الكهربائي المطلوب؟",
    submitIdle: "اطلب عبر تيليجرام",
    submitBusy: "يتم تجهيز الطلب...",
    success: "تم تجهيز طلبك. فُتح تيليجرام في علامة تبويب جديدة.",
    genericError: "يرجى المحاولة مرة أخرى.",
    preparationError: "تعذر تجهيز الطلب.",
  },
  ru: {
    eyebrow: "Запрос в Telegram",
    title: "Отправьте заявку напрямую в Mr Spark",
    description:
      "Кратко опишите электрическую проблему. Мы подготовим быстрый ответ и продолжим связь через Telegram.",
    nameLabel: "Имя",
    namePlaceholder: "Ваше имя",
    contactLabel: "Телефон или e-mail",
    contactPlaceholder: "Как с вами связаться?",
    cityLabel: "Город",
    cityPlaceholder: "например, Берлин",
    serviceLabel: "Услуга",
    servicePlaceholder: "Выберите услугу",
    serviceOptions: [
      { value: "Аварийная служба", label: "Аварийная служба" },
      { value: "Диагностика", label: "Диагностика" },
      { value: "Электрощит", label: "Электрощит" },
      { value: "Розетки и свет", label: "Розетки и свет" },
      { value: "Электромонтаж", label: "Электромонтаж" },
      { value: "Модернизация", label: "Модернизация" },
    ],
    urgencyLabel: "Срочность",
    urgencyOptions: { Normal: "Обычная", Heute: "Сегодня", Sofort: "Срочно" },
    messageLabel: "Сообщение",
    messagePlaceholder: "Что произошло или какие работы нужны?",
    submitIdle: "Запросить через Telegram",
    submitBusy: "Подготовка заявки...",
    success: "Заявка готова. Telegram открыт в новой вкладке.",
    genericError: "Пожалуйста, попробуйте снова.",
    preparationError: "Не удалось подготовить заявку.",
  },
  pl: {
    eyebrow: "Zapytanie przez Telegram",
    title: "Wyślij zgłoszenie bezpośrednio do Mr Spark",
    description:
      "Krótko opisz problem elektryczny. Przygotujemy szybką odpowiedź i przejdziemy do rozmowy w Telegramie.",
    nameLabel: "Imię",
    namePlaceholder: "Twoje imię",
    contactLabel: "Telefon lub e-mail",
    contactPlaceholder: "Jak mamy się z Tobą skontaktować?",
    cityLabel: "Miasto",
    cityPlaceholder: "np. Berlin",
    serviceLabel: "Usługa",
    servicePlaceholder: "Wybierz usługę",
    serviceOptions: [
      { value: "Pogotowie elektryczne", label: "Pogotowie elektryczne" },
      { value: "Diagnostyka usterek", label: "Diagnostyka usterek" },
      { value: "Rozdzielnia", label: "Rozdzielnia" },
      { value: "Gniazdka i oswietlenie", label: "Gniazdka i oswietlenie" },
      { value: "Instalacja elektryczna", label: "Instalacja elektryczna" },
      { value: "Modernizacja", label: "Modernizacja" },
    ],
    urgencyLabel: "Pilność",
    urgencyOptions: { Normal: "Normalna", Heute: "Dzisiaj", Sofort: "Natychmiast" },
    messageLabel: "Wiadomość",
    messagePlaceholder: "Co się stało lub jakiej pracy elektrycznej potrzebujesz?",
    submitIdle: "Zapytaj przez Telegram",
    submitBusy: "Przygotowywanie zgłoszenia...",
    success: "Zgłoszenie jest gotowe. Telegram otwarto w nowej karcie.",
    genericError: "Spróbuj ponownie.",
    preparationError: "Nie udało się przygotować zgłoszenia.",
  },
  uk: {
    eyebrow: "Запит у Telegram",
    title: "Надішліть заявку безпосередньо до Mr Spark",
    description:
      "Коротко опишіть електричну проблему. Ми підготуємо швидку відповідь і продовжимо спілкування в Telegram.",
    nameLabel: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    contactLabel: "Телефон або e-mail",
    contactPlaceholder: "Як із вами зв'язатися?",
    cityLabel: "Місто",
    cityPlaceholder: "наприклад, Берлін",
    serviceLabel: "Послуга",
    servicePlaceholder: "Оберіть послугу",
    serviceOptions: [
      { value: "Аварійна служба", label: "Аварійна служба" },
      { value: "Діагностика", label: "Діагностика" },
      { value: "Електрощит", label: "Електрощит" },
      { value: "Розетки та світло", label: "Розетки та світло" },
      { value: "Електромонтаж", label: "Електромонтаж" },
      { value: "Модернізація", label: "Модернізація" },
    ],
    urgencyLabel: "Терміновість",
    urgencyOptions: { Normal: "Звичайна", Heute: "Сьогодні", Sofort: "Терміново" },
    messageLabel: "Повідомлення",
    messagePlaceholder: "Що сталося або які роботи вам потрібні?",
    submitIdle: "Запросити через Telegram",
    submitBusy: "Підготовка заявки...",
    success: "Заявка готова. Telegram відкрито в новій вкладці.",
    genericError: "Будь ласка, спробуйте ще раз.",
    preparationError: "Не вдалося підготувати заявку.",
  },
  ro: {
    eyebrow: "Cerere prin Telegram",
    title: "Trimite cererea direct catre Mr Spark",
    description:
      "Descrie pe scurt problema electrica. Pregatim un raspuns rapid si continuam discutia prin Telegram.",
    nameLabel: "Nume",
    namePlaceholder: "Numele dvs.",
    contactLabel: "Telefon sau e-mail",
    contactPlaceholder: "Cum va putem contacta?",
    cityLabel: "Oras",
    cityPlaceholder: "ex. Berlin",
    serviceLabel: "Serviciu",
    servicePlaceholder: "Alegeti serviciul",
    serviceOptions: [
      { value: "Serviciu de urgenta", label: "Serviciu de urgenta" },
      { value: "Diagnosticare", label: "Diagnosticare" },
      { value: "Tablou electric", label: "Tablou electric" },
      { value: "Prize si iluminat", label: "Prize si iluminat" },
      { value: "Instalatie electrica", label: "Instalatie electrica" },
      { value: "Modernizare", label: "Modernizare" },
    ],
    urgencyLabel: "Urgenta",
    urgencyOptions: { Normal: "Normal", Heute: "Astazi", Sofort: "Imediat" },
    messageLabel: "Mesaj",
    messagePlaceholder: "Ce s-a intamplat sau ce lucrare electrica aveti nevoie?",
    submitIdle: "Solicita prin Telegram",
    submitBusy: "Se pregateste solicitarea...",
    success: "Solicitarea este pregatita. Telegram s-a deschis intr-o fila noua.",
    genericError: "Va rugam sa incercati din nou.",
    preparationError: "Solicitarea nu a putut fi pregatita.",
  },
};

export default function TelegramLeadForm({ sourcePage }: { sourcePage: string }) {
  const localeSegment = sourcePage.split("/").filter(Boolean)[0];
  const locale = localeSegment && isLocale(localeSegment) ? localeSegment : defaultLocale;
  const copy = leadFormCopy[locale];
  const initialFormState: LeadFormState = {
    name: "",
    contact: "",
    city: "",
    service: "",
    urgency: "Normal",
    message: "",
    website: "",
  };
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [form, setForm] = useState<LeadFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);
    const telegramWindow = typeof window !== "undefined" ? window.open("", "_blank") : null;

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          sourcePage,
          startedAt,
        }),
      });

      const payload = (await response.json()) as {
        ok: boolean;
        error?: string;
        contactUrl?: string;
        tracking?: {
          event: string;
          method: string;
          sourcePage: string;
        };
      };

      if (!response.ok || !payload.ok || !payload.contactUrl) {
        throw new Error(payload.error || copy.preparationError);
      }

      if (typeof window !== "undefined") {
        (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer?.push({
          event: payload.tracking?.event || "lead_submitted",
          leadMethod: payload.tracking?.method || "telegram",
          sourcePage: payload.tracking?.sourcePage || sourcePage,
        });

        if (telegramWindow) {
          telegramWindow.opener = null;
          telegramWindow.location.href = payload.contactUrl;
        } else {
          window.location.assign(payload.contactUrl);
        }
      }

      setFeedback(copy.success);
      setForm(initialFormState);
      setStartedAt(Date.now());
    } catch (error) {
      telegramWindow?.close();
      setFeedback(error instanceof Error ? error.message : copy.genericError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="panel-surface grid gap-5 p-6 md:p-7" onSubmit={handleSubmit} aria-busy={isSubmitting}>
      <div>
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold text-[color:var(--ink)]">{copy.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{copy.description}</p>
      </div>

      <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
        {copy.nameLabel}
        <input
          id="lead-name"
          name="name"
          type="text"
          autoComplete="name"
          className="form-input"
          placeholder={copy.namePlaceholder}
          required
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
        {copy.contactLabel}
        <input
          id="lead-contact"
          name="contact"
          type="text"
          autoComplete="off"
          className="form-input"
          placeholder={copy.contactPlaceholder}
          value={form.contact}
          onChange={(event) => setForm({ ...form, contact: event.target.value })}
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
          {copy.cityLabel}
          <input
            id="lead-city"
            name="city"
            type="text"
            autoComplete="address-level2"
            className="form-input"
            placeholder={copy.cityPlaceholder}
            required
            value={form.city}
            onChange={(event) => setForm({ ...form, city: event.target.value })}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
          {copy.serviceLabel}
          <select
            id="lead-service"
            name="service"
            className="form-input"
            required
            value={form.service}
            onChange={(event) => setForm({ ...form, service: event.target.value })}
          >
            <option value="" disabled>
              {copy.servicePlaceholder}
            </option>
            {copy.serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
        {copy.urgencyLabel}
        <select
          id="lead-urgency"
          name="urgency"
          className="form-input"
          value={form.urgency}
          onChange={(event) =>
            setForm({ ...form, urgency: event.target.value as LeadFormState["urgency"] })
          }
        >
          <option value="Normal">{copy.urgencyOptions.Normal}</option>
          <option value="Heute">{copy.urgencyOptions.Heute}</option>
          <option value="Sofort">{copy.urgencyOptions.Sofort}</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
        {copy.messageLabel}
        <textarea
          id="lead-message"
          name="message"
          autoComplete="off"
          className="form-input min-h-32 resize-y"
          placeholder={copy.messagePlaceholder}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
        />
      </label>

      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={(event) => setForm({ ...form, website: event.target.value })}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="btn-base justify-center bg-[color:var(--accent)] text-[color:var(--ink)] disabled:cursor-not-allowed disabled:opacity-70 hover:bg-[#ffd36c]"
      >
        {isSubmitting ? copy.submitBusy : copy.submitIdle}
      </button>

      {feedback ? (
        <p role="status" aria-live="polite" className="text-sm text-[color:var(--muted)]">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
