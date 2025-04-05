
import React from "react";
import { InfoBox } from "./components/InfoBox";
import { CustomHeading } from "./components/CustomHeading";
import { ProsConsBox } from "./components/ProsConsBox";
import { Callout } from "./components/Callout";
import { QuoteBlock } from "./components/QuoteBlock";
import { CodeBlock } from "./components/CodeBlock";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

// MDX Components mapping
const MDXComponents = {
  // Override default elements
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <CustomHeading as="h1" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <CustomHeading as="h2" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <CustomHeading as="h3" {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <CustomHeading as="h4" {...props} />,
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => <CustomHeading as="h5" {...props} />,
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => <CustomHeading as="h6" {...props} />,
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => <QuoteBlock {...props} />,
  
  // Custom components
  InfoBox,
  ProsConsBox,
  Callout,
  CodeBlock,
  Accordion,
  AccordionItem,
};

export default MDXComponents;
