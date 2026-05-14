"use client";
import { useState } from "react";

export default function WhatsAppLeadForm({ sourcePage }: { sourcePage: string }) {
  const [form, setForm] = useState({ name: "", contact: "", city: "", service: "", urgency: "Normal", message: "" });
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "491234567890";
  const text = encodeURIComponent(`Neue Anfrage (${sourcePage})\nName: ${form.name}\nKontakt: ${form.contact || "-"}\nStadt: ${form.city}\nService: ${form.service}\nDringlichkeit: ${form.urgency}\nNachricht: ${form.message}`);
  return <form className="card grid gap-3"><input className="rounded-xl border p-3" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/><input className="rounded-xl border p-3" placeholder="Telefon oder E-Mail (optional)" onChange={(e)=>setForm({...form,contact:e.target.value})}/><input className="rounded-xl border p-3" placeholder="Stadt" onChange={(e)=>setForm({...form,city:e.target.value})}/><input className="rounded-xl border p-3" placeholder="Service (z. B. Notdienst)" onChange={(e)=>setForm({...form,service:e.target.value})}/><select className="rounded-xl border p-3" onChange={(e)=>setForm({...form,urgency:e.target.value})}><option>Normal</option><option>Heute</option><option>Sofort</option></select><textarea className="min-h-28 rounded-xl border p-3" placeholder="Nachricht" onChange={(e)=>setForm({...form,message:e.target.value})}/><a target="_blank" rel="noreferrer" href={`https://wa.me/${wa}?text=${text}`} className="rounded-full bg-amber-300 px-5 py-3 text-center font-semibold">WhatsApp starten</a></form>
}
