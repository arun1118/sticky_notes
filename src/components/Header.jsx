import React from "react";
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';

function Header() {
  return (
    <header>
      <div class="app-title">
      <h1>Sticky Notes</h1>
      <TextSnippetRoundedIcon className="app-icon"/>
      </div>
    </header>
  );
}

export default Header;
