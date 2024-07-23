import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/articles';

export const getAll = async () => {
  try {
    const result = await request.get(baseUrl);

    return result;
  } catch (error) {
    console.error('Failed to fetch articles:', error);

    return [];
  }
};

export const create = async (articleData) => {
  const result = await request.post(baseUrl, articleData);

  return result;
};
