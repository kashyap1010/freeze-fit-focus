
import React from "react";
import { MainLayout } from "./MainLayout";
import { Helmet } from "react-helmet-async";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { NewsletterSection } from "@/components/home/NewsletterSection";

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  category: string;
  slug: string;
}

export const BlogLayout = ({ 
  children, 
  title, 
  description, 
  category, 
  slug 
}: BlogLayoutProps) => {
  return (
    <MainLayout>
      <Helmet>
        <title>{title} | FitFreeze</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${category.toLowerCase()}`}>
                {category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6 text-gradient">{title}</h1>
          {children}
        </div>
      </article>
      
      <div className="my-12">
        <NewsletterSection />
      </div>
    </MainLayout>
  );
};
