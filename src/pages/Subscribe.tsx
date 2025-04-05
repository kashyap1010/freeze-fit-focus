import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  interests: z.array(z.string()).min(1, { message: "Please select at least one interest." }),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

const Subscribe = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interests: [],
      agreeToTerms: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // In a real app, this would send the data to your API
    alert("Thanks for subscribing! Check your email for your free plan.");
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Get Your Free Fitness Plan | FitFreeze</title>
        <meta name="description" content="Subscribe to get your personalized fitness plan and nutrition advice." />
      </Helmet>

      <section className="py-16 container max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Fitness Plan</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sign up now to receive a personalized fitness plan, nutrition advice, and exclusive content delivered straight to your inbox.
          </p>
        </div>

        <div className="bg-card shadow-lg rounded-xl p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interests"
                render={() => (
                  <FormItem>
                    <FormLabel>What are you interested in?</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      {["Weight Loss", "Muscle Building", "Nutrition Advice", "Workout Plans", "Fitness Tips", "Mental Wellbeing"].map((interest) => (
                        <FormField
                          key={interest}
                          control={form.control}
                          name="interests"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex space-x-3 space-y-0 items-center">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(interest)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, interest])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== interest
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="cursor-pointer">{interest}</FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex space-x-3 space-y-0 items-start">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="leading-tight">
                      I agree to receive emails from FitFreeze and understand I can unsubscribe at any time. I agree to the <a href="/terms" className="text-primary hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Get My Free Plan
              </Button>
            </form>
          </Form>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="mb-4 text-primary text-2xl">📋</div>
              <h3 className="text-xl font-medium mb-2">Personalized Plan</h3>
              <p className="text-muted-foreground">A custom fitness plan based on your goals and experience level</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="mb-4 text-primary text-2xl">🥗</div>
              <h3 className="text-xl font-medium mb-2">Nutrition Guide</h3>
              <p className="text-muted-foreground">Simple nutrition tips and meal ideas to complement your workouts</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="mb-4 text-primary text-2xl">📱</div>
              <h3 className="text-xl font-medium mb-2">Weekly Tips</h3>
              <p className="text-muted-foreground">Regular emails with motivation, new workouts, and health advice</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Subscribe; 