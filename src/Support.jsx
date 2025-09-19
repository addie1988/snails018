import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import min_menu_content_item_img_1 from "./images/min_menu_content_item_img_1.webp";
import min_menu_content_item_img_2 from "./images/min_menu_content_item_img_2.webp";
import min_menu_content_item_img_3 from "./images/min_menu_content_item_img_3.webp";
import min_menu_content_item_img_4 from "./images/min_menu_content_item_img_4.webp";
import min_menu_content_item_img_5 from "./images/min_menu_content_item_img_5.webp";
import min_menu_content_item_img_6 from "./images/min_menu_content_item_img_6.webp";
import min_menu_content_item_img_7 from "./images/min_menu_content_item_img_7.webp";
import min_menu_content_item_img_8 from "./images/min_menu_content_item_img_8.webp";
import min_menu_content_item_img_9 from "./images/min_menu_content_item_img_9.webp";
import min_menu_content_item_img_10 from "./images/min_menu_content_item_img_10.webp";
import min_menu_content_item_img_11 from "./images/min_menu_content_item_img_11.webp";
import min_menu_content_item_img_12 from "./images/min_menu_content_item_img_12.webp";
import min_menu_content_item_img_13 from "./images/min_menu_content_item_img_13.webp";
import support from "./images/support.mp4";
import Video_modularity from "./Video_modularity";


function Support() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState("employment");
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
    setActiveSubMenu("employment");
  };

  const toggleSubMenu = (subMenuId) => {
    setActiveSubMenu(activeSubMenu === subMenuId ? null : subMenuId);
  };

  const handleImageClick = (img) => {
    if (img === min_menu_content_item_img_11) {
      setShowModal(true);
    }
  };

  const menuItems = [
    { id: "employment", name: "Employment & Support" },
    { id: "flexibility", name: "Flexibility & time off" },
    { id: "health", name: "Health & wellness" },
    { id: "development", name: "Personal development" },
    { id: "community", name: "Community & involvement" },
  ];

  const contentData = {
    employment: {
      title: "Employment & Support",
      items: [
        "Officially registered full-time employment",
        "Supplementation of work equipment and licensed software",
        "Support from the company during emergencies",
        "Legal consultations", 
        "Opportunity to take an interest-free loan",
        "Salary retention in case of mobilization",
        "Partnership discounts",
      ],
      images: [
        min_menu_content_item_img_1,
        min_menu_content_item_img_2,
      ],
    },
    flexibility: {
      title: "Flexibility & time off",
      items: [
        "25 days of paid leave",
        "Additional paid leave for specific needs",
        "Remote work within Spain with the option to visit our office in Barcelona",
      ],
      images: [
        min_menu_content_item_img_3,
        min_menu_content_item_img_4,
        min_menu_content_item_img_5,
      ],
    },
    health: {
      title: "Health & wellness",
      items: [
        "Medical insurance (including dental care)",
        "Counseling with psychologists",
        "Fully paid medical leave",
        "Reimbursement of gym membership fees",
        "A running club",
        "A gift certificate and an extra day off on your birthday",
        "Additional parental leave",
        "Branded children's products"
      ],
      images: [
        min_menu_content_item_img_6,
        min_menu_content_item_img_7,
        min_menu_content_item_img_8,
      ],
    },
    development: {
      title: "Personal development",
      items: [
        "Paid professional seminars, workshops, courses, and conferences",
        "Internal experience exchange sessions between employees",
        "Group English language classes",
        "Individual development plan and regular feedback",
        "Opportunities to transfer to another project or specialization",
        "Career development possibilities both in management and in individual specialisms",
        "Coaching sessions for managers",
      ],
      images: [
        min_menu_content_item_img_9,
        min_menu_content_item_img_10,
      ],
    },
    community: {
      title: "Community & involvement",
      items: [
        "Internal Game Jam, a fast-paced game development competition",
        "Online team activities",
        "Creative workshops",
        "Unique branded products",
        "An active internal social network, podcasts, and monthly updates on projects and business endeavors direct from management",
        "Supporting social and charitable initiatives",
        "Participation in closed playtests, exclusive development groups, and the ability to propose features even if you're not on the development team"
      ],
      images: [
        min_menu_content_item_img_11,
        min_menu_content_item_img_12,
        min_menu_content_item_img_13,
      ],
    },
  };

  return (
    <div className="support">
      <Video_modularity 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        videoSrc={'./src/images/support.mp4'}
      />
      <div className="support_content">
        <div className="main_menu">
          <div className="main_menu_content">
            <div className="menu_buttons">
              <button
                className={`menu_button ${
                  !activeMenu || activeMenu === "menu1" ? "active" : ""
                }`}
                onClick={() => toggleMenu("menu1")}
              >
                Employment & Support
              </button>
              <button
                className={`menu_button ${
                  activeMenu === "menu2" ? "active" : ""
                }`}
                onClick={() => toggleMenu("menu2")}
              >
                Flexibility & time off
              </button>
              <button
                className={`menu_button ${
                  activeMenu === "menu3" ? "active" : ""
                }`}
                onClick={() => toggleMenu("menu3")}
              >
                Health & wellness
              </button>
            </div>

            <AnimatePresence mode="wait">
              {(activeMenu === "menu1" || !activeMenu) && (
                <motion.div
                  className="main_menu_content_item_1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="min_menu_content_item_text">
                    <div className="inner_menu">
                      <div className="inner_menu_content">
                        <ul>
                          {menuItems.map((item) => (
                            <li
                              key={item.id}
                              className={`submenu_item ${
                                activeSubMenu === item.id ? "active" : ""
                              }`}
                              onClick={() => toggleSubMenu(item.id)}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="min_menu_content_item_text_area">
                      <div className="min_menu_content_item_text_area_content">
                        <AnimatePresence mode="wait">
                          {activeSubMenu && contentData[activeSubMenu] && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="min_menu_content_item_text_area_content_item"
                            >
                              <div className="min_menu_content_item_text_content">
                                <h3>{contentData[activeSubMenu].title}</h3>
                                <ul>
                                  {contentData[activeSubMenu].items.map(
                                    (item, index) => (
                                      <li key={index}>{item}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="min_menu_content_item_img">
                                <div className="min_menu_content_item_img_content">
                                  {contentData[activeSubMenu].images.map(
                                    (img, index) => (
                                      <img
                                        key={index}
                                        src={img}
                                        alt={contentData[activeSubMenu].title}
                                        onClick={() => handleImageClick(img)}
                                        style={{cursor: img === min_menu_content_item_img_11 ? 'pointer' : 'default'}}
                                      />
                                    )
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeMenu === "menu2" && (
                <motion.div
                  className="main_menu_content_item_2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="min_menu_content_item_text">
                    <div className="inner_menu">
                      <div className="inner_menu_content">
                        <ul>
                          {menuItems.map((item) => (
                            <li
                              key={item.id}
                              className={`submenu_item ${
                                activeSubMenu === item.id ? "active" : ""
                              }`}
                              onClick={() => toggleSubMenu(item.id)}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="min_menu_content_item_text_area">
                      <div className="min_menu_content_item_text_area_content">
                        <AnimatePresence mode="wait">
                          {activeSubMenu && contentData[activeSubMenu] && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="min_menu_content_item_text_area_content_item"
                            >
                              <div className="min_menu_content_item_text_content">
                                <h3>{contentData[activeSubMenu].title}</h3>
                                <ul>
                                  {contentData[activeSubMenu].items.map(
                                    (item, index) => (
                                      <li key={index}>{item}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="min_menu_content_item_img">
                                <div className="min_menu_content_item_img_content">
                                  {contentData[activeSubMenu].images.map(
                                    (img, index) => (
                                      <img
                                        key={index}
                                        src={img}
                                        alt={contentData[activeSubMenu].title}
                                        onClick={() => handleImageClick(img)}
                                        style={{cursor: img === min_menu_content_item_img_11 ? 'pointer' : 'default'}}
                                      />
                                    )
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeMenu === "menu3" && (
                <motion.div
                  className="main_menu_content_item_3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="min_menu_content_item_text">
                    <div className="inner_menu">
                      <div className="inner_menu_content">
                        <ul>
                          {menuItems.map((item) => (
                            <li
                              key={item.id}
                              className={`submenu_item ${
                                activeSubMenu === item.id ? "active" : ""
                              }`}
                              onClick={() => toggleSubMenu(item.id)}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="min_menu_content_item_text_area">
                      <div className="min_menu_content_item_text_area_content">
                        <AnimatePresence mode="wait">
                          {activeSubMenu && contentData[activeSubMenu] && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="min_menu_content_item_text_area_content_item"
                            >
                              <div className="min_menu_content_item_text_content">
                                <h3>{contentData[activeSubMenu].title}</h3>
                                <ul>
                                  {contentData[activeSubMenu].items.map(
                                    (item, index) => (
                                      <li key={index}>{item}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="min_menu_content_item_img">
                                <div className="min_menu_content_item_img_content">
                                  {contentData[activeSubMenu].images.map(
                                    (img, index) => (
                                      <img
                                        key={index}
                                        src={img}
                                        alt={contentData[activeSubMenu].title}
                                        onClick={() => handleImageClick(img)}
                                        style={{cursor: img === min_menu_content_item_img_11 ? 'pointer' : 'default'}}
                                      />
                                    )
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
