import image1 from "../images/AdobeStock_image.jpeg";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-card">
        <div className="about-card-image">
          <figure className="image">
            <img
              src={image1}
              alt="A photo of the business owner working in her studio "
            />
          </figure>
        </div>
        <div className="about-card">
          <div className="about-card-content">
            <p className="content">
              Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
              eros. Donec id elit non mi porta gravida at eget metus. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
