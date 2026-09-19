function Header() {
  return (
    <header className="header">

      <div className="logo">
        Tech.Care
      </div>

      <nav className="navigation">
        <span>Overview</span>
        <span>Patients</span>
        <span>Schedule</span>
        <span>Message</span>
        <span>Transactions</span>
      </nav>

      <div className="doctor-profile">
        Doctor Profile
      </div>

    </header>
  );
}

export default Header;