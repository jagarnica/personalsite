import * as React from "react";
import { Layout } from "../components/layout";
import { PageLabel } from "components/general/pagelabel/";
import { SEO } from "../components/seo/";
import { navigate } from "gatsby";
import { HeroButton } from "components/general/buttons/";
import { COLORS } from "styles/styles";
const NotFoundPage = (): React.ReactNode => (
  <Layout>
    <SEO title="404: Not found" description="Page not found." />
    <PageLabel margin="0px 0px 20px 0px" accentColor="#000">
      Not Found
    </PageLabel>

    <p>Sorry that page does not exist!</p>
    <HeroButton
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        navigate("/");
      }}
      accentColor={COLORS.sevenBlack}
      mainColor={COLORS.sevenBlack}
    >
      Go Home
    </HeroButton>
  </Layout>
);

export default NotFoundPage;
