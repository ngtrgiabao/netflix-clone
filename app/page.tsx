import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./utils/auth";
import Navbar from "./components/Navbar";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   return redirect("/sign-in")
  // } else {
  //   return redirect("/")
  // }

  return (
      <Navbar />    
  )
}
