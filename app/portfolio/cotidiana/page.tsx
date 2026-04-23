import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { RoutesNames } from "@/utils/enums/routes.enum";
import { ContentContainerStyles, ContentSectionStyles, MainStyles } from "@/utils/tailwind/main";

export default function PortfolioCotidiana() {
  return (
    <main className={MainStyles}>
      <Header params={RoutesNames.PROJECT_2} />

      <section className={ContentSectionStyles}>
        <Navbar params={RoutesNames.PORTFOLIO} />

        <section className={ContentContainerStyles}>Cotidiana</section>
      </section>
    </main>
  );
}
