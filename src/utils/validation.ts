export const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateFullname = (fullname: string) => {
  return fullname.length > 2;
};

export const validateSubject = (subject: string) => {
  return subject.length > 2;
};

export const validateMessage = (message: string) => {
  return message.length > 2;
};
