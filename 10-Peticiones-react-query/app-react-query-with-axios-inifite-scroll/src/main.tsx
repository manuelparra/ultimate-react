import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const queryClient = new QueryClient({
  // Confuración para todos las querys que se encuentran dentro de la aplicacicón
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 60 * 1000, // 1 minuto
      gcTime: 5 * 50 * 1000, // 5 minutos
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
