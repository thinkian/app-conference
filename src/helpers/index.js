import Airtable from 'airtable';

export const getBase = baseName => {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const base = new Airtable({ apiKey }).base(baseId);

  return baseName ? base(baseName) : base;
};

export const getFields = data => {
  if (data && data.length) {
    return data.map(item => {
      return Object.keys(item.fields).reduce((acc, key) => {
        const newKey = key.charAt(0).toLowerCase() + key.slice(1);

        acc[newKey] = item.fields[key];

        return acc;
      }, {});
    });
  }

  return [];
};
