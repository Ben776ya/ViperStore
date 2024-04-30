import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar(){
    return(
        <nav className="w-full relative flex items-center justify-between max-w-5xl mx-auto px-4 py-5">
            <Link href='/' className="font-bold text-3xl">
                Viper<span className="text-primary">Shop</span>
            </Link>

            <ModeToggle/>
        </nav>
    )
}