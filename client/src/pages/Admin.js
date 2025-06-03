import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/question", {
        method: "POST", // or PUT, depending on your server setup
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to update question");
      }

      console.log("Küsimus salvestatud:", input);
      // Optional: Add a success message here
    } catch (error) {
      console.error("Error saving question:", error);
      // Optional: Display error to user
    }
  };

  const goToLog = () => {
    navigate("/log");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      {/* Main Card */}
      <div className="container max-w-md bg-white shadow-md rounded-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-teal-800 mb-8 text-center">
          Sisesta hääletusele pandav küsimus
        </h1>
        <p className="text-xl text-gray-800 text-center mb-8">
          Peale vajutust nupule Alusta hääletamisega kuvatakse esilehel küsimus ja käivitub 
          5 minutit vastamiseks.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-teal-800 font-semibold mb-1" htmlFor="question">
              Küsimus
            </label>
            <textarea
              id="question"
              name="question"
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded resize-none"
              placeholder="Sisesta küsimus"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-teal-500 border border-green-800 px-4 py-2 text-white text-xl rounded hover:bg-blue-700 transition"
          >
            Alusta hääletamisega
          </button>
        </form>
      </div>

      {/* Narrow "Vaata logi" Button */}
      <button
        onClick={goToLog}
        className="mt-4 bg-teal-500 border border-green-800 px-4 py-2 text-white text-xl rounded hover:bg-blue-700 transition"
      >
        Vaata logi
      </button>
    </div>
  );
};

export default Admin;