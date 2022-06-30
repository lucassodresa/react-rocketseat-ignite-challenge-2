import { useState } from "react";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div className="wrapper">
      <SideBar
        setSelectedGenreId={setSelectedGenreId}
        selectedGenreId={selectedGenreId}
      />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
