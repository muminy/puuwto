import { getPosts } from "../constant/getPosts";

export function pageFill(count) {
  const arr = Array(Math.ceil(count / process.env.PER_PAGE))
    .fill()
    .map((_, i) => i + 1);
  if (arr.length > 1) arr.shift();
  return arr;
}

export function pageData(page, data) {
  return data.slice(
    (page - 1) * process.env.PER_PAGE,
    (page - 1) * process.env.PER_PAGE +
      process.env.PER_PAGE >
      getPosts().length
      ? getPosts().length
      : (page - 1) * process.env.PER_PAGE +
          process.env.PER_PAGE,
  );
}
