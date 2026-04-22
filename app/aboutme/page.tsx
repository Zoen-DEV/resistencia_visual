import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { RoutesNames } from "@/utils/enums/routes.enum";
import { ContentSectionStyles, MainStyles } from "@/utils/tailwind/main";

export default function AboutMe() {
  return (
    <main className={MainStyles}>
      <Header params={RoutesNames.ABOUT_ME} />

      <section className={ContentSectionStyles}>
        <Navbar params={RoutesNames.ABOUT_ME} />

        <section>
          content
        </section>
      </section>
    </main>
  );
}
