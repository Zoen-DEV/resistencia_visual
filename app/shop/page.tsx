import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { RoutesNames } from "@/utils/enums/routes.enum";
import {
  ContentContainerStyles,
  ContentSectionStyles,
  MainStyles,
} from "@/utils/tailwind/main";

export default function Shop() {
  return (
    <main className={MainStyles}>
      <Header params={RoutesNames.SHOP} />

      <section className={ContentSectionStyles}>
        <Navbar params={RoutesNames.SHOP} />

        <section className={ContentContainerStyles}>shop</section>
      </section>
    </main>
  );
}
