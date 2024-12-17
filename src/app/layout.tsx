import type { Metadata } from 'next'
import { DM_Sans} from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

import { Inter as InterFont } from 'next/font/google'; // Alias the import
import { ThemeProvider } from '@/providers/theme-provider'
import ModalProvider from '@/providers/modal-provider';

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Plura",
  description: "All in one Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
        <body className={font.className} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
           >
              <ModalProvider>{children}
                <Toaster/>
                </ModalProvider> 
             
          </ThemeProvider>
          </body>
        
        </html>
        </ClerkProvider>
  );
}
