import { navLinks } from "../constants";

export default function Nav() {
    return(
        <header>
            <nav>
                <ul className="flex top-10 items-center justify-center sm:gap-12 gap-4 sm:px-10 px-7 sm:py-6 py-4 sm:text-[16px] text-[14px">
                    {navLinks.map((link) => (
                           <li key={link.label}>
                           <a 
                               href={link.href}
                           >
                               {link.label}
                           </a>
                       </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}