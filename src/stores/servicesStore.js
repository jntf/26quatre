// servicesStore.js

let cachedServices = null;

async function fetchServices() {
  if (cachedServices) {
    return cachedServices; // Retourne les données mises en cache si elles existent
  }

  const query = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        {
          services {
            title
            longTitle
            slug
            image {
              url
            }
            shortDescription
            pageDescriptive {
              introduction {
                html
              }
              introImages {
                url
              }
              corps {
                html
              }
              conclusion {
                html
              }
            }
            firstPageColor {
              hex
            }
            seo {
              ... on TagAndJsonLd {
                keywords
                title
                description
              }
            }
            seoJsonLd {
              description
              aeraServed
              location
              name
              offersDescription
              serviceType
            }
          }
        }`,
    }),
  };

  try {
    const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    cachedServices = json.data; // Mise en cache des données
    return cachedServices;
  } catch (error) {
    console.error('There was a problem fetching the services:', error);
  }
}

export { fetchServices };
