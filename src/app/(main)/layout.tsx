import { SideBar } from "@/components/layout";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}
