export default (value) => {
  if (!value) {
    return false;
  }

  if (!value < 8 || value > 20) {
    return false;
  }

  return true;
};
