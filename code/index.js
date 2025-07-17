fetch("https://api.imgflip.com/get_memes")
  .then((response) => response.json())
  .then((data) => {
    const memes = data.data.memes;
    const container = document.getElementById("memes");

    memes.slice(0, 10).forEach((meme) => {
      const memeElement = document.createElement("div");
      memeElement.classList.add("mystyle");

      memeElement.innerHTML = `
        <h3>${meme.name}</h3>
        <img src="${meme.url}" alt="${meme.name}" width="300"/>
        
      `;
      container.appendChild(memeElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching memes:", error);
  });
