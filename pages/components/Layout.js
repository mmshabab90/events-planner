import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
        <link rel="icon" href="/img/LogoIcon.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=KoHo&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar */}
      <Header />

      {/* Show the banner only on the homepage */}
      {router.pathname === "/" && <Showcase />}

      <Container fluid>{children}</Container>

      {/* Footer */}
      <Footer />

      {/* Applying google fonts globally */}
      <style jsx global>
        {`
          body {
            font-family: KoHo, sans-serif;
            font-size: 20px;
          }

          a {
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}

Layout.defaultProps = {
  title: "Events Planner | Find the hottest events",
  description: "An event organizer platform",
  keywords: "events, activities, ntnui",
};
