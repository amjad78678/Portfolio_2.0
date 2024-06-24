


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>I am innner layout hai</h1>
    {children}
    
    </>

  );
}
