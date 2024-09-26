import CustomCursor from "@/components/customCursor/CustomCursor";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Map from "@/components/Map";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export const revalidate = 30 // revalidate the data every 30 seconds


const Page = () => {

  return (
    <main className="relative  z-20 w-full h-full">
        <section>
          <Hero />
          <section>
            <Introduction />
          </section>
          <section>
            <Projects isComponent/>
          </section>
          <section>
            <Services />
          </section>
          <section>
            <FAQ />
          </section>
          <div className="absolute margin-x -right-24 z-10 bottom-1/4  w-24 h-24 bg-effect blur-3xl" />

          <section>
            <Map />
          </section>
        </section>
    </main>
  );
};

export default Page;
