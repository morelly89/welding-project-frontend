import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateCurrentUser, updateProfileImage } from "../../../utils/authApi";
import "./Navigation.css";
function Navigation({
  onLoginClick,
  currentUser,
  isLoggedIn,
  onLogout,
  onUserUpdate,
}) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser?.name || "");
  const [profileImage, setProfileImage] = useState(null);

  const navigate = useNavigate();

  const getInitials = (name) => {
    if (!name) return "";

    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("jwt");

      const data = await updateCurrentUser(token, {
        name,
      });

      onUserUpdate(data.user);

      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    try {
      const token = localStorage.getItem("jwt");

      const data = await updateProfileImage(token, file);

      console.log("Photo upload response:", data);
      console.log("New profile image:", data.user.profileImage);

      onUserUpdate(data.user);
    } catch (error) {
      console.error("Failed to update profile image:", error);
    }
  };

  const handleCancelEdit = () => {
    setName(currentUser.name);
    setIsEditing(false);
  };

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
    }
  }, [currentUser]);

  const handleRequestProject = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      onLoginClick();
    }
  };

  return (
    <nav className="navigation">
      <h1 className="navigation__title">
        Morelly<span>Welding</span>
      </h1>

      <div className="navigation__link-container">
        <a className="navigation__link" href="#home">
          Home
        </a>

        <a className="navigation__link" href="#topics">
          Topics
        </a>

        <a className="navigation__link" href="#projects">
          Projects
        </a>

        <a className="navigation__link" href="#about">
          About
        </a>

        <a
          className="navigation__link"
          href="#project-request"
          onClick={handleRequestProject}
        >
          Request a Project
        </a>

        <a className="navigation__link" href="#contact">
          Contact
        </a>
      </div>

      {isLoggedIn && currentUser ? (
        <div className="navigation__profile">
          <button
            className="navigation__profile-button"
            type="button"
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          >
            {currentUser.profileImage ? (
              <img
                src={`http://localhost:3001${currentUser.profileImage}`}
                alt="Profile"
                className="navigation__profile-image"
              />
            ) : (
              getInitials(currentUser.name)
            )}
          </button>

          {isProfileMenuOpen && (
            <div className="navigation__profile-menu">
              <div className="navigation__profile-info">
                <div>
                  {isEditing ? (
                    <input
                      className="navigation__profile-name-input"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  ) : (
                    <p className="navigation__profile-name">
                      {currentUser.name}
                    </p>
                  )}

                  <p className="navigation__profile-email">
                    {currentUser.email}
                  </p>
                </div>
              </div>
              {isEditing ? (
                <div className="navigation__profile-edit-actions">
                  <button
                    className="navigation__profile-menu-button"
                    type="button"
                    onClick={handleSave}
                  >
                    Save
                  </button>

                  <button
                    className="navigation__profile-menu-button"
                    type="button"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="navigation__profile-menu-button"
                  type="button"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Name
                </button>
              )}
              <input
                id="profile-image-input"
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />

              <button
                className="navigation__profile-menu-button"
                type="button"
                onClick={() =>
                  document.getElementById("profile-image-input").click()
                }
              >
                Change Photo
              </button>

              <button onClick={() => navigate("/my-requests")}>
                My Requests
              </button>

              <button
                className="navigation__profile-menu-button navigation__profile-menu-button_logout"
                type="button"
                onClick={onLogout}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          className="navigation__login-button"
          type="button"
          onClick={onLoginClick}
        >
          Login
        </button>
      )}
    </nav>
  );
}

export default Navigation;
