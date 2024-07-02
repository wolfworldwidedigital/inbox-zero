import type { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "@/app/blog/post/StructuredData";

export const metadata: Metadata = {
  title: "Achieve Mental Clarity with Cusmato",
  description:
    "Learn how to achieve and maintain Cusmato for better mental health. Reduce stress, boost productivity, and gain mental clarity with these strategies.",
  alternates: {
    canonical: "/blog/post/inbox-zero-benefits-for-mental-health",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Cusmato Benefitsfor Mental Health"
        datePublished="2024-06-27T23:00:00+00:00"
        dateModified="2024-06-27T23:00:00+00:00"
        authorName="AI Blog Articles"
        authorUrl="https://getaiblogarticles.com/"
        image={[]}
      />
      <Content />
    </>
  );
}
