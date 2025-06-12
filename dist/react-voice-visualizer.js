(function(){"use strict";(r=>{var o;try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r));const i=(o=document.querySelector('meta[property="csp-nonce"]'))==null?void 0:o.getAttribute("nonce");i&&e.setAttribute("nonce",i),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".voice-visualizer__buttons-container{display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:15px;flex-wrap:wrap;margin-bottom:40px}.voice-visualizer__btn-center{box-sizing:border-box;flex-shrink:0;width:60px;height:60px;padding:0;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#fff;border:4px solid #c5c5c5;outline:none;cursor:pointer;transition:border-color .3s,background-color .3s}.voice-visualizer__btn-center:disabled{opacity:.85;cursor:default}.voice-visualizer__btn-center:hover{background-color:#eaeaea;border:4px solid #9f9f9f}.voice-visualizer__btn-center>img{width:auto;height:50%;max-height:30px}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause{background-color:#ff3030}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause:hover{background-color:#ff4f4f}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause>img{height:50%;max-height:16px}.voice-visualizer__btn-center.voice-visualizer__btn-center--border-transparent{border-color:transparent}.voice-visualizer__btn-center.voice-visualizer__btn-center--border-transparent:hover{background-color:#fff}.voice-visualizer__btn-left{box-sizing:border-box;flex-shrink:0;width:60px;height:60px;padding:0;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#ff3030;border:4px solid #c5c5c5;outline:none;cursor:pointer;transition:border-color .3s,background-color .3s,opacity .3s}.voice-visualizer__btn-container{min-width:100px;display:flex;justify-content:flex-end}.voice-visualizer__btn-left:hover{background-color:#ff4f4f}.voice-visualizer__btn-left:disabled{opacity:.6;background-color:#ff3030;cursor:default}.voice-visualizer__btn-left.voice-visualizer__btn-left-microphone{background-color:#fff}.voice-visualizer__btn-left.voice-visualizer__btn-left-microphone>img{width:auto;height:50%;max-height:30px}.voice-visualizer__btn-left>img{width:auto;height:50%;max-height:16px}.voice-visualizer__btn-left:hover{border:4px solid #9f9f9f}.voice-visualizer__btn{box-sizing:border-box;min-width:100px;min-height:60px;padding:5px 20px;border-radius:40px;font-size:15px;background-color:#f0f0f0;transition:background-color .3s,opacity .3s}.voice-visualizer__btn:disabled{opacity:.8;background-color:#f0f0f0;cursor:default}.voice-visualizer__btn:hover{background-color:#bebebe}.voice-visualizer__canvas-container{position:relative;width:fit-content;margin:0 auto;overflow:hidden}.voice-visualizer__canvas-container canvas{display:block}.voice-visualizer__canvas-microphone-btn{position:absolute;top:50%;left:50%;width:auto;max-width:12%;min-width:24px;height:50%;max-height:100px;background-color:transparent;border:none;outline:none;transform:translate(-50%,-50%)}.voice-visualizer__canvas-microphone-icon{width:100%;height:100%;will-change:transform;transition:transform .3s}.voice-visualizer__canvas-microphone-btn:hover .voice-visualizer__canvas-microphone-icon{transform:scale(1.03)}.voice-visualizer__canvas-audio-wave-icon{position:absolute;top:50%;left:50%;width:auto;max-width:40%;height:40%;max-height:100px;transform:translate(-118%,-50%) scale(-1)}.voice-visualizer__canvas-audio-wave-icon2{transform:translate(18%,-50%)}.voice-visualizer__canvas-audio-processing{position:absolute;top:50%;left:50%;margin:0;transform:translate(-50%,-50%)}.voice-visualizer__progress-indicator-hovered{position:absolute;top:0;pointer-events:none;height:100%;width:1px;background-color:#85858599}.voice-visualizer__progress-indicator-hovered-time{position:absolute;top:3%;left:1px;width:fit-content;margin:0;padding:0 7px;opacity:.8;font-size:12px;border-radius:0 4px 4px 0;background-color:#575757;text-align:left}.voice-visualizer__progress-indicator-hovered-time.voice-visualizer__progress-indicator-hovered-time-left{left:unset;right:1px;border-radius:4px 0 0 4px}.voice-visualizer__progress-indicator{position:absolute;top:0;pointer-events:none;height:100%;width:1px;background-color:#efefef}.voice-visualizer__progress-indicator-time{position:absolute;top:3%;left:1px;width:fit-content;box-sizing:border-box;min-width:37px;margin:0;padding:0 7px;font-size:12px;border-radius:0 4px 4px 0;text-align:left;color:#000;font-weight:500;background-color:#efefef}.voice-visualizer__progress-indicator-time.voice-visualizer__progress-indicator-time-left{left:unset;right:1px;border-radius:4px 0 0 4px}.voice-visualizer__audio-info-container{box-sizing:border-box;height:55px;display:flex;align-items:center;justify-content:center;gap:30px}.voice-visualizer__audio-info-time{margin:15px 0;min-width:38px;text-align:left}.voice-visualizer__visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:4px solid #c5c5c5;white-space:nowrap;clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}.voice-visualizer__relative{position:relative}.voice-visualizer__spinner-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:52px;height:52px;display:flex;justify-content:center;align-items:center}.voice-visualizer__spinner{flex-shrink:0;width:100%;height:100%;border:4px solid rgba(197,197,197,.5);border-radius:50%;border-top-color:#b7b7b7;animation:voice-visualizer__spin 1s ease-in-out infinite;-webkit-animation:voice-visualizer__spin 1s ease-in-out infinite}@keyframes voice-visualizer__spin{to{transform:rotate(360deg)}}@-webkit-keyframes voice-visualizer__spin{to{transform:rotate(360deg)}}")})();
import { jsx as a, jsxs as ne, Fragment as Ge } from "react/jsx-runtime";
import { useState as h, useRef as N, useCallback as tt, useEffect as F, useLayoutEffect as rt } from "react";
const Ze = ({
  canvas: e,
  backgroundColor: t
}) => {
  const r = e.height, n = e.width, i = Math.round(n / 2), u = e.getContext("2d");
  return u ? (u.clearRect(0, 0, n, r), t !== "transparent" && (u.fillStyle = t, u.fillRect(0, 0, n, r)), { context: u, height: r, width: n, halfWidth: i }) : null;
}, Ce = ({
  context: e,
  color: t,
  rounded: r,
  x: n,
  y: i,
  w: u,
  h: w
}) => {
  e.fillStyle = t, e.beginPath(), e.roundRect ? (e.roundRect(n, i, u, w, r), e.fill()) : e.fillRect(n, i, u, w);
}, nt = ({
  barsData: e,
  canvas: t,
  barWidth: r,
  gap: n,
  backgroundColor: i,
  mainBarColor: u,
  secondaryBarColor: w,
  currentAudioTime: l = 0,
  rounded: M,
  duration: v
}) => {
  const y = Ze({ canvas: t, backgroundColor: i });
  if (!y)
    return;
  const { context: z, height: g } = y, S = l / v;
  e.forEach((m, f) => {
    const p = f / e.length, o = S > p;
    Ce({
      context: z,
      color: o ? w : u,
      rounded: M,
      x: f * (r + n * r),
      y: g / 2 - m.max,
      h: m.max * 2,
      w: r
    });
  });
};
function ct({
  context: e,
  color: t,
  rounded: r,
  width: n,
  height: i,
  barWidth: u
}) {
  Ce({
    context: e,
    color: t,
    rounded: r,
    x: n / 2 + u / 2,
    y: i / 2 - 1,
    h: 2,
    w: n - (n / 2 + u / 2)
  });
}
const it = ({
  audioData: e,
  unit: t,
  index: r,
  index2: n,
  canvas: i,
  isRecordingInProgress: u,
  isPausedRecording: w,
  picks: l,
  backgroundColor: M,
  barWidth: v,
  mainBarColor: y,
  secondaryBarColor: z,
  rounded: g,
  animateCurrentPick: S,
  fullscreen: m
}) => {
  const f = Ze({ canvas: i, backgroundColor: M });
  if (!f)
    return;
  const { context: p, height: o, width: $, halfWidth: Y } = f;
  if (e != null && e.length && u) {
    const O = Math.max(...e);
    if (!w) {
      if (n.current >= v) {
        n.current = 0;
        const D = (o - O / 258 * o) / o * 100, J = (-o + O / 258 * o * 2) / o * 100, ce = r.current === v ? {
          startY: D,
          barHeight: J
        } : null;
        r.current >= t ? r.current = v : r.current += v, l.length > (m ? $ : Y) / v && l.pop(), l.unshift(ce);
      }
      n.current += 1;
    }
    !m && R(), S && Ce({
      context: p,
      rounded: g,
      color: y,
      x: m ? $ : Y,
      y: o - O / 258 * o,
      h: -o + O / 258 * o * 2,
      w: v
    });
    let G = (m ? $ : Y) - n.current;
    l.forEach((D) => {
      D && Ce({
        context: p,
        color: y,
        rounded: g,
        x: G,
        y: D.startY * o / 100 > o / 2 - 1 ? o / 2 - 1 : D.startY * o / 100,
        h: D.barHeight * o / 100 > 2 ? D.barHeight * o / 100 : 2,
        w: v
      }), G -= v;
    });
  } else
    l.length = 0;
  function R() {
    ct({
      context: p,
      color: z,
      rounded: g,
      width: $,
      height: o,
      barWidth: v
    });
  }
}, Ve = (e) => {
  const t = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), n = e % 60, i = Math.floor(
    (n - Math.floor(n)) * 1e3
  );
  return t > 0 ? `${String(t).padStart(2, "0")}:${String(r).padStart(
    2,
    "0"
  )}:${String(Math.floor(n)).padStart(2, "0")}:${String(
    i
  ).charAt(0)}` : r > 0 ? `${String(r).padStart(2, "0")}:${String(
    Math.floor(n)
  ).padStart(2, "0")}:${String(i).charAt(0)}` : `${String(Math.floor(n)).padStart(2, "0")}:${String(
    i
  ).charAt(0)}`;
}, st = (e) => {
  const t = Math.floor(e / 1e3), r = Math.floor(t / 3600), n = Math.floor(t % 3600 / 60), i = t % 60;
  return r > 0 ? `${String(r).padStart(2, "0")}:${String(n).padStart(
    2,
    "0"
  )}:${String(i).padStart(2, "0")}` : `${String(n).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
};
function Be(e) {
  if (typeof e == "string") {
    const t = Number(e);
    if (!Number.isNaN(t))
      return `${Math.trunc(t / 2) * 2}px`;
  }
  return e;
}
const ot = ({
  bufferData: e,
  height: t,
  width: r,
  barWidth: n,
  gap: i
}) => {
  const u = r / (n + i * n), w = Math.floor(e.length / u), l = t / 2;
  let M = [], v = 0;
  for (let y = 0; y < u; y++) {
    const z = [];
    let g = 0;
    for (let m = 0; m < w && y * w + m < e.length; m++) {
      const f = e[y * w + m];
      f > 0 && (z.push(f), g++);
    }
    const S = z.reduce((m, f) => m + f, 0) / g;
    S > v && (v = S), M.push({ max: S });
  }
  if (l * 0.95 > v * l) {
    const y = l * 0.95 / v;
    M = M.map((z) => ({
      max: z.max > 0.01 ? z.max * y : 1
    }));
  }
  return M;
}, at = (e) => {
  if (!e)
    return "";
  const t = e.match(/audio\/([^;]+)/);
  return t && t.length >= 2 ? `.${t[1]}` : "";
}, ut = (e) => {
  const t = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), n = e % 60, i = Math.floor(
    (n - Math.floor(n)) * 1e3
  );
  return t > 0 ? `${String(t).padStart(2, "0")}:${String(r).padStart(
    2,
    "0"
  )}:${String(Math.floor(n)).padStart(2, "0")}}h` : r > 0 ? `${String(r).padStart(2, "0")}:${String(
    Math.floor(n)
  ).padStart(2, "0")}m` : `${String(Math.floor(n)).padStart(2, "0")}:${String(
    i
  ).charAt(0)}${String(i).charAt(1)}s`;
}, ht = (e) => {
  onmessage = (t) => {
    postMessage(e(t.data));
  };
};
function lt({
  fn: e,
  initialValue: t,
  onMessageReceived: r
}) {
  const [n, i] = h(t);
  return {
    result: n,
    setResult: i,
    run: (w) => {
      const l = new Worker(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        URL.createObjectURL(new Blob([`(${ht})(${e})`]))
      );
      l.onmessage = (M) => {
        M.data && (i(M.data), r && r(), l.terminate());
      }, l.onerror = (M) => {
        console.error(M.message), l.terminate();
      }, l.postMessage(w);
    }
  };
}
const mt = (e, t = 250) => {
  const r = N();
  return tt(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...n) => {
      const i = () => {
        clearTimeout(r.current), e(...n);
      };
      clearTimeout(r.current), r.current = setTimeout(i, t);
    },
    [e, t]
  );
};
const vt = ({
  color: e = "#000000",
  stroke: t = 2,
  className: r
}) => /* @__PURE__ */ a(
  "svg",
  {
    viewBox: "0 0 23 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    children: /* @__PURE__ */ a(
      "path",
      {
        d: "M1.1 16.72c0 3 .96 5.8 3.61 7.95a9.96 9.96 0 0 0 6.5 2.17m0 0v4.34h4.34-8.67m4.34-4.34c2.35 0 4.42-.48 6.5-2.17a9.87 9.87 0 0 0 3.61-7.95M11.22 1.82c-1.45 0-2.5.37-3.3.93a5.6 5.6 0 0 0-1.84 2.4c-.9 2.06-1.1 4.77-1.1 7.24 0 2.46.2 5.17 1.1 7.24a5.6 5.6 0 0 0 1.84 2.4c.8.55 1.85.92 3.3.92 1.44 0 2.5-.37 3.29-.93a5.6 5.6 0 0 0 1.84-2.4c.9-2.06 1.1-4.77 1.1-7.23 0-2.47-.2-5.18-1.1-7.24a5.6 5.6 0 0 0-1.84-2.4 5.52 5.52 0 0 0-3.3-.93Z",
        stroke: e,
        strokeWidth: t,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Pe = ({
  color: e = "#FFFFFF",
  reflect: t
}) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0.92 17.54 48.27 14.92",
    className: `voice-visualizer__canvas-audio-wave-icon ${t ? "voice-visualizer__canvas-audio-wave-icon2" : ""}`,
    children: /* @__PURE__ */ a(
      "path",
      {
        d: "M.92 24.63h.21v.75H.92zm.42-1.39h.21v3.52h-.21zm.43.68h.21v2.17h-.21zM2.2 22h.21v6.01H2.2zm.43-1.27h.21v8.55h-.21zm.43 2.07h.21v4.4h-.21zm.43 1.22h.21v1.97h-.21zm.43.47h.21v1.03h-.21zm.43-1.66h.21v4.35h-.21zm.43-1.74h.21v7.82h-.21zm.43 1.94h.21v3.94h-.21zm.43 1.07h.21v1.81h-.21zm.42-.94h.21v3.68h-.21zm.43.91h.21v1.86h-.21zm.43-.23h.21v2.33h-.21zm.43.46h.21v1.4h-.21zm.43-.7h.21v2.8h-.21zm.43-1.6h.21v6.01h-.21zm.43-2.23h.21v10.46h-.21zm.43-1.4h.21v13.26h-.21zm.43.62h.21v12.02H9.5zm.43 1.64h.21v8.75h-.21zm.43 1.37h.21v6.01h-.21zm.43-1.87H11v9.74h-.21zm.42 1.32h.21v7.1h-.21zm.43-2.64h.21v12.38h-.21zm.43 1.61h.21v9.17h-.21zM12.5 22h.21v6.01h-.21zm.43 1.32h.21v3.37h-.21zm.43-2.51h.21v8.39h-.21zm.43.59H14v7.2h-.21zm.43 1.79h.21v3.62h-.21zm.43.41h.21v2.8h-.21zm.43.57h.21v1.66h-.21zm.43-1.11h.21v3.88h-.21zm.42-2.98h.21v9.84h-.21zm.43 1.06h.21v7.72h-.21zm.43 3.19H17v1.35h-.21zm.86-2.33h.21v6.01h-.21zm-.43 1.4h.21v3.21h-.21zm1.29.15h.21v2.9h-.21zm.43.68h.21v1.55h-.21zm-.86-.76h.21v3.05h-.21zm1.29-.05h.21v3.16h-.21zm.43-.64h.21v4.45h-.21zm.43.38h.21v3.68h-.21zm.42-.49h.21v4.66h-.21zm.43 1.32h.21v2.02h-.21zm.43.37h.21v1.29h-.21zm.43.31h.21v.67h-.21zm.43-.39h.21v1.45h-.21zm.43-1.35h.21v4.14h-.21zm.86.73h.21v2.69h-.21zm-.43.44h.21v1.81h-.21zm1.29-3.45h.21v8.7h-.21zm.43 1.71h.21v5.28h-.21zm-.86-2.3h.21v9.89h-.21zm1.29 3.36h.21v3.16h-.21zM25.8 22h.21v6.01h-.21zm.43 1.42h.21v3.16h-.21zm.43.88h.21v1.4h-.21zm.43-.93h.21v3.26h-.21zm.43-1.37h.21v6.01h-.21zm.43-.93h.21v7.87h-.21zm.43-.76h.21v9.38h-.21zm.43 1.69h.21v6.01h-.21zm.86 1.92h.21v2.17h-.21zm-.43-.6h.21v3.37h-.21zm1.28.05h.21v3.26h-.21zm.43.67h.21v1.91h-.21zm-.85-.51h.21v2.95h-.21zm1.28-.13h.21v3.21h-.21zm.43-1.4h.21v6.01h-.21zm.43-.99h.21v7.98h-.21zm.43 1.77h.21v4.45h-.21zm.43-1.22h.21v6.89h-.21zm.43 1.6h.21v3.68h-.21zm.43-.28h.21v4.25h-.21zm.43-.6h.21v5.44h-.21zm.43-.28h.21v6.01h-.21zm.85 2.02h.21v1.97h-.21zm-.43-.57h.21v3.11h-.21zm1.29.93h.21v1.24h-.21zm.43-.65h.21v2.54h-.21zm-.86-.28h.21v3.11h-.21zm1.29.83h.21v1.45h-.21zm.43-.99h.21v3.42h-.21zm.43-.1h.21v3.62h-.21zm.43-.7h.21v5.02h-.21zm.43.8h.21v3.42h-.21zm.43-1.29h.21v6.01h-.21zm.42-1.71h.21v9.43h-.21zm.43 2.38h.21v4.66h-.21zm.43.65h.21v3.37h-.21zm.86.08h.21v3.21h-.21zm-.43.54h.21v2.12h-.21zm1.29-.05h.21v2.23h-.21zm.43.28h.21v1.66h-.21zm-.86.16h.21v1.35h-.21zm1.29.21h.21v.93h-.21zm.43-6.04h.21v13h-.21zm.43.8h.21v11.4h-.21zm.43-1.76h.21v14.92h-.21zm.42 1.09h.21v12.74h-.21zm.43 1.17h.21v10.41h-.21zm.43 1.32h.21v7.77h-.21zm.43 1.6h.21v4.56h-.21zm.43 1.17h.21v2.23h-.21zm.86-.08h.21v2.38h-.21zm-.43-.34h.21v3.05h-.21zm1.29-.1h.21v3.26h-.21zm.43.93h.21v1.4h-.21zm-.86-.02h.21v1.45h-.21z",
        fill: e
      }
    )
  }
), Qe = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMzMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxwYXRoIGQ9Ik0xLjEgMTYuNzJjMCAzIC45NiA1LjggMy42MSA3Ljk1YTkuOTYgOS45NiAwIDAgMCA2LjUgMi4xN20wIDB2NC4zNGg0LjM0LTguNjdtNC4zNC00LjM0YzIuMzUgMCA0LjQyLS40OCA2LjUtMi4xN2E5Ljg3IDkuODcgMCAwIDAgMy42MS03Ljk1TTExLjIyIDEuODJjLTEuNDUgMC0yLjUuMzctMy4zLjkzYTUuNiA1LjYgMCAwIDAtMS44NCAyLjRjLS45IDIuMDYtMS4xIDQuNzctMS4xIDcuMjQgMCAyLjQ2LjIgNS4xNyAxLjEgNy4yNGE1LjYgNS42IDAgMCAwIDEuODQgMi40Yy44LjU1IDEuODUuOTIgMy4zLjkyIDEuNDQgMCAyLjUtLjM3IDMuMjktLjkzYTUuNiA1LjYgMCAwIDAgMS44NC0yLjRjLjktMi4wNiAxLjEtNC43NyAxLjEtNy4yMyAwLTIuNDctLjItNS4xOC0xLjEtNy4yNGE1LjYgNS42IDAgMCAwLTEuODQtMi40IDUuNTIgNS41MiAwIDAgMC0zLjMtLjkzWiIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K", ft = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxwYXRoIGQ9Ik0xOC43NSA2LjE2YzQuMzEgMi42IDYuNDYgMy45IDYuNDYgNS44NCAwIDEuOTUtMi4xNSAzLjI0LTYuNDYgNS44NGwtNC44NCAyLjkyYy00LjMxIDIuNi02LjQ2IDMuODktOC4wOCAyLjkyLTEuNjItLjk4LTEuNjItMy41Ny0xLjYyLTguNzZWOS4wOGMwLTUuMTkgMC03Ljc4IDEuNjItOC43NiAxLjYyLS45NyAzLjc3LjMzIDguMDggMi45Mmw0Ljg0IDIuOTJaIiBmaWxsPSIjZmZmIi8+DQo8L3N2Zz4NCg==", We = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxwYXRoIGQ9Ik0xNCAzLjVhMy41IDMuNSAwIDEgMSA3IDB2MjJhMy41IDMuNSAwIDEgMS03IDB2LTIyWiIgZmlsbD0iI2ZmZiIvPg0KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyOSIgcng9IjMuNSIgZmlsbD0iI2ZmZiIvPg0KPC9zdmc+DQo=", dt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxyZWN0IHg9Ii4yMSIgd2lkdGg9IjI2IiBoZWlnaHQ9IjI1IiByeD0iNSIgZmlsbD0iI2ZmZiIvPg0KPC9zdmc+DQo=", It = ({
  controls: {
    audioRef: e,
    audioData: t,
    isRecordingInProgress: r,
    recordedBlob: n,
    duration: i,
    currentAudioTime: u,
    audioSrc: w,
    bufferFromRecordedBlob: l,
    togglePauseResume: M,
    startRecording: v,
    stopRecording: y,
    saveAudioFile: z,
    isAvailableRecordedAudio: g,
    isPausedRecordedAudio: S,
    isPausedRecording: m,
    isProcessingStartRecording: f,
    isProcessingRecordedAudio: p,
    isCleared: o,
    formattedDuration: $,
    formattedRecordingTime: Y,
    formattedRecordedAudioCurrentTime: R,
    clearCanvas: O,
    setCurrentAudioTime: G,
    isProcessingOnResize: D,
    _setIsProcessingOnResize: J,
    _setIsProcessingAudioOnComplete: ce
  },
  width: B = "100%",
  height: de = 200,
  speed: ie = 3,
  backgroundColor: P = "transparent",
  mainBarColor: C = "#FFFFFF",
  secondaryBarColor: Z = "#5e5e5e",
  barWidth: se = 2,
  gap: Se = 1,
  rounded: H = 5,
  isControlPanelShown: oe = !0,
  isDownloadAudioButtonShown: X = !1,
  animateCurrentPick: ae = !0,
  fullscreen: ue = !1,
  onlyRecording: q = !1,
  isDefaultUIShown: ze = !0,
  defaultMicrophoneIconColor: Ee = C,
  defaultAudioWaveIconColor: ge = C,
  mainContainerClassName: Ie,
  canvasContainerClassName: he,
  isProgressIndicatorShown: De = !q,
  progressIndicatorClassName: le,
  isProgressIndicatorTimeShown: L = !0,
  progressIndicatorTimeClassName: U,
  isProgressIndicatorOnHoverShown: K = !q,
  progressIndicatorOnHoverClassName: me,
  isProgressIndicatorTimeOnHoverShown: ee = !0,
  progressIndicatorTimeOnHoverClassName: _,
  isAudioProcessingTextShown: E = !0,
  audioProcessingTextClassName: s,
  controlButtonsClassName: Me
}) => {
  const [pe, xe] = h(0), [j, Te] = h(0), [ve, je] = h(0), [Le, $e] = h(0), [Q, fe] = h(!1), [Ae, Oe] = h(window.innerWidth), [_e, W] = h(!1), be = Ae < 768, te = Math.trunc(ie), re = Math.trunc(Se), x = Math.trunc(
    be && re > 0 ? se + 1 : se
  ), we = x + re * x, I = N(null), c = N([]), d = N(te), k = N(x), V = N(x), T = N(null), {
    result: ye,
    setResult: Je,
    run: Xe
  } = lt({
    fn: ot,
    initialValue: [],
    onMessageReceived: Ke
  }), qe = mt(He);
  F(() => {
    if (!T.current)
      return;
    const A = () => {
      Oe(window.innerWidth), g ? (J(!0), W(!0), qe()) : He();
    }, b = new ResizeObserver(A);
    return b.observe(T.current), () => {
      b.disconnect();
    };
  }, [B, g]), rt(() => {
    I.current && ((d.current >= te || !t.length) && (d.current = t.length ? 0 : te, it({
      audioData: t,
      unit: we,
      index: k,
      index2: V,
      canvas: I.current,
      picks: c.current,
      isRecordingInProgress: r,
      isPausedRecording: m,
      backgroundColor: P,
      mainBarColor: C,
      secondaryBarColor: Z,
      barWidth: x,
      rounded: H,
      animateCurrentPick: ae,
      fullscreen: ue
    })), d.current += 1);
  }, [
    I.current,
    t,
    x,
    P,
    C,
    Z,
    H,
    ue,
    ze,
    Le
  ]), F(() => {
    var A, b;
    if (g)
      return Q ? (A = I.current) == null || A.addEventListener("mouseleave", ke) : (b = I.current) == null || b.addEventListener("mouseenter", Ue), () => {
        var Ne, Re;
        Q ? (Ne = I.current) == null || Ne.removeEventListener("mouseleave", ke) : (Re = I.current) == null || Re.removeEventListener("mouseenter", Ue);
      };
  }, [Q, g]), F(() => {
    var b;
    if (!l || !I.current || r || _e)
      return;
    if (q) {
      O();
      return;
    }
    c.current = [];
    const A = l.getChannelData(0);
    return Xe({
      bufferData: A,
      height: ve,
      width: Le,
      barWidth: x,
      gap: re
    }), (b = I.current) == null || b.addEventListener("mousemove", Fe), () => {
      var Ne;
      (Ne = I.current) == null || Ne.removeEventListener(
        "mousemove",
        Fe
      );
    };
  }, [
    l,
    j,
    ve,
    Se,
    se,
    _e
  ]), F(() => {
    if (!(q || !(ye != null && ye.length) || !I.current || p)) {
      if (o) {
        Je([]);
        return;
      }
      nt({
        barsData: ye,
        canvas: I.current,
        barWidth: x,
        gap: re,
        backgroundColor: P,
        mainBarColor: C,
        secondaryBarColor: Z,
        currentAudioTime: u,
        rounded: H,
        duration: i
      });
    }
  }, [
    ye,
    u,
    o,
    H,
    P,
    C,
    Z
  ]), F(() => {
    p && I.current && Ze({
      canvas: I.current,
      backgroundColor: P
    });
  }, [p]);
  function He() {
    if (!T.current || !I.current)
      return;
    d.current = te;
    const A = Math.trunc(
      T.current.clientHeight * window.devicePixelRatio / 2
    ) * 2;
    Te(T.current.clientWidth), je(A), $e(
      Math.round(
        T.current.clientWidth * window.devicePixelRatio
      )
    ), W(!1);
  }
  function Ke() {
    J(!1), ce(!1), e != null && e.current && !D && (e.current.src = w);
  }
  const Ue = () => {
    fe(!0);
  }, ke = () => {
    fe(!1);
  }, Fe = (A) => {
    xe(A.offsetX);
  }, et = (A) => {
    if (e != null && e.current && I.current) {
      const b = i / j * (A.clientX - I.current.getBoundingClientRect().left);
      e.current.currentTime = b, G(b);
    }
  }, Ye = u / i * j;
  return /* @__PURE__ */ ne("div", { className: `voice-visualizer ${Ie ?? ""}`, children: [
    /* @__PURE__ */ ne(
      "div",
      {
        className: `voice-visualizer__canvas-container ${he ?? ""}`,
        ref: T,
        style: { width: Be(B) },
        children: [
          /* @__PURE__ */ a(
            "canvas",
            {
              ref: I,
              width: Le,
              height: ve,
              onClick: et,
              style: {
                height: Be(de),
                width: j
              },
              children: "Your browser does not support HTML5 Canvas."
            }
          ),
          ze && o && /* @__PURE__ */ ne(Ge, { children: [
            /* @__PURE__ */ a(Pe, { color: ge }),
            /* @__PURE__ */ a(Pe, { color: ge, reflect: !0 }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                onClick: v,
                className: "voice-visualizer__canvas-microphone-btn",
                children: /* @__PURE__ */ a(
                  vt,
                  {
                    color: Ee,
                    stroke: 0.5,
                    className: "voice-visualizer__canvas-microphone-icon"
                  }
                )
              }
            )
          ] }),
          E && p && /* @__PURE__ */ a(
            "p",
            {
              className: `voice-visualizer__canvas-audio-processing ${s ?? ""}`,
              style: { color: C },
              children: "Processing Audio..."
            }
          ),
          Q && g && !p && !be && K && /* @__PURE__ */ a(
            "div",
            {
              className: `voice-visualizer__progress-indicator-hovered ${me ?? ""}`,
              style: {
                left: pe
              },
              children: ee && /* @__PURE__ */ a(
                "p",
                {
                  className: `voice-visualizer__progress-indicator-hovered-time 
                    ${j - pe < 70 ? "voice-visualizer__progress-indicator-hovered-time-left" : ""} 
                    ${_ ?? ""}`,
                  children: Ve(
                    i / j * pe
                  )
                }
              )
            }
          ),
          De && g && !p && i ? /* @__PURE__ */ a(
            "div",
            {
              className: `voice-visualizer__progress-indicator ${le ?? ""}`,
              style: {
                left: Ye < j - 1 ? Ye : j - 1
              },
              children: L && /* @__PURE__ */ a(
                "p",
                {
                  className: `voice-visualizer__progress-indicator-time ${j - u * j / i < 70 ? "voice-visualizer__progress-indicator-time-left" : ""} ${U ?? ""}`,
                  children: R
                }
              )
            }
          ) : null
        ]
      }
    ),
    oe && /* @__PURE__ */ ne(Ge, { children: [
      /* @__PURE__ */ ne("div", { className: "voice-visualizer__audio-info-container", children: [
        r && /* @__PURE__ */ a("p", { className: "voice-visualizer__audio-info-time", children: Y }),
        i && !p ? /* @__PURE__ */ a("p", { children: $ }) : null
      ] }),
      /* @__PURE__ */ ne("div", { className: "voice-visualizer__buttons-container", children: [
        r && /* @__PURE__ */ a("div", { className: "voice-visualizer__btn-container", children: /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: `voice-visualizer__btn-left ${m ? "voice-visualizer__btn-left-microphone" : ""}`,
            onClick: M,
            children: /* @__PURE__ */ a(
              "img",
              {
                src: m ? Qe : We,
                alt: m ? "Play" : "Pause"
              }
            )
          }
        ) }),
        !o && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: `voice-visualizer__btn-left ${r || f ? "voice-visualizer__visually-hidden" : ""}`,
            onClick: M,
            disabled: p,
            children: /* @__PURE__ */ a(
              "img",
              {
                src: S ? ft : We,
                alt: S ? "Play" : "Pause"
              }
            )
          }
        ),
        o && /* @__PURE__ */ ne(
          "button",
          {
            type: "button",
            className: `voice-visualizer__btn-center voice-visualizer__relative ${f ? "voice-visualizer__btn-center--border-transparent" : ""}`,
            onClick: v,
            disabled: f,
            children: [
              f && /* @__PURE__ */ a("div", { className: "voice-visualizer__spinner-wrapper", children: /* @__PURE__ */ a("div", { className: "voice-visualizer__spinner" }) }),
              /* @__PURE__ */ a("img", { src: Qe, alt: "Microphone" })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: `voice-visualizer__btn-center voice-visualizer__btn-center-pause ${r ? "" : "voice-visualizer__visually-hidden"}`,
            onClick: y,
            children: /* @__PURE__ */ a("img", { src: dt, alt: "Stop" })
          }
        ),
        !o && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: O,
            className: `voice-visualizer__btn ${Me ?? ""}`,
            disabled: p,
            children: "Clear"
          }
        ),
        X && n && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: z,
            className: `voice-visualizer__btn ${Me ?? ""}`,
            disabled: p,
            children: "Download Audio"
          }
        )
      ] })
    ] })
  ] });
};
function Mt({
  onStartRecording: e,
  onStopRecording: t,
  onPausedRecording: r,
  onResumedRecording: n,
  onClearCanvas: i,
  onEndAudioPlayback: u,
  onStartAudioPlayback: w,
  onPausedAudioPlayback: l,
  onResumedAudioPlayback: M,
  onErrorPlayingAudio: v,
  shouldHandleBeforeUnload: y = !0
} = {}) {
  const [z, g] = h(!1), [S, m] = h(!1), [f, p] = h(null), [o, $] = h(new Uint8Array(0)), [Y, R] = h(!1), [O, G] = h(null), [D, J] = h(null), [ce, B] = h(0), [de, ie] = h(0), [P, C] = h(0), [Z, se] = h(""), [Se, H] = h(!0), [oe, X] = h(0), [ae, ue] = h(!0), [q, ze] = h(!1), [Ee, ge] = h(!1), [Ie, he] = h(null), [De, le] = h(!1), L = N(null), U = N(null), K = N(null), me = N(null), ee = N(null), _ = N(null), E = N(null), s = N(null), Me = !!(D && !Y), pe = ut(P), xe = st(ce), j = Ve(oe), Te = q || Y;
  F(() => {
    if (!z || S)
      return;
    const d = setInterval(() => {
      const k = performance.now();
      B((V) => V + (k - de)), ie(k);
    }, 1e3);
    return () => clearInterval(d);
  }, [de, S, z]), F(() => {
    if (Ie) {
      W();
      return;
    }
  }, [Ie]), F(() => () => {
    W();
  }, []), F(() => (!ae && y && window.addEventListener("beforeunload", ve), () => {
    window.removeEventListener("beforeunload", ve);
  }), [ae, y]);
  const ve = (c) => {
    c.preventDefault(), c.returnValue = "";
  }, je = async (c) => {
    if (c)
      try {
        if (c.size === 0)
          throw new Error("Error: The audio blob is empty");
        const d = URL.createObjectURL(c);
        se(d);
        const k = await c.arrayBuffer(), T = await new AudioContext().decodeAudioData(k);
        J(T), C(T.duration - 0.06), he(null);
      } catch (d) {
        console.error("Error processing the audio blob:", d), he(
          d instanceof Error ? d : new Error("Error processing the audio blob")
        );
      }
  }, Le = (c) => {
    c instanceof Blob && (W(), ge(!0), ue(!1), R(!0), g(!1), B(0), m(!1), s.current = new Audio(), G(c), je(c));
  }, $e = () => {
    le(!0), navigator.mediaDevices.getUserMedia({ audio: !0 }).then((c) => {
      ue(!1), le(!1), g(!0), ie(performance.now()), p(c), U.current = new window.AudioContext(), K.current = U.current.createAnalyser(), me.current = new Uint8Array(
        K.current.frequencyBinCount
      ), ee.current = U.current.createMediaStreamSource(c), ee.current.connect(K.current), L.current = new MediaRecorder(c), L.current.addEventListener(
        "dataavailable",
        fe
      ), L.current.start(), e && e(), Q();
    }).catch((c) => {
      le(!1), he(
        c instanceof Error ? c : new Error("Error starting audio recording")
      );
    });
  }, Q = () => {
    K.current.getByteTimeDomainData(me.current), $(new Uint8Array(me.current)), _.current = requestAnimationFrame(Q);
  }, fe = (c) => {
    L.current && (L.current = null, s.current = new Audio(), G(c.data), je(c.data));
  }, Ae = () => {
    s.current && (X(s.current.currentTime), E.current = requestAnimationFrame(Ae));
  }, Oe = () => {
    z || De || (ae || W(), $e());
  }, _e = () => {
    z && (g(!1), L.current && (L.current.stop(), L.current.removeEventListener(
      "dataavailable",
      fe
    )), f == null || f.getTracks().forEach((c) => c.stop()), _.current && cancelAnimationFrame(_.current), ee.current && ee.current.disconnect(), U.current && U.current.state !== "closed" && U.current.close(), R(!0), B(0), m(!1), t && t());
  }, W = () => {
    _.current && (cancelAnimationFrame(_.current), _.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null), L.current && (L.current.removeEventListener(
      "dataavailable",
      fe
    ), L.current.stop(), L.current = null), f == null || f.getTracks().forEach((c) => c.stop()), s != null && s.current && (s.current.removeEventListener("ended", we), s.current.pause(), s.current.src = "", s.current = null), U.current = null, K.current = null, me.current = null, ee.current = null, p(null), le(!1), g(!1), ge(!1), R(!1), G(null), J(null), B(0), ie(0), C(0), se(""), X(0), H(!0), m(!1), ze(!1), $(new Uint8Array(0)), he(null), ue(!0), i && i();
  }, be = () => {
    if (s.current && s.current.paused) {
      const c = s.current.play();
      c !== void 0 && c.catch((d) => {
        console.error(d), v && v(
          d instanceof Error ? d : new Error("Error playing audio")
        );
      });
    }
  }, te = () => {
    !s.current || z || (requestAnimationFrame(Ae), be(), s.current.addEventListener("ended", we), H(!1), w && oe === 0 && w(), M && oe !== 0 && M());
  }, re = () => {
    if (!s.current || z)
      return;
    E.current && cancelAnimationFrame(E.current), s.current.removeEventListener("ended", we), s.current.pause(), H(!0);
    const c = s.current.currentTime;
    X(c), s.current.currentTime = c, l && l();
  }, x = () => {
    var c, d, k;
    if (z) {
      m((V) => !V), ((c = L.current) == null ? void 0 : c.state) === "recording" ? ((d = L.current) == null || d.pause(), B((V) => V + (performance.now() - de)), _.current && cancelAnimationFrame(_.current), r && r()) : (_.current = requestAnimationFrame(Q), (k = L.current) == null || k.resume(), ie(performance.now()), n && n());
      return;
    }
    s.current && Me && (s.current.paused ? te() : re());
  }, we = () => {
    E.current && cancelAnimationFrame(E.current), H(!0), s != null && s.current && (s.current.currentTime = 0, X(0), u && u());
  }, I = () => {
    var d;
    if (!Z)
      return;
    const c = document.createElement("a");
    c.href = Z, c.download = `recorded_audio${at(
      (d = L.current) == null ? void 0 : d.mimeType
    )}`, document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(Z);
  };
  return {
    audioRef: s,
    isRecordingInProgress: z,
    isPausedRecording: S,
    audioData: o,
    recordingTime: ce,
    isProcessingRecordedAudio: Te,
    recordedBlob: O,
    mediaRecorder: L.current,
    duration: P,
    currentAudioTime: oe,
    audioSrc: Z,
    isPausedRecordedAudio: Se,
    bufferFromRecordedBlob: D,
    isCleared: ae,
    isAvailableRecordedAudio: Me,
    formattedDuration: pe,
    formattedRecordingTime: xe,
    formattedRecordedAudioCurrentTime: j,
    startRecording: Oe,
    togglePauseResume: x,
    startAudioPlayback: te,
    stopAudioPlayback: re,
    stopRecording: _e,
    saveAudioFile: I,
    clearCanvas: W,
    setCurrentAudioTime: X,
    error: Ie,
    isProcessingOnResize: q,
    isProcessingStartRecording: De,
    isPreloadedBlob: Ee,
    setPreloadedAudioBlob: Le,
    _setIsProcessingAudioOnComplete: R,
    _setIsProcessingOnResize: ze
  };
}
export {
  It as VoiceVisualizer,
  Mt as useVoiceVisualizer
};
