
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const NewsSkeletons: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <Skeleton className="h-48 w-full" />
          <div className="p-4">
            <Skeleton className="h-4 w-20 mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
};
