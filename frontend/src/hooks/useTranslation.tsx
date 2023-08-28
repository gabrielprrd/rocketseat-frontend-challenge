// Very simple implementation to match wireframes. No need for global context or external library
export default function useTranslation() {
  function t(text: string) {
    switch (text) {
      case "mugs":
        return "canecas";
      case "t-shirts":
        return "camisetas";
      default:
        return text;
    }
  }

  return { t };
}
