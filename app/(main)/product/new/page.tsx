import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function CreateProductPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return(
    <div className="mt-20"><h1 className="text-gray-950">Test</h1></div>
  )
}
