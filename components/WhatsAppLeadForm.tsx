"use client";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "491234567890";

export default function WhatsAppLeadForm() {
  return (
    <form className="card mt-8 grid gap-4 md:max-w-2xl">
      <input required className="rounded-lg bg-slate-900 p-3" placeholder="Name" />
      <input required className="rounded-lg bg-slate-900 p-3" placeholder="Telefon" />
      <textarea
        required
        className="min-h-32 rounded-lg bg-slate-900 p-3"
        placeholder="Ihre Anfrage: z. B. Sicherungskasten prüfen, Steckdosen erneuern"
      />
      <a
        className="rounded-full bg-green-500 px-5 py-3 text-center font-semibold text-slate-950"
        href={`https://wa.me/${whatsappNumber}?text=Hallo%20Mr%20Spark%2C%20ich%20ben%C3%B6tige%20Hilfe%20bei%20einer%20Elektroinstallation.`}
      >
        Per WhatsApp senden
      </a>
    </form>
  );
}
