import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { RoutesNames } from "@/utils/enums/routes.enum";
import { ContentContainerStyles, ContentSectionStyles, MainStyles } from "@/utils/tailwind/main";

export default function Home() {
  return (
    <main className={MainStyles}>
      <Header params={RoutesNames.HOME} />

      <section className={ContentSectionStyles} >
        <Navbar params={RoutesNames.HOME} />

        <section className={ContentContainerStyles}>
          HOME
        </section>
      </section>
    </main>
  );
}
