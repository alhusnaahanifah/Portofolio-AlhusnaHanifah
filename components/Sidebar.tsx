"use client";

import {
  Home,
  User,
  Briefcase,
  Mail
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="fixed left-10 top-1/2 -translate-y-1/2 z-50">

      <div className="bg-[#081124] p-4 rounded-full flex flex-col gap-6 shadow-[0_0_40px_#00bfff]">


        <Home className="text-cyan-400" />
        <User className="text-white" />
        <Briefcase className="text-white" />
        <Mail className="text-white" />

      </div>
    </div>
  );
}