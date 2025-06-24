import "./globals.css";
import { ThemeProvider } from '../app/components/Ui/theme-provider'


export const metadata = {
  title: "Turismo no Espirito Santo",
  description: "título da Página",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
