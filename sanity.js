import {
    createClient,
    createCurrentUserHook,
    createImageUrlBuilder
} from 'next-sanity'

export const config =  {
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
projectId:"qqa33q7m",
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
}

export const sanityCLient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const useCurrentUser = createCurrentUserHook(config)

