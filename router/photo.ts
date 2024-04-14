import Router from 'koa-router';
import { getPhoto, getPhotos } from '../handles/getPhoto';

export const router = new Router();
router.get('/photos', async (ctx) => {
    try {
        const result = await getPhotos();
        ctx.body = result;
    } 
    catch (error) {
        console.error('error', error);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
});

router.get('/photos/:id', async (ctx) => {
    const id = +ctx.params.id
    try {
        const result = await getPhoto(id);
        ctx.body = result;
    } 
    catch (error) {
        console.error('error', error);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
});

