import * as React from "react";
import { PageLabel } from "components/general/pagelabel/";
import { SEO } from "../components/seo/";
import { HeroButton } from "components/general/buttons/";
import { COLORS } from "styles/styles";
const NotFoundPage = (): React.ReactNode => (
  <>
    <SEO title="404: Not found" description="Page not found." />
    <PageLabel margin="0px 0px 20px 0px" accentColor="#000">
      Not Found
    </PageLabel>

    <p>Sorry that page does not exist!</p>
    <HeroButton
      isLink
      to="/"
      accentColor={COLORS.sevenBlack}
      mainColor={COLORS.sevenBlack}
    >
      Go Home
    </HeroButton>
  </>
);

export default NotFoundPage;
