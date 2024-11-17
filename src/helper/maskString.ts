function maskString(input: string): string {
    if (input.length <= 3) {
      return input; // 入力が3文字以下ならそのまま返す
    }
    const visiblePart = input.slice(0, 3); // 最初の3文字を抽出
    const maskedPart = "*".repeat(input.length - 3); // 残りの文字数分の"*"
    return visiblePart + maskedPart;
  }

  export default maskString;
  