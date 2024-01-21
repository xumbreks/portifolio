import { ArrowFatLinesUp } from "@phosphor-icons/react";

export function ButtonHome() {
  return (
    <button
      id="home"
      type="button"
      className="fixed bottom-3 right-3 border border-color-600 rounded-full p-1
    md:hidden"
    >
      <a href="#home">
        <ArrowFatLinesUp size={35} />
      </a>
    </button>
  );
}
