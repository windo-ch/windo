import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd());
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Make env variables available to the app
    define: {
      'import.meta.env.VITE_BLOB_READ_WRITE_TOKEN': JSON.stringify(env.VITE_BLOB_READ_WRITE_TOKEN || '')
    },
    build: {
      // Set output directory to "dist" to match vercel.json
      outDir: "dist",
      // Increase chunk size warning limit
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          // Configure manual chunks for better code splitting
          manualChunks: (id) => {
            // React and related libraries
            if (id.includes('node_modules/react') || 
                id.includes('node_modules/react-dom') || 
                id.includes('node_modules/react-router-dom')) {
              return 'react-vendor';
            }
            
            // UI libraries
            if (id.includes('node_modules/framer-motion') || 
                id.includes('node_modules/react-icons') || 
                id.includes('node_modules/lucide-react') || 
                id.includes('node_modules/sonner') || 
                id.includes('node_modules/react-helmet') || 
                id.includes('node_modules/react-helmet-async')) {
              return 'ui-vendor';
            }
            
            // Split translations
            if (id.includes('/src/translations/industries/')) {
              return 'translations-industries';
            }
            if (id.includes('/src/translations/legal/')) {
              return 'translations-legal';
            }
            if (id.includes('/src/translations/questionnaire/')) {
              return 'translations-questionnaire';
            }
            if (id.includes('/src/translations/') && !id.includes('industries') && !id.includes('legal') && !id.includes('questionnaire')) {
              return 'translations-base';
            }
            
            // Split industry pages
            if (id.includes('/src/pages/industries/')) {
              return 'industry-pages';
            }
            
            // Split main pages
            if (id.includes('/src/pages/Index.tsx') || 
                id.includes('/src/pages/services/Services.tsx')) {
              return 'main-pages';
            }
            
            // Split questionnaire
            if (id.includes('/src/pages/ProjectQuestionnaire.tsx')) {
              return 'forms';
            }
          }
        },
      },
    },
  }
});
