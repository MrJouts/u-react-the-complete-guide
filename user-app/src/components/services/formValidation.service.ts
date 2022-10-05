export const validateInput = (input, data) => {
  switch (input) {
    case "name":
      if (data.trim().length === 0) {
        return "Name cannot be empty";
      }
  }
};
