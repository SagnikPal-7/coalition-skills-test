function PatientProfile() {
  return (
    <div className="patient-profile">

      <img
        className="profile-image"
        src=""
        alt="Jessica Taylor"
      />

      <h2>Jessica Taylor</h2>

      <div className="profile-information">

        <div>
          <p>Date Of Birth</p>
          <strong>August 23, 1996</strong>
        </div>

        <div>
          <p>Gender</p>
          <strong>Female</strong>
        </div>

        <div>
          <p>Contact Info</p>
          <strong>...</strong>
        </div>

        <div>
          <p>Emergency Contacts</p>
          <strong>...</strong>
        </div>

        <div>
          <p>Insurance Provider</p>
          <strong>...</strong>
        </div>

      </div>

    </div>
  );
}

export default PatientProfile;