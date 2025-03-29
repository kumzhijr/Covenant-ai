"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const navItems: { name: string; href: string }[] = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Pricing", href: "/pricing" },
    { name: "Privacy Policy", href: "/privacy" },
];

function googleSignIn() :Promise<void> {
    return new Promise((resolve) => {
        // const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        // const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
        // const scope = "profile email";
        // const responseType = "token";
        // const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
        window.location.href = "http://localhost:8080/auth/google";
        resolve();
    });
}

export function Header() {
    const pathname = usePathname();

    const user = true;

    return (
        <header className="sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-16 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href={"/"} className="mr-6 flex items-center space-x-2">
                        Covenantai(LOGO)
                    </Link>
                    <nav className="flex items-center space-x-7 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className={cn("transition-colors hover:text-foreground/80", pathname === item.href ? "text-foreground/80" : "text-foreground/60")}>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div className="w-full flex-1 md:w-auto md:flex-none space-x-2 hidden md:flex">
                    <Button onClick={googleSignIn}>Get Started</Button>
                </div>    
                </div>
            </div>
        </header>
    );
}