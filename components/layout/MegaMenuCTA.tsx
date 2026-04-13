interface MegaMenuCTAProps {
  heading?: string;
  subheading?: string;
}

export default function MegaMenuCTA({
  heading = "Need a Website or App?",
  subheading = "We Will Shape Your Brand With Our Solutions",
}: MegaMenuCTAProps) {
  return (
    <div className="mega-menu-blocks">
      <p className="mb10">{heading}</p>
      <h4>{subheading}</h4>
      {/* onclick="openModal()" handled via vanilla JS in script tag */}
      <a href="/contact-us" className="ree-btn ree-btn0 ree-btn-grdt2 mt30 js-open-modal">
        Request Quote
        <i className="fas fa-arrow-right fa-btn"></i>
      </a>
    </div>
  );
}
