import React, { createContext, useState, useContext, useCallback } from "react";
import projectsData from "../data/projects.json";

// Blog posts will be imported once created
// For now we'll use an empty array
const blogPosts = [];

// Create search context
const SearchContext = createContext();

/**
 * Search Provider Component
 * Provides search functionality across projects and blog posts
 */
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);

  // Perform search across multiple content types
  const performSearch = useCallback((query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      setSearchCompleted(false);
      return;
    }

    setIsSearching(true);
    setSearchCompleted(false);

    // Normalize query for case-insensitive search
    const normalizedQuery = query.toLowerCase().trim();

    // Search projects
    const projectResults = projectsData
      .filter(
        (project) =>
          project.title.toLowerCase().includes(normalizedQuery) ||
          project.description.toLowerCase().includes(normalizedQuery) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(normalizedQuery)
          ) ||
          project.categories?.some((category) =>
            category.toLowerCase().includes(normalizedQuery)
          )
      )
      .map((project) => ({
        id: project.id,
        title: project.title,
        description: project.description.substring(0, 150) + "...",
        type: "project",
        image: `/assets/images/projects/${project.image}`,
        url: `/projects/${project.id}`,
        tags: project.technologies.slice(0, 3),
      }));

    // Search blog posts
    const blogResults = blogPosts
      .filter(
        (post) =>
          post.title.toLowerCase().includes(normalizedQuery) ||
          post.excerpt.toLowerCase().includes(normalizedQuery) ||
          post.content.toLowerCase().includes(normalizedQuery) ||
          post.categories.some((category) =>
            category.toLowerCase().includes(normalizedQuery)
          )
      )
      .map((post) => ({
        id: post.id,
        title: post.title,
        description: post.excerpt,
        type: "blog",
        image: `/assets/images/blog/${post.coverImage}`,
        url: `/blog/${post.id}`,
        tags: post.categories.slice(0, 3),
        date: post.publishDate,
      }));

    // Combine results and sort by relevance
    // This is a simple implementation - could be improved with more sophisticated ranking
    const combinedResults = [...projectResults, ...blogResults];

    // Sort results: exact title matches first, then by recency for blogs
    combinedResults.sort((a, b) => {
      // Exact title matches come first
      const aExactMatch = a.title.toLowerCase() === normalizedQuery;
      const bExactMatch = b.title.toLowerCase() === normalizedQuery;

      if (aExactMatch && !bExactMatch) return -1;
      if (!aExactMatch && bExactMatch) return 1;

      // Then sort by type (projects first)
      if (a.type === "project" && b.type === "blog") return -1;
      if (a.type === "blog" && b.type === "project") return 1;

      // If both are blogs, sort by date (most recent first)
      if (a.type === "blog" && b.type === "blog" && a.date && b.date) {
        return new Date(b.date) - new Date(a.date);
      }

      return 0;
    });

    setSearchResults(combinedResults);
    setIsSearching(false);
    setSearchCompleted(true);
  }, []);

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchResults([]);
    setSearchCompleted(false);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        searchResults,
        isSearching,
        searchCompleted,
        performSearch,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook for using the search context
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
