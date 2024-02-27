export const dateFormat = (date: Date | string): string => {
  let d: Date;

  if (typeof date === "string") {
    d = new Date(date);
  } else {
    d = date;
  }

  const day: string = ("0" + d.getDate()).slice(-2);
  const month: string = ("0" + (d.getMonth() + 1)).slice(-2);
  const year: number = d.getFullYear();
  const hours: string = ("0" + d.getHours()).slice(-2);
  const minutes: string = ("0" + d.getMinutes()).slice(-2);
  const seconds: string = ("0" + d.getSeconds()).slice(-2);

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};
