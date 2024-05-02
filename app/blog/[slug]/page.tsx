import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { Heading1 } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30; //revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
        "currentSlug" : slug.current,
          title,
          content,
          titleImage,
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="mt-8 grid place-items-center h-screen">
      <h1>
        <span className="block text-base text-center text-primary font-semibold">
          ViperShop - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <div className="flex justify-center items-center">
        <Image
          src={urlFor(data.titleImage).url()}
          width={800}
          height={800}
          alt="Title Image"
          priority
          className=" rounded-lg mt-8 border items-center"
        />
      </div>
      <div className="mt-16  justify-center prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <PortableText 
          value={{
            _type: "block",
            children: data.content,
          }} />
        </div>
    </div>
  );
}
