export const useImages = () => {
  const loadImage = async (imageName) => {
    const { default: image } = await import(`/images/projects/${imageName}`);
    return image;
  };

  return { loadImage };
};
