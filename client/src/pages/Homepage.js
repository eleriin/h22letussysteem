import React, { useEffect, useState } from "react";
import { useQuestion } from "../context/QuestionContext";
import { useActive } from "../context/ActiveContext";

const Homepage = () => {
  const { question } = useQuestion();
  const { isActive } = useActive();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/results");
        if (!response.ok) {
          throw new Error("Failed to fetch results");
        }
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold mb-4">
        {isActive ? "Hääletus käib" : "Hääletus on lõppenud"}
      </h1>

      <div className="bg-white text-gray-800 rounded shadow-md p-4 w-full max-w-xl text-center mb-6">
        <h2 className="text-xl font-semibold mb-2">Küsimus</h2>
        <p>{question || "Küsimus puudub."}</p>
      </div>

      {loading ? (
        <p>Laen tulemusi...</p>
      ) : results ? (
        <div className="bg-white text-gray-800 rounded shadow-md p-4 w-full max-w-xl">
          <h2 className="text-xl font-semibold mb-2">Tulemused</h2>
          <p><strong>Hääletanute arv:</strong> {results.haaletanute_arv}</p>
          <p><strong>Hääletuse alguse aeg:</strong> {results.h_alguse_aeg}</p>
          <p><strong>Poolt hääli:</strong> {results.poolt_haali}</p>
          <p><strong>Vastu hääli:</strong> {results.vastu_haali}</p>
        </div>
      ) : (
        <p>Tulemused puuduvad.</p>
      )}
    </div>
  );
};

export default Homepage;