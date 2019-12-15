const paginate = (items, page, pageSize) => {
  const begin = page * pageSize;
  const end = (page + 1) * pageSize;
  return items.slice(begin, end);
};

export default paginate;
