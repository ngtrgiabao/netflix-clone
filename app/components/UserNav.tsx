"use client"

import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative h-10 w-10 rounded-sm">
        <Avatar className="h-10 w-10 rounded-sm">
          <AvatarImage src="https://yqweecemiipbcdvjmkdi.supabase.co/storage/v1/object/public/user%20image/avatar.png" />
          <AvatarFallback className="rounded-sm">Yanji</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Yanji</p>
            <p className="text-xs leading-none text-muted-foreground">yanji@gmail.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut({ callbackUrl: '/', redirect: true })}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}