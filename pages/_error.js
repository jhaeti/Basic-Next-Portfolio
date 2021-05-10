import Layout from "../components/Layout";

export default ({ statusCode }) => {
  return (
    <Layout title="Error!!!">
      <p>
        {statusCode
          ? `Could not get User. Status Code: ${statusCode}`
          : "Couldn't find page"}
      </p>
    </Layout>
  );
};
