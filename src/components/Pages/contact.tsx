import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "@formspree/react";

export function Contact() {
  return (
    <section
      id="contact"
      className=" relative w-full h-dvh flex flex-col items-center justify-center gap-10"
    >
      <h1 className="text-6xl font-bold">Contato</h1>

      <form className="space-y-2">
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Nome "
          required
          className="bg-transparent w-80"
        />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="bg-transparent w-80"
        />
        <Textarea
          id="message"
          name="message"
          required
          className="bg-transparent resize-none w-96"
        />
        <button
          type="button"
          className="border rounded px-3 py-2 bg-gray-800 hover:bg-gray-900 transition-colors"
        >
          Enviar
        </button>
      </form>

      <span className="text-color-700 font-medium text-sm flex absolute bottom-2 left-1/2  -translate-x-1/2">
        Feito com ❤️ por Brian
      </span>
    </section>
  );
}
