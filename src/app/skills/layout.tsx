import { Spotlight } from "@/components/ui/Spotlight";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div  className=" overflow-hidden">
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
 <div className="mt-28">

      {children}
 </div>
      </div>
  
    );
  }