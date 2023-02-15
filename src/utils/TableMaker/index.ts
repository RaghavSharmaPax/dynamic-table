type DataObject = { [key: string]: any };

type Param = { attr: string; title: string };

// filtering for the named properties only
const filterProduct = (product: DataObject, keys: Param[]) => {
  const filtered_product: DataObject = {};
  keys.forEach(({ attr, title }) => {
    if (Object.hasOwn(product, attr)) {
      filtered_product[attr] = product[attr];
    }
  });
  return { ...filtered_product };
};

const createString = (obj: any) => {
  if (typeof obj !== "object") {
    return obj;
  }
  return Object.entries(obj).map((item) => {
    if (typeof item[1] == "object") {
      item[1] = createString(item[1]);
    }
    return item;
  });
};

export type { DataObject, Param };
export { filterProduct, createString };
