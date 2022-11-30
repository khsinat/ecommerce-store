import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
    projectId:'fz1j1fl5',
    apiVersion:'2022-11-28',
    useCdn:true,
    dataset:'production'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);