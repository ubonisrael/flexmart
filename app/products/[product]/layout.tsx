export default function ProductLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-md md:max-w-6xl m-auto pt-8 h-full md:py-6 md:px-0 md:flex md:items-start md:gap-8 lg:py-16">
      {children}
    </section>
  );
}
