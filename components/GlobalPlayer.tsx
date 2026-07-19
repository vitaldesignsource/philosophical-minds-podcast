"use client";

import type { PodcastEpisode } from "@/lib/rss";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "philosophicalminds:lastEpisode";
const POSITION_PREFIX = "philosophicalminds:position:";
const WAVE_TEXT = [
  "ΤΟ ΕΝ",
  "ΝΟΥΣ",
  "ΛΟΓΟΣ",
  "ΣΟΦΙΑ",
  "ΨΥΧΗ",
  "ΑΙΘΗΡ",
  "ΑΡΧΗ",
  "ΚΟΣΜΟΣ",
  "ΓΝΩΣΙΣ",
  "ΑΛΗΘΕΙΑ",
  "ΜΟΡΦΗ",
  "ΥΛΗ",
  "ΝΟΗΣΙΣ",
  "ΠΝΕΥΜΑ",
  "ΦΙΛΟΣΟΦΙΑ",
  "ΕΠΙΣΤΡΟΦΗ",
];

type Props = {
  initialEpisode?: PodcastEpisode;
};

export function GlobalPlayer({ initialEpisode }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const waveformRef = useRef<HTMLCanvasElement>(null);
  const [episode, setEpisode] = useState<PodcastEpisode | null>(initialEpisode ?? null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState("1");
  const [volume, setVolume] = useState("0.85");
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const savedEpisode = JSON.parse(saved) as PodcastEpisode;
        if (savedEpisode?.audioUrl) setEpisode(savedEpisode);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    const handlePlay = (event: Event) => {
      const nextEpisode = (event as CustomEvent<PodcastEpisode>).detail;
      if (!nextEpisode?.audioUrl) return;
      const audio = audioRef.current;
      if (!audio) return;

      setEpisode(nextEpisode);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextEpisode));

      audio.src = nextEpisode.audioUrl;
      audio.load();

      const savedPosition = Number(window.localStorage.getItem(`${POSITION_PREFIX}${nextEpisode.id}`)) || 0;
      if (savedPosition > 0) {
        const restorePosition = () => {
          audio.currentTime = Math.min(savedPosition, audio.duration || savedPosition);
        };

        if (audio.readyState >= 1) restorePosition();
        else audio.addEventListener("loadedmetadata", restorePosition, { once: true });
      }

      audio.play().catch(() => setIsPlaying(false));
    };

    window.addEventListener("philosophicalminds:play", handlePlay);
    return () => window.removeEventListener("philosophicalminds:play", handlePlay);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.playbackRate = Number(speed);
    audio.volume = Number(volume);
  }, [speed, volume, episode]);

  const progress = useMemo(() => {
    if (!duration) return 0;
    return Math.min(100, (currentTime / duration) * 100);
  }, [currentTime, duration]);

  useEffect(() => {
    const canvas = waveformRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const wavePoint = (
      x: number,
      layer: number,
      phase: number,
      amplitudeScale: number,
    ) => {
      const normalized = width ? x / width : 0;
      const envelope = 0.2 + Math.pow(Math.max(0, Math.sin(normalized * Math.PI)), 0.68) * 0.8;
      const frequencies = [5.4, 8.2, 12.6];
      const directions = [1.18, -0.76, 0.48];
      const harmonic =
        Math.sin(normalized * Math.PI * frequencies[layer] + phase * directions[layer]) +
        Math.sin(normalized * Math.PI * (frequencies[layer] * 1.92) - phase * directions[layer] * 0.64) * 0.26;
      const layerStrength = [1, 0.62, 0.36][layer];

      return height * 0.5 + harmonic * height * 0.3 * envelope * layerStrength * amplitudeScale;
    };

    const draw = (timestamp: number) => {
      if (!width || !height) return;

      const audio = audioRef.current;
      const playbackTime = audio?.currentTime || 0;
      const moving = isPlaying && !motionPreference.matches;
      const phase = playbackTime * 1.4 + (moving ? timestamp * 0.00125 * Number(speed) : 0);
      const amplitudeScale = isPlaying ? 1 : 0.24;
      const liveProgress = duration && audio ? Math.min(1, Math.max(0, audio.currentTime / duration)) : 0;

      context.clearRect(0, 0, width, height);
      context.save();
      context.globalCompositeOperation = "lighter";
      context.lineCap = "round";
      context.lineJoin = "round";

      const layers = [
        { alpha: 0.95, blur: 13, lineWidth: 1.7 },
        { alpha: 0.48, blur: 9, lineWidth: 1.05 },
        { alpha: 0.24, blur: 6, lineWidth: 0.8 },
      ];

      layers.forEach((layer, layerIndex) => {
        const gradient = context.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgba(116, 72, 41, ${layer.alpha * 0.35})`);
        gradient.addColorStop(0.2, `rgba(211, 164, 91, ${layer.alpha * 0.72})`);
        gradient.addColorStop(0.5, `rgba(255, 231, 178, ${layer.alpha})`);
        gradient.addColorStop(0.8, `rgba(192, 118, 65, ${layer.alpha * 0.72})`);
        gradient.addColorStop(1, `rgba(104, 45, 39, ${layer.alpha * 0.32})`);

        context.beginPath();
        for (let x = 0; x <= width; x += 2) {
          const y = wavePoint(x, layerIndex, phase, amplitudeScale);
          if (x === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.strokeStyle = gradient;
        context.lineWidth = layer.lineWidth;
        context.shadowColor = layerIndex === 0 ? "rgba(239, 189, 111, 0.88)" : "rgba(173, 92, 57, 0.54)";
        context.shadowBlur = layer.blur;
        context.stroke();

        context.save();
        context.globalAlpha = 0.24;
        context.beginPath();
        for (let x = 0; x <= width; x += 3) {
          const sourceY = wavePoint(x, layerIndex, phase + 0.72, amplitudeScale);
          const reflectedY = height * 0.5 - (sourceY - height * 0.5) * 0.72;
          if (x === 0) context.moveTo(x, reflectedY);
          else context.lineTo(x, reflectedY);
        }
        context.stroke();
        context.restore();
      });

      for (let node = 1; node <= 9; node += 1) {
        const x = (width / 10) * node;
        const y = wavePoint(x, 0, phase, amplitudeScale);
        const pulse = isPlaying ? 1 + Math.sin(phase * 2.2 + node * 0.9) * 0.45 : 0.78;
        context.beginPath();
        context.arc(x, y, Math.max(0.8, 1.45 * pulse), 0, Math.PI * 2);
        context.fillStyle = "rgba(255, 225, 165, 0.92)";
        context.shadowColor = "rgba(229, 159, 80, 0.9)";
        context.shadowBlur = 10;
        context.fill();
      }

      if (liveProgress > 0) {
        const beaconX = width * liveProgress;
        const beaconGradient = context.createLinearGradient(0, 0, 0, height);
        beaconGradient.addColorStop(0, "rgba(240, 205, 139, 0)");
        beaconGradient.addColorStop(0.5, "rgba(255, 232, 177, 0.9)");
        beaconGradient.addColorStop(1, "rgba(240, 205, 139, 0)");
        context.beginPath();
        context.moveTo(beaconX, 3);
        context.lineTo(beaconX, height - 3);
        context.strokeStyle = beaconGradient;
        context.lineWidth = 1;
        context.shadowColor = "rgba(246, 183, 93, 0.95)";
        context.shadowBlur = 12;
        context.stroke();
      }

      context.restore();

      if (moving) animationFrame = window.requestAnimationFrame(draw);
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw(window.performance.now());
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [duration, episode?.id, isPlaying, speed]);

  function togglePlayback() {
    const audio = audioRef.current;
    if (!audio || !episode?.audioUrl) return;
    if (audio.paused) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }

  function seek(offset: number) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min((audio.duration || 0), audio.currentTime + offset));
  }

  function onTimeUpdate() {
    const audio = audioRef.current;
    if (!audio || !episode) return;
    setCurrentTime(audio.currentTime);
    window.localStorage.setItem(`${POSITION_PREFIX}${episode.id}`, String(audio.currentTime));
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={episode?.audioUrl || undefined}
        preload="metadata"
        onDurationChange={(event) => setDuration(event.currentTarget.duration || 0)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onTimeUpdate={onTimeUpdate}
      />
      {episode && (
        <aside
          className={`global-player ${isPlaying ? "global-player--playing" : ""} ${minimized ? "global-player--minimized" : ""}`}
          aria-label="Persistent podcast player"
        >
          <div className="global-player__art" style={{ backgroundImage: `url(${episode.artwork || "/philosophical-minds-hero.png"})` }} />
          <div className="global-player__main">
            <div className="global-player__meta">
              <span>{episode.guest || "Continue listening"}</span>
              <strong>{episode.title}</strong>
            </div>
            <div
              className="global-player__waveform"
              role="progressbar"
              aria-label="Playback progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
            >
              <canvas className="global-player__wave-canvas" ref={waveformRef} aria-hidden="true" />
              <span className="global-player__wave-axis" aria-hidden="true" />
              <div className="global-player__wave-text" aria-hidden="true">
                {WAVE_TEXT.map((term, index) => (
                  <span
                    key={`${term}-${index}`}
                    style={
                      {
                        "--wave-delay": `${index * -95}ms`,
                        "--wave-duration": `${1050 + (index % 5) * 145}ms`,
                      } as CSSProperties
                    }
                  >
                    {term}
                  </span>
                ))}
              </div>
              <span className="global-player__progress-fill" style={{ width: `${progress}%` }} />
              <span
                className="global-player__progress-head"
                style={{ left: `${Math.min(99, Math.max(1, progress))}%` }}
                aria-hidden="true"
              />
            </div>
            {!minimized && (
              <div className="global-player__controls">
                <button type="button" onClick={() => seek(-15)} aria-label="Rewind 15 seconds">
                  -15
                </button>
                <button
                  className="global-player__play-toggle"
                  type="button"
                  onClick={togglePlayback}
                  aria-label={isPlaying ? "Pause episode" : "Play episode"}
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button type="button" onClick={() => seek(30)} aria-label="Forward 30 seconds">
                  +30
                </button>
                <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                <label className="global-player__speed">
                  <span>Speed</span>
                  <select value={speed} onChange={(event) => setSpeed(event.target.value)} aria-label="Playback speed">
                    <option value="0.75">0.75x</option>
                    <option value="1">1x</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                  </select>
                </label>
                <label className="global-player__volume">
                  <span>Volume</span>
                  <input
                    aria-label="Volume"
                    max="1"
                    min="0"
                    step="0.05"
                    type="range"
                    value={volume}
                    onChange={(event) => setVolume(event.target.value)}
                  />
                </label>
                <a href={episode.sourceUrl || episode.audioUrl} target="_blank" rel="noreferrer">
                  Share
                </a>
              </div>
            )}
          </div>
          <button className="global-player__minimize" type="button" onClick={() => setMinimized((value) => !value)}>
            {minimized ? "Expand" : "Minimize"}
          </button>
        </aside>
      )}
    </>
  );
}

function formatTime(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}
