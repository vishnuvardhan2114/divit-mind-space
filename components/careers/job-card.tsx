import Link from "next/link";
import type { CareerListItem } from "@/sanity/types";

interface JobCardProps {
  job: CareerListItem;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/careers/${job.slug.current}`}
      className="block p-6 bg-white rounded-xl border border-green/10 hover:border-green/30 hover:shadow-lg transition-all duration-300"
    >
      {/* Department badge */}
      <div className="mb-3">
        <span className="text-xs font-semibold text-green uppercase tracking-wide">
          {job.department}
        </span>
      </div>

      {/* Job title */}
      <h3 className="text-xl font-bold text-green mb-3 leading-tight">
        {job.title}
      </h3>

      {/* Job details */}
      <div className="flex flex-wrap gap-2 text-sm text-green/70 mb-3">
        <span className="capitalize">{job.location.join(', ')}</span>
        <span>•</span>
        <span className="capitalize">{job.employmentType.replace('-', ' ')}</span>
        <span>•</span>
        <span className="capitalize">{job.locationType}</span>
      </div>
    </Link>
  );
}
