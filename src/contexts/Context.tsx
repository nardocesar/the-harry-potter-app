"use client";

import { PropsWithChildren } from "react";
import { CharactersProvider } from "./Characters";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Context = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CharactersProvider>{children}</CharactersProvider>
    </QueryClientProvider>
  );
};
