import Koa, {Context} from 'koa';


const app = new Koa();

app.use(async (ctx: Context) => {
  ctx.body = 'Hello Koa';
});

app.listen(3001);