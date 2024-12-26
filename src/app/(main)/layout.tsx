import { SideBar } from "@/components/layout";
import { AddItemFab } from "./common/components/dialogs/addItem/AddItemFab";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar />
      <AddItemFab />
      {children}
    </>
  );
}
