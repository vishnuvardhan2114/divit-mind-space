import Link from "next/link";

const serviceLinks = [
    { label: "Assessments", href: "/services/psychometric-assessments" },
    { label: "Therapy", href: "/services" },
    { label: "Guidance", href: "/services" },
    { label: "Programs", href: "/services" },
];

export function FooterServiceLinks() {
    return (
        <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
                <li key={link.label}>
                    <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-green transition-colors"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
            <li>
                <Link
                    href="/services"
                    className="text-sm text-green font-medium hover:underline"
                >
                    View all →
                </Link>
            </li>
        </ul>
    );
}
