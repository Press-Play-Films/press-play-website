
import React, { useState } from 'react';
import { Clipboard } from 'lucide-react';
import { toast } from "sonner";

interface DownloadCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
}

const DownloadCard = ({ icon, title, description, children }: DownloadCardProps) => {
  return (
    <div className="glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="mb-6">
        {description}
      </p>
      <div className="flex flex-wrap gap-4">
        {children}
      </div>
    </div>
  );
};

export default DownloadCard;
