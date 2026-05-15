"use client";
import { useState } from "react";

export default function TelegramLeadForm({ sourcePage }: { sourcePage: string }) {
  const [form, setForm] = useState({ name: "", contact: "", city: "", service: "", urgency: "Normal", message: "" });
  const tg = process.env.NEXT_PUBLIC_TELEGRAM_URL || "#";
  const text = encodeURIComponent(`Neue Anfrage (${sourcePage})\nName: ${form.name}\nKontakt: ${form.contact || "-"}\nStadt: ${form.city}\nService: ${form.service}\nDringlichkeit: ${form.urgency}\nNachricht: ${form.message}`);
  const href = tg === "#" ? "#" : `${tg}${tg.includes("?") ? "&" : "?"}text=${text}`;

  return <form className="card grid gap-3 bg-slate-900 text-slate-100 border-slate-700"><input className="rounded-xl border border-slate-600 bg-slate-800 p-3 text-slate-100 placeholder:text-slate-300" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/><input className="rounded-xl border border-slate-600 bg-slate-800 p-3 text-slate-100 placeholder:text-slate-300" placeholder="Telefon oder E-Mail (optional)" onChange={(e)=>setForm({...form,contact:e.target.value})}/><input className="rounded-xl border border-slate-600 bg-slate-800 p-3 text-slate-100 placeholder:text-slate-300" placeholder="Stadt" onChange={(e)=>setForm({...form,city:e.target.value})}/><input className="rounded-xl border border-slate-600 bg-slate-800 p-3 text-slate-100 placeholder:text-slate-300" placeholder="Service (z. B. Notdienst)" onChange={(e)=>setForm({...form,service:e.target.value})}/><select className="rounded-xl border border-slate-600 bg-slate-800 p-3 text-slate-100" onChange={(e)=>setForm({...form,urgency:e.target.value})}><option>Normal</option><option>Heute</option><option>Sofort</option></select><textarea className="min-h-28 rounded-xl border border-slate-600 bg-slate-800 p-3 text-slate-100 placeholder:text-slate-300" placeholder="Nachricht" onChange={(e)=>setForm({...form,message:e.target.value})}/><a target="_blank" rel="noreferrer" href={href} className="rounded-full bg-amber-300 px-5 py-3 text-center font-semibold text-slate-900">Über Telegram anfragen</a></form>
}
