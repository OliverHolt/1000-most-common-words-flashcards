"use client";

import React, { useState, useEffect } from 'react';
import Flashcard from "@/components/Flashcard";
import ENGLISH_RUSSIAN from '@/app/data/english-russian';
import RUSSIAN_ENGLISH from '@/app/data/russian-english';
import ENGLISH_SPANISH from '@/app/data/english-spanish';
import SPANISH_ENGLISH from '@/app/data/spanish-english';
import ENGLISH_FRENCH from '@/app/data/english-french';
import FRENCH_ENGLISH from '@/app/data/french-english';
import ENGLISH_ITALIAN from '@/app/data/english-italian';
import ITALIAN_ENGLISH from '@/app/data/italian-english';
import ENGLISH_HINDI from '@/app/data/english-hindi';
import HINDI_ENGLISH from '@/app/data/hindi-english';
import ENGLISH_GERMAN from '@/app/data/english-german';
import GERMAN_ENGLISH from '@/app/data/german-english';

const FlashcardList = ({ flashcardCount, languages, setLanguages, setFlashcardCount, setIsOptionsVisible }) => {
  const [selectedFlashcards, setSelectedFlashcards] = useState([]);

  const goBackHome = () => {
    setIsOptionsVisible(true); 
    setFlashcardCount(5); 
    setLanguages('ENGLISH_SPANISH');
  };

  //Function to select the correct language
  const languageData = {
    ENGLISH_RUSSIAN: ENGLISH_RUSSIAN,
    RUSSIAN_ENGLISH: RUSSIAN_ENGLISH,
    SPANISH_ENGLISH: SPANISH_ENGLISH,
    ENGLISH_SPANISH: ENGLISH_SPANISH,
    FRENCH_ENGLISH: FRENCH_ENGLISH,
    ENGLISH_FRENCH: ENGLISH_FRENCH,
    ENGLISH_ITALIAN: ENGLISH_ITALIAN,
    ITALIAN_ENGLISH: ITALIAN_ENGLISH,
    ENGLISH_HINDI: ENGLISH_HINDI,
    HINDI_ENGLISH: HINDI_ENGLISH,
    ENGLISH_GERMAN: ENGLISH_GERMAN,
    GERMAN_ENGLISH: GERMAN_ENGLISH,
    // Add new language options here as they become available
  };

  // Function to select and set a random subset of flashcards
  const getRandomFlashcards = () => {
    const selectRandomFlashcards = (array, num) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    const randomFlashcards = selectRandomFlashcards(languageData[languages], flashcardCount);
    setSelectedFlashcards(randomFlashcards);
  };

  useEffect(() => {
    getRandomFlashcards();
  }, [flashcardCount]);

  return (
    <>
      <div className='flex items-center gap-4 flex-wrap justify-center'>
          {selectedFlashcards.map(flashcard => {
              return <Flashcard flashcard={flashcard} key={flashcard.id} />
          })}
      </div>
      <div className='flex items-center gap-4 '>
        <button 
          className='mt-4 p-2 bg-blue-500 text-white rounded' 
          onClick={getRandomFlashcards}
        >
          Generate New Flashcards
        </button>
        <button 
          className='mt-4 p-2 bg-blue-500 text-white rounded' 
          onClick={goBackHome}
        >
          Go back to the Homepage
        </button>
      </div>
    </>
  );
}

export default FlashcardList;
