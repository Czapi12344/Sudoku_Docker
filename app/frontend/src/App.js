import React from "react";
import Game from "./components/Game.tsx";


function App({ initialBoard }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="text-3xl font-bold mb-8">Sudoku Solver</header>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {/* Render the Game component here */}
          <Game />
        </div>
        <div>
          {/* Panel boczny */}
          <div className="bg-white border border-gray-300 rounded-md p-4 shadow-md">
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Rozwiąż Sudoku
              </button>
            </div>
            {/* Dodaj więcej elementów panelu bocznego */}
          </div>
        </div>
      </div>
      <footer className="mt-8 text-sm text-gray-600">
        {/* Stopka */}© 2024 Sudoku Solver. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}

export default App;
