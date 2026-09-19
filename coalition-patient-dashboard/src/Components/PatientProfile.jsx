function formatDate(value) {
  if (!value) {
    return "—";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  ).format(date);
}

function InformationIcon({ type }) {
  if (type === "calendar") {
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

  if (type === "gender") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          cx="10"
          cy="9"
          r="5"
        />
        <path d="M10 14v7M6.5 18h7" />
      </svg>
    );
  }

  if (
    type === "phone" ||
    type === "emergency"
  ) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M6.5 3h3l1.4 5-2.2 1.7c1.2 2.5 3.2 4.5 5.7 5.7l1.7-2.2 5 1.4v3c0 1.7-1.3 3-3 3C9.8 20.6 3.4 14.2 3.4 6A3 3 0 0 1 6.5 3Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />
      <path d="M7 9h10M7 13h5M7 16h8" />
    </svg>
  );
}

function ProfileInformation({
  type,
  label,
  value,
}) {
  return (
    <div className="profile-information-row">
      <div className="profile-info-icon">
        <InformationIcon type={type} />
      </div>

      <div className="profile-info-text">
        <span>{label}</span>
        <strong>{value || "—"}</strong>
      </div>
    </div>
  );
}

function PatientProfile({ patient }) {
  return (
    <section className="panel profile-panel">
      <img
        className="profile-picture"
        src={patient.profile_picture}
        alt={`${patient.name} profile`}
      />

      <h1 className="profile-name">
        {patient.name}
      </h1>

      <div className="profile-information-list">
        <ProfileInformation
          type="calendar"
          label="Date Of Birth"
          value={formatDate(
            patient.date_of_birth
          )}
        />

        <ProfileInformation
          type="gender"
          label="Gender"
          value={patient.gender}
        />

        <ProfileInformation
          type="phone"
          label="Contact Info."
          value={patient.phone_number}
        />

        <ProfileInformation
          type="emergency"
          label="Emergency Contacts"
          value={patient.emergency_contact}
        />

        <ProfileInformation
          type="insurance"
          label="Insurance Provider"
          value={patient.insurance_type}
        />
      </div>

      <button
        type="button"
        className="profile-button"
      >
        Show All Information
      </button>
    </section>
  );
}

export default PatientProfile;