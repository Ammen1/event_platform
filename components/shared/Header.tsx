import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import Search from "./Search"

const Header = () => {
  return (
    <header className="w-full border-b  bg-slate-50">
      <div className="wrapper flex items-center justify-between">
      <Button className="py-1 px-4 md:py-2 md:px-6 bg-gradient-to-r text-white font-extrabold shadow-lg">
         Find Here
      </Button>
      <div className=" w-auto"> <Search /></div>
     
 
<SignedIn>
  <nav className="md:flex-between hidden w-full max-w-xs">
    <NavItems />
    </nav>
    </SignedIn>
    <SignedOut>
      <nav className="md:flex-between hidden w-full max-w-xs">
        <NavItems />
          </nav>
        </SignedOut>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header