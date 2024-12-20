const newFormHandler = async (event) => {
  event.preventDefault();
  const blogId = event.target.value;

  //targeting ocmment input

  const content = document.querySelector('#comment-content').value.trim();

  if (content) {
    const response = await fetch(`/api/blogs/comment/${blogId}`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create blog');
    }
  }
};

document.querySelector('#commenter').addEventListener('click', newFormHandler);
