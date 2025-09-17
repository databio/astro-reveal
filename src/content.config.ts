// This file is used to define the collections. 

// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const slides = defineCollection({ 
    loader: glob({ 
        pattern: "**/*.md", 
        base: "./public/slides",
        generateId: ({ entry }) => {
            // Extract just the folder name from the path
            const pathParts = entry.split('/');
            console.log(pathParts);
        return pathParts[pathParts.length - 2]; // Get the parent folder name
    }
    }),
});

console.log("slides")


// generateId: ({ entry }) => {
//     // Extract just the folder name from the path
//     const pathParts = entry.split('/');
//     return pathParts[pathParts.length - 2]; // Get the parent folder name
// }

// 4. Export a single `collections` object to register your collection(s)
export const collections = { slides };