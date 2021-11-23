import { Form, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost } from "~/post";
import invariant from "tiny-invariant";

export let loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function Edit() {
  let post = useLoaderData();

  return (
    <Form method="post">
      <p>
        <label>
          Post Title:
          <input type="text" name="title" value={post.title} readOnly />
        </label>
      </p>
      <p>
        <label>
          Post Slug:
          <input type="text" name="slug" value={post.slug} readOnly />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label> <br />
        <textarea rows={20} name="markdown" value={post.html} readOnly />
      </p>
    </Form>
  );
}
