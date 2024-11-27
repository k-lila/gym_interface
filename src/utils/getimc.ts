export const getImc = (bodyweight: number, height: number): number => {
  return bodyweight > 0 && height > 0
    ? Number((bodyweight / (height / 100) ** 2).toFixed(2))
    : 0
}
