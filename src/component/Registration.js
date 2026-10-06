function Registration({ form }) {
  return (
    <div className="card p-4">
      <h2 className="mb-4">Registration Summary</h2>
      <p>
        <strong>Name:</strong> {form.name}
      </p>
      <p>
        <strong>Email:</strong> {form.email}
      </p>
      <p>
        <strong>Phone:</strong> {form.phone}
      </p>
      <p>
        <strong>City:</strong> {form.city}
      </p>
      <p>
        <strong>Gender:</strong> {form.gender}
      </p>
      <p>
        <strong>Terms:</strong> {form.terms ? "Accepted" : "Not Accepted"}
      </p>
    </div>
  );
}

export default Registration;
