import Header from "../Header/Header";
import ProfileCard from "../MyProfile/ProfileCard";
import ProjectsCard from "./ProjectsCard";
import farm1 from "../../assets/wat 1.png";
import Account from "../Dashboard/SmallUsageComponents/Account";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="mt-5 pt-5">
          <div className={`d-flex justify-content-center mt-3`}>
            <img
              src={farm1}
              alt=""
              className={`rounded-4 ${styles.profileImg}`}
            />
          </div>
          <ProfileCard />
          <div>
            <h5 className="mx-3 fw-semibold text-body">My Projects</h5>
            <div className="my-projects d-flex justify-content-evenly">
              <ProjectsCard projectImg={farm1} projectName="Land Caring" />
              <ProjectsCard projectImg={farm1} projectName="Land Caring" />
            </div>
          </div>
        </div>
        <div className="p-3 mt-3">
          <Account />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
