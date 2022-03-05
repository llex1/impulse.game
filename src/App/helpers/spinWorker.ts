interface ISpinResult {
  color: string;
  code: string;
}
export interface IRun {
  slot1: {
    color: string;
    code: string;
  };
  slot2: {
    color: string;
    code: string;
  };
  slot3: {
    color: string;
    code: string;
  };
  benefit: number;
}

class SpinWorker {
  private readonly slotCount: number = 3;
  private readonly spinResults: ISpinResult[] = [
    { color: "black", code: "\u2660" },
    { color: "black", code: "\u2663" },
    { color: "red", code: "\u2665" },
    { color: "red", code: "\u2666" },
  ];

  // 0 - never
  // 4 - very often
  private readonly frequencyOfWin = 3;

  run = async (): Promise<IRun> => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    let randomNumberArr: number[] = [];
    let benefit: number = 0;
    for (let i = 0; i < this.slotCount; i++) {
      randomNumberArr.push(Math.floor(Math.random() * this.spinResults.length));
    }
    const findRepetitive = new Set<number>(randomNumberArr);
    if (findRepetitive.size === 2) {
      benefit = 0.5;
    }
    if (findRepetitive.size === 1) {
      benefit = 3;
    }
    return {
      slot1: this.spinResults[randomNumberArr[0]],
      slot2: this.spinResults[randomNumberArr[1]],
      slot3: this.spinResults[randomNumberArr[2]],
      benefit: benefit,
    };
  };
  zeusMode = () => {
    return {
      slot1: this.spinResults[0],
      slot2: this.spinResults[0],
      slot3: this.spinResults[0],
      benefit: 3,
    };
  };
}
export default new SpinWorker();
