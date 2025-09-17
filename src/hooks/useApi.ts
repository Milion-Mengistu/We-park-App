import { useState, useCallback } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends ApiState<T> {
  execute: (...args: any[]) => Promise<T | null>;
  reset: () => void;
}

/**
 * Hook for managing API call state
 */
export function useApi<T>(
  apiFunction: (...args: any[]) => Promise<T>
): UseApiReturn<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null
  });

  const execute = useCallback(
    async (...args: any[]): Promise<T | null> => {
      setState(prev => ({ ...prev, loading: true, error: null }));

      try {
        const result = await apiFunction(...args);
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred';
        setState({ data: null, loading: false, error: errorMessage });
        return null;
      }
    },
    [apiFunction]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return {
    ...state,
    execute,
    reset
  };
}

/**
 * Hook for managing API calls that need immediate execution
 */
export function useApiWithImmediate<T>(
  apiFunction: (...args: any[]) => Promise<T>,
  immediate = true,
  deps: any[] = []
): UseApiReturn<T> {
  const apiHook = useApi(apiFunction);

  // Execute immediately if needed
  useState(() => {
    if (immediate) {
      apiHook.execute();
    }
  });

  return apiHook;
}
