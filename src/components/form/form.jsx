import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form-container">
      <div className="header">
        <h1 className="add-book">Add Book</h1>
      </div>
      <div className="form">
        <label className="form-label">Title</label>
        <input
          type="text"
          name="Title"
          class="create-form"
          placeholder="e.g Fishman is an Trouble: Novel"
        />

        <label className="form-label">Author</label>
        <input
          type="text"
          name="Author"
          class="create-form"
          placeholder="e.g Fishman is an Trouble: Novel"
        />

        <label className="form-label">ISBN</label>
        <input
          type="text"
          name="ISBN"
          class="create-form"
          placeholder="e.g Fishman is an Trouble: Novel"
        />

        <label className="form-label">Published on</label>
        <input
          type="text"
          name="Published-on"
          class="create-form"
          placeholder="e.g Fishman is an Trouble: Novel"
        />

        <label className="form-label">Number of Page</label>
        <input
          type="text"
          name="Number_of_Page"
          class="create-form"
          placeholder="100"
        />

        <label className="form-label" for="country">
          Country Publisher
        </label>
        <select className="create-form" name="country" id="country">
          <option value="U.S">U.S</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Singapore">Singapore</option>
        </select>
      </div>
    </div>
  );
};

export default Form;