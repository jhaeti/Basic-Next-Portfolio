import Layout from "../components/Layout";
import Link from "next/link";

const Post = ({ title, slug }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => {
  return (
    <Layout title="Blogs">
      <ul>
        <Post slug="react-post" title="React Post" />
        <Post slug="angular-post" title="Angular Post" />
        <Post slug="vue-post" title="Vue Post" />
      </ul>
    </Layout>
  );
};
