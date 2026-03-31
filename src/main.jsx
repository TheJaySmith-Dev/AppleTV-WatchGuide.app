import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import mainTeaseImage from '../assets/browse-apple-tv-main-tease.jpg';

const releaseDate = new Date('2026-04-11T09:00:00+02:00');

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTime() {
  const now = new Date();
  const diff = releaseDate - now;
  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', done: true };
  }
  return {
    days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: pad(Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: pad(Math.floor((diff / (1000 * 60)) % 60)),
    seconds: pad(Math.floor((diff / 1000) % 60)),
    done: false,
  };
}

function TimeCard(props) {
  return React.createElement(
    'div',
    {
      style: {
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '24px',
        padding: '20px 16px',
        minWidth: '100px',
        textAlign: 'center',
        boxShadow: '0 20px 80px rgba(0,0,0,0.35)',
        backdropFilter: 'blur(16px)',
      },
    },
    React.createElement('div', { style: { fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.06em' } }, props.value),
    React.createElement('div', { style: { marginTop: '6px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.58)' } }, props.label)
  );
}

function App() {
  const [time, setTime] = useState(getTime());

  useEffect(function () {
    const timer = setInterval(function () {
      setTime(getTime());
    }, 1000);
    return function () { clearInterval(timer); };
  }, []);

  return React.createElement(
    'div',
    {
      style: {
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif',
        color: '#fff',
        background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.09), transparent 25%), radial-gradient(circle at 80% 10%, rgba(70,100,255,0.14), transparent 22%), linear-gradient(180deg, #060608 0%, #020203 45%, #000 100%)',
      },
    },
    React.createElement(
      'div',
      { style: { width: 'min(1280px, calc(100% - 32px))', margin: '0 auto', padding: '28px 0 60px' } },
      React.createElement(
        'div',
        { style: { minHeight: '100vh', display: 'grid', alignItems: 'center', gap: '30px' } },
        React.createElement(
          'div',
          null,
          React.createElement('div', { style: { display: 'inline-flex', padding: '10px 16px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem' } }, 'WatchGuide.app • tvOS Launch Countdown'),
          React.createElement('div', { style: { marginTop: '20px', color: 'rgba(255,255,255,0.68)', textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: '0.82rem' } }, 'Coming Soon'),
          React.createElement('h1', { style: { margin: '14px 0 0', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '0.95', letterSpacing: '-0.06em', maxWidth: '8ch' } }, 'WatchGuide.app', React.createElement('br'), 'on Apple TV'),
          React.createElement('p', { style: { marginTop: '20px', maxWidth: '640px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '1.05rem' } }, 'The big-screen experience is coming. A dedicated countdown for the launch of WatchGuide.app on Apple TV.'),
          React.createElement('div', { style: { display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '28px' } },
            React.createElement(TimeCard, { value: time.days, label: 'Days' }),
            React.createElement(TimeCard, { value: time.hours, label: 'Hours' }),
            React.createElement(TimeCard, { value: time.minutes, label: 'Minutes' }),
            React.createElement(TimeCard, { value: time.seconds, label: 'Seconds' })
          ),
          time.done ? React.createElement('div', { style: { marginTop: '24px', fontSize: '1.4rem', fontWeight: 600 } }, 'Now Available') : null,
          React.createElement(
            'div',
            {
              style: {
                marginTop: '34px',
                position: 'relative',
                borderRadius: '36px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)), #08080a',
                minHeight: '420px',
                boxShadow: '0 30px 120px rgba(0,0,0,0.55)',
              },
            },
            React.createElement('img', {
              src: mainTeaseImage,
              alt: 'WatchGuide Apple TV Browse screen main tease image',
              style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
            }),
            React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.32) 55%, rgba(0,0,0,0.68) 100%)' } }),
            React.createElement('div', { style: { position: 'absolute', left: '24px', bottom: '22px', right: '24px' } },
              React.createElement('div', { style: { display: 'inline-flex', padding: '10px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', fontSize: '0.85rem' } }, 'Main Tease Image'),
              React.createElement('div', { style: { marginTop: '12px', fontSize: 'clamp(1.5rem, 4vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.04em' } }, 'A first look before release.')
            )
          )
        )
      )
    )
  );
}

createRoot(document.getElementById('root')).render(React.createElement(App));
