export default function ProductsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return <main className="w-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex flex-col gap-4 md:gap-8 p-4 sm:p-8 lg:px-[calc(50%-576px)] lg:py-16 bg-slate-300">{children}</main>
  }