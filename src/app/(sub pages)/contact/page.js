import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          Welcome to the Realm of SupernaturalScripts 🎃🪄
          </h1>
          <p className="text-center font-light text-sm xs:text-base" style={{color: "#f57c00"}}>
          Step into the enchanted circle of creation, where your words become spells that shape the universe. Whether you&apos;re seeking collaboration, unraveling mysteries, or sharing your unique journey, your messages are precious artifacts in this magical realm. Use the form below to send your thoughts through the cosmic web, and listen for the echoes of magic that will guide you back.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
