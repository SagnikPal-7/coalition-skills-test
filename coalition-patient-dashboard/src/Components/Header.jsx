const navItems = [
  {
    label: "Overview",
    icon: "home",
  },
  {
    label: "Patients",
    icon: "patients",
  },
  {
    label: "Schedule",
    icon: "calendar",
  },
  {
    label: "Message",
    icon: "message",
  },
  {
    label: "Transactions",
    icon: "card",
  },
];

function Icon({ name }) {
  if (name === "home") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10.5V20h13v-9.5" />
        <path d="M9.5 20v-6h5v6" />
      </svg>
    );
  }

  if (name === "patients") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.4-4 2.4-6 5.5-6s5.1 2 5.5 6" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M15.5 14c2.9 0 4.6 1.7 5 5" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="16"
          rx="2"
        />
        <path d="M7 3v4M17 3v4M3 10h18" />
      </svg>
    );
  }

  if (name === "message") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4 5h16v12H9l-5 4V5Z" />
      </svg>
    );
  }

  if (name === "card") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="13"
          rx="2"
        />
        <path d="M3 10h18M7 15h4" />
      </svg>
    );
  }

  return null;
}

function Header() {
  return (
    <header className="top-header">
      <div className="brand">
        <div className="brand-symbol">
          <span className="brand-horizontal" />
          <span className="brand-vertical" />
        </div>

        <span className="brand-name">
          Tech.<strong>Care</strong>
        </span>
      </div>

      <nav
        className="header-navigation"
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const active =
            item.label === "Patients";

          return (
            <div
              key={item.label}
              className={`nav-item ${
                active ? "active" : ""
              }`}
              aria-current={
                active ? "page" : undefined
              }
            >
              <span className="nav-icon">
                <Icon name={item.icon} />
              </span>

              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>

      <div className="doctor-area">
        <div className="doctor-avatar">
          JS
        </div>

        <div className="doctor-details">
          <strong>Dr. Jose Simmons</strong>
          <span>General Practitioner</span>
        </div>

        <div className="header-divider" />

        <span
          className="header-action-icon"
          aria-label="Settings"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19 13.5v-3l-2-.7a7 7 0 0 0-.7-1.7l.9-1.9-2.1-2.1-1.9.9a7 7 0 0 0-1.7-.7L10.5 2h-3l-.7 2.2a7 7 0 0 0-1.7.7l-1.9-.9-2.1 2.1.9 1.9a7 7 0 0 0-.7 1.7L1 10.5v3l2.2.7c.2.6.4 1.2.7 1.7l-.9 1.9 2.1 2.1 1.9-.9c.5.3 1.1.5 1.7.7l.8 2.3h3l.7-2.2c.6-.2 1.2-.4 1.7-.7l1.9.9 2.1-2.1-.9-1.9c.3-.5.5-1.1.7-1.7L19 13.5Z" />
          </svg>
        </span>

        <span
          className="more-icon"
          aria-label="More options"
        >
          <span />
          <span />
          <span />
        </span>
      </div>
    </header>
  );
}

export default Header;