// src/data/blog-posts.js
// This file will store our blog post data
export const blogPosts = [
    {
      id: 'getting-started-with-react',
      title: 'Getting Started with React in 2025',
      publishDate: '2025-04-15',
      author: 'Ali Pourrahim',
      excerpt: 'A comprehensive guide to starting with React in 2025, covering the latest features and best practices.',
      content: `
  # Getting Started with React in 2025
  
  React has come a long way since it was first released by Facebook in 2013. As of 2025, it's still one of the most popular JavaScript libraries for building user interfaces. This guide will help you get started with React in 2025.
  
  ## Prerequisites
  
  Before you dive into React, make sure you have a solid understanding of:
  
  - HTML, CSS, and JavaScript (ES6+)
  - Node.js and npm
  - Basic command line usage
  
  ## Setting Up Your First React Project
  
  The easiest way to get started with React is by using Create React App, which sets up a modern React application with a good default configuration.
  
  \`\`\`bash
  npx create-react-app my-first-app
  cd my-first-app
  npm start
  \`\`\`
  
  This will create a new React project and start a development server. You should see the React logo in your browser at http://localhost:3000.
  
  ## Understanding React Components
  
  React is all about components. Components are reusable pieces of code that return React elements describing what should appear on the screen.
  
  Here's a simple functional component:
  
  \`\`\`jsx
  import React from 'react';
  
  function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
  }
  
  export default Welcome;
  \`\`\`
  
  Components can be composed together to create complex UIs.
  
  ## State and Hooks
  
  React Hooks allow you to use state and other React features without writing a class. The most commonly used hook is \`useState\`.
  
  \`\`\`jsx
  import React, { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  \`\`\`
  
  ## Next Steps
  
  Once you're comfortable with the basics, you may want to explore:
  
  - React Router for navigation
  - State management with Context API or Redux
  - Styling with CSS-in-JS libraries
  - Testing React components
  
  Happy coding!
      `,
      categories: ['React', 'JavaScript', 'Web Development'],
      coverImage: 'react-cover.jpg',
      readingTime: '5 min read',
    },
    {
      id: 'css-grid-vs-flexbox',
      title: 'CSS Grid vs Flexbox: When to Use Each',
      publishDate: '2025-04-10',
      author: 'Ali Pourrahim',
      excerpt: 'Understanding the differences between CSS Grid and Flexbox, and knowing when to use each for optimal layouts.',
      content: `
  # CSS Grid vs Flexbox: When to Use Each
  
  When it comes to creating layouts in CSS, two powerful systems stand out: CSS Grid and Flexbox. Both offer modern solutions for creating responsive designs, but they have different strengths and use cases.
  
  ## Understanding Flexbox
  
  Flexbox is designed for one-dimensional layouts - either a row or a column. It's ideal for:
  
  - Navigation bars
  - Card layouts
  - Centering elements
  - Distributing space among items in a container
  
  Here's a simple example of a Flexbox layout:
  
  \`\`\`css
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .flex-item {
    flex: 1;
    margin: 10px;
  }
  \`\`\`
  
  ## Understanding CSS Grid
  
  CSS Grid is designed for two-dimensional layouts - rows and columns together. It's perfect for:
  
  - Page layouts
  - Complex grid systems
  - Image galleries
  - Any UI that requires alignment in both rows and columns
  
  Here's a basic CSS Grid example:
  
  \`\`\`css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  
  .grid-item {
    grid-column: span 1;
  }
  
  .grid-item-wide {
    grid-column: span 2;
  }
  \`\`\`
  
  ## When to Use Which?
  
  - **Use Flexbox when:**
    - You have a single row or column of items
    - You need alignment and distribution of space inside a container
    - You need to order items easily
  
  - **Use CSS Grid when:**
    - You need to create a layout with both rows and columns
    - You have a complex grid-based interface
    - You need to overlap elements
  
  ## Can You Use Both Together?
  
  Absolutely! A common pattern is to use:
  - CSS Grid for the overall page layout
  - Flexbox for component alignment within grid cells
  
  This combination gives you the best of both worlds.
  
  ## Conclusion
  
  Both Flexbox and CSS Grid are powerful tools in a web developer's arsenal. Understanding their strengths and appropriate use cases will help you create more efficient, maintainable, and responsive layouts.
      `,
      categories: ['CSS', 'Web Design', 'Web Development'],
      coverImage: 'css-grid-flexbox.jpg',
      readingTime: '4 min read',
    },
    {
      id: 'typescript-vs-javascript',
      title: 'TypeScript vs JavaScript: Making the Right Choice',
      publishDate: '2025-04-05',
      author: 'Ali Pourrahim',
      excerpt: 'Comparing TypeScript and JavaScript to help you decide which is right for your next project.',
      content: `
  # TypeScript vs JavaScript: Making the Right Choice
  
  JavaScript has been the language of the web for decades, but TypeScript has gained significant popularity in recent years. This article will help you understand the differences and make an informed choice for your projects.
  
  ## What is TypeScript?
  
  TypeScript is a superset of JavaScript that adds static typing and other features to help developers write more robust code. It compiles down to JavaScript, meaning it can run anywhere JavaScript runs.
  
  ## Key Differences
  
  ### Static Typing
  
  The most obvious difference is TypeScript's static typing system:
  
  \`\`\`typescript
  // JavaScript
  function add(a, b) {
    return a + b;
  }
  
  // TypeScript
  function add(a: number, b: number): number {
    return a + b;
  }
  \`\`\`
  
  With TypeScript, you can catch type-related errors at compile time rather than runtime.
  
  ### Enhanced IDE Support
  
  TypeScript provides much better tooling:
  - Improved autocomplete
  - Better refactoring support
  - More precise code navigation
  
  ### Advanced Features
  
  TypeScript includes features not available in JavaScript:
  - Interfaces
  - Enums
  - Generics
  - Type aliases and unions
  
  ## When to Choose JavaScript
  
  - Small projects with a short lifespan
  - Projects where developer onboarding time is critical
  - When you need maximum flexibility
  - When you want to avoid the compilation step
  
  ## When to Choose TypeScript
  
  - Larger, enterprise-scale applications
  - Team environments with multiple developers
  - Projects that will be maintained for a long time
  - When type safety is a priority
  
  ## Making the Transition
  
  If you're considering moving from JavaScript to TypeScript, you can do so gradually:
  1. Start by adding \`.ts\` files to your project
  2. Set the compiler options to be lenient at first
  3. Gradually add type annotations as you go
  4. Use the \`any\` type when needed to make migration easier
  
  ## Conclusion
  
  Both JavaScript and TypeScript have their place in modern web development. JavaScript offers simplicity and flexibility, while TypeScript provides robustness and better tooling. Your project's specific needs should guide your decision.
      `,
      categories: ['TypeScript', 'JavaScript', 'Web Development'],
      coverImage: 'typescript-vs-js.jpg',
      readingTime: '6 min read',
    }
  ];
  
  // Helper function to get all blog categories
  export const getAllCategories = () => {
    const categoriesSet = new Set();
    
    blogPosts.forEach(post => {
      post.categories.forEach(category => {
        categoriesSet.add(category);
      });
    });
    
    return Array.from(categoriesSet);
  };
  
  // Helper function to get recent posts
  export const getRecentPosts = (count = 3) => {
    return [...blogPosts]
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
      .slice(0, count);
  };
  
  // Helper function to search posts
  export const searchPosts = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) || 
      post.excerpt.toLowerCase().includes(lowercaseQuery) || 
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.categories.some(category => 
        category.toLowerCase().includes(lowercaseQuery)
      )
    );
  };
  
  // Helper function to filter posts by category
  export const filterPostsByCategory = (category) => {
    if (!category || category === 'All') {
      return blogPosts;
    }
    
    return blogPosts.filter(post => 
      post.categories.includes(category)
    );
  };
  
  // src/pages/Blog.jsx
  import React, { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import { blogPosts, getAllCategories, filterPostsByCategory, searchPosts } from '../data/blog-posts';
  
  const Blog = () => {
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [categories, setCategories] = useState(['All']);
    
    useEffect(() => {
      // Get all unique categories
      setCategories(['All', ...getAllCategories()]);
      
      // Initialize with all posts
      setFilteredPosts(blogPosts);
    }, []);
    
    useEffect(() => {
      let result = blogPosts;
      
      // Apply category filter
      if (selectedCategory !== 'All') {
        result = filterPostsByCategory(selectedCategory);
      }
      
      // Apply search filter
      if (searchQuery.trim()) {
        result = searchPosts(searchQuery);
      }
      
      setFilteredPosts(result);
    }, [selectedCategory, searchQuery]);
    
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
    
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
    
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Thoughts, tutorials, and insights about web development
        </p>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            {/* Search */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Post Image */}
                <Link to={`/blog/${post.id}`}>
                  <img
                    src={`/assets/images/blog/${post.coverImage}`}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                
                {/* Post Content */}
                <div className="p-6">
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.slice(0, 2).map((category, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                    {post.categories.length > 2 && (
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        +{post.categories.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-semibold mb-2">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Post Meta */}
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.publishDate}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              No posts found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default Blog;
  
  // src/pages/BlogPost.jsx
  import React, { useState, useEffect } from 'react';
  import { useParams, Link, useNavigate } from 'react-router-dom';
  import { blogPosts, getRecentPosts } from '../data/blog-posts';
  import ReactMarkdown from 'react-markdown';
  
  const BlogPost = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedPosts, setRelatedPosts] = useState([]);
    
    useEffect(() => {
      // Find the post
      const foundPost = blogPosts.find((p) => p.id === postId);
      
      if (foundPost) {
        setPost(foundPost);
        
        // Get related posts (posts with matching categories)
        const related = blogPosts
          .filter((p) => 
            p.id !== postId && // Not the current post
            p.categories.some((cat) => foundPost.categories.includes(cat)) // Has matching category
          )
          .slice(0, 3); // Limit to 3 posts
        
        setRelatedPosts(related);
      } else {
        // If post not found, navigate to blog index
        navigate('/blog', { replace: true });
      }
      
      setLoading(false);
    }, [postId, navigate]);
    
    if (loading) {
      return (
        <div className="container mx-auto px-4 py-20">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        </div>
      );
    }
    
    if (!post) {
      return null; // Redirect handled in useEffect
    }
    
    return (
      <div className="container mx-auto px-4 py-20">
        {/* Back link */}
        <div className="mb-6">
          <Link
            to="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
        
        <article className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap justify-between items-center text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center">
                <span className="mr-4">{post.publishDate}</span>
                <span>{post.readingTime}</span>
              </div>
              <div>
                <span>By {post.author}</span>
              </div>
            </div>
            
            {/* Featured Image */}
            <img
              src={`/assets/images/blog/${post.coverImage}`}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </header>
          
          {/* Post Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          {/* Share Links */}
          <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Share this post</h3>
            <div className="flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Share on Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-700"
                aria-label="Share on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                  >
                    <Link to={`/blog/${relatedPost.id}`}>
                      <img
                        src={`/assets/images/blog/${relatedPost.coverImage}`}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">
                        <Link
                          to={`/blog/${relatedPost.id}`}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {relatedPost.publishDate} • {relatedPost.readingTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    );
  };
  
  export default BlogPost;