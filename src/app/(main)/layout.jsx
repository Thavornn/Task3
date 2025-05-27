import FooterComponent from "@/components/FooterComponent";
import NavComponent from "@/components/NavComponent";
import React from "react";

export default function MainLayout({ children }) {
    
  return (
    <div>
      <NavComponent />
      {children}
      <FooterComponent />
    </div>
  );
}
