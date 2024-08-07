const buildOptions = (data) => {
  const options = {
    headers: {
      'content-type': 'application/json',
    },
  };

  const token = localStorage.getItem('accessToken');

  if (token) {
    options.headers = {
      ...options.headers,
      'X-Authorization': token,
    };
  } else {
    console.log('No token found');
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  return options;
};

const request = async (method, url, data) => {
  try {
    const response = await fetch(url, {
      ...buildOptions(data),
      method,
    });

    if (response.status === 204) {
      return {};
    }

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }

    return result;
  } catch (error) {
    console.error('HTTP Request Failed:', error);
    throw error;
  }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');
