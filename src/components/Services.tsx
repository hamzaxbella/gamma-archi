import { client } from "@/lib/sanity";
import { Swiper as SwiperClass } from "swiper"; // Import Swiper class for typing
import "swiper/css";
import ServicesSwiper from "./ServicesSwiper";
import { ServiceSwiperProps } from "@/lib/interfaces";
export const revalidate = 1

async function getServicesData() {
  const query = `
    * [_type ==  "service"] {
      title,
      description
    }
  `;
  const data = await client.fetch(query);
  return data.sort((a: ServiceSwiperProps, b: ServiceSwiperProps) => 
    a.title.localeCompare(b.title)
  );
}

async function Services() {
  const data :  ServiceSwiperProps[] = await getServicesData();
  return (
    <section>
      <ServicesSwiper AllServices={data}/>
    </section>
  )
}

export default Services;
