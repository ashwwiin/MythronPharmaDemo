"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Mimic API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-3xl border border-slate-100 shadow-xl text-center space-y-6"
      >
        <div className="flex justify-center">
          <div className="bg-green-100 p-6 rounded-full text-green-600">
            <CheckCircle2 size={64} />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-secondary">Message Sent!</h3>
        <p className="text-muted-foreground leading-relaxed">
          Thank you for reaching out to Mythron Pharma. Our team will review your inquiry and get back to you within 24-48 hours.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
      <div className="space-y-4 mb-8 text-center md:text-left">
        <h3 className="text-2xl font-bold text-secondary">Send us a Message</h3>
        <p className="text-muted-foreground">Fill out the form below and we&apos;ll get in touch shortly.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-bold text-secondary ml-1">First Name</Label>
            <Input id="firstName" placeholder="John" required className="h-12 bg-slate-50 border-slate-100 rounded-xl focus:ring-primary" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-bold text-secondary ml-1">Last Name</Label>
            <Input id="lastName" placeholder="Doe" required className="h-12 bg-slate-50 border-slate-100 rounded-xl focus:ring-primary" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-bold text-secondary ml-1">Work Email</Label>
          <Input id="email" type="email" placeholder="john@company.com" required className="h-12 bg-slate-50 border-slate-100 rounded-xl focus:ring-primary" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-bold text-secondary ml-1">Subject</Label>
          <Input id="subject" placeholder="Partnership Inquiry / Product Question" required className="h-12 bg-slate-50 border-slate-100 rounded-xl focus:ring-primary" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-bold text-secondary ml-1">How can we help?</Label>
          <textarea 
            id="message" 
            required 
            rows={5}
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all"
            placeholder="Tell us about your requirements..."
          />
        </div>

        <Button type="submit" className="w-full h-14 rounded-full text-base font-bold shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 transition-all">
          Submit Inquiry <Send size={18} className="ml-2" />
        </Button>
      </form>
    </div>
  );
}
