"use client"

import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { usePathname } from "next/navigation";

const Provider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    if (pathname.startsWith("/studio")) {
        return <>{children}</>;
    } else {
        return (
            <>
                <SiteHeader />
                {children}
                <SiteFooter />
            </>
        )
    }
}

export default Provider