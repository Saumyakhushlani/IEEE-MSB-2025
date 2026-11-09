const CLOUD_NAME = "dkjiu9edq";

export function getCloudinaryImage(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${publicId}`;
}