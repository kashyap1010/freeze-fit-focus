
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface Category {
  title: string;
  description: string;
  path: string;
}

const categories: Category[] = [
  {
    title: "Health",
    description: "Nutrition, immune support, sleep, and general wellness",
    path: "/health",
  },
  {
    title: "Fitness",
    description: "Training methodologies, HIIT, mobility, and recovery",
    path: "/fitness",
  },
  {
    title: "Exercise",
    description: "Technique, form guides, and targeted workout routines",
    path: "/exercise",
  },
  {
    title: "Nutrition",
    description: "Meal plans, dietary science, and supplement guidance",
    path: "/nutrition",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const CategoriesMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((category) => (
                <ListItem
                  key={category.path}
                  title={category.title}
                  href={category.path}
                >
                  {category.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/health" className={navigationMenuTriggerStyle()}>
            Health
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/fitness" className={navigationMenuTriggerStyle()}>
            Fitness
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/exercise" className={navigationMenuTriggerStyle()}>
            Exercise
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
