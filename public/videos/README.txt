HERO BACKGROUND VIDEO

Drop your hero loop file here as: hero-loop.mp4

Specs that work well on the web:
  - Format: MP4 (H.264 codec)
  - Resolution: 1920x1080 (1080p) — do not use 4K, it's overkill for a background
  - Duration: 8-15 seconds (long enough to not feel choppy looping, short enough to load fast)
  - Bitrate: 2-4 Mbps
  - Target file size: 3-8 MB
  - Audio: strip it (the video plays muted always, audio is wasted bytes)

Pixabay download tip:
  - Pixabay's "1920x1080 MP4" download is usually 8-15 MB; it's fine to use as-is initially,
    but compress further with HandBrake (free) for a snappier load.

Free stock video sources (commercial use OK):
  - https://www.pexels.com/videos/ — search "excavator" or "construction"
  - https://pixabay.com/videos/ — same
  - https://mixkit.co — heavy equipment category
  - https://coverr.co — construction collection

Best content (in order of preference):
  1. Your own footage of the 305/308 prototype operating
  2. Drone shots of jobsites with tracked excavators in action
  3. Tight quick cuts of excavator booms, buckets, and tracks at work
  4. Generic stock footage (last resort)

Composition notes for the hero:
  - The video sits BEHIND text, so high-contrast hero shots can fight readability.
    Mid-tone footage (dirt, machinery, jobsite) works best.
  - A 65% dark overlay sits over the video automatically — text stays readable.
  - 8-15 seconds of varied cuts loops better than one long shot (the loop point is less obvious).

Compression with HandBrake (free, https://handbrake.fr):
  Preset: "Web > Vimeo YouTube HQ 1080p60"
  Or custom:
    - Codec: H.264 (x264)
    - Constant Quality: RF 23
    - Encoder Preset: Slow (smaller file for same quality)
    - Audio: NONE (drop the track entirely)

If no hero-loop.mp4 is present, the hero falls back to the poster image
(/images/foot in the street.jpg) — site stays usable without a video.
