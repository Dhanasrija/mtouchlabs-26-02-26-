export default function TopBar() {
  return (
    <div className="top-header">
      <div className="left_header_nav">
        <span>
          <i className="fas fa-envelope"></i> contact@mtouchlabs.com
        </span>
        <span>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/in.svg"
            alt="India Flag"
            className="flag-icon"
          />{" "}
          +91 9390683154
        </span>
        <span>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/us.svg"
            alt="USA Flag"
            className="flag-icon"
          />{" "}
          +1 (551) 222-0070
        </span>
      </div>
      <div className="right_header_nav">
        <p>Hyderabad</p>
        <p>|</p>
        <p><strong>Bangalore</strong></p>
        <p>|</p>
        <p>USA</p>
      </div>
    </div>
  );
}