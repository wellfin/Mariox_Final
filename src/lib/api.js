export async function fetchServicePageDetails(slug) {
    const res = await fetch(`${process.env.API_URL}/pages/service/${slug}`);
    const data = await res.json();
    return data;
}

export async function fetchServiceCitySlugList(service) {
    const res = await fetch(`${process.env.API_URL}/pages/service-city-slugs?service=${service}`);
    const data = await res.json();
    return data;
}

export async function fetchServiceCityPageDetails(slug) {
    const res = await fetch(`${process.env.API_URL}/pages/service-city-details?slug=${slug}`);
    const data = await res.json();
    return data;
}
