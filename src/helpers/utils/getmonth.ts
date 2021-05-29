interface IMonth {
  [key: number]: string | undefined;
}
/**
 * @name getMonth
 * @description Returns the month as a string. Return null if the index is invalid.
 * Starts counting at 0.
 * @param {number} monthNum
 * @return string | null
 */
export function getMonth(monthNum: number): string | null {
  const months: IMonth = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  return months[monthNum as keyof IMonth] || null;
}
