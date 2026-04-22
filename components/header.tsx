import { RoutesNames } from "@/utils/enums/routes.enum";
import { getRouteTitle } from "@/utils/filters/get_route_title";
import Link from "next/link";

interface Props {
  params: RoutesNames;
}

const Header = ({ params }: Props) => {
  return (
    <header className=" w-full p-5 flex justify-start items-center gap-15">
      <Link href={"/"} className=" font-bold text-2xl">Camila Lemos</Link>
      <h4>{getRouteTitle(params)}</h4>
    </header>
  );
};

export default Header;
