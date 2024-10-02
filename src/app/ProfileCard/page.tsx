'use client'
import React, { useState } from 'react';


interface UserProfile {
  name: string;
  age: number;
  email: string;
  profilePicture: string;
}

export default function ProfileCard() {
  
  const initialUser: UserProfile = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    profilePicture: "https://img.freepik.com/vecteurs-libre/jeune-homme-souriant-aux-lunettes_1308-174373.jpg?size=626&ext=jpg&ga=GA1.1.638026311.1721296084&semt=ais_hybrid", 
  }; 

 
  const [user, setUser] = useState<UserProfile>(initialUser);
  const [newName, setNewName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  
  const handleNameChange = () => {
    if (newName.trim() === "") {
      setError("Veuillez entrer un nom."); 
    } else {
      setUser({ ...user, name: newName });
      setNewName(""); 
      setError(null); 
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
    if (e.target.value.trim() !== "") {
      setError(null); 
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8">
      <div className="flex items-center justify-center">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
        />
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>

        <div className="mt-4 flex justify-center items-center space-x-2">
          <input
            type="text"
            value={newName}
            onChange={handleInputChange} 
            placeholder="Entrez un nouveau nom"
            className="border rounded-md px-3 py-2 w-2/3 text-gray-800 bg-white placeholder-gray-500"
          />
           {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleNameChange}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Modifier
          </button>
          </div>
          
        <p className="text-gray-600 text-lg">Âge : {user.age}</p>
        <p className="text-gray-600 text-lg">Email : {user.email}</p>
      
        
        </div>
      </div>
    
  );
}
