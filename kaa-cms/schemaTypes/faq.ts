import { defineType , defineField } from "sanity"
export const faq = defineType({
    name : 'faq',
    title : 'FAQs',
    type : 'document',
    fields : [
        defineField({
            name : 'question',
            title : 'Question',
            type : 'string',
        }),
        defineField({
            name : 'response',
            title : 'Réponse',
            type : 'text',
        })
    ]
    
})