import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import SearchNotes from "./components/SearchNotes";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "“Life is like riding a bicycle. To keep your balance you must keep moving.” \n —Albert Einstein",
      date: "20/08/2021",
    },
    {
      id: nanoid(),
      text: "“Be sure you put your feet in the right place, then stand firm.” \n ―Abraham Lincoln",
      date: "15/04/2020",
    },
    {
      id: nanoid(),
      text: "“A year from now you will wish you had started today.” \n —Unknown",
      date: "10/02/2019",
    },
    {
      id: nanoid(),
      text: "“Some people want it to happen, some wish it would happen, others make it happen.” \n —Michael Jordan",
      date: "05/01/2018",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNode = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <SearchNotes handleSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNode={deleteNode}
        />
      </div>
    </div>
  );
};

export default App;
