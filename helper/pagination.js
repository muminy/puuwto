const perPage = process.env.PER_PAGE_BLOG;

export const pageCounter = (list) => {
  const count = list.length;
  let pageList = [];
  for (
    let index = 1;
    index <= Math.round(count / perPage);
    index++
  ) {
    pageList.push(index);
  }
  return pageList;
};

export function pageData(page, data) {
  return data.slice(
    (page - 1) * perPage,
    (page - 1) * perPage + perPage > data.length
      ? data.length
      : (page - 1) * perPage + perPage,
  );
}
