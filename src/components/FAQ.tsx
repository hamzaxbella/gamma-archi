import { client } from '@/lib/sanity';
import FAQTemplate from './FAQTemplate';
import { FaqContentProps } from '@/lib/interfaces'; // Import the correct type

export const revalidate = 1;

async function GetFaqs() {
  const query = `
    * [_type ==  "faq"] {
      question,
      response 
    }
  `;
  const data = await client.fetch(query); // Await the data correctly
  return data;
}

async function FAQ() {
  const data: FaqContentProps[] = await GetFaqs(); // Use FaqContentProps[] for the data type
  return <FAQTemplate FAQcontent={data} />;
}

export default FAQ;
