const handleErrors = response => {
  if (!response.ok) {
    console.log(response.statusText)
    throw Error(response.statusText);
  }
  return response;
}

export {
  handleErrors
};
