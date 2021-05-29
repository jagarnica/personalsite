import { getMonth } from "./";
/**
 * @name formatPostDate
 * @description Checks to see if a valid date is there, otherwise it will automatically
 * generate one.
 * @param postDate
 * @returns string | null
 */
export function formatPostDate(postDate?: string | null): string {
  let dateString = ``;
  if (!postDate) {
    const tempDate = new Date();
    const day = tempDate.getDate();
    const month = getMonth(tempDate.getMonth());
    const year = tempDate.getFullYear();
    dateString = `${month} ${day}, ${year}`;
    console.error("Date Auto Generated", tempDate.toJSON());
    if (process.env.NODE_ENV !== "development") {
      throw new Error(
        "A date had to be autogenerated, this indicates a bug somewhere."
      );
    }
  } else {
    dateString = postDate;
  }
  return dateString;
}