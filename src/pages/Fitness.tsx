
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface ArticleProps {
  title: string;
  description: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    credentials: string;
  };
  date: string;
  slug: string;
}

const articles: ArticleProps[] = [
  {
    title: "5 Full-Body HIIT Workouts for Maximum Efficiency",
    description: "Discover five science-backed HIIT workout routines that deliver maximum results in minimum time, designed for all fitness levels.",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Alex Martinez",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      credentials: "Certified Personal Trainer",
    },
    date: "April 8, 2023",
    slug: "hiit-workouts",
  },
  {
    title: "Progressive Overload: The Key to Continuous Strength Gains",
    description: "Learn how to properly implement progressive overload in your training program to continuously build strength and muscle over time.",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Chris Johnson",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      credentials: "Strength & Conditioning Coach",
    },
    date: "April 12, 2023",
    slug: "progressive-overload",
  },
  {
    title: "Mobility vs. Flexibility: What's the Difference and Why You Need Both",
    description: "Understand the critical differences between mobility and flexibility, and how developing both can improve your performance and prevent injuries.",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Sophia Chen",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
      credentials: "Mobility Specialist, DPT",
    },
    date: "April 18, 2023",
    slug: "mobility-vs-flexibility",
  },
  {
    title: "Recovery Strategies: How to Optimize Your Post-Workout Routine",
    description: "Discover evidence-based recovery techniques that will help you bounce back faster, reduce soreness, and improve your overall training results.",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1530822847156-e093e4ff1db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Dr. Michael Harper",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      credentials: "Sports Medicine Physician",
    },
    date: "April 22, 2023",
    slug: "recovery-strategies",
  },
];

const ArticleCard = ({ article }: { article: ArticleProps }) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90">
          {article.category}
        </Badge>
      </div>
      <CardHeader className="p-4 pb-2">
        <Link to={`/${article.category.toLowerCase()}/${article.slug}`}>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
        </Link>
        <CardDescription className="text-sm text-muted-foreground">
          Published on {article.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {article.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={article.author.avatar} alt={article.author.name} />
            <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{article.author.name}</p>
            <p className="text-xs text-muted-foreground">{article.author.credentials}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const Fitness = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Fitness Articles | FitFreeze</title>
        <meta 
          name="description" 
          content="Explore our science-backed fitness articles covering training methodologies, workout plans, recovery techniques, and strength development." 
        />
      </Helmet>
      
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Fitness Articles</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Evidence-based training strategies to help you optimize your fitness journey
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
          
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </MainLayout>
  );
};

export default Fitness;
