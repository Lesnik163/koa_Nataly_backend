import { prisma } from "..";

export const getPhotos = () =>
  new Promise(async (res, rej) => {
    const photos = await prisma.image.findMany().then((res) => res);
    try {
      res(photos);
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
      res(photo);
    } catch (err) {
      rej(err);
    }
  });
