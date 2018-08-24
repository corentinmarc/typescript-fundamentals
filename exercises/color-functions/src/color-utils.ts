//TODO: Implement hexToRgb
export function hexToRgb(hex: string) : {r: number, g: number, b: number} {
  if (hex.length === 3) {
    const [r, g, b] = [0, 1, 2].map(chanel => hex.substring(chanel, chanel+1));
    return hexToRgb(`${r}${r}${g}${g}${b}${b}`);
  }

  const [r, g, b] = [0, 2, 4].map(chanel => hex.substring(chanel, chanel+2));
  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16),
  };
}


//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number) {
  const rgbChanels= [r, g, b]
    .map(chanel => Math.max(0, Math.min(255, chanel)))
    .map(chanel => chanel.toString(16))
    .map(chanel => chanel.length === 1 ? `0${chanel}` : chanel);

  return rgbChanels.join('');
}