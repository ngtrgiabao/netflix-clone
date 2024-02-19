"use client"

import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/public";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function GoogleSigninButton() {
  return (
    <Button variant="outline" size="icon" onClick={() => signIn("google")}>
      <Image
        src={GoogleIcon}
        alt="Google Icon"
        className="w-6 h-6"
      />
    </Button>
  )
}