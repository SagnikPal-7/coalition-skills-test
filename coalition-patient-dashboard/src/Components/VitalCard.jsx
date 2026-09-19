function VitalIcon({ type }) {
  if (type === "temperature") {
    return (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <path d="M26 12a6 6 0 0 1 12 0v24.5a13 13 0 1 1-12 0V12Z" />
        <path d="M32 18v25" />
        <circle cx="32" cy="48" r="6" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <path d="M32 52 11 32C1 22 8 9 19 9c6 0 10 4 13 9 3-5 7-9 13-9 11 0 18 13 8 23L32 52Z" />
        <path d="M15 30h9l4-8 7 17 5-9h9" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <path d="M30 9v21" />
      <path d="M34 9v21" />
      <path d="M30 21c-8-7-15-4-18 4-3 9-2 23 4 28 5 4 13 1 14-7V21Z" />
      <path d="M34 21c8-7 15-4 18 4 3 9 2 23-4 28-5 4-13 1-14-7V21Z" />
    </svg>
  );
}

function VitalCard({
  type,
  title,
  value,
  unit,
  status,
}) {
  const normalizedStatus = (
    status || ""
  ).toLowerCase();

  let statusSymbol = "";

  if (
    normalizedStatus.includes("higher")
  ) {
    statusSymbol = "▲";
  } else if (
    normalizedStatus.includes("lower")
  ) {
    statusSymbol = "▼";
  }

  return (
    <article
      className={`vital-card ${type}`}
    >
      <div className="vital-icon">
        <VitalIcon type={type} />
      </div>

      <p className="vital-title">
        {title}
      </p>

      <div className="vital-value">
        {value ?? "—"}
        {value !== undefined &&
          value !== null && (
            <span>{unit}</span>
          )}
      </div>

      <p className="vital-status">
        {statusSymbol && (
          <span>{statusSymbol}</span>
        )}

        {status || "Normal"}
      </p>
    </article>
  );
}

export default VitalCard;