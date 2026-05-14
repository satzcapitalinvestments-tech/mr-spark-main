import WhatsAppLeadForm from "@/components/WhatsAppLeadForm";


export default function Kontakt() {
  return (
    <main className="section py-16">
      <h1 className="text-4xl font-bold">Kontakt & WhatsApp Anfrage</h1>
      <p className="mt-4 text-slate-300">Senden Sie uns Ihre Anfrage direkt über WhatsApp oder das Kontaktformular.</p>
      <WhatsAppLeadForm />
    </main>
  );
}