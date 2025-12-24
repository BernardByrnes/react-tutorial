(1) wrap the whole app in the <QueryClientProvider></QueryClientProvider>
(2)we also need to grab the {QueryClient} :
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

create a new instance: const queryClient = New QueryClient()
add a prop to
<QueryClientProvider client={queryClient}>
<app/>
</QueryClientProvider>

u don't need to use context u can access the values all over the app.. some few instances u may need to store the values

for the queries remember the query key and query function

#### The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.

#### A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.
