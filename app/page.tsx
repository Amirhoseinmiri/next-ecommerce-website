import createPost from "@/server/actions/create-post";
import getPosts from "@/server/actions/get-posts";
import Image from "next/image";

export default async function Home() {
  const { success } = await getPosts();
  console.log(success);
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center">
      {success?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}

      <form action={createPost}>
        <input type="text" name="title" className="border border-black" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
