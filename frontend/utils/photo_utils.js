export const fetchFeedPhotos = pageId => (
  $.ajax({
    method: 'GET',
    url: '/api/photos',
    data: { pageId }
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  })
);

export const createPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: { photo }
  })
);

export const updatePhoto = photo => (
  $.ajax({
    method: 'PATCH',
    url: `/api/photos/${photo.id}`,
    data: { photo }
  })
);

export const deletePhoto = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/photos/${id}`
  })
);
