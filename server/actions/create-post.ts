"use server";

import { db } from "@/server";
import { posts } from "../schema";
import { revalidatePath } from "next/cache";
export default async function createPost(formData: FormData) {
  const title = formData.get("title")?.toString();
  if (!title) {
    return { error: "title is not define" };
  }
  revalidatePath("/");
  const data = await db.insert(posts).values({
    title,
  });
  return { success: "post created" };
}
