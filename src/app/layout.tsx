import "@/src/app/globals.css";
import AppLayout from "@/src/presentation/layouts/AppLayout";
import SessionProvider from "@/src/components/SessionProvider";

export const metadata = { title: "We Park" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <SessionProvider>
          <AppLayout>{children}</AppLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
