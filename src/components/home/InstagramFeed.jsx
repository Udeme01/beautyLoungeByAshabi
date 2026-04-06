import { BsInstagram } from "react-icons/bs";
import { posts } from "@/data/home";
import Image from "next/image";
import Link from "next/link";

export default function InstagramFeed() {
  return (
    <section className="py-20 px-5 w-full">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-widest uppercase mb-2">
            Stay Connected
          </p>
          <Link
            href="https://instagram.com/beautyloungebyashabi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-3xl text-black font-light hover:text-gold transition-colors duration-200 inline-flex items-center gap-3"
          >
            <BsInstagram size={28} color="#E1306C" />
            @beautyloungebyashabi
          </Link>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5">
          {posts.map(({ id, image, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden block"
            >
              <Image
                src={image}
                alt={`Instagram post ${id}`}
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <BsInstagram
                  size={20}
                  color="white"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/beautyloungebyashabi"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/30 text-black/50 text-xs tracking-widest uppercase px-8 py-3 hover:border-gold hover:text-gold transition-colors duration-200 inline-block"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
