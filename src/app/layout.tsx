import "./globals.css";

export const metadata = {
  title: "Rohit Anand - Cyber Security Professional",
  description: "Portfolio of Rohit Anand, a dedicated Cyber Security professional.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
