import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { staticServices, staticTestimonials, staticFaqs } from "./staticData";

// Check if we're in a production environment (Vercel deployment)
const isVercelProduction = import.meta.env.PROD && window.location.hostname.includes('vercel.app');
// Check if we're in a production environment (works on any domain)
const isProdEnv = import.meta.env.PROD;

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn = 
  ({ on401: unauthorizedBehavior }: { on401: UnauthorizedBehavior }) =>
  async ({ queryKey }: any): Promise<any> => {
    // If we're in Vercel production, return static data instead of making API calls
    if (isVercelProduction) {
      const url = queryKey[0] as string;
      
      if (url === '/api/services') {
        return staticServices;
      } else if (url === '/api/testimonials') {
        return staticTestimonials;
      } else if (url === '/api/faqs') {
        return staticFaqs;
      }
    }
    
    // If we're in any production environment, use static data instead of making API calls
    if (isProdEnv) {
      const url = queryKey[0] as string;
      
      if (url === '/api/services') {
        return staticServices;
      } else if (url === '/api/testimonials') {
        return staticTestimonials;
      } else if (url === '/api/faqs') {
        return staticFaqs;
      }
    }
    
    // Normal API call for local development or other environments
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }) as any,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
