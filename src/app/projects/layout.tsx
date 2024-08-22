import { Spotlight } from "@/components/ui/Spotlight";
import { Boxes } from "@/components/ui/background-boxes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Boxes />
      <div className="mt-28">{children}</div>
    </div>
  );
}
