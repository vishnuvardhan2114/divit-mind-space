"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Heart, Users, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "assessments",
        title: "Comprehensive Assessments",
        icon: FileText,
        challenge: "Uncertainty about your child's needs and how to support them",
        outcome: "Clear understanding with actionable guidance tailored to your child",
        route: "/services/assessments",
        color: "bg-[#E8ECE9]", 
        textColor: "text-[#2F3E33]",
    },
    {
        id: "therapy",
        title: "Therapy & Support",
        icon: Heart,
        challenge: "Your child struggles with emotions, social situations, or daily routines",
        outcome: "Improved coping skills and confidence in their unique abilities",
        route: "/services/therapy",
        color: "bg-[#FDFBF7]", 
        textColor: "text-[#2F3E33]",
    },
    {
        id: "parent-guidance",
        title: "Parent Guidance",
        icon: Users,
        challenge: "Feeling overwhelmed and unsure how to best support your child",
        outcome: "Practical strategies and renewed confidence in your parenting",
        route: "/services/parent-guidance",
        color: "bg-[#2F3E33]", 
        textColor: "text-white",
        descriptionColor: "text-white/80",
    },
    {
        id: "learning",
        title: "Learning Programs",
        icon: GraduationCap,
        challenge: "Traditional education isn't meeting your child's learning style",
        outcome: "Personalized approaches that help your child thrive academically",
        route: "/services/learning-programs",
        color: "bg-[#7C9082]", 
        textColor: "text-white",
        descriptionColor: "text-white/90",
    },
];

export function ServicesSection() {
    const [activeId, setActiveId] = useState<string>("assessments");

    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="container">

                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#E8ECE9] text-[#2F3E33] text-xs font-semibold tracking-wide uppercase mb-2">
                        Our Services
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#222222]">
                        How We Support Your Family
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        From understanding your child&apos;s unique needs to building skills that last a lifetime we&apos;re with you every step of the way.
                    </p>
                </div>

                <div className="hidden lg:flex h-[500px] gap-4">
                    {services.map((service) => {
                        const isActive = activeId === service.id;
                        return (
                            <div
                                key={service.id}
                                onMouseEnter={() => setActiveId(service.id)}
                                className={cn(
                                    "relative rounded-3xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer shadow-lg",
                                    isActive ? "flex-3" : "flex-1 hover:flex-[1.2]",
                                    service.color
                                )}
                            >
                                <div className="absolute inset-0 p-8 flex flex-col justify-between">

                                    <div className={cn(
                                        "flex flex-col gap-4 transition-[align-items] duration-300 ease-out",
                                        isActive ? "items-start" : "items-center"
                                    )}>
                                        <div className={cn(
                                            "h-14 w-14 rounded-full flex items-center justify-center transition-[background-color] duration-300 ease-out",
                                            isActive ? "bg-white/20 backdrop-blur-sm" : "bg-white/10"
                                        )}>
                                            <service.icon className={cn("h-7 w-7", service.textColor)} />
                                        </div>
                                                
                                        <div
                                            className={cn(
                                                "relative mt-4 h-full w-full flex contain-[layout]",
                                                isActive ? "justify-start items-start" : "justify-center items-center"
                                            )}
                                        >
                                            {/* Vertical title: in-flow when collapsed so flexbox centers it; absolute when expanded so it doesn't affect layout */}
                                            <h3
                                                aria-hidden={isActive}
                                                className={cn(
                                                    "font-bold text-2xl whitespace-nowrap vertical-writing",
                                                    service.textColor,
                                                    isActive ? "opacity-0 pointer-events-none select-none absolute left-0 top-0" : "opacity-70"
                                                )}
                                                style={{ transition: "opacity 280ms ease-out", transitionDelay: isActive ? "0ms" : "140ms" }}
                                            >
                                                {service.title}
                                            </h3>
                                            {/* Horizontal title: in-flow when expanded; absolute when collapsed so it doesn't affect centering */}
                                            <h3
                                                aria-hidden={!isActive}
                                                className={cn(
                                                    "font-bold text-3xl whitespace-nowrap pt-1",
                                                    service.textColor,
                                                    isActive ? "opacity-100" : "opacity-0 pointer-events-none select-none absolute left-0 top-0"
                                                )}
                                                style={{ transition: "opacity 280ms ease-out", transitionDelay: isActive ? "120ms" : "0ms" }}
                                            >
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Bottom content: always absolute, only opacity + transform animate */}
                                    <div
                                        className={cn(
                                            "absolute bottom-8 left-8 right-8 space-y-6 ease-out",
                                            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                        )}
                                        style={{
                                            transition: "transform 400ms ease-out, opacity 400ms ease-out",
                                            transitionDelay: isActive ? "80ms" : "0ms",
                                        }}
                                    >
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <p className={cn("text-xs uppercase tracking-wider font-semibold opacity-70", service.textColor)}>Challenge</p>
                                                <p className={cn("text-base leading-snug", service.descriptionColor || "text-gray-600")}>
                                                    {service.challenge}
                                                </p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className={cn("text-xs uppercase tracking-wider font-semibold opacity-70", service.textColor)}>Outcome</p>
                                                <p className={cn("text-lg font-medium leading-snug", service.textColor)}>
                                                    {service.outcome}
                                                </p>
                                            </div>
                                        </div>

                                        <Link
                                            href={service.route}
                                            className={cn(
                                                "inline-flex items-center gap-2 font-semibold group/btn",
                                                service.textColor
                                            )}
                                        >
                                            Learn More
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="lg:hidden space-y-4">
                    {services.map((service) => (
                        <Link key={service.id} href={service.route} className="block">
                            <div className={cn("rounded-2xl p-6 shadow-sm border border-transparent hover:shadow-md transition-all", service.color)}>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <service.icon className={cn("h-5 w-5", service.textColor)} />
                                    </div>
                                    <h3 className={cn("font-bold text-xl pt-1", service.textColor)}>{service.title}</h3>
                                </div>

                                <div className="space-y-4 pl-14">
                                    <div className="space-y-1">
                                        <span className={cn("text-xs font-bold uppercase opacity-60", service.textColor)}>Challenge:</span>
                                        <p className={cn("text-sm", service.descriptionColor || "text-gray-600")}>{service.challenge}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className={cn("text-xs font-bold uppercase opacity-60", service.textColor)}>Outcome:</span>
                                        <p className={cn("text-base font-medium", service.textColor)}>{service.outcome}</p>
                                    </div>
                                    <div
                                        className={cn(
                                            "flex items-center gap-2 text-sm font-semibold mt-2",
                                            service.textColor
                                        )}
                                    >
                                        Learn More <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

            <style jsx global>{`
        .vertical-writing {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
        </section>
    );
}
