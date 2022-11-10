import { useState } from "react";
import "./LinkGenerator.scss";
const LinkGenerator = (props) => {
  const initialFormValue = { link: "", month: "", postType: "", storeId: "" };
  const [formValues, setFormValues] = useState({
    link: "",
    month: "",
    postType: "",
    storeId: "",
  });
  const updateFormValue = (key, val) => {
    setFormValues({
      ...formValues,
      [key]: val,
    });
  };
  const [generatedLink, setGeneratedLink] = useState("");
  const generateLink = () => {
    setGeneratedLink(
      `${formValues.link}?tag=${formValues.storeId}-${formValues.month}-${formValues.postType}-21&ref=infip-${formValues.storeId}-${formValues.month}-${formValues.postType}-21`
    );
  };
  const resetForm = () => {
    setFormValues({ ...initialFormValue });
    setGeneratedLink("");
  };
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const postTypes = ["rf", "rb", "sf", "sb", "pf", "pb"];
  return (
    <>
      <div className="sections">
        <div className="sections-top">
          <div className="form-container">
            <h3 className="title">link generator</h3>
            <form className="form-horizontal">
              <div className="form-group">
                <label htmlFor="link">Amazon post link:</label>
                <textarea
                  onChange={(e) => updateFormValue("link", e.target.value)}
                  placeholder="Enter your amazon post link"
                  value={formValues.link}
                  className="form-control"
                  id="link"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="storeId">Store id:</label>
                <input
                  onChange={(e) => updateFormValue("storeId", e.target.value)}
                  type="text"
                  placeholder="Enter your store id"
                  value={formValues.storeId}
                  className="form-control"
                  id="storeId"
                />
              </div>
              <div className="form-group">
                <label htmlFor="month">Select month:</label>
                <select
                  onChange={(e) => updateFormValue("month", e.target.value)}
                  value={formValues.month}
                  className="form-control"
                  id="month"
                >
                  <option value="">--Select Month--</option>
                  {months.map((mon, key) => (
                    <option value={mon} key={key}>
                      {mon}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="postType">Select post type:</label>
                <select
                  value={formValues.postType}
                  className="form-control"
                  onChange={(e) => updateFormValue("postType", e.target.value)}
                  id="postType"
                >
                  <option value="">--Select Post type--</option>
                  {postTypes.map((pos, key) => (
                    <option value={pos} key={key}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={generateLink}
                >
                  Generate Link
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={resetForm}
                >
                  Reset
                </button>
              </div>
            </form>
            <div className="display-link">{generatedLink}</div>
          </div>
        </div>
        <div className="sections-bottom">
          <div className="owner-text">
            Made with <span className="heart">&#9829;</span> for Shilpa
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkGenerator;
