function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

function LabResults({ results }) {
  return (
    <section className="panel lab-panel">
      <h2 className="section-title">
        Lab Results
      </h2>

      {!results.length ? (
        <p className="empty-state">
          No lab results available.
        </p>
      ) : (
        <div className="lab-results-list">
          {results.map(
            (result, index) => (
              <div
                className="lab-result-row"
                key={`${result}-${index}`}
              >
                <span>{result}</span>

                <span
                  className="download-icon"
                  aria-hidden="true"
                >
                  <DownloadIcon />
                </span>
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
}

export default LabResults;