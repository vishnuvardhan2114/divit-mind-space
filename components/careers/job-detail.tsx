"use client";

import { useState } from "react";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/portable-text-components";
import { ApplicationForm } from "./application-form";
import type { Career } from "@/sanity/types";
import { Button } from "@/components/ui/button";

interface JobDetailProps {
  job: Career;
}

export function JobDetail({ job }: JobDetailProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "application">("overview");

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-sm text-green/60 mb-6">
          <Link href="/careers" className="hover:text-green">← All Jobs</Link>
        </div>

        {/* Job header */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-sm font-semibold text-green/60 uppercase tracking-wide">
              Careers
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-green mb-4">
            {job.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-green/10 sticky top-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-green/60 mb-2">Location</h3>
                  <p className="text-green capitalize">{job.location.join(', ')}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-green/60 mb-2">Employment Type</h3>
                  <p className="text-green capitalize">{job.employmentType.replace('-', ' ')}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-green/60 mb-2">Location Type</h3>
                  <p className="text-green capitalize">{job.locationType}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-green/60 mb-2">Department</h3>
                  <p className="text-green">{job.department}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex border-b border-green/20 mb-6">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === "overview"
                    ? "text-green border-b-2 border-green"
                    : "text-green/60 hover:text-green"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("application")}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === "application"
                    ? "text-green border-b-2 border-green"
                    : "text-green/60 hover:text-green"
                }`}
              >
                Application
              </button>
            </div>

            {/* Tab content */}
            {activeTab === "overview" ? (
              <div className="space-y-8">
                {/* About this role */}
                <div>
                  <h2 className="text-2xl font-bold text-green mb-4">About this role</h2>
                  <div className="max-w-none">
                    <PortableText 
                      value={job.aboutRole} 
                      components={portableTextComponents}
                    />
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h2 className="text-2xl font-bold text-green mb-4">Role Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green mr-3 mt-1">•</span>
                        <span className="text-green/80 text-base">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-2xl font-bold text-green mb-4">Skills and Qualifications</h2>
                  <ul className="space-y-3">
                    {job.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green mr-3 mt-1">•</span>
                        <span className="text-green/80 text-base">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply button */}
                <div className="pt-6">
                  <Button
                    onClick={() => setActiveTab("application")}
                    className="bg-green hover:bg-green/90 text-white px-8 py-6 text-lg rounded-lg"
                  >
                    Apply for this job
                  </Button>
                </div>
              </div>
            ) : (
              <ApplicationForm jobTitle={job.title} jobId={job._id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
