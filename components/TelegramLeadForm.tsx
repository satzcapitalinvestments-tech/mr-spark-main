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

const leadFormCopy: Record<
  LocaleCode,
  {
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
    urgencyLabel: string;
    urgencyOptions: Record<LeadFormState["urgency"], string>;
    messageLabel: string;
    messagePlaceholder: string;
    submitIdle: string;
    submitBusy: string;
    success: string;
    genericError: string;
    preparationError: string;
  }
> = {
  de: {
    eyebrow: "Lead-Details",
    title: "Direkt per Telegram senden",
    description:
      "Die Anfrage wird zuerst an den vorhandenen Lead-Endpoint uebergeben. Danach oeffnet sich Telegram mit einer strukturierten Nachricht fuer die operative Weiterbearbeitung.",
    nameLabel: "Name",
    namePlaceholder: "Ihr Name",
    contactLabel: "Telefon oder E-Mail",
    contactPlaceholder: "Kontaktmöglichkeit",
    cityLabel: "Stadt",
    cityPlaceholder: "z. B. Berlin",
    serviceLabel: "Service",
    servicePlaceholder: "z. B. Notdienst",
    urgencyLabel: "Dringlichkeit",
    urgencyOptions: { Normal: "Normal", Heute: "Heute", Sofort: "Sofort" },
    messageLabel: "Nachricht",
    messagePlaceholder: "Was ist passiert und wie schnell brauchen Sie Hilfe?",
    submitIdle: "Telegram oeffnen",
    submitBusy: "Anfrage wird vorbereitet...",
    success: "Anfrage vorbereitet. Telegram wurde in einem neuen Tab geoeffnet.",
    genericError: "Bitte erneut versuchen.",
    preparationError: "Die Anfrage konnte nicht vorbereitet werden.",
  },
  en: {
    eyebrow: "Lead details",
    title: "Send directly via Telegram",
    description:
      "The request is sent to the existing lead endpoint first. Telegram then opens with a structured message for operational follow-up.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    contactLabel: "Phone or email",
    contactPlaceholder: "Best contact method",
    cityLabel: "City",
    cityPlaceholder: "e.g. Berlin",
    serviceLabel: "Service",
    servicePlaceholder: "e.g. emergency service",
    urgencyLabel: "Urgency",
    urgencyOptions: { Normal: "Normal", Heute: "Today", Sofort: "Immediate" },
    messageLabel: "Message",
    messagePlaceholder: "What happened and how quickly do you need help?",
    submitIdle: "Open Telegram",
    submitBusy: "Preparing request...",
    success: "Request prepared. Telegram opened in a new tab.",
    genericError: "Please try again.",
    preparationError: "The request could not be prepared.",
  },
  tr: {
    eyebrow: "Talep detayları",
    title: "Doğrudan Telegram ile gönder",
    description:
      "Talep önce mevcut lead endpoint'ine gönderilir. Ardından Telegram operasyonel takip için yapılandırılmış mesajla açılır.",
    nameLabel: "Ad",
    namePlaceholder: "Adınız",
    contactLabel: "Telefon veya e-posta",
    contactPlaceholder: "İletişim bilgisi",
    cityLabel: "Şehir",
    cityPlaceholder: "örn. Berlin",
    serviceLabel: "Hizmet",
    servicePlaceholder: "örn. acil servis",
    urgencyLabel: "Aciliyet",
    urgencyOptions: { Normal: "Normal", Heute: "Bugün", Sofort: "Hemen" },
    messageLabel: "Mesaj",
    messagePlaceholder: "Ne oldu ve ne kadar hızlı yardıma ihtiyacınız var?",
    submitIdle: "Telegram'ı aç",
    submitBusy: "Talep hazırlanıyor...",
    success: "Talep hazırlandı. Telegram yeni sekmede açıldı.",
    genericError: "Lütfen tekrar deneyin.",
    preparationError: "Talep hazırlanamadı.",
  },
  ar: {
    eyebrow: "تفاصيل الطلب",
    title: "أرسل مباشرة عبر تيليجرام",
    description:
      "يتم إرسال الطلب أولاً إلى نقطة lead الحالية، ثم يفتح تيليجرام برسالة منظمة للمتابعة التشغيلية.",
    nameLabel: "الاسم",
    namePlaceholder: "اسمك",
    contactLabel: "الهاتف أو البريد الإلكتروني",
    contactPlaceholder: "وسيلة الاتصال",
    cityLabel: "المدينة",
    cityPlaceholder: "مثال: برلين",
    serviceLabel: "الخدمة",
    servicePlaceholder: "مثال: خدمة الطوارئ",
    urgencyLabel: "درجة الاستعجال",
    urgencyOptions: { Normal: "عادي", Heute: "اليوم", Sofort: "فوري" },
    messageLabel: "الرسالة",
    messagePlaceholder: "ماذا حدث وكم بسرعة تحتاج إلى المساعدة؟",
    submitIdle: "افتح تيليجرام",
    submitBusy: "يتم تجهيز الطلب...",
    success: "تم تجهيز الطلب. فُتح تيليجرام في علامة تبويب جديدة.",
    genericError: "يرجى المحاولة مرة أخرى.",
    preparationError: "تعذر تجهيز الطلب.",
  },
  ru: {
    eyebrow: "Детали заявки",
    title: "Отправить через Telegram",
    description:
      "Заявка сначала отправляется в существующий lead endpoint. Затем Telegram открывается со структурированным сообщением для дальнейшей обработки.",
    nameLabel: "Имя",
    namePlaceholder: "Ваше имя",
    contactLabel: "Телефон или e-mail",
    contactPlaceholder: "Контактные данные",
    cityLabel: "Город",
    cityPlaceholder: "например, Берлин",
    serviceLabel: "Услуга",
    servicePlaceholder: "например, аварийная служба",
    urgencyLabel: "Срочность",
    urgencyOptions: { Normal: "Обычная", Heute: "Сегодня", Sofort: "Срочно" },
    messageLabel: "Сообщение",
    messagePlaceholder: "Что произошло и как быстро вам нужна помощь?",
    submitIdle: "Открыть Telegram",
    submitBusy: "Подготовка заявки...",
    success: "Заявка подготовлена. Telegram открыт в новой вкладке.",
    genericError: "Пожалуйста, попробуйте снова.",
    preparationError: "Не удалось подготовить заявку.",
  },
  pl: {
    eyebrow: "Szczegóły zgłoszenia",
    title: "Wyślij bezpośrednio przez Telegram",
    description:
      "Zgłoszenie trafia najpierw do istniejącego endpointu leadów. Następnie Telegram otwiera się z uporządkowaną wiadomością do dalszej obsługi.",
    nameLabel: "Imię",
    namePlaceholder: "Twoje imię",
    contactLabel: "Telefon lub e-mail",
    contactPlaceholder: "Dane kontaktowe",
    cityLabel: "Miasto",
    cityPlaceholder: "np. Berlin",
    serviceLabel: "Usługa",
    servicePlaceholder: "np. pogotowie elektryczne",
    urgencyLabel: "Pilność",
    urgencyOptions: { Normal: "Normalna", Heute: "Dzisiaj", Sofort: "Natychmiast" },
    messageLabel: "Wiadomość",
    messagePlaceholder: "Co się stało i jak szybko potrzebujesz pomocy?",
    submitIdle: "Otwórz Telegram",
    submitBusy: "Przygotowywanie zgłoszenia...",
    success: "Zgłoszenie przygotowane. Telegram otwarto w nowej karcie.",
    genericError: "Spróbuj ponownie.",
    preparationError: "Nie udało się przygotować zgłoszenia.",
  },
  uk: {
    eyebrow: "Деталі заявки",
    title: "Надіслати через Telegram",
    description:
      "Заявка спочатку надсилається в наявний lead endpoint. Потім Telegram відкривається зі структурованим повідомленням для подальшої обробки.",
    nameLabel: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    contactLabel: "Телефон або e-mail",
    contactPlaceholder: "Контактні дані",
    cityLabel: "Місто",
    cityPlaceholder: "наприклад, Берлін",
    serviceLabel: "Послуга",
    servicePlaceholder: "наприклад, аварійна служба",
    urgencyLabel: "Терміновість",
    urgencyOptions: { Normal: "Звичайна", Heute: "Сьогодні", Sofort: "Терміново" },
    messageLabel: "Повідомлення",
    messagePlaceholder: "Що сталося і як швидко вам потрібна допомога?",
    submitIdle: "Відкрити Telegram",
    submitBusy: "Підготовка заявки...",
    success: "Заявку підготовлено. Telegram відкрито в новій вкладці.",
    genericError: "Будь ласка, спробуйте ще раз.",
    preparationError: "Не вдалося підготувати заявку.",
  },
  ro: {
    eyebrow: "Detalii solicitare",
    title: "Trimite direct prin Telegram",
    description:
      "Solicitarea este trimisă mai întâi către endpointul existent de leaduri. Apoi Telegram se deschide cu un mesaj structurat pentru urmărirea operațională.",
    nameLabel: "Nume",
    namePlaceholder: "Numele dvs.",
    contactLabel: "Telefon sau e-mail",
    contactPlaceholder: "Date de contact",
    cityLabel: "Oraș",
    cityPlaceholder: "ex. Berlin",
    serviceLabel: "Serviciu",
    servicePlaceholder: "ex. serviciu de urgență",
    urgencyLabel: "Urgență",
    urgencyOptions: { Normal: "Normal", Heute: "Astăzi", Sofort: "Imediat" },
    messageLabel: "Mesaj",
    messagePlaceholder: "Ce s-a întâmplat și cât de repede aveți nevoie de ajutor?",
    submitIdle: "Deschide Telegram",
    submitBusy: "Se pregătește solicitarea...",
    success: "Solicitarea a fost pregătită. Telegram s-a deschis într-o filă nouă.",
    genericError: "Vă rugăm să încercați din nou.",
    preparationError: "Solicitarea nu a putut fi pregătită.",
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
    <form className="panel-surface grid gap-4 p-6 md:p-7" onSubmit={handleSubmit} aria-busy={isSubmitting}>
      <div>
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold text-[color:var(--ink)]">{copy.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
          {copy.description}
        </p>
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
          <input
            id="lead-service"
            name="service"
            type="text"
            autoComplete="off"
            className="form-input"
            placeholder={copy.servicePlaceholder}
            required
            value={form.service}
            onChange={(event) => setForm({ ...form, service: event.target.value })}
          />
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
