import CTA from "@/components/CTA";
import ServiceDetails from "@/components/ServiceDetails";
import Services from "@/components/Services";

interface ServiceDetailProps {
  params: {
    serviceName: string;
  };
}

// // data/services.ts
// export interface Service {
//   name: string;
//   content: string;
// }

// export const services: Record<string, Service> = {
//   'Interior': { name: 'Interior', content: 'Interior Interior Interior Interior Interior Interior Interior Interior Interior ' },
//   'SEO': { name: 'SEO', content: 'We optimize your site to rank higher on search engines.' },
//   'Urbanism': { name: 'Urbanism', content: 'We dklfj slkdf;e x idw x xkld f ; qjdh .' },
//   'Architecture': { name: 'Architecture', content: 'we build stuff that makes you laufhg as dn dsjd fthing that..' },
//   // Add more services as needed
// };


const ServiceDetailPage = ({ params }: ServiceDetailProps) => {
  // const { serviceName } = params;

  // // Check if the serviceName exists in the services object
  // const service = services[serviceName];

  // if (!service) {
  //   return <p>Service not found</p>;
  // }

  return (
    // <div>
    //   <h1>{service.name}</h1>
    //   <p>{service.content}</p>
    // </div>
    <main>
      <section>
        <ServiceDetails/>
      </section>

      <section>
        <Services/>
      </section>

      <section>
        <CTA/>
      </section>
    </main>
  );
};

export default ServiceDetailPage;
