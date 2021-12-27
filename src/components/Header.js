const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="button"
        onClick={() =>
          handleToggleDarkMode(
            (previousDarkMode) => (previousDarkMode = !previousDarkMode)
          )
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
