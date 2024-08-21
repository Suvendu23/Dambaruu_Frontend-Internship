document.addEventListener('DOMContentLoaded', function() {
  const pages = document.querySelectorAll('.pagination .page');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const baseUrl = 'https://api.npoint.io/cf32b9485d8f421707f5';
  const baseUrl2 = 'https://api.npoint.io/8d52789757a80902f7ee';

  function updateActivePage(newActivePage) {
    pages.forEach(page => {
      if (page.dataset.page === newActivePage) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }

  function fetchData(pageNumber) {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => {
        displayImages(data.pages[pageNumber]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  function displayImages(images) {
    const container = document.getElementById('image-container');
    container.innerHTML = '';
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.url;
      imgElement.alt = image.alt || 'Image';
      imgElement.style.margin = '20px';
      imgElement.style.width = '400px';
      imgElement.style.height = 'auto';
      container.appendChild(imgElement);
    });
  }

  pages.forEach(page => {
    page.addEventListener('click', function(event) {
      event.preventDefault();
      const newActivePage = this.dataset.page;
      updateActivePage(newActivePage);
      fetchData(newActivePage);
    });
  });

  prev.addEventListener('click', function(event) {
    event.preventDefault();
    const activePage = document.querySelector('.pagination .active').dataset.page;
    const newActivePage = Math.max(1, parseInt(activePage) - 1).toString();
    updateActivePage(newActivePage);
    fetchData(newActivePage);
  });

  next.addEventListener('click', function(event) {
    event.preventDefault();
    const activePage = document.querySelector('.pagination .active').dataset.page;
    const newActivePage = Math.min(3, parseInt(activePage) + 1).toString();
    updateActivePage(newActivePage);
    fetchData(newActivePage);
  });

  fetchData(document.querySelector('.pagination .active').dataset.page);

  // Second Pagination
  const pages2 = document.querySelectorAll('.pagination .page-2');
  const prev2 = document.getElementById('prev-2');
  const next2 = document.getElementById('next-2');

  function updateActivePage2(newActivePage) {
    pages2.forEach(page => {
      if (page.dataset.page === newActivePage) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }

  function fetchData2(pageNumber) {
    fetch(baseUrl2)
      .then(response => response.json())
      .then(data => {
        displayImages2(data.pages[pageNumber]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  function displayImages2(images) {
    const container = document.getElementById('image-container-2');
    container.innerHTML = '';
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.url;
      imgElement.alt = image.alt || 'Image';
      imgElement.style.margin = '20px';
      imgElement.style.width = '400px';
      imgElement.style.height = 'auto';
      container.appendChild(imgElement);
    });
  }

  pages2.forEach(page => {
    page.addEventListener('click', function(event) {
      event.preventDefault();
      const newActivePage = this.dataset.page;
      updateActivePage2(newActivePage);
      fetchData2(newActivePage);
    });
  });

  prev2.addEventListener('click', function(event) {
    event.preventDefault();
    const activePage = document.querySelector('.pagination .page-2.active').dataset.page;
    const newActivePage = Math.max(1, parseInt(activePage) - 1).toString();
    updateActivePage2(newActivePage);
    fetchData2(newActivePage);
  });

  next2.addEventListener('click', function(event) {
    event.preventDefault();
    const activePage = document.querySelector('.pagination .page-2.active').dataset.page;
    const newActivePage = Math.min(3, parseInt(activePage) + 1).toString();
    updateActivePage2(newActivePage);
    fetchData2(newActivePage);
  });

  fetchData2(document.querySelector('.pagination .page-2.active').dataset.page);
});
