import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

function homePage(props) {
  return (
    <Fragment>
      <Head>
        <title>YIRCHIUKHNIL</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  //console.log(featuredPosts);
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
export default homePage;
