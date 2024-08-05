export const formatPhoneNumber = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{1})/, '+7')
    .replace(/(\d{1})(\d)/, '$1 $2')
    .replace(/(\d{3})(\d)/, '$1 $2')
    .replace(/(\d{3}\s\d{3})(\d{1,2})/, '$1 $2')
    .replace(/(\d{3}\s\d{3}\s\d{2})(\d{1,2})/, '$1 $2')
    .replace(/(\d{3}\s\d{3}\s\d{2}\s\d{2})\d+?$/, '$1');
};
