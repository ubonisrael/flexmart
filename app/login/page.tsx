import Login from "../components/Login";

export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  return <Login />;
}