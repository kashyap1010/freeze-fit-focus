import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { InfoBox } from '../components/blog/InfoBox';
import { QuoteBlock } from '../components/blog/QuoteBlock';
import { ProsConsBox } from '../components/blog/ProsConsBox';
import { CodeBlock } from '../components/blog/CodeBlock';
import { Callout } from '../components/blog/Callout';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { MainLayout } from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) {
        setError('Blog post not found');
        setLoading(false);
        return;
      }
      
      try {
        // Fetch the raw MDX content
        const response = await fetch(`/content/${slug}.mdx`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blog post: ${response.status}`);
        }
        
        const text = await response.text();
        console.log(`Loaded ${slug}.mdx, length:`, text.length);
        
        // Extract frontmatter
        const frontmatterMatch = text.match(/---\s*([\s\S]*?)\s*---/);
        if (!frontmatterMatch) {
          throw new Error('Invalid blog post format: No frontmatter found');
        }
        
        const frontmatter = frontmatterMatch[1];
        const frontmatterLines = frontmatter.split('\n');
        
        // Parse frontmatter
        const metadata: Record<string, string> = {};
        frontmatterLines.forEach(line => {
          const [key, ...valueParts] = line.split(':');
          if (key && valueParts.length) {
            const value = valueParts.join(':').trim();
            if (value.startsWith('"') && value.endsWith('"')) {
              metadata[key.trim()] = value.slice(1, -1);
            } else {
              metadata[key.trim()] = value;
            }
          }
        });
        
        // Set metadata
        setTitle(metadata.title || 'Untitled');
        setDescription(metadata.description || '');
        setDate(metadata.date || '');
        setAuthor(metadata.author || 'Anonymous');
        setFeaturedImage(metadata.featuredImage || '/placeholder.svg');
        
        // Extract content (everything after frontmatter)
        const contentStart = text.indexOf('---', text.indexOf('---') + 3) + 3;
        const rawContent = text.substring(contentStart).trim();
        setContent(rawContent);
        
        console.log("Content loaded successfully, length:", rawContent.length);
        setLoading(false);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
        setLoading(false);
      }
    };
    
    fetchBlogPost();
  }, [slug]);
  
  const renderContent = () => {
    if (!content) return null;
    
    const components: React.ReactNode[] = [];
    let inComponent = false;
    let componentType = '';
    let componentProps: Record<string, any> = {};
    let componentContent = '';
    let listType: 'ordered' | 'unordered' | null = null;
    let currentListItems: React.ReactNode[] = [];
    
    // Helper function to finalize a list
    const finalizeList = () => {
      if (currentListItems.length > 0) {
        if (listType === 'ordered') {
          components.push(
            <div key={`ol-${components.length}`} className="my-0">
              <ol className="space-y-2 list-none pl-0">{currentListItems}</ol>
            </div>
          );
        } else if (listType === 'unordered') {
          components.push(
            <div key={`ul-${components.length}`} className="my-4">
              <ul className="space-y-2 list-none pl-0">{currentListItems}</ul>
            </div>
          );
        }
        listType = null;
        currentListItems = [];
      }
    };
    
    // Helper function to render a component
    const renderComponent = () => {
      try {
        switch (componentType) {
          case 'InfoBox':
            return <InfoBox title={componentProps.title} type={componentProps.type || 'info'}>{componentContent}</InfoBox>;
          case 'QuoteBlock':
            return <QuoteBlock author={componentProps.author} source={componentProps.source}>{componentContent}</QuoteBlock>;
          case 'Callout':
            return <Callout type={componentProps.type || 'info'} title={componentProps.title}>{componentContent}</Callout>;
          case 'CodeBlock':
            return <CodeBlock language={componentProps.language || 'javascript'}>{componentContent}</CodeBlock>;
          case 'ProsConsBox':
            try {
              let pros: string[] = [];
              let cons: string[] = [];
              
              // Special parsing for array props
              if (componentProps.pros) {
                try {
                  // Handle different formats of the pros array
                  if (typeof componentProps.pros === 'string') {
                    if (componentProps.pros.startsWith('[') && componentProps.pros.endsWith(']')) {
                      // Try to parse as JSON
                      try {
                        pros = JSON.parse(componentProps.pros);
                      } catch (e) {
                        // If that fails, try manual parsing
                        const content = componentProps.pros.slice(1, -1);
                        pros = content.split(',')
                          .map(item => item.trim())
                          .map(item => item.startsWith('"') ? item.slice(1, -1) : item)
                          .filter(Boolean);
                      }
                    }
                  } else if (Array.isArray(componentProps.pros)) {
                    pros = componentProps.pros;
                  }
                } catch (e) {
                  console.error('Error parsing pros:', e);
                }
              }
              
              // Handle different formats of the cons array
              if (componentProps.cons) {
                try {
                  if (typeof componentProps.cons === 'string') {
                    if (componentProps.cons.startsWith('[') && componentProps.cons.endsWith(']')) {
                      // Try to parse as JSON
                      try {
                        cons = JSON.parse(componentProps.cons);
                      } catch (e) {
                        // If that fails, try manual parsing
                        const content = componentProps.cons.slice(1, -1);
                        cons = content.split(',')
                          .map(item => item.trim())
                          .map(item => item.startsWith('"') ? item.slice(1, -1) : item)
                          .filter(Boolean);
                      }
                    }
                  } else if (Array.isArray(componentProps.cons)) {
                    cons = componentProps.cons;
                  }
                } catch (e) {
                  console.error('Error parsing cons:', e);
                }
              }
              
              console.log('Rendering ProsConsBox with:', { title: componentProps.title, pros, cons });
              return <ProsConsBox title={componentProps.title} pros={pros} cons={cons} />;
            } catch (err) {
              console.error('Error rendering ProsConsBox:', err);
              return <div className="p-4 bg-red-50 text-red-600 rounded">Error rendering ProsConsBox component</div>;
            }
          default:
            return <div>{componentContent}</div>;
        }
      } catch (err) {
        console.error(`Error rendering ${componentType} component:`, err);
        return <div className="p-4 bg-red-50 text-red-600 rounded">Error rendering component</div>;
      }
    };
    
    // Helper function to process bold text in any string
    const processBoldText = (text: string): (string | JSX.Element)[] => {
      const segments: Array<string | JSX.Element> = [];
      const boldRegex = /\*\*(.*?)\*\*/g;
      let lastIndex = 0;
      let match;
      
      while ((match = boldRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          segments.push(text.substring(lastIndex, match.index));
        }
        
        segments.push(
          <strong key={`bold-${match.index}`} className="font-semibold text-[18px] text-slate-900">
            {match[1]}
          </strong>
        );
        
        lastIndex = match.index + match[0].length;
      }
      
      if (lastIndex < text.length) {
        segments.push(text.substring(lastIndex));
      }
      
      return segments.length > 0 ? segments : [text];
    };
    
    // Process lines
    const lines = content.split('\n');
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Skip empty lines in component content collection
      if (inComponent && line.trim() === '') {
        componentContent += "\n";
        i++;
        continue;
      }

      // Check for component start
      if (line.match(/<(InfoBox|QuoteBlock|Callout|ProsConsBox|CodeBlock)(\s|>)/i)) {
        finalizeList(); // Finalize any current list
        
        // Extract component type and props
        inComponent = true;
        const componentMatch = line.match(/<(\w+)(.*?)>/i);
        if (componentMatch) {
          componentType = componentMatch[1];
          
          // Parse props
          const propsText = componentMatch[2];
          const propsMatches = propsText.matchAll(/(\w+)=["'{]([^"'}]*?)["'}]/g);
          componentProps = {};
          
          for (const match of propsMatches) {
            componentProps[match[1]] = match[2];
          }
          
          // Special handling for multiline array props in ProsConsBox
          if (componentType === "ProsConsBox") {
            // Process special array format for ProsConsBox
            let currentProp = '';
            let collectingItems = false;
            let items: string[] = [];
            
            // Look ahead for props array declarations
            let j = i + 1;
            
            while (j < lines.length && !lines[j].includes('</ProsConsBox>')) {
              const line = lines[j].trim();
              
              if (line.startsWith('pros={[')) {
                currentProp = 'pros';
                collectingItems = true;
                // Handle single-line array
                if (line.includes(']}')) {
                  const arrayContent = line.substring(line.indexOf('[') + 1, line.lastIndexOf(']'));
                  try {
                    componentProps.pros = JSON.stringify(
                      arrayContent.split(',')
                        .map(item => item.trim())
                        .map(item => item.startsWith('"') ? item.slice(1, -1) : item)
                        .filter(Boolean)
                    );
                  } catch (e) {
                    console.error('Error parsing pros array:', e);
                  }
                  collectingItems = false;
                } else {
                  items = [];
                }
              } 
              else if (line.startsWith('cons={[')) {
                currentProp = 'cons';
                collectingItems = true;
                // Handle single-line array
                if (line.includes(']}')) {
                  const arrayContent = line.substring(line.indexOf('[') + 1, line.lastIndexOf(']'));
                  try {
                    componentProps.cons = JSON.stringify(
                      arrayContent.split(',')
                        .map(item => item.trim())
                        .map(item => item.startsWith('"') ? item.slice(1, -1) : item)
                        .filter(Boolean)
                    );
                  } catch (e) {
                    console.error('Error parsing cons array:', e);
                  }
                  collectingItems = false;
                } else {
                  items = [];
                }
              }
              else if (collectingItems) {
                if (line.includes(']}')) {
                  // End of array detected
                  if (line.trim() !== ']}') {
                    // Add the last item if there's content
                    const itemContent = line.substring(0, line.indexOf(']'));
                    if (itemContent.trim()) {
                      items.push(itemContent.trim());
                    }
                  }
                  
                  // Save the collected items
                  if (currentProp === 'pros') {
                    componentProps.pros = JSON.stringify(
                      items.map(item => item.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1'))
                    );
                  } else if (currentProp === 'cons') {
                    componentProps.cons = JSON.stringify(
                      items.map(item => item.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1'))
                    );
                  }
                  
                  collectingItems = false;
                } 
                else if (line.trim() && !line.startsWith('{') && !line.endsWith('}')) {
                  // Add item to our collection (remove quotes if present)
                  const cleanLine = line.replace(/,$/, '').trim();
                  if (cleanLine) {
                    items.push(cleanLine);
                  }
                }
              }
              
              j++;
            }
          }
          
          componentContent = "";
        }
        i++;
        continue;
      }

      // Check for component end
      if (line.match(/<\/(InfoBox|QuoteBlock|Callout|ProsConsBox|CodeBlock)>/i) && inComponent) {
        components.push(
          <div key={`component-${components.length}`}>
            {renderComponent()}
          </div>
        );
        inComponent = false;
        componentType = "";
        componentProps = {};
        componentContent = "";
        i++;
        continue;
      }

      // Check for self-closing component
      if (line.match(/<(InfoBox|QuoteBlock|Callout|ProsConsBox|CodeBlock).*?\/>/i)) {
        finalizeList(); // Finalize any current list
        
        // Extract component type and props
        const componentMatch = line.match(/<(\w+)(.*?)\/>/i);
        if (componentMatch) {
          componentType = componentMatch[1];
          
          // Parse props
          const propsText = componentMatch[2];
          const propsMatches = propsText.matchAll(/(\w+)={([^}]*?)}/g);
          componentProps = {};
          
          for (const match of propsMatches) {
            const propName = match[1];
            const propValue = match[2];
            
            // Handle array props
            if (propValue.trim().startsWith('[') && propValue.trim().endsWith(']')) {
              try {
                componentProps[propName] = JSON.parse(propValue);
              } catch (e) {
                console.error(`Error parsing ${propName} prop:`, e);
                componentProps[propName] = propValue;
              }
            } else {
              componentProps[propName] = propValue;
            }
          }
          
          components.push(
            <div key={`component-${components.length}`}>
              {renderComponent()}
            </div>
          );
        }
        i++;
        continue;
      }

      // Collect component content
      if (inComponent) {
        componentContent += line + "\n";
        i++;
        continue;
      }

      // Handle regular markdown
      // Headers
      if (line.startsWith('# ')) {
        finalizeList();
        const textContent = line.substring(2);
        const hasBoldText = textContent.includes('**');
        
        components.push(
          <h1 
            key={`h1-${components.length}`} 
            className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter my-6 scroll-mt-20"
          >
            {hasBoldText ? processBoldText(textContent) : textContent}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        finalizeList();
        const textContent = line.substring(3);
        const hasBoldText = textContent.includes('**');
        
        components.push(
          <h2 
            key={`h2-${components.length}`} 
            className="text-3xl font-bold mt-8 scroll-mt-20"
          >
            {hasBoldText ? processBoldText(textContent) : textContent}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        finalizeList();
        const textContent = line.substring(4);
        const hasBoldText = textContent.includes('**');
        
        components.push(
          <h3 
            key={`h3-${components.length}`} 
            className="text-2xl mt-10 font-bold  scroll-mt-20"
          >
            {hasBoldText ? processBoldText(textContent) : textContent}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        finalizeList();
        const textContent = line.substring(5);
        const hasBoldText = textContent.includes('**');
        
        components.push(
          <h4 
            key={`h4-${components.length}`} 
            className="text-xl font-bold my-0 scroll-mt-20"
          >
            {hasBoldText ? processBoldText(textContent) : textContent}
          </h4>
        );
      }
      // Lists
      else if (line.startsWith('- ')) {
        if (listType !== "unordered") {
          finalizeList();
          listType = "unordered";
        }
        
        const textContent = line.substring(2);
        const hasBoldText = textContent.includes('**');
        
        currentListItems.push(
          <li 
            key={`li-${currentListItems.length}`}
            className=" last:mb-0 flex items-baseline"
          >
            <span className="inline-flex items-start justify-center text-primary mr-2 flex-shrink-0">
              <svg width="8" height="8" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3" />
              </svg>
            </span>
            <span className="text-[17px] font-medium leading-relaxed text-gray-800">
              {hasBoldText ? processBoldText(textContent) : textContent}
            </span>
          </li>
        );
      } else if (line.match(/^\d+\.\s/)) {
        if (listType !== "ordered") {
          finalizeList();
          listType = "ordered";
        }
        const number = line.substring(0, line.indexOf('.'));
        const textContent = line.substring(line.indexOf(' ') + 1);
        const hasBoldText = textContent.includes('**');
        
        currentListItems.push(
          <li 
            key={`li-${currentListItems.length}`}
            className="last:mb-0 flex items-center"
          >
            <span className="text-primary font-medium mr-2  flex-shrink-0 text-right w-4">
              {number}.
            </span>
            <span className="text-[17px] font-medium leading-relaxed text-gray-800">
              {hasBoldText ? processBoldText(textContent) : textContent}
            </span>
          </li>
        );
      }
      // Blockquotes
      else if (line.startsWith('> ')) {
        finalizeList();
        const textContent = line.substring(2);
        const hasBoldText = textContent.includes('**');
        
        components.push(
          <blockquote 
            key={`quote-${components.length}`} 
            className="border-l-4 border-gray-300 pl-4 py-1 italic text-gray-900 my-4"
          >
            {hasBoldText ? processBoldText(textContent) : textContent}
          </blockquote>
        );
      }
      // Tables (pipe-separated)
      else if (line.includes('|')) {
        finalizeList();
        
        // Check if this is the first row of a table
        if (!components.length || !(components[components.length - 1] as React.ReactElement).props || !(components[components.length - 1] as React.ReactElement).props.className || !((components[components.length - 1] as React.ReactElement).props.className as string).includes('table')) {
          // Start a new table
          const tableRows: React.ReactNode[] = [];
          let currentLine = i;
          let isHeader = true;
          
          // Process the table rows
          while (currentLine < lines.length && lines[currentLine].includes('|')) {
            const rowContent = lines[currentLine];
            
            // Skip separator rows (containing only --- or similar)
            if (/^\|[\s\-|:]+\|$/.test(rowContent.replace(/\s+/g, ''))) {
              currentLine++;
              continue;
            }
            
            // Extract cells from the row
            const cells = rowContent.split('|')
              .filter((cell, index, array) => index > 0 && index < array.length)
              .map(cell => cell.trim());
            
            if (isHeader) {
              // This is the header row
              tableRows.push(
                <tr key={`tr-${tableRows.length}`} className="bg-gray-100">
                  {cells.map((cell, cellIndex) => (
                    <th 
                      key={`th-${cellIndex}`} 
                      className="py-2 px-4 font-semibold text-left border-b-2 border-gray-300"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              );
              isHeader = false;
            } else {
              // This is a data row
              tableRows.push(
                <tr key={`tr-${tableRows.length}`} className="border-b border-gray-200 hover:bg-gray-50">
                  {cells.map((cell, cellIndex) => {
                    const hasBoldText = cell.includes('**');
                    return (
                      <td 
                        key={`td-${cellIndex}`} 
                        className="py-2 px-4 text-gray-800"
                      >
                        {hasBoldText ? processBoldText(cell) : cell}
                      </td>
                    );
                  })}
                </tr>
              );
            }
            
            currentLine++;
          }
          
          // Skip the lines we've processed
          i = currentLine - 1;
          
          // Add the table to components
          components.push(
            <div key={`table-${components.length}`} className="my-6 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <tbody>
                  {tableRows}
                </tbody>
              </table>
            </div>
          );
        }
      }
      // Code blocks with triple backticks
      else if (line.startsWith('```')) {
        finalizeList();
        
        // Extract language if specified
        const language = line.slice(3).trim();
        
        // Collect code block content
        const codeLines: string[] = [];
        let j = i + 1;
        
        while (j < lines.length && !lines[j].startsWith('```')) {
          codeLines.push(lines[j]);
          j++;
        }
        
        // Add the code block component
        components.push(
          <div key={`code-${components.length}`} className="my-6">
            <CodeBlock language={language || 'plaintext'}>
              {codeLines.join('\n')}
            </CodeBlock>
          </div>
        );
        
        // Skip to the end of the code block
        i = j + 1;
        continue;
      }
      // Empty lines
      else if (line.trim() === '') {
        if (!currentListItems.length) {
          components.push(<div key={`space-${components.length}`} className="h-4"></div>);
        }
      }
      // Paragraphs with formatting
      else {
        finalizeList();
        
        // Check for links with [text](url) pattern
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const hasLinks = line.match(linkRegex);
        
        // Handle bold text with ** markers
        const boldTextRegex = /\*\*(.*?)\*\*/g;
        const hasBold = line.match(boldTextRegex);
        
        // Handle italic text with * markers
        const italicTextRegex = /\*([^*]+)\*/g;
        const hasItalic = line.match(italicTextRegex);
        
        // If we have formatted text, we need to handle it separately
        if (hasLinks || hasBold || hasItalic) {
          let processedText = line;
          
          // Create React elements with the correct formatting
          let parts: Array<string | JSX.Element> = [processedText];
          
          // Process links first
          if (hasLinks) {
            parts = parts.flatMap(part => {
              if (typeof part !== 'string') return [part];
              
              const segments: Array<string | JSX.Element> = [];
              let lastIndex = 0;
              let match;
              
              const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
              while ((match = linkRegex.exec(part)) !== null) {
                if (match.index > lastIndex) {
                  segments.push(part.substring(lastIndex, match.index));
                }
                
                segments.push(
                  <a 
                    key={match.index} 
                    href={match[2]}
                    className="text-[primary] font-medium hover:text-primary-dark transition-colors underline decoration-from-font"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {match[1]}
                  </a>
                );
                
                lastIndex = match.index + match[0].length;
              }
              
              if (lastIndex < part.length) {
                segments.push(part.substring(lastIndex));
              }
              
              return segments;
            });
          }
          
          // Process bold text
          if (hasBold) {
            parts = parts.flatMap(part => {
              if (typeof part !== 'string') return [part];
              
              const segments: Array<string | JSX.Element> = [];
              let lastIndex = 0;
              let match;
              
              const boldRegex = /\*\*(.*?)\*\*/g;
              while ((match = boldRegex.exec(part)) !== null) {
                if (match.index > lastIndex) {
                  segments.push(part.substring(lastIndex, match.index));
                }
                
                segments.push(
                  <strong key={match.index} className="font-semibold text-[18px] text-slate-900">
                    {match[1]}
                  </strong>
                );
                
                lastIndex = match.index + match[0].length;
              }
              
              if (lastIndex < part.length) {
                segments.push(part.substring(lastIndex));
              }
              
              return segments;
            });
          }
          
          // Process italic text
          if (hasItalic) {
            parts = parts.flatMap(part => {
              if (typeof part !== 'string') return [part];
              
              const segments: Array<string | JSX.Element> = [];
              let lastIndex = 0;
              let match;
              
              const italicRegex = /\*([^*]+)\*/g;
              while ((match = italicRegex.exec(part)) !== null) {
                if (match.index > lastIndex) {
                  segments.push(part.substring(lastIndex, match.index));
                }
                
                segments.push(
                  <em key={match.index} className="italic text-slate-700">
                    {match[1]}
                  </em>
                );
                
                lastIndex = match.index + match[0].length;
              }
              
              if (lastIndex < part.length) {
                segments.push(part.substring(lastIndex));
              }
              
              return segments;
            });
          }
          
          components.push(
            <p key={`p-${components.length}`} className="text-primary font-normal  leading-relaxed text-gray-900 my-4">
              {parts}
            </p>
          );
        } else {
          // Simple paragraph without special formatting
          components.push(
            <p key={`p-${components.length}`} className="text-[19px] font-medium leading-relaxed text-gray-900 my-1">
              {line}
            </p>
          );
        }
      }
      
      i++;
    }
    
    // Finalize any remaining list
    finalizeList();
    
    return components;
  };
  
  if (loading) {
    return (
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
        </div>
      </div>
    );
  }

  if (error) {
  return (
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="bg-red-50 p-4 rounded-lg text-red-800 mb-6">
          <h2 className="text-xl font-bold mb-2">Error Loading Blog Post</h2>
          <p>{error}</p>
          <button 
            className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <MainLayout>
      <Helmet>
        <title>{title} | FreezeFitFocus</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | FreezeFitFocus`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={featuredImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={featuredImage} />
        <meta property="article:published_time" content={date} />
        <meta property="article:author" content={author} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      
      <div className="container mx-auto max-w-4xl px-6 py-6 min-h-screen">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-sm group mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
          Back to Blogs
        </button>
        
        <article className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter my-6 scroll-mt-20">{title}</h1>
          
          <p className="text-xl text-gray-900 my-4 leading-relaxed">{description}</p>
          
          {featuredImage && (
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm my-6">
              <img 
                src={featuredImage} 
                alt={title}
                className="w-full aspect-video object-cover object-center"
              />
            </div>
          )}
          
          <div className="text-gray-900">
            {renderContent()}
          </div>
        </article>
      </div>
    </MainLayout>
  );
};

export default BlogPost;
