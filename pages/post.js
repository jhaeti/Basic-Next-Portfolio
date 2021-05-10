import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
        consequatur aliquam eius illo architecto perferendis numquam, quos
        deserunt debitis, distinctio, esse vitae fuga culpa. Corporis vel fuga
        delectus qui numquam.
      </p>
    </Layout>
  );
};

export default withRouter(Post);
