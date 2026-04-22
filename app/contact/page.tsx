import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { RoutesNames } from "@/utils/enums/routes.enum";
import { MainStyles } from "@/utils/tailwind/main";

export default function Contact() {
  return (
    <main className={MainStyles}>
      <Header params={RoutesNames.CONTACT} />

      <section>
        <Navbar params={RoutesNames.CONTACT} />

        <section>
          content
        </section>
      </section>
    </main>
  );
}
