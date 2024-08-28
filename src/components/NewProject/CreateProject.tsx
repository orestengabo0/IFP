import { PiCaretLeftBold } from "react-icons/pi";

const CreateProject = () => {
  return (
    <div className="p-3">
      <div className="d-flex ">
        <PiCaretLeftBold size={30} color="green" className="mx-3 mt-1" />
        <p className="fw-semibold fs-3 text-success">Create new project</p>
      </div>
      <form className="p-3">
        <div>
          <label htmlFor="project-name" className="fs-3 fw-bold text-success">
            Project Name
          </label>
          <input
            type="text"
            className={`form-control border border-success border-2 p-3 mt-3`}
          />
        </div>
        <div className="form-floating mt-3">
          <textarea
            className={`form-control border border-2 border-success rounded-2`}
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>

          <label
            htmlFor="floatingTextarea"
            className="fw-semibold fs-4 text-success"
          >
            Project description
          </label>
        </div>
        <div className="mt-3">
            <label htmlFor="upload-image" className="fw-semibold fs-4 text-success">Upload image</label>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
