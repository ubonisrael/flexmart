export default function CartLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return <main className="w-screen min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center gap-4 p-4 lg:p-10 bg-slate-300">{children}</main>
  }