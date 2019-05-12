export default (hash, count = 4) => `${hash.slice(0, count)}....${hash.slice(-count)}`;
