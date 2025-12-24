import Image from "next/image";
import Header from "./new-website/header/page";
import Footer from "./new-website/footer/page";
import NewWebsitePage from "./new-website/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        <NewWebsitePage />
      </main>
      <Footer />
    </div>
  );
}
