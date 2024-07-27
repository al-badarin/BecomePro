import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/likes';

export const like = async (articleId) => {
  return request.post(baseUrl, { articleId });
};

export const unlike = async (likeId) => {
  return request.remove(`${baseUrl}/${likeId}`);
};

export const getLikes = async (articleId) => {
  return request.get(`${baseUrl}?where=articleId%3D"${articleId}"&count`);
};

export const userHasLiked = async (articleId, userId) => {
  return request.get(
    `${baseUrl}?where=articleId%3D"${articleId}"%20and%20_ownerId%3D"${userId}"`
  );
};
