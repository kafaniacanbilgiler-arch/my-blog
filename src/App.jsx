// File: src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
