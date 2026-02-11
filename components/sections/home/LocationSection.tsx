export default function LocationSection() {
  return (
    <div className="_location_we_serve_container">
      <div className="_location_we_serve_left-section">
        <div className="_location_we_serve_contact-label">CONTACT US</div>
        <h2 className="_location_we_serve_title">Locations We<br />Serve</h2>

        <div className="_location_we_serve_address-text" id="addressText"></div>

        <div className="_location_we_serve_contact-info">
          <div className="_location_we_serve_contact-item _location_we_serve_phone" id="phoneNumber"></div>
          <div className="_location_we_serve_contact-item _location_we_serve_email" id="emailAddress"></div>
        </div>

        <div className="_location_we_serve_button-group">
          <button className="_location_we_serve_location-btn active" data-location="hyderabad">Hyderabad</button>
          <button className="_location_we_serve_location-btn" data-location="bangalore">Bangalore</button>
          <button className="_location_we_serve_location-btn" data-location="usa">USA</button>
        </div>
      </div>

      <div className="_location_we_serve_right-section">
        <div className="dummy_bg"></div>
        <div className="_location_we_serve_carousel-container">
          <div className="_location_we_serve_carousel-wrapper" id="carouselWrapper">
            <div className="_location_we_serve_carousel-card" data-location="hyderabad">
              <div className="_location_we_serve_card">
                <img src="/images/hyderabad.png" alt="Hyderabad" />
                <div className="_location_we_serve_card-overlay">
                  <div className="_location_we_serve_card-title">Hyderabad</div>
                  <a className="_location_we_serve_view-map-btn"
                    href="https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Software+Development+Company/@17.4892271,78.3901496,791m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!16s%2Fg%2F11b8zhlwcv"
                    target="_blank">View On Map →</a>
                </div>
              </div>
            </div>
            <div className="_location_we_serve_carousel-card" data-location="bangalore">
              <div className="_location_we_serve_card">
                <img src="/images/bangalore.png" alt="Bangalore" />
                <div className="_location_we_serve_card-overlay">
                  <div className="_location_we_serve_card-title">Bangalore</div>
                  <a className="_location_we_serve_view-map-btn"
                    href="https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Web+and+Mobile+App+Development+Company+%7C+Bangalore/@12.8905936,77.6054813,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae159f6a3c1bd1:0xb1454d20e410b70e!8m2!3d12.8905936!4d77.6054813"
                    target="_blank">View On Map →</a>
                </div>
              </div>
            </div>
            <div className="_location_we_serve_carousel-card" data-location="usa">
              <div className="_location_we_serve_card">
                <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop" alt="USA" />
                <div className="_location_we_serve_card-overlay">
                  <div className="_location_we_serve_card-title">USA</div>
                  <a className="_location_we_serve_view-map-btn"
                    href="https://maps.app.goo.gl/amg7vRf4qFy6BFZW9"
                    target="_blank">View On Map →</a>
                </div>
              </div>
            </div>
            {/* Clones for infinite loop */}
            <div className="_location_we_serve_carousel-card" data-location="hyderabad">
              <div className="_location_we_serve_card">
                <img src="/images/hyderabad.png" alt="Hyderabad" />
                <div className="_location_we_serve_card-overlay">
                  <div className="_location_we_serve_card-title">Hyderabad</div>
                  <a className="_location_we_serve_view-map-btn" target="_blank"
                    href="https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Software+Development+Company/@17.4892271,78.3901496,791m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!16s%2Fg%2F11b8zhlwcv">View On Map →</a>
                </div>
              </div>
            </div>
            <div className="_location_we_serve_carousel-card" data-location="bangalore">
              <div className="_location_we_serve_card">
                <img src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&h=400&fit=crop" alt="Bangalore" />
                <div className="_location_we_serve_card-overlay">
                  <div className="_location_we_serve_card-title">Bangalore</div>
                  <a className="_location_we_serve_view-map-btn" target="_blank"
                    href="https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Software+Development+Company/@17.4892271,78.3901496,791m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!16s%2Fg%2F11b8zhlwcv">View On Map →</a>
                </div>
              </div>
            </div>
            <div className="_location_we_serve_carousel-card" data-location="usa">
              <div className="_location_we_serve_card">
                <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop" alt="USA" />
                <div className="_location_we_serve_card-overlay">
                  <div className="_location_we_serve_card-title">USA</div>
                  <a className="_location_we_serve_view-map-btn"
                    href="https://maps.app.goo.gl/amg7vRf4qFy6BFZW9"
                    target="_blank">View On Map →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}