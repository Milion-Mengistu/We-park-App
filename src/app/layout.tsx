import "@/src/app/globals.css";
import AppLayout from "@/src/presentation/layouts/AppLayout";
import SessionProvider from "@/src/components/SessionProvider";

export const metadata = { title: "We Park" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AppLayout>{children}</AppLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
