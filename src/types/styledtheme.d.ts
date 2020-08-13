// import original module declarations
import "styled-components";

// and extend original styles
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius?: string;

    colors: {
      borderColor: string;
      primaryFontColor: string;
      primaryColor: string;
      lightWhite: string;
      darkGrey: string;
      sevenBlack: string;
      aboutPageAccent: string;
      titleColor: string;
      homePageAccent: string;
      blogPageAccent: string;
      resumePageAccent: string;
      siteBackground: string;
      portfolioPageAccent: string;
    };
    fonts?: Array<string>;
    baseFontFamily: string;
  }
}
