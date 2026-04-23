import { RoutesNames } from "@/utils/enums/routes.enum";
import { getRouteTitle } from "@/utils/filters/get_route_title";
import { HeaderContainerStyles, HeaderLinkStyles } from "@/utils/tailwind/header";
import Link from "next/link";

interface Props {
  params: RoutesNames;
}

const Header = ({ params }: Props) => {
  return (
    <header className={HeaderContainerStyles}>
      <Link href={"/"} className={HeaderLinkStyles}>
        Camila Lemos
      </Link>
      <h4>{getRouteTitle(params)}</h4>
    </header>
  );
};

export default Header;
