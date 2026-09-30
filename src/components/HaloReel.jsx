import * as React from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

const TAU = Math.PI * 2;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export function HaloReel({
  items,
  cardWidth = 250,
  cardHeight = 350,
  minScale = 0.4,
  radiusXRatio = 0.45,
  centerXRatio = 1, // FLIPPED TO RIGHT
  radiusYRatio = 0.4,
  autoPlay = true,
  holdDuration = 2000,
  stepDuration = 1000,
  pauseOnHover = true,
  draggable = true,
  spread = 1.3,
  maxCards = 64,
  dragSensitivity = 1,
  centerLabel,
  showCenterLabel = true,
  className = "",
  style,
  ...props
}) {
  const stageRef = React.useRef(null);
  const reduceMotion = useReducedMotion();

  const count = items.length;

  const rotation = useMotionValue(0);
  const draggingRef = React.useRef(false);
  const hoverRef = React.useRef(false);

  const [size, setSize] = React.useState({ w: 0, h: 0 });
  React.useEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const measure = () => setSize({ w: node.offsetWidth, h: node.offsetHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const radiusX = size.w * radiusXRatio;
  const radiusY = size.h * radiusYRatio;

  const slots = clamp(
    Math.ceil(
      TAU *
        Math.max(
          radiusX / (cardWidth * spread),
          radiusY / (cardHeight * spread),
        ),
    ),
    count,
    Math.max(count, maxCards),
  );
  const step = slots ? TAU / slots : 0;

  const fit = size.w
    ? clamp(
        Math.min(
          size.w / (radiusX + cardWidth),
          size.h / (2 * radiusY + cardHeight),
        ),
        0.45,
        1,
      )
    : 1;
  const cardW = cardWidth * fit;
  const cardH = cardHeight * fit;

  React.useEffect(() => {
    if (!autoPlay || reduceMotion || !count) return;

    let timer = 0;
    let controls;

    const tick = () => {
      timer = window.setTimeout(() => {
        if (draggingRef.current || (pauseOnHover && hoverRef.current)) {
          tick();
          return;
        }
        controls = animate(rotation, rotation.get() - step, {
          duration: stepDuration / 1000,
          ease: [0.4, 0, 0.2, 1],
          onComplete: tick,
        });
      }, holdDuration);
    };

    tick();
    return () => {
      window.clearTimeout(timer);
      controls?.stop();
    };
  }, [autoPlay, count, holdDuration, pauseOnHover, reduceMotion, rotation, step, stepDuration]);

  const dragRef = React.useRef({ left: 0, top: 0, angle: 0 });

  const pointerAngle = (e) => {
    const { left, top } = dragRef.current;
    return Math.atan2(
      (e.clientY - top - size.h / 2) / (radiusY || 1),
      (e.clientX - left - size.w * centerXRatio) / (radiusX || 1),
    );
  };

  const onPointerDown = (e) => {
    if (!draggable || (e.pointerType === "mouse" && e.button !== 0)) return;
    const rect = e.currentTarget.getBoundingClientRect();
    dragRef.current = { left: rect.left, top: rect.top, angle: 0 };
    dragRef.current.angle = pointerAngle(e);
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const angle = pointerAngle(e);
    const delta = ((angle - dragRef.current.angle + Math.PI * 3) % TAU) - Math.PI;
    dragRef.current.angle = angle;
    rotation.set(rotation.get() + delta * dragSensitivity);
  };

  const endDrag = (e) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    const snapped = Math.round(rotation.get() / step) * step;
    if (reduceMotion) {
      rotation.set(snapped);
      return;
    }
    animate(rotation, snapped, { duration: 0.5, ease: [0.16, 1, 0.3, 1] });
  };

  const spinBy = (direction) => {
    const target = Math.round(rotation.get() / step) * step - direction * step;
    if (reduceMotion) {
      rotation.set(target);
      return;
    }
    animate(rotation, target, {
      duration: stepDuration / 1000,
      ease: [0.4, 0, 0.2, 1],
    });
  };

  const onKeyDown = (e) => {
    const direction = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!direction) return;
    e.preventDefault();
    spinBy(direction);
  };

  if (!count) return null;

  return (
    <div
      ref={stageRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={props["aria-label"] ?? "Image carousel"}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={className}
      style={{
        position: 'relative',
        height: '100dvh',
        width: '100%',
        touchAction: 'pan-y',
        userSelect: 'none',
        overflow: 'hidden',
        outline: 'none',
        cursor: draggable ? (draggingRef.current ? 'grabbing' : 'grab') : 'auto',
        ...style
      }}
      {...props}
    >
      {showCenterLabel && centerLabel ? (
        <div
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: '0px',
            zIndex: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 80px', // Extra padding for breathing room
            right: radiusX + cardW / 2 + 50, // Ensures text stays completely on the left half
            left: 0
          }}
        >
          <div style={{ pointerEvents: 'auto', width: '100%' }}>
            {centerLabel}
          </div>
        </div>
      ) : null}

      {Array.from({ length: slots }, (_, i) => (
        <WheelCard
          key={i}
          item={items[i % count]}
          decorative={i >= count}
          index={i}
          step={step}
          rotation={rotation}
          radiusX={radiusX}
          radiusY={radiusY}
          centerXRatio={centerXRatio}
          minScale={minScale}
          width={cardW}
          height={cardH}
          onHoverChange={(hovered) => {
            hoverRef.current = hovered;
          }}
        />
      ))}
    </div>
  );
}

function WheelCard({
  item,
  index,
  step,
  rotation,
  radiusX,
  radiusY,
  centerXRatio,
  minScale,
  width,
  height,
  decorative,
  onHoverChange,
}) {
  const cos = useTransform(rotation, (r) => Math.cos(index * step + r));
  const sin = useTransform(rotation, (r) => Math.sin(index * step + r));

  const x = useTransform(cos, (c) => c * radiusX);
  const y = useTransform(sin, (s) => s * radiusY);
  const scale = useTransform(cos, (c) => minScale + (1 - minScale) * ((c + 1) / 2));
  const zIndex = useTransform(scale, (s) => Math.round(s * 1000));

  return (
    <motion.div
      role={decorative ? undefined : "group"}
      aria-roledescription={decorative ? undefined : "slide"}
      aria-hidden={decorative || undefined}
      onPointerEnter={() => onHoverChange(true)}
      onPointerLeave={() => onHoverChange(false)}
      style={{
        x,
        y,
        scale,
        zIndex,
        width,
        height,
        left: `${centerXRatio * 100}%`,
        top: "50%",
        marginLeft: -width / 2,
        marginTop: -height / 2,
        position: 'absolute',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
        borderRadius: '16px'
      }}
    >
      {item.src ? (
        <img
          src={item.src}
          alt={decorative ? "" : (item.alt ?? "")}
          draggable={false}
          style={{ pointerEvents: 'none', position: 'absolute', inset: 0, height: '100%', width: '100%', userSelect: 'none', objectFit: 'cover' }}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: '12px',
            textAlign: 'center',
            backgroundColor: item.bgColor || 'var(--primary-red)',
            color: item.textColor || 'white',
          }}
        >
          {item.title ? (
            <span style={{ fontSize: '1.5rem', fontWeight: 900, lineHeight: 1 }}>
              {item.title}
            </span>
          ) : null}
          {item.subtitle ? (
            <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.7 }}>
              {item.subtitle}
            </span>
          ) : null}
        </div>
      )}
    </motion.div>
  );
}

export default HaloReel;
