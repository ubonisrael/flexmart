export default function SignupLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return <main className="w-screen h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] grid place-items-center bg-slate-300">{children}</main>
  }