document.getElementById('generateBtn').addEventListener('click', async () => {
  const fileInput = document.getElementById('imageUpload');
  const style = document.getElementById('style').value;
  const thumbnailOutput = document.getElementById('thumbnailOutput');
  
  // Check if a file is uploaded
  if (!fileInput.files[0]) {
    alert('Please upload an image first!');
    return;
  }
  
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('image', file); // Append the image file
  formData.append('style', style); // Append the selected style
  
  try {
    // Replace with your AI API endpoint
      const response = await fetch('https://api.deepseek.com/v1/thumbnail', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer sk-69f4b0987b61441383680dfd97528a47', // Add 'Bearer' prefix to the API key
        },
        body: formData, // Send FormData
      });
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Failed to generate thumbnail: ${response.statusText}`);
      }
  
      // Parse the response JSON
      const data = await response.json();
  
      // Display the generated thumbnail
      if (data.thumbnailUrl) {
        thumbnailOutput.src = data.thumbnailUrl; // Assuming the API returns a URL
      } else {
        throw new Error('Thumbnail URL not found in the response');
      }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to generate thumbnail. Please try again.');
    }
  });