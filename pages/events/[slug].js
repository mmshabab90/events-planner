import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Layout from "../components/Layout";

function EventPage() {
  const router = useRouter();

  const pageId = router.query.slug;

  return (
    <Layout title={`Event-${pageId}`}>
      My Event
      <Button onClick={() => router.push("/")}>Home</Button>
    </Layout>
  );
}

export default EventPage;
