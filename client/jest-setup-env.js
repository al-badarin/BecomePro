global.importMetaEnv = {
  VITE_API_URL: 'http://localhost:5000',
};

Object.defineProperty(import.meta, 'env', {
  value: global.importMetaEnv,
});
