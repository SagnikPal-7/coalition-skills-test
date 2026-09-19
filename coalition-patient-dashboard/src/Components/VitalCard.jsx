function VitalCard({ title, value, unit, status, icon }) {
  return (
    <div className="vital-card">

      <img src={icon} alt="" />

      <p>{title}</p>

      <h3>
        {value} {unit}
      </h3>

      <span>{status}</span>

    </div>
  );
}

export default VitalCard;