const Newsletter = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our Newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="firstname" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="firstname"
          id="firstname"
          defaultValue="John"
        />
      </div>

      <div className="form-row">
        <label htmlFor="lastname" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastname"
          id="lastname"
          defaultValue="sammy"
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          defaultValue="johns@text.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        submit
      </button>
    </form>
  );
};
export default Newsletter;
