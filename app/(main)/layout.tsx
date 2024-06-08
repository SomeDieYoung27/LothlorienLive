const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <p>Hello</p>
      </div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
