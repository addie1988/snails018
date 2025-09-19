import { _forEachName } from "gsap/gsap-core";

export default function Community() {
  return (
    <div className="community">
      <div className="community_content">
        <div className="community_content_title">
          <div className="community_content_title_content">
            <h1>
              Follow us <br />
              on social media
            </h1>
          </div>
          <div className="community_content_ul">
            <div className="community_content_ul_content">
              <ul>
                <li>
                  <div className="community_content_ul_content_img">
                    <div className="community_content_ul_content_img_content">
                      <img
                        src={
                          "https://cdn-company.plarium.com/meet/production/media/assets/icons/insta.svg"
                        }
                        alt="community_1"
                      />
                    </div>
                  </div>
                  <div className="community_content_ul_content_text">
                    <div className="community_content_ul_content_text_content">
                      <p>Instagram</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="community_content_ul_content_img">
                    <div className="community_content_ul_content_img_content">
                      <img
                        src={
                          "https://cdn-company.plarium.com/meet/production/media/assets/icons/youtube.svg"
                        }
                        alt="community_2"
                      />
                    </div>
                  </div>
                  <div className="community_content_ul_content_text">
                    <div className="community_content_ul_content_text_content">
                      <p>YouTube</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="community_content_ul_content_img">
                    <div className="community_content_ul_content_img_content">
                      <img
                        src={
                          "https://cdn-company.plarium.com/meet/production/media/assets/icons/linkedin.svg"
                        }
                        alt="community_3"
                      />
                    </div>
                  </div>
                  <div className="community_content_ul_content_text">
                    <div className="community_content_ul_content_text_content">
                      <p>LinkedIn</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="community_content_ul_content_img">
                    <div className="community_content_ul_content_img_content">
                      <img
                        src={
                          "https://cdn-company.plarium.com/meet/production/media/assets/icons/art.svg"
                        }
                        alt="community_4"
                      />
                    </div>
                  </div>
                  <div className="community_content_ul_content_text">
                    <div className="community_content_ul_content_text_content">
                      <p>ArtStation</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
