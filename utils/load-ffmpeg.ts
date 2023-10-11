import type { FFmpeg } from '@ffmpeg/ffmpeg';
// import { toBlobURL } from '@ffmpeg/util';

export default async function loadFfmpeg(): Promise<FFmpeg> {
  const { FFmpeg } = await import('@ffmpeg/ffmpeg');
  const { toBlobURL } = await import('@ffmpeg/util');
    
  const ffmpegInstance = new FFmpeg();
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd';

  await ffmpegInstance.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  });

  return ffmpegInstance;
}
