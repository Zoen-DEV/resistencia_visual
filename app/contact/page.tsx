import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { RoutesNames } from "@/utils/enums/routes.enum";
import {
  ContentContainerStyles,
  ContentSectionStyles,
  MainStyles,
} from "@/utils/tailwind/main";

export default function Contact() {
  return (
    <main className={MainStyles}>
      <Header params={RoutesNames.CONTACT} />

      <section className={ContentSectionStyles}>
        <Navbar params={RoutesNames.CONTACT} />

        <section className={ContentContainerStyles}>contact</section>
      </section>
    </main>
  );
}
