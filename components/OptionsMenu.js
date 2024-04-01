"use client";

import React, { useState } from 'react';

export default function OptionsMenu({ setFlashcardCount, setLanguages, setIsOptionsVisible }){

  const flashcardCountHandleChange = (event) => {
    setFlashcardCount(Number(event.target.value));
  };
  const languageHandleChange = (event) => {
    setLanguages(event.target.value);
  };
  const handleGenerateClick = () => {
    setIsOptionsVisible(false); 
  };

  return (
    <>
    <div className="options-container my-4">
      <label htmlFor="flashcard-count-2" className="block mb-2 text-sm font-medium">Language:</label>
      <select id="flashcard-count-2" name="flashcard-count" onChange={languageHandleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option value="ENGLISH_SPANISH">English to Spanish</option>
        <option value="SPANISH_ENGLISH">Spanish to English</option>
        <option value="" disabled></option>
        <option value="ENGLISH_FRENCH">English to French</option>
        <option value="FRENCH_ENGLISH">French to English</option>
        <option value="" disabled></option>
        <option value="ENGLISH_ITALIAN">English to Italian</option>
        <option value="ITALIAN_ENGLISH">Italian to English</option>
        <option value="" disabled></option>
        <option value="ENGLISH_HINDI">English to Hindi</option>
        <option value="HINDI_ENGLISH">Hindi to English</option>
        <option value="" disabled></option>
        <option value="ENGLISH_GERMAN">English to German</option>
        <option value="GERMAN_ENGLISH">German to English</option>
        <option value="" disabled></option>
        <option value="ENGLISH_RUSSIAN">English to Russian</option>
        <option value="RUSSIAN_ENGLISH">Russian to English</option>

      </select>
    </div>
    <div className="options-container my-4">
      <label htmlFor="flashcard-count-1" className="block mb-2 text-sm font-medium">Number of Flashcards:</label>
      <select id="flashcard-count-1" name="flashcard-count" onChange={flashcardCountHandleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
    <button className='mt-4 p-2 bg-blue-500 text-white rounded' onClick={handleGenerateClick}>
        Generate Flashcards
    </button>
    </>
  );
}