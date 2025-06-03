import React from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Question = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [question, setQuestion] = useState("");
    const [error, setError] = useState("");
    
    const handleSubmit= () => {
        if (!firstName || !lastName || !question) {
            setError ("Palun täida kõik väljad.")
            return
        }
        setError("")
        navigate("/vote-room")
    }

        return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className='container max-w-md bg-white shadow-md rounded-md p-6'>
                <h1 className="text-2xl font-bold text-teal-800 mb-8 text-center">
                    Loo oma hääletusruum
                </h1>
                <p className="text-xl text-gray-800 text-center mb-8">
                    Kirjuta oma küsimus ja loo hääletusruum, mis kestab 5 min ja annab pääsme 11-le hääletajale.<br></br> Selleks, et saaksid näha logi,
                    kirjuta oma nimi, et hiljem saada ligipääs oma hääletusruumile.
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4">
                        <label className="block text-teal-800 font-semibold mb-1" htmlFor="firstName">
                            Eesnimi
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded mb-5"
                            placeholder="Sisesta eesnimi"
                            value={firstName}
                            onChange={(e)=> setFirstName(e.target.value)}
                        />
                        <label className="block text-teal-800 font-semibold mb-1" htmlFor="lastName">
                            Perenimi
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded mb-5"
                            placeholder="Sisesta perenimi"
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                        />
                        <label className="block text-teal-800 font-semibold mb-1" htmlFor="question">
                            Küsimus
                        </label>
                        <textarea
                            id="question"
                            name="question"
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded resize-none"
                            placeholder="Sisesta küsimus"
                            value={question}
                            onChange={(e)=> setQuestion(e.target.value)}
                        />
                    </div>
                    {error && (
                        <p className="text-red-600 text-sm mb-4 text-center">
                            {error}
                        </p>
                    )}
                    <button type="button"
                        onClick={handleSubmit}
                        className='mb-6 w-full bg-teal-500 border border-green-800 px-4 py-2 text-white text-xl py-3 rounded hover:bg-blue-700 transition'> 
                        Loo hääletusruum
                    </button>
                </form>
            </div>        
        </div>
    )
}

export default Question;
