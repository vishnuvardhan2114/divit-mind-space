import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Facebook, Briefcase } from "lucide-react";
import { FooterServiceLinks } from "@/components/footer-service-links";

const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Blog", href: "/blogs" },
    { label: "Gallery", href: "/gallery" },
    { label: "Host a Free Workshop", href: "/awareness-program" },
    { label: "Contact", href: "/contact-us" },
];

const contact = {
    address: "Aadeshwar Chambers, Kasavanahalli, Off Sarjapur Road, Bengaluru",
    phone: { label: "+91 9901666139", href: "tel:+919901666139" },
    email: { label: "divitmindspace@gmail.com", href: "mailto:divitmindspace@gmail.com" },
};

const socialLinks = [
    { href: "https://instagram.com/divitmindspace", icon: Instagram, label: "Instagram" },
    { href: "https://facebook.com/divitmindspace", icon: Facebook, label: "Facebook" },
    { href: "https://www.linkedin.com/in/divitmindspace/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/divitmindspace", icon: Twitter, label: "X (Twitter)" },
];

export function SiteFooter() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-8 pb-4">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-8 mb-6">
                    {/* Brand Column */}
                    <div>
                        <div className="w-12 h-12 mb-3 relative">
                            <Image
                                src="/divit-mindspace-logo.png"
                                alt="Divit MindSpace Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-[280px] mb-3">
                            Empowering neurodivergent children and their families through expert care and education.
                        </p>
                        <Link
                            href="/careers"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-lg text-sm font-semibold text-green hover:bg-green hover:text-white transition-all"
                        >
                            <Briefcase className="h-4 w-4" />
                            We&apos;re Hiring
                        </Link>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-xs font-bold text-green uppercase tracking-widest mb-3">
                            Services
                        </h4>
                        <FooterServiceLinks />
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-xs font-bold text-green uppercase tracking-widest mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 hover:text-green transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-xs font-bold text-green uppercase tracking-widest mb-3">
                            Contact
                        </h4>
                        <address className="not-italic space-y-3 text-sm text-gray-600">
                            <p className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-green" />
                                <span>{contact.address}</span>
                            </p>
                            <p>
                                <a
                                    href={contact.phone.href}
                                    className="flex items-center gap-2 hover:text-green transition-colors"
                                >
                                    <Phone className="h-4 w-4 shrink-0 text-green" />
                                    {contact.phone.label}
                                </a>
                            </p>
                            <p>
                                <a
                                    href={contact.email.href}
                                    className="flex items-center gap-2 hover:text-green transition-colors"
                                >
                                    <Mail className="h-4 w-4 shrink-0 text-green" />
                                    {contact.email.label}
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-100">
                    <p className="text-[13px] text-gray-400">
                        © {new Date().getFullYear()} Divit MindSpace. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/terms" className="text-[13px] text-gray-400 hover:text-green transition-colors">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-[13px] text-gray-400 hover:text-green transition-colors">
                            Privacy
                        </Link>
                    </div>
                    <div className="flex gap-3">
                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green hover:text-white transition-all"
                            >
                                <Icon className="h-4 w-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
