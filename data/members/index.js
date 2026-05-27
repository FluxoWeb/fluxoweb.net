export const memberSlugs = [
  "oscar-ramirez",
  "alberto-servin",
  "wildo-valenzuela",
  "armando-diarte",
];

export function getMember(slug) {
  return require(`./${slug}`).default;
}
