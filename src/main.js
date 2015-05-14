import Mover from './Mover';
import rand from './Rand';
const b = document.querySelector('#board');
const c = b.getContext('2d');

window.env = {
  w: b.width,
  h: b.height
};

let ms = ' '
  .repeat(20)
  .split(' ')
  .map(_ => {
    var m = new Mover();
    m.pos.set(rand.i(env.w), rand.i(env.h));
    m.acc.set(rand.f(-0.03, 0.03), rand.f(-0.03, 0.03));
    return m;
  });

const loop = () => {
  c.clearRect(0, 0, env.w, env.h);

  ms.forEach(m => {
    m.update(ms[0]);
    m.checkEdges();
    m.render(c);
  });

  requestAnimationFrame(loop);
}
loop();
