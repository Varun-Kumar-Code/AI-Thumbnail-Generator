const response = await fetch('https://api.deepseek.com/v1/thumbnail', {
    method: 'POST',
    headers: {
      'Authorization': 'sk-69f4b0987b61441383680dfd97528a47',
    },
    body: formData,
  });

  document.getElementById('generateBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('imageUpload');
    const style = document.getElementById('style').value;
    const thumbnailOutput = document.getElementById('thumbnailOutput');
  
    if (!fileInput.files[0]) {
      alert('Please upload an image first!');
      return;
    }
  
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('image', file);
    formData.append('style', style);
  
    try {
      // Replace with your AI API endpoint
      const response = await fetch('https://api.deepseek.com/v1/thumbnail', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to generate thumbnail');
      }
  
      const data = await response.json();
      thumbnailOutput.src = data.thumbnailUrl; // Assuming the API returns a URL
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate thumbnail. Please try again.');
    }
  });