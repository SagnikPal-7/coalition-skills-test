function PatientSidebar({
  patients,
  selectedName,
}) {
  return (
    <aside className="panel patients-panel">
      <div className="patients-header">
        <h2>Patients</h2>

        <span
          className="search-icon"
          aria-label="Search"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="6.5"
            />
            <path d="m15.5 15.5 5 5" />
          </svg>
        </span>
      </div>

      <div className="patients-list">
        {patients.map((patient, index) => {
          const selected =
            patient.name === selectedName;

          return (
            <article
              className={`patient-row ${
                selected ? "selected" : ""
              }`}
              key={`${patient.name}-${index}`}
            >
              <img
                className="patient-avatar"
                src={patient.profile_picture}
                alt={`${patient.name} profile`}
              />

              <div className="patient-summary">
                <h3>{patient.name}</h3>

                <p>
                  {patient.gender || "Unknown"}
                  {patient.age !== undefined &&
                    `, ${patient.age}`}
                </p>
              </div>

              <span
                className="patient-options"
                aria-hidden="true"
              >
                <i />
                <i />
                <i />
              </span>
            </article>
          );
        })}
      </div>
    </aside>
  );
}

export default PatientSidebar;