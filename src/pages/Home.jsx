import { DashPreview } from "../components/HOME/DashPreview";
import { ExplainDash } from "../components/HOME/explainDash";
import { FAQ } from "../components/HOME/FAQ";
import { Footer } from "../components/HOME/Footer";
import { Header } from "../components/HOME/Header";
import { NavbarHome } from "../components/HOME/NavbarHome";
import { StatsCustomer } from "../components/HOME/StatsCustomer";
import { TrustDashE } from "../components/HOME/TrustDashE";
import { WorkHow } from "../components/HOME/WorkHow";
// import WorkHow from "../components/HOME/WorkHow";

import useTheme from "../hooks/useThem";

export function Home(){
  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 min-h-screen dark:text-zinc-100 text-zinc-900">
      <article className="container mx-auto font-l ">
        <div className="min-h-screen">
          <NavbarHome/>
          <Header/>
        </div>
        <div>
          <StatsCustomer/>
          <ExplainDash />
          <WorkHow />
          <DashPreview />
          <TrustDashE />
          <FAQ />
        </div>
      </article>
          <Footer/>
    </div>
  )
}