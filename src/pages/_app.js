import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import * as React from "react";
import LayoutWithHeader from "../components/LayoutWithHeader";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => <LayoutWithHeader>{page}</LayoutWithHeader>);
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
