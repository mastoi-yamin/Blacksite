import { appConfig } from "@/config/app";

export default function HomePage() {
  return (
    <main>
      <h1>{appConfig.name}</h1>
      <p>{appConfig.description}</p>
    </main>
  );
}