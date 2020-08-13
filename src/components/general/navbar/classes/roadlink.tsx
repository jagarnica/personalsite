/**
 * A roadlink is just a custom class used for the links in the navbar. Each one must
 * have a name attached and also a color that is used to signify it is active.
 *
 * @param {string} name This is the name displayed as the name of the link.
 * @param {string} activeColor This is the color used to signify that the nav item is currently being displayed.
 * @param {string} altPathName If the path name should be different from just using the name provided, this can be used.
 * @function getPathName Returns the path name for the link as a string.
 *
 */
class RoadLink {
  name: string;
  activeColor: string;
  altPathName: string;
  partiallyActive: boolean;
  constructor(
    name: string,
    activeColor: string,
    altPathName?: string,
    partiallyActive?: boolean
  ) {
    this.name = name;
    this.activeColor = activeColor;
    this.altPathName = altPathName ? altPathName : name;
    this.partiallyActive = partiallyActive || false;
  }

  getPathName(): string {
    return this.altPathName.toLocaleLowerCase();
  }
}
export default RoadLink;
