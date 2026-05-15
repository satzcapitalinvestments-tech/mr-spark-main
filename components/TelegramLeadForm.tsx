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
  fallbackInfo: string;
  genericError: string;
  preparationError: string;
  backendErrorTranslations: Record<string, string>;
  tooLongLabels: Record<"Name" | "Kontakt" | "Stadt" | "Service" | "Nachricht", string>;
  tooLongSuffix: string;
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
    fallbackInfo:
      "Ihre Anfrage ist vorbereitet. Telegram ist fuer diese Umgebung noch nicht konfiguriert, deshalb wurde kein externer Kontakt geoeffnet.",
    genericError: "Bitte erneut versuchen.",
    preparationError: "Die Anfrage konnte nicht vorbereitet werden.",
    backendErrorTranslations: {},
    tooLongLabels: {
      Name: "Name",
      Kontakt: "Kontakt",
      Stadt: "Stadt",
      Service: "Service",
      Nachricht: "Nachricht",
    },
    tooLongSuffix: "ist zu lang.",
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
      { value: "Elektro-Notdienst", label: "Emergency service" },
      { value: "Fehlersuche", label: "Fault diagnosis" },
      { value: "Sicherungskasten", label: "Fuse box" },
      { value: "Steckdosen & Licht", label: "Sockets & lighting" },
      { value: "Elektroinstallation", label: "Electrical installation" },
      { value: "Modernisierung", label: "Modernisation" },
    ],
    urgencyLabel: "Urgency",
    urgencyOptions: { Normal: "Normal", Heute: "Today", Sofort: "Immediate" },
    messageLabel: "Message",
    messagePlaceholder: "What happened or what electrical work do you need?",
    submitIdle: "Request via Telegram",
    submitBusy: "Preparing request...",
    success: "Your request is ready. Telegram opened in a new tab.",
    fallbackInfo:
      "Your request is ready. Telegram is not configured for this environment yet, so no external contact was opened.",
    genericError: "Please try again.",
    preparationError: "The request could not be prepared.",
    backendErrorTranslations: {
      "Ungueltige Quellseite.": "Invalid source page.",
      "Bitte eine gueltige Telefonnummer oder E-Mail angeben.": "Please enter a valid phone number or email address.",
      "Anfrage zu schnell gesendet. Bitte Formular kurz pruefen und erneut senden.":
        "Request sent too quickly. Please review the form briefly and try again.",
      "Sitzung abgelaufen. Bitte Formular erneut senden.": "Session expired. Please submit the form again.",
      "Zu viele Anfragen in kurzer Zeit. Bitte in einigen Minuten erneut versuchen.":
        "Too many requests in a short time. Please try again in a few minutes.",
      "Ungueltige Anfrage.": "Invalid request.",
      "Spam erkannt.": "Spam detected.",
      "Bitte Name, Stadt, Service und Seite angeben.": "Please provide your name, city, service, and page.",
      "Ungueltige Dringlichkeit.": "Invalid urgency.",
      "Unbekannter Fehler.": "Unknown error.",
    },
    tooLongLabels: {
      Name: "Name",
      Kontakt: "Contact",
      Stadt: "City",
      Service: "Service",
      Nachricht: "Message",
    },
    tooLongSuffix: "is too long.",
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
      { value: "Elektro-Notdienst", label: "Acil servis" },
      { value: "Fehlersuche", label: "Ariza tespiti" },
      { value: "Sicherungskasten", label: "Sigorta kutusu" },
      { value: "Steckdosen & Licht", label: "Priz ve aydinlatma" },
      { value: "Elektroinstallation", label: "Elektrik tesisati" },
      { value: "Modernisierung", label: "Modernizasyon" },
    ],
    urgencyLabel: "Aciliyet",
    urgencyOptions: { Normal: "Normal", Heute: "Bugun", Sofort: "Hemen" },
    messageLabel: "Mesaj",
    messagePlaceholder: "Ne oldu ya da hangi elektrik isine ihtiyaciniz var?",
    submitIdle: "Telegram ile talep gonder",
    submitBusy: "Talep hazirlaniyor...",
    success: "Talebiniz hazir. Telegram yeni sekmede acildi.",
    fallbackInfo:
      "Talebiniz hazir. Bu ortam icin Telegram henuz ayarlanmadigi icin harici bir iletisim acilmadi.",
    genericError: "Lutfen tekrar deneyin.",
    preparationError: "Talep hazirlanamadi.",
    backendErrorTranslations: {
      "Ungueltige Quellseite.": "Gecersiz kaynak sayfa.",
      "Bitte eine gueltige Telefonnummer oder E-Mail angeben.": "Lutfen gecerli bir telefon numarasi veya e-posta girin.",
      "Anfrage zu schnell gesendet. Bitte Formular kurz pruefen und erneut senden.":
        "Talep cok hizli gonderildi. Lutfen formu kisaca kontrol edip tekrar deneyin.",
      "Sitzung abgelaufen. Bitte Formular erneut senden.": "Oturum suresi doldu. Lutfen formu yeniden gonderin.",
      "Zu viele Anfragen in kurzer Zeit. Bitte in einigen Minuten erneut versuchen.":
        "Kisa surede cok fazla talep gonderildi. Lutfen birkac dakika sonra tekrar deneyin.",
      "Ungueltige Anfrage.": "Gecersiz talep.",
      "Spam erkannt.": "Spam algilandi.",
      "Bitte Name, Stadt, Service und Seite angeben.": "Lutfen ad, sehir, hizmet ve sayfayi belirtin.",
      "Ungueltige Dringlichkeit.": "Gecersiz aciliyet.",
      "Unbekannter Fehler.": "Bilinmeyen hata.",
    },
    tooLongLabels: {
      Name: "Ad",
      Kontakt: "Iletisim",
      Stadt: "Sehir",
      Service: "Hizmet",
      Nachricht: "Mesaj",
    },
    tooLongSuffix: "cok uzun.",
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
      { value: "Elektro-Notdienst", label: "خدمة الطوارئ" },
      { value: "Fehlersuche", label: "تشخيص الأعطال" },
      { value: "Sicherungskasten", label: "لوحة الكهرباء" },
      { value: "Steckdosen & Licht", label: "المقابس والإنارة" },
      { value: "Elektroinstallation", label: "تمديدات كهربائية" },
      { value: "Modernisierung", label: "تحديث وتجديد" },
    ],
    urgencyLabel: "درجة الاستعجال",
    urgencyOptions: { Normal: "عادي", Heute: "اليوم", Sofort: "فوري" },
    messageLabel: "الرسالة",
    messagePlaceholder: "ماذا حدث أو ما العمل الكهربائي المطلوب؟",
    submitIdle: "اطلب عبر تيليجرام",
    submitBusy: "يتم تجهيز الطلب...",
    success: "تم تجهيز طلبك. فُتح تيليجرام في علامة تبويب جديدة.",
    fallbackInfo: "تم تجهيز طلبك. تيليجرام غير مُعدّ لهذه البيئة بعد، لذلك لم يتم فتح جهة اتصال خارجية.",
    genericError: "يرجى المحاولة مرة أخرى.",
    preparationError: "تعذر تجهيز الطلب.",
    backendErrorTranslations: {
      "Ungueltige Quellseite.": "صفحة المصدر غير صالحة.",
      "Bitte eine gueltige Telefonnummer oder E-Mail angeben.": "يرجى إدخال رقم هاتف أو بريد إلكتروني صالح.",
      "Anfrage zu schnell gesendet. Bitte Formular kurz pruefen und erneut senden.":
        "تم إرسال الطلب بسرعة كبيرة. يرجى مراجعة النموذج سريعاً والمحاولة مرة أخرى.",
      "Sitzung abgelaufen. Bitte Formular erneut senden.": "انتهت الجلسة. يرجى إرسال النموذج مرة أخرى.",
      "Zu viele Anfragen in kurzer Zeit. Bitte in einigen Minuten erneut versuchen.":
        "تم إرسال عدد كبير من الطلبات خلال وقت قصير. يرجى المحاولة مرة أخرى بعد بضع دقائق.",
      "Ungueltige Anfrage.": "طلب غير صالح.",
      "Spam erkannt.": "تم اكتشاف رسائل مزعجة.",
      "Bitte Name, Stadt, Service und Seite angeben.": "يرجى إدخال الاسم والمدينة والخدمة والصفحة.",
      "Ungueltige Dringlichkeit.": "درجة الاستعجال غير صالحة.",
      "Unbekannter Fehler.": "خطأ غير معروف.",
    },
    tooLongLabels: {
      Name: "الاسم",
      Kontakt: "وسيلة الاتصال",
      Stadt: "المدينة",
      Service: "الخدمة",
      Nachricht: "الرسالة",
    },
    tooLongSuffix: "طويل جدًا.",
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
      { value: "Elektro-Notdienst", label: "Аварийная служба" },
      { value: "Fehlersuche", label: "Диагностика" },
      { value: "Sicherungskasten", label: "Электрощит" },
      { value: "Steckdosen & Licht", label: "Розетки и свет" },
      { value: "Elektroinstallation", label: "Электромонтаж" },
      { value: "Modernisierung", label: "Модернизация" },
    ],
    urgencyLabel: "Срочность",
    urgencyOptions: { Normal: "Обычная", Heute: "Сегодня", Sofort: "Срочно" },
    messageLabel: "Сообщение",
    messagePlaceholder: "Что произошло или какие работы нужны?",
    submitIdle: "Запросить через Telegram",
    submitBusy: "Подготовка заявки...",
    success: "Заявка готова. Telegram открыт в новой вкладке.",
    fallbackInfo:
      "Заявка подготовлена. Telegram для этой среды пока не настроен, поэтому внешний контакт не был открыт.",
    genericError: "Пожалуйста, попробуйте снова.",
    preparationError: "Не удалось подготовить заявку.",
    backendErrorTranslations: {
      "Ungueltige Quellseite.": "Недопустимая исходная страница.",
      "Bitte eine gueltige Telefonnummer oder E-Mail angeben.": "Укажите корректный номер телефона или e-mail.",
      "Anfrage zu schnell gesendet. Bitte Formular kurz pruefen und erneut senden.":
        "Заявка отправлена слишком быстро. Пожалуйста, кратко проверьте форму и попробуйте снова.",
      "Sitzung abgelaufen. Bitte Formular erneut senden.": "Сессия истекла. Пожалуйста, отправьте форму снова.",
      "Zu viele Anfragen in kurzer Zeit. Bitte in einigen Minuten erneut versuchen.":
        "Слишком много заявок за короткое время. Пожалуйста, попробуйте снова через несколько минут.",
      "Ungueltige Anfrage.": "Недопустимый запрос.",
      "Spam erkannt.": "Обнаружен спам.",
      "Bitte Name, Stadt, Service und Seite angeben.": "Укажите имя, город, услугу и страницу.",
      "Ungueltige Dringlichkeit.": "Недопустимая срочность.",
      "Unbekannter Fehler.": "Неизвестная ошибка.",
    },
    tooLongLabels: {
      Name: "Имя",
      Kontakt: "Контакт",
      Stadt: "Город",
      Service: "Услуга",
      Nachricht: "Сообщение",
    },
    tooLongSuffix: "слишком длинное.",
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
      { value: "Elektro-Notdienst", label: "Pogotowie elektryczne" },
      { value: "Fehlersuche", label: "Diagnostyka usterek" },
      { value: "Sicherungskasten", label: "Rozdzielnia" },
      { value: "Steckdosen & Licht", label: "Gniazdka i oswietlenie" },
      { value: "Elektroinstallation", label: "Instalacja elektryczna" },
      { value: "Modernisierung", label: "Modernizacja" },
    ],
    urgencyLabel: "Pilność",
    urgencyOptions: { Normal: "Normalna", Heute: "Dzisiaj", Sofort: "Natychmiast" },
    messageLabel: "Wiadomość",
    messagePlaceholder: "Co się stało lub jakiej pracy elektrycznej potrzebujesz?",
    submitIdle: "Zapytaj przez Telegram",
    submitBusy: "Przygotowywanie zgłoszenia...",
    success: "Zgłoszenie jest gotowe. Telegram otwarto w nowej karcie.",
    fallbackInfo:
      "Zgłoszenie jest gotowe. Telegram nie jest jeszcze skonfigurowany dla tego środowiska, więc nie otwarto zewnętrznego kontaktu.",
    genericError: "Spróbuj ponownie.",
    preparationError: "Nie udało się przygotować zgłoszenia.",
    backendErrorTranslations: {
      "Ungueltige Quellseite.": "Nieprawidłowa strona źródłowa.",
      "Bitte eine gueltige Telefonnummer oder E-Mail angeben.": "Podaj prawidłowy numer telefonu lub adres e-mail.",
      "Anfrage zu schnell gesendet. Bitte Formular kurz pruefen und erneut senden.":
        "Zgłoszenie wysłano zbyt szybko. Krótko sprawdź formularz i spróbuj ponownie.",
      "Sitzung abgelaufen. Bitte Formular erneut senden.": "Sesja wygasła. Prześlij formularz ponownie.",
      "Zu viele Anfragen in kurzer Zeit. Bitte in einigen Minuten erneut versuchen.":
        "Zbyt wiele zgłoszeń w krótkim czasie. Spróbuj ponownie za kilka minut.",
      "Ungueltige Anfrage.": "Nieprawidłowe zgłoszenie.",
      "Spam erkannt.": "Wykryto spam.",
      "Bitte Name, Stadt, Service und Seite angeben.": "Podaj imię, miasto, usługę i stronę.",
      "Ungueltige Dringlichkeit.": "Nieprawidłowy poziom pilności.",
      "Unbekannter Fehler.": "Nieznany błąd.",
    },
    tooLongLabels: {
      Name: "Imię",
      Kontakt: "Kontakt",
      Stadt: "Miasto",
      Service: "Usługa",
      Nachricht: "Wiadomość",
    },
    tooLongSuffix: "jest za długie.",
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
      { value: "Elektro-Notdienst", label: "Аварійна служба" },
      { value: "Fehlersuche", label: "Діагностика" },
      { value: "Sicherungskasten", label: "Електрощит" },
      { value: "Steckdosen & Licht", label: "Розетки та світло" },
      { value: "Elektroinstallation", label: "Електромонтаж" },
      { value: "Modernisierung", label: "Модернізація" },
    ],
    urgencyLabel: "Терміновість",
    urgencyOptions: { Normal: "Звичайна", Heute: "Сьогодні", Sofort: "Терміново" },
    messageLabel: "Повідомлення",
    messagePlaceholder: "Що сталося або які роботи вам потрібні?",
    submitIdle: "Запросити через Telegram",
    submitBusy: "Підготовка заявки...",
    success: "Заявка готова. Telegram відкрито в новій вкладці.",
    fallbackInfo:
      "Заявку підготовлено. Telegram для цього середовища ще не налаштовано, тому зовнішній контакт не було відкрито.",
    genericError: "Будь ласка, спробуйте ще раз.",
    preparationError: "Не вдалося підготувати заявку.",
    backendErrorTranslations: {
      "Ungueltige Quellseite.": "Недійсна вихідна сторінка.",
      "Bitte eine gueltige Telefonnummer oder E-Mail angeben.": "Вкажіть дійсний номер телефону або e-mail.",
      "Anfrage zu schnell gesendet. Bitte Formular kurz pruefen und erneut senden.":
        "Заявку надіслано надто швидко. Коротко перевірте форму та спробуйте ще раз.",
      "Sitzung abgelaufen. Bitte Formular erneut senden.": "Сесію завершено. Будь ласка, надішліть форму ще раз.",
      "Zu viele Anfragen in kurzer Zeit. Bitte in einigen Minuten erneut versuchen.":
        "Забагато заявок за короткий час. Спробуйте ще раз за кілька хвилин.",
      "Ungueltige Anfrage.": "Недійсний запит.",
      "Spam erkannt.": "Виявлено спам.",
      "Bitte Name, Stadt, Service und Seite angeben.": "Вкажіть ім'я, місто, послугу та сторінку.",
      "Ungueltige Dringlichkeit.": "Недійсний рівень терміновості.",
      "Unbekannter Fehler.": "Невідома помилка.",
    },
    tooLongLabels: {
      Name: "Ім'я",
      Kontakt: "Контакт",
      Stadt: "Місто",
      Service: "Послуга",
      Nachricht: "Повідомлення",
    },
    tooLongSuffix: "занадто довге.",
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
      { value: "Elektro-Notdienst", label: "Serviciu de urgenta" },
      { value: "Fehlersuche", label: "Diagnosticare" },
      { value: "Sicherungskasten", label: "Tablou electric" },
      { value: "Steckdosen & Licht", label: "Prize si iluminat" },
      { value: "Elektroinstallation", label: "Instalatie electrica" },
      { value: "Modernisierung", label: "Modernizare" },
    ],
    urgencyLabel: "Urgenta",
    urgencyOptions: { Normal: "Normal", Heute: "Astazi", Sofort: "Imediat" },
    messageLabel: "Mesaj",
    messagePlaceholder: "Ce s-a intamplat sau ce lucrare electrica aveti nevoie?",
    submitIdle: "Solicita prin Telegram",
    submitBusy: "Se pregateste solicitarea...",
    success: "Solicitarea este pregatita. Telegram s-a deschis intr-o fila noua.",
    fallbackInfo:
      "Solicitarea este pregatita. Telegram nu este inca configurat pentru acest mediu, asa ca nu s-a deschis niciun contact extern.",
    genericError: "Va rugam sa incercati din nou.",
    preparationError: "Solicitarea nu a putut fi pregatita.",
    backendErrorTranslations: {
      "Ungueltige Quellseite.": "Pagină sursă invalidă.",
      "Bitte eine gueltige Telefonnummer oder E-Mail angeben.": "Introduceți un număr de telefon sau un e-mail valid.",
      "Anfrage zu schnell gesendet. Bitte Formular kurz pruefen und erneut senden.":
        "Solicitarea a fost trimisă prea repede. Verificați rapid formularul și încercați din nou.",
      "Sitzung abgelaufen. Bitte Formular erneut senden.": "Sesiunea a expirat. Vă rugăm să retrimiteți formularul.",
      "Zu viele Anfragen in kurzer Zeit. Bitte in einigen Minuten erneut versuchen.":
        "Prea multe solicitări într-un timp scurt. Încercați din nou peste câteva minute.",
      "Ungueltige Anfrage.": "Solicitare invalidă.",
      "Spam erkannt.": "Spam detectat.",
      "Bitte Name, Stadt, Service und Seite angeben.": "Introduceți numele, orașul, serviciul și pagina.",
      "Ungueltige Dringlichkeit.": "Nivel de urgență invalid.",
      "Unbekannter Fehler.": "Eroare necunoscută.",
    },
    tooLongLabels: {
      Name: "Nume",
      Kontakt: "Contact",
      Stadt: "Oraș",
      Service: "Serviciu",
      Nachricht: "Mesaj",
    },
    tooLongSuffix: "este prea lung.",
  },
};

function translateBackendError(message: string, copy: LeadFormCopy) {
  const directMatch = copy.backendErrorTranslations[message];
  if (directMatch) {
    return directMatch;
  }

  const tooLongMatch = message.match(/^(Name|Kontakt|Stadt|Service|Nachricht) ist zu lang\.$/);
  if (tooLongMatch) {
    const field = tooLongMatch[1] as keyof LeadFormCopy["tooLongLabels"];
    return `${copy.tooLongLabels[field]} ${copy.tooLongSuffix}`;
  }

  return message;
}

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
        contactConfigured?: boolean;
        tracking?: {
          event: string;
          method: string;
          sourcePage: string;
        };
      };

      if (!response.ok || !payload.ok || !payload.contactUrl) {
        throw new Error(translateBackendError(payload.error || copy.preparationError, copy));
      }

      if (typeof window !== "undefined") {
        (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer?.push({
          event: payload.tracking?.event || "lead_submitted",
          leadMethod: payload.tracking?.method || "telegram",
          sourcePage: payload.tracking?.sourcePage || sourcePage,
        });

        if (payload.contactConfigured !== false) {
          if (telegramWindow) {
            telegramWindow.opener = null;
            telegramWindow.location.href = payload.contactUrl;
          } else {
            window.location.assign(payload.contactUrl);
          }
        }
      }

      setFeedback(payload.contactConfigured === false ? copy.fallbackInfo : copy.success);
      setForm(initialFormState);
      setStartedAt(Date.now());
    } catch (error) {
      telegramWindow?.close();
      setFeedback(error instanceof Error ? translateBackendError(error.message, copy) : copy.genericError);
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
        className="btn-base justify-center border border-[color:var(--brand)] bg-[color:var(--brand)] text-white shadow-[0_18px_42px_rgba(0,119,217,0.24)] disabled:cursor-not-allowed disabled:opacity-70 hover:border-[color:var(--brand-strong)] hover:bg-[color:var(--brand-strong)]"
      >
        {isSubmitting ? copy.submitBusy : copy.submitIdle}
      </button>

      {feedback ? (
        <p role="status" aria-live="polite" className="text-sm text-[color:var(--ink)]/76">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
