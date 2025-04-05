
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
    title: "Perfect Form Guide: Mastering the 5 Essential Compound Movements",
    description: "Learn the proper technique for five fundamental compound exercises that should form the foundation of any effective strength training program.",
    category: "Exercise",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Mike Stevens",
      avatar: "https://randomuser.me/api/portraits/men/72.jpg",
      credentials: "Strength Coach, CSCS",
    },
    date: "April 7, 2023",
    slug: "compound-movements-guide",
  },
  {
    title: "Bodyweight Training: Building Strength Without Equipment",
    description: "Discover how to build impressive strength and muscle using just your bodyweight with these progressive calisthenics techniques and workouts.",
    category: "Exercise",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Jessica Lee",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      credentials: "Calisthenics Specialist",
    },
    date: "April 14, 2023",
    slug: "bodyweight-training",
  },
  {
    title: "The Science of Cardio: Finding Your Optimal Heart Rate Zones",
    description: "Learn how to identify and train in the right heart rate zones to optimize cardiovascular health, endurance, and fat burning.",
    category: "Exercise",
    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Dr. Robert Chen",
      avatar: "https://randomuser.me/api/portraits/men/92.jpg",
      credentials: "Exercise Physiologist, PhD",
    },
    date: "April 19, 2023",
    slug: "heart-rate-zones",
  },
  {
    title: "Joint-Friendly Exercises for All Ages and Fitness Levels",
    description: "Discover effective, low-impact exercises that build strength and endurance while protecting your joints from unnecessary stress and strain.",
    category: "Exercise",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Dr. Linda Martinez",
      avatar: "https://randomuser.me/api/portraits/women/53.jpg",
      credentials: "Physical Therapist, DPT",
    },
    date: "April 25, 2023",
    slug: "joint-friendly-exercises",
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

const Exercise = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Exercise Articles | FitFreeze</title>
        <meta 
          name="description" 
          content="Explore our science-backed exercise articles covering proper form, technique, bodyweight training, cardio optimization, and joint-friendly workouts." 
        />
      </Helmet>
      
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Exercise Articles</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Expert guidance on proper technique, workout design, and exercise selection
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

export default Exercise;
