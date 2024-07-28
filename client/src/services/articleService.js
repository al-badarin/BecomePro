import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/articles';

export const getAll = async () => {
  try {
    const result = await request.get(`${baseUrl}?sortBy=_createdOn desc`);

    return result;
  } catch (error) {
    console.error('Failed to fetch articles:', error);

    return [];
  }
};

export const getOne = async (articleId) => {
  const result = await request.get(`${baseUrl}/${articleId}`);

  return result;
};

export const getLatest = async (limit = 9) => {
  return request.get(`${baseUrl}?sortBy=_createdOn desc&pageSize=${limit}`);
};

export const create = async (articleData) => {
  const result = await request.post(baseUrl, articleData);

  return result;
};

export const edit = async (articleId, articleData) => {
  const result = await request.put(`${baseUrl}/${articleId}`, articleData);

  return result;
};

export const remove = async (articleId) =>
  request.remove(`${baseUrl}/${articleId}`);
