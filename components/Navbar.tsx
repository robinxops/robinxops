const Navbar = () => {
  return (
    <nav className="absolute top-5 flex w-full justify-center">
      <ul className="flex justify-center gap-3 rounded-full bg-amber-200 px-5 py-2 text-amber-400">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
