import PVec from './PVec';
import rand from './Rand';

class Mover {

  constructor (x, y) {
    this.pos = PVec(x, y);
    this.vel = PVec();
    this.acc = PVec();
  }

  update (a) {
    if (a === this) {
      this.acc.rand();
      this.acc.mult(rand.f(5))
    } else {
      this.acc
        .copy(a.pos)
        .sub(this.pos)
        .normalize()
        .mult(0.4);
    }

    this.vel.add(this.acc);
    this.vel.limit(7);
    this.pos.add(this.vel);

  }

  checkEdges () {
    if (this.pos.x < -10) this.pos.x = env.w;
    if (this.pos.x > env.w) this.pos.x = 0;
    if (this.pos.y < -10) this.pos.y = env.h;
    if (this.pos.y > env.h) this.pos.y = 0;
  }

  render (c) {
    c.fillStyle = '#600';
    c.fillRect(this.pos.x, this.pos.y, 10, 10);
  }

}

export default Mover;
