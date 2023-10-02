"use client";
import Link from "next/link"
import { useTheme } from "next-themes";
import Container from "./ui/container"
import { Button } from "./ui/button";
import { LogOut , Sun , Moon, Menu } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";
import { Sheet , SheetContent , SheetTrigger} from "./ui/sheet";

const Header =()=>{

const {theme, setTheme} = useTheme();
const routes = [
    {
        href:"/",
        label:"History"
    },
    // {
    //     href:"/",
    //     label:"Logout",
    // },
];

  return (
    <header className="sm:flex sm:justify-between py-3 px-1 border-b bg-red-900">
        <Container>
            <div className="relative px-1 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                <div className="flex items-center">
                <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
                    <Link href={"/"} className="ml-4 lg:ml-0">
                        <h1 className="text-xl font-bold">
                        OpenCareText
                        </h1>
                    </Link>
                </div>
                <nav className="mx-6 flex items-center space-x-4 lg:space-x-2 hidden md:block">
                    {routes.map((route,i)=>(
                        <Button asChild variant={"ghost"}>
                            <Link 
                                key={i}
                                href={route.href}
                                className="text-sm font-medium transition-colors">
                                    {route.label}
                            </Link>

                        </Button>
                    ))}
                </nav>
                    <div className="flex items-center">
                        <Button 
                            size="icon"
                            variant="ghost"
                            className="mr-2"
                            aria-label="Sign Out"
                            >
                            <LogOut className="h-6 w-6">
                            </LogOut>
                        </Button>
                        <Button size="icon"
                            variant="ghost"
                            className="mr-6"
                            aria-label="Toggle Theme"
                            onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}
                            >
                        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                        <Moon className="absolute h-6 w-6 rotate-100 scale-0 transition-all dark:-rotate-0 dark:scale-100"/>
                        <span className="sr-only">Toggle Theme</span>
                        </Button>
                        <ProfileButton/>
                    </div>
                    </div>
            
        </Container>
    </header>
  )
}

export default Header