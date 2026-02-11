"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  Ribbon,
  MessageSquare,
  Clock,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    type: "general",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          subject: "",
          message: "",
          type: "general",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-sdg-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-pink/20 border border-pink/30 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-pink" />
              <span className="text-pink-light text-sm font-medium">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact
              <br />
              <span className="gradient-text">Our Team</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Want to partner, volunteer, donate, or invite us for a screening
              outreach in your community? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <h2 className="text-2xl font-bold text-sdg-dark mb-6">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Whether you&apos;re a corps member looking to join, a
                  healthcare professional wanting to partner, or a community
                  leader inviting us for a screening — reach out and let&apos;s
                  work together.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    {
                      icon: Mail,
                      label: "Email Us",
                      value: "pillarshealth@gmail.com",
                      href: "mailto:pillarshealth@gmail.com",
                    },
                    {
                      icon: Phone,
                      label: "Call / WhatsApp",
                      value: "+234 806 830 4340",
                      href: "tel:+2348068304340",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Nigeria (Nationwide via NYSC)",
                      href: "#",
                    },
                    {
                      icon: Clock,
                      label: "Response Time",
                      value: "Within 24 hours",
                      href: "#",
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center shrink-0 group-hover:bg-pink/20 transition-colors">
                        <Icon className="w-5 h-5 text-pink" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{label}</div>
                        <div className="font-medium text-sdg-dark">{value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="bg-pink/5 rounded-2xl p-6 border border-pink/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-pink" />
                    <span className="font-semibold text-sdg-dark">
                      Our Reach
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "15+", label: "States Covered" },
                      { value: "50+", label: "Communities" },
                      { value: "150+", label: "Corps Ambassadors" },
                      { value: "5,000+", label: "Women Screened" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="text-xl font-bold text-pink">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100">
                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          bounce: 0.5,
                          delay: 0.2,
                        }}
                        className="w-20 h-20 rounded-full bg-pink/10 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-pink" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-sdg-dark mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-500 mb-6">
                        Thank you for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="text-pink font-semibold hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Ribbon className="w-5 h-5 text-pink" />
                        <h3 className="text-xl font-bold text-sdg-dark">
                          Send Us a Message
                        </h3>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all text-sm"
                            placeholder="Amina Bello"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all text-sm"
                            placeholder="amina@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Organisation / State
                          </label>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all text-sm"
                            placeholder="NGO / Abuja"
                            aria-label="Organization / State"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Inquiry Type
                          </label>
                          <select
                            aria-label="Inquiry Type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all text-sm bg-white"
                          >
                            <option value="">Select Inquiry Type</option>
                            <option value="volunteer">
                              Join as Volunteer / Corper
                            </option>
                            <option value="screening">
                              Request a Screening Outreach
                            </option>
                            <option value="partnership">
                              Partnership / Sponsorship
                            </option>
                            <option value="donation">Donation</option>
                            <option value="media">Media &amp; Press</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all text-sm"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all text-sm resize-none"
                          placeholder="Tell us how we can help or how you'd like to get involved..."
                        />
                      </div>

                      {status === "error" && (
                        <div className="text-red-500 text-sm bg-red-50 p-3 rounded-xl">
                          Something went wrong. Please try again.
                        </div>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full inline-flex items-center justify-center gap-2 bg-pink text-white py-4 rounded-xl font-semibold text-lg hover:bg-pink-dark transition-colors disabled:opacity-70 shadow-lg shadow-pink/25"
                      >
                        {status === "loading" ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
