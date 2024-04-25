'use client';

import { QueryClient, QueryClientProvider, keepPreviousData } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

// import PermisionContext from '@/components/permissionWrapper/permissionContext';
// import { ProtectedRoute } from '@/components/protected-route';

const fiveMinutesinMs = 1000 * 60 * 5;

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: fiveMinutesinMs,
            //   cacheTime: fiveMinutesinMs,
            //   keepPreviousData: true,
            gcTime: fiveMinutesinMs,
            placeholderData: keepPreviousData,

            refetchOnWindowFocus: false,
            retry: false,
            // useErrorBoundary: (error) => {
            //   const errors = error as Record<string, string>;

            //   toast({
            //     title: errors.message || 'Something went wrong!',
            //     state: 'error',
            //     variant: 'danger',
            //   });
            //   return false;
            // },
        },
    },
});

const Providers = ({ children }: React.PropsWithChildren) => {
    const [client] = React.useState(queryClient);

    return (
        <QueryClientProvider client={client}>
            {/* <ProtectedRoute> */}
            {/* <PermisionContext> */}
            {children}
            <ReactQueryDevtools position="bottom" />
            {/* </PermisionContext> */}
            {/* </ProtectedRoute> */}
        </QueryClientProvider>
    );
};

export default Providers;
