/**
 * @name getMonth
 * @description Returns the month as a string. Return null if the index is invalid.
 * Starts counting at 0.
 * @param {number} monthNum
 * @return string | null
 */
export function getMonth(monthNum: number): string | null {
  switch (monthNum) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return null;
  }
}
