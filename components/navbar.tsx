import { RoutesNames } from "@/utils/enums/routes.enum";
import Link from "next/link";

interface Props {
  params: RoutesNames;
}

const Navbar = ({ params }: Props) => {
  return (
    <nav className=" bg-green-200 h-full">
      <ul className=" flex flex-col ">
        <Link href="/">Inicio</Link>
        <Link href="/aboutme">Sobre Mi</Link>
        <Link href="/portfolio">Portafolio</Link>
        {params === RoutesNames.PORTFOLIO && (
          <ul className=" flex flex-col ml-2">
            <Link href="/portfolio/habitarnos-en-el-tiempo">Habitarnos en el tiempo</Link>
            <Link href="/portfolio/cotidiana">Cotidiana</Link>
            <Link href="/portfolio/lo-que-comemos">Lo que comemos</Link>
            <Link href="/portfolio/take-a-look">Hecha un vistazo</Link>
          </ul>
        )}
        <Link href="/shop">Tienda</Link>
        <Link href="/contact">Contacto</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
