import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCaretRight, RxCaretDown } from "react-icons/rx";
import styles from "./Profile.module.css";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const ProfilePictureUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isProvinceDropdownOpen, setIsProvinceDropdownOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [isCityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [cityOption, setCityOption] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const provinces: Record<string, string[]> = {
    "Kigali City": ["Gasabo", "Kicukiro", "Nyarugenge"],
    Eastern: [
      "Rwamagana",
      "Kayonza",
      "Bugesera",
      "Nyagatare",
      "Gatsibo",
      "Ngoma",
      "Kirehe",
    ],
    Western: [
      "Rubavu",
      "Rusizi",
      "Nyabihu",
      "Nyamasheke",
      "Ngororero",
      "Karongi",
      "Rutsiro",
    ],
    Southern: [
      "Kamonyi",
      "Muhanga",
      "Ruhango",
      "Nyanza",
      "Huye",
      "Nyaruguru",
      "Gisagara",
      "Nyamagabe",
    ],
    Northern: ["Rulindo", "Gakenke", "Musanze", "Gicumbi", "Burera"],
  };

  const handleSelectedProvince = (province: string) => {
    setSelectedProvince(province);
    setCityOption(provinces[province]);
    setSelectedCity(null);
    setIsProvinceDropdownOpen(false);
  };

  const handleSelectedCity = (city: string) => {
    setSelectedCity(city);
    setCityDropdownOpen(false);
  };

  const toggleProvinceDropdown = () => {
    setIsProvinceDropdownOpen((prev) => !prev);
  };

  const toggleCityDropdown = () => {
    if (selectedProvince) setCityDropdownOpen((prev) => !prev);
  };

  const handleSelectedGender = (gender: string) => {
    setGender(gender);
  };

  return (
    <div className={`${styles.container} p-3`}>
      <div>
        <h3 className="text-success fw-bold mb-5">Complete your profile</h3>
        <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <p className="d-block text-center fs-4 fw-semibold">
            Upload your profile picture
          </p>
          <div className="d-flex justify-content-center">
            <div className={styles.circle}>
              {image ? (
                <img src={image} alt="Profile" className={styles.image} />
              ) : (
                <label htmlFor="file-input" className={styles.label}>
                  <FiPlus className={styles.plus} />
                </label>
              )}
            </div>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>
          <p className="text-center fw-semibold fs-3">Choose your location</p>
          <div className="location d-flex justify-content-between">
            <div>
              <button
                className={`province ${styles.province} fw-semibold fs-3`}
                onClick={toggleProvinceDropdown}
              >
                {selectedProvince || "Province"}
                {isProvinceDropdownOpen ? (
                  <RxCaretDown size={40} color="green" />
                ) : (
                  <RxCaretRight size={40} color="green" />
                )}
              </button>
              {isProvinceDropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  {Object.keys(provinces).map((province) => (
                    <li key={province}>
                      <button
                        className={styles.dropdownItem}
                        onClick={() => handleSelectedProvince(province)}
                      >
                        {province}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <button
                className={`city ${styles.city} fw-semibold fs-3`}
                onClick={toggleCityDropdown}
                disabled={!selectedProvince}
              >
                {selectedCity || "City"}
                {!isCityDropdownOpen ? (
                  <RxCaretRight size={40} color="green" />
                ) : (
                  <RxCaretDown size={40} color="green" />
                )}
              </button>
              {isCityDropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  {cityOption.map((city) => (
                    <li key={city}>
                      <button
                        className={styles.dropdownItem}
                        onClick={() => handleSelectedCity(city)}
                      >
                        {city}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <p className="text-center fs-3 fw-semibold mt-3">
            Select your gender
          </p>
          <div className="d-flex justify-content-center">
            <div
              className={`${styles.inputGroup} d-flex mx-4`}
              onClick={() => handleSelectedGender("Male")}
            >
              <span className={styles.icon}>
                {gender === "Male" ? (
                  <MdRadioButtonChecked size={30} color="green" />
                ) : (
                  <MdRadioButtonUnchecked size={30} color="green" />
                )}
              </span>
              <p className="fs-3 mx-2">Male</p>
            </div>
            <div
              className={`${styles.inputGroup} d-flex`}
              onClick={() => handleSelectedGender("Female")}
            >
              <span className={styles.icon}>
                {gender === "Female" ? (
                  <MdRadioButtonChecked size={30} color="green" />
                ) : (
                  <MdRadioButtonUnchecked size={30} color="green" />
                )}
              </span>
              <p className="fs-3 mx-2">Female</p>
            </div>
          </div>
          <p className="text-center fs-3 fw-semibold">Bank Account Number</p>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              className={`formControl ${styles["formControl"]}`}
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              className={`buttonSave ${styles.buttonSave} text-white fw-semibold fs-3 mb-3`}
            >
              Save Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePictureUploader;
