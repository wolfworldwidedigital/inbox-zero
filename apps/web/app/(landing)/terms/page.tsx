import type { Metadata } from "next";
import { TermsContent } from "@/app/(landing)/terms/content";

export const metadata: Metadata = {
  title: "Terms of Service - Cusmato",
  description: "Terms of Service - Cusmato",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <TermsContent />;
}
