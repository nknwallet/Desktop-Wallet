export default (value) => {
  if (!value) {
    return false;
  }

  if (value.length < 8 || value.length > 20) {
    return false;
  }

  return true;
};
