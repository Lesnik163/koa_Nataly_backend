import { prisma } from "..";

export const getPhotos = () =>
  new Promise(async (res, rej) => {
    const photos = await prisma.image.findMany().then((res) => res);
    try {
      res({
        success: true,
        photos: photos,
      });
    } catch (err) {
      rej(err);
    }
  });

export const getPhoto = (photoId: number) =>
  new Promise(async (res, rej) => {
    const photo = await prisma.image.findUnique({
      where: {
        id: photoId,
      },
    });
    try {
      if (!photo) {
        throw new Error(`Фотография с id ${photoId} не найдена`);
      }
      res({
        success: true,
        photo: photo,
      });
    } catch (err) {
      rej(err);
    }
  });
