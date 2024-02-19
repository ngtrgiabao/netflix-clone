import { Github } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoogleIcon } from "../../../public";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">
          Sign up
        </h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block text-white"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Sign Up
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2">
        Already have an account?
        <Link href="/sign-in" className="text-white hover:underline ms-1">
          Login now!
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="icon">
          <Github className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Image
            src={GoogleIcon}
            alt="Google Icon"
            className="w-6 h-6"
          />
        </Button>
      </div>
    </div>
  )
}