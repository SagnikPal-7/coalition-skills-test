function DiagnosticList({
  diagnostics,
}) {
  return (
    <section className="panel diagnostic-panel">
      <h2 className="section-title">
        Diagnostic List
      </h2>

      {!diagnostics.length ? (
        <p className="empty-state">
          No diagnostic records available.
        </p>
      ) : (
        <div className="diagnostic-table-wrapper">
          <table className="diagnostic-table">
            <thead>
              <tr>
                <th>Problem/Diagnosis</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {diagnostics.map(
                (diagnosis, index) => (
                  <tr
                    key={`${diagnosis.name}-${index}`}
                  >
                    <td>
                      {diagnosis.name ||
                        "—"}
                    </td>

                    <td>
                      {diagnosis.description ||
                        "—"}
                    </td>

                    <td>
                      {diagnosis.status ||
                        "—"}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default DiagnosticList;