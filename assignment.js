let rows = 4;

for (let i = rows; i >= 0; i--) {
  let line = "";

  for (let s = 0; s < rows - i; s++) {
    line += " ";
  }

  let num = 1;

  for (let j = 0; j <= i; j++) {
    line += num + " ";
    num = (num * (i - j)) / (j + 1);
  }

  console.log(line);
}
