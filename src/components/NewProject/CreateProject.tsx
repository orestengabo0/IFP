import { useState } from "react";
import "./styles.css";
import { PiCaretLeftBold } from "react-icons/pi";
import { BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface ProjectData {
  name: string;
  description: string;
  images: string[];
  startDate: string;
  endDate: string;
  landSize: number;
}

const CreateProject = () => {
  const [projectData, setProjectData] = useState<ProjectData>({
    name: "",
    description: "",
    images: [],
    startDate: "12 October 2022",
    endDate: "12 October 2022",
    landSize: 5000,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProjectData({
      ...projectData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setProjectData((prevState) => ({
        ...prevState,
        images: [...prevState.images, ...filesArray],
      }));
    }
  };

  const handleRemoveImage = (index: number) => {
    setProjectData((prevState) => ({
      ...prevState,
      images: prevState.images.filter((_, i) => i !== index),
    }));
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProjectData({
      ...projectData,
      startDate: event.target.value,
    });
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectData({
      ...projectData,
      endDate: event.target.value,
    });
  };

  const handleLandSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectData({
      ...projectData,
      landSize: parseInt(event.target.value),
    });
  };

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data:", projectData);
  };

  return (
    <div className="container p-3">
      <div className="back-button" onClick={handleBack}>
        <PiCaretLeftBold color="green" size={30} />
      </div>
      <h1>Create new project</h1>
      <form onSubmit={handleSubmit} className="mt-3 p-2">
        <div className="input-group">
          <label htmlFor="name" className="fs-4">
            Project Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={projectData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description" className="fs-4">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="images" className="fs-5">
            Upload Images
          </label>
          <div className="image-upload">
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className="images-grid">
          {projectData.images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img
                src={image}
                alt={`Uploaded ${index}`}
                className="grid-image mb-3"
              />
              <button
                className="close-button bg-secondary"
                onClick={() => handleRemoveImage(index)}
              >
                <BsX size={30} />
              </button>
            </div>
          ))}
        </div>
        <div className="input-group">
          <label htmlFor="startDate" className="fs-5">
            Start date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={projectData.startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="endDate" className="fs-5">
            End date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={projectData.endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="landSize" className="fs-5">
            Land size
          </label>
          <div className="number-input">
            <input
              type="number"
              id="landSize"
              name="landSize"
              className="p-1 border-0 mx-3"
              value={projectData.landSize}
              onChange={handleLandSizeChange}
            />
            <span>km</span>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="buttonSubmit rounded-5">
            Save Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
