/**
 * Astro client directive: hydrate component on first user interaction.
 * Listens for scroll, wheel, mousemove, click, keydown, touchstart
 * on both the window and the island element itself.
 */
export default (load, _opts, el) => {
  const events = ['scroll', 'wheel', 'mousemove', 'click', 'keydown', 'touchstart'];
  let hydrated = false;

  const handleInteraction = async () => {
    if (hydrated) return;
    hydrated = true;
    events.forEach((e) => {
      window.removeEventListener(e, handleInteraction);
      el.removeEventListener(e, handleInteraction);
    });
    const hydrate = await load();
    await hydrate();
  };

  events.forEach((e) => {
    window.addEventListener(e, handleInteraction, { once: true, passive: true });
    el.addEventListener(e, handleInteraction, { once: true, passive: true });
  });
};
