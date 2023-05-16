import React, { useState } from 'react'

const AddBlog = () => {
  var [blogName, setBlogName] = useState ('');
  var [description, setDescription] =useState ('');
  var [authorName, setAuthorName] =useState ('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the form data (e.g., send it to a server)
    console.log('Submitted:', { blogName, description, authorName });
    // Reset the form fields
    setBlogName('');
    setDescription('');
    setAuthorName('');
  };
  return (
    <div> 
          <form onSubmit={handleSubmit}>
      <br /><br />
        <label htmlFor="blogName">Blog Name:</label>
        <input
          type="text"
          id="blogName"
          value={blogName}
          onChange={(event) => setBlogName(event.target.value)}
        />
        <br /><br />
     
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
     <br /><br />
        <label htmlFor="authorName">Author Name:</label>
        <input
          type="text"
          id="authorName"
          value={authorName}
          onChange={(event) => setAuthorName(event.target.value)}
        />
    <br /><br />
      <button type="submit">Submit</button>
    </form>
        
        
        
        
        
        
  </div>
  )
}

export default AddBlog