import { RoutesNames } from "@/utils/enums/routes.enum";
import { NavbarContainerStyles, NavbarLinksContainerStyles, NavbarLinkStyles, NavbarSubLinksContainerStyles, NavbarSubLinkStyles } from "@/utils/tailwind/navbar";
import Link from "next/link";

interface Props {
  params: RoutesNames;
}

const Navbar = ({ params }: Props) => {
  return (
    <nav className={NavbarContainerStyles}>
      <ul className={NavbarLinksContainerStyles}>
        <Link href="/" className={NavbarLinkStyles}>Inicio</Link>
        <Link href="/aboutme" className={NavbarLinkStyles}>Sobre Mi</Link>
        <Link href="/portfolio" className={NavbarLinkStyles}>Portafolio</Link>

        {params === RoutesNames.PORTFOLIO && (
          <ul className={NavbarSubLinksContainerStyles}>
            <Link href="/portfolio/habitarnos-en-el-tiempo" className={NavbarSubLinkStyles}>Habitarnos en el tiempo</Link>
            <Link href="/portfolio/cotidiana" className={NavbarSubLinkStyles}>Cotidiana</Link>
            <Link href="/portfolio/lo-que-comemos" className={NavbarSubLinkStyles}>Lo que comemos</Link>
            <Link href="/portfolio/take-a-look" className={NavbarSubLinkStyles}>Hecha un vistazo</Link>
          </ul>
        )}

        <Link href="/shop" className={NavbarLinkStyles}>Tienda</Link>
        <Link href="/contact" className={NavbarLinkStyles}>Contacto</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
