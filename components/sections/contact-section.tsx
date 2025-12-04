"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import HolographicAvatar from "@/components/3d/holographic-avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Send, Mic, MicOff } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [isRecording, setIsRecording] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Build WhatsApp prefilled message and redirect to wa.me
    const number = "917518608357" // international format without '+' for wa.me
    const message = `New enquiry from ${formData.name || "(no name)"} (${formData.email || "(no email)"})\n\n${formData.message || "(no message)"}`
    const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`

    // Small UX: show toast then redirect to WhatsApp (works on mobile & desktop)
    toast({
      title: "Opening WhatsApp...",
      description: "You'll be redirected to WhatsApp to send your message.",
    })

    // give toast a moment to appear, then redirect
    setTimeout(() => {
      // Redirect current tab to wa.me so mobile opens the dialer/app
      window.location.href = waUrl
    }, 400)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      toast({
        title: "Voice input activated 🎤",
        description: "Speak your message and I'll transcribe it for you!",
      })
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">Work With SUNNY EDITORAX</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Need scroll-stopping short videos? Tell me about your project — format, length, target platform and goals,
            and I'll deliver a fast-turnaround edit tailored for engagement.
          </p>
        </motion.div>

        {/* Holographic avatar */}
        <HolographicAvatar />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="glass-morphism border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">💬 Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glass-morphism border-white/20 text-white placeholder:text-white/50"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glass-morphism border-white/20 text-white placeholder:text-white/50"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="glass-morphism border-white/20 text-white placeholder:text-white/50 min-h-32"
                      required
                    />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={toggleRecording}
                      className={`absolute top-2 right-2 ${
                        isRecording ? "text-red-400 animate-pulse" : "text-white/60"
                      }`}
                    >
                      {isRecording ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full glass-morphism border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover:animate-glow"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & AI Assistant */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <Card className="glass-morphism border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">📞 Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <a href="tel:+917518608357" className="text-white/80 hover:underline">+91 75186 08357</a>
                </div>

                <div className="flex items-center gap-3">
                  <img src="/icons/instagram.svg" alt="instagram" className="h-5 w-5" />
                  <a
                    href="https://www.instagram.com/sunny_editorax/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:underline"
                  >
                    @sunny_editorax
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <img src="/icons/whatsapp.svg" alt="whatsapp" className="h-5 w-5" />
                  <a
                    href={`https://wa.me/917518608357?text=${encodeURIComponent("Hi Sunny, I found your site and would like to talk about a project.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:underline"
                  >
                    Message on WhatsApp
                  </a>
                </div>

                {/* location removed per request */}
              </CardContent>
            </Card>

            {/* (Removed AI Assistant and Connect Online cards per request) */}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60">© 2025 SUNNY EDITORAX. Crafted with ❤️ for social-first video.</div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-white/40 text-sm">Powered by Next.js & Three.js</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
