import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Log = () => {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/logs")
      .then((res) => res.json())
      .then((data) => setLogs(data))
      .catch((err) => console.error("Failed to fetch logs:", err));
  }, []);

  const goToAdmin = () => navigate("/admin");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between">
      {/* Top button */}
      <div className="p-4 flex justify-center">
        <button
          onClick={goToAdmin}
          className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tagasi Admin lehele
        </button>
      </div>

      {/* Main content */}
      <div className="flex-grow p-4">
        <div className="max-w-4xl mx-auto bg-white text-black p-6 rounded shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Logid</h1>
          {logs.length === 0 ? (
            <p>Logikirjeid ei leitud.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Logi ID</th>
                  <th className="border px-4 py-2">Hääletaja ID</th>
                  <th className="border px-4 py-2">Vana Väärtus</th>
                  <th className="border px-4 py-2">Uus Väärtus</th>
                  <th className="border px-4 py-2">Muutmise Aeg</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.log_id}>
                    <td className="border px-4 py-2">{log.log_id}</td>
                    <td className="border px-4 py-2">{log.voter_id}</td>
                    <td className="border px-4 py-2">{log.old_value}</td>
                    <td className="border px-4 py-2">{log.new_value}</td>
                    <td className="border px-4 py-2">
                      {new Date(log.change_time).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Bottom button pinned to bottom */}
      <div className="p-4 flex justify-center">
        <button
          onClick={goToAdmin}
          className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tagasi Admin lehele
        </button>
      </div>
    </div>
  );
};

export default Log;