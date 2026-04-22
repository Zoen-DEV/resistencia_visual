import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { RoutesNames } from "@/utils/enums/routes.enum";
import { ContentSectionStyles, MainStyles } from "@/utils/tailwind/main";

export default function PortfolioHabitarnosEnElTiempo() {
  return (
    <main className={MainStyles}>
      <Header params={RoutesNames.PROJECT_1} />

      <section className={ContentSectionStyles}>
        <Navbar params={RoutesNames.PORTFOLIO} />

        <section>
          content
        </section>
      </section>
    </main>
  );
}
