import Navbar from "@/app/ui/constants/navbar/Navbar";
import Sidebar from "@/app/ui/constants/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
          <body>
              <Sidebar />
              <Navbar />
              {children}</body>
    </html>
  );
}
