<template>
  <q-page class="home">
    <!-- gornja traka -->
    <div class="ticker">
      <span><i class="dot"></i> POČETNA STRANICA.</span>
      <span class="ticker-r">HOME</span>
    </div>
 
    <!-- hero -->
    <section class="hero">
      <div
        v-for="p in photos"
        :key="p.cls"
        class="photo"
        :class="p.cls"
      >
        <img v-if="p.src" :src="p.src" alt="" />
        <span v-if="p.caption" class="cap">{{ p.caption }}</span>
      </div>
 
      <div class="stamp">HO<br />ME</div>
 
      <div class="center">
        <p class="eyebrow"><i class="dot"></i> HOME </p>
        <h1>
          <span>POČETNA</span>
          <span class="red">STRANICA</span>
        </h1>
        <p class="sub">
          NOT<br />
          FOR EVERYONE
        </p>
      </div>
    </section>
  </q-page>
</template>
 
<script setup>
const photos = [
  { cls: 'p-left', src: '', caption: 'Afterhours / 001' },
  { cls: 'p-top', src: '', caption: '' },
  { cls: 'p-right', src: '', caption: 'London · After dark' },
  { cls: 'p-bl', src: '', caption: '' },
  { cls: 'p-br', src: '', caption: '' }
]
</script>
 
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono:wght@400;700&display=swap');
 
.home {
  --bg: #0a0a0a;
  --red: #ff3b2f;
  --white: #fff;
  --dim: #8b8b8b;
  background: var(--bg);
  color: var(--white);
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  overflow: hidden;
}
 
.dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: var(--red);
  margin-right: 8px;
  vertical-align: middle;
}
 
.ticker {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 12px 16px;
  border-bottom: 1px solid #1c1c1c;
  font-size: 9px;
}
.ticker-r {
  color: var(--dim);
}
 
.hero {
  position: relative;
  min-height: 720px;
}
.center {
  position: relative;
  z-index: 3;
  text-align: center;
  padding-top: 150px;
}
.eyebrow {
  color: var(--red);
  font-size: 9px;
  margin: 0 0 24px;
}
h1 {
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0;
  line-height: 0.92;
  margin: 0;
  font-size: clamp(88px, 14vw, 200px);
}
h1 span {
  display: block;
}
.red {
  color: var(--red);
}
.sub {
  color: var(--dim);
  font-size: 9px;
  line-height: 2;
  margin: 40px 0 0;
}
 
.photo {
  position: absolute;
  background: linear-gradient(160deg, #3a3a3a, #0f0f0f 70%);
  filter: grayscale(1) contrast(1.1);
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  z-index: 1;
}
.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.cap {
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-size: 7px;
  color: #ddd;
}
.p-left { left: 3%; top: 70px; width: 340px; height: 440px; transform: rotate(-3deg); }
.p-top { left: 27%; top: -10px; width: 250px; height: 120px; transform: rotate(-4deg); }
.p-right { right: 2%; top: 20px; width: 340px; height: 400px; transform: rotate(3deg); }
.p-bl { left: 9%; top: 480px; width: 230px; height: 230px; transform: rotate(-2deg); z-index: 2; }
.p-br { right: 8%; top: 520px; width: 310px; height: 220px; transform: rotate(-3deg); }
 
.stamp {
  position: absolute;
  z-index: 4;
  right: 22%;
  top: 40px;
  border: 1px solid var(--red);
  color: var(--red);
  padding: 8px 10px;
  font-family: 'Anton', sans-serif;
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0;
  transform: rotate(6deg);
}
 
@media (max-width: 900px) {
  .ticker-r, .p-top, .p-bl, .p-br, .stamp { display: none; }
  .photo { opacity: 0.35; }
  .p-left { width: 180px; height: 240px; }
  .p-right { width: 180px; height: 220px; }
  .center { padding-top: 120px; }
}
</style>
 