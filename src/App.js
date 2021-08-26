import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "./theme";
import Routes from "./routes";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <TopBar />
          <Routes />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
