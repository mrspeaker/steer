class PVec {

  constructor (x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add (v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  set (x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  copy (v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  sub (v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  mult (n) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  div (n) {
    this.x /= n;
    this.y /= n;
    return this;
  }

  magnitude () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize () {
    const m = this.magnitude();
    if (m !== 0) {
      this.div(m);
    }
    return this;
  }

  limit (n) {
    if (this.magnitude() > n) {
      this.normalize();
      this.mult(n);
    }
  }

  rand () {
    const r = Math.random() * (Math.PI * 2);
    const x = Math.cos(r);
    const y = Math.sin(r);
    this.set(x, y);
  }
}

export default (x, y) => new PVec(x, y);
