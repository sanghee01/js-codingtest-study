// 15686 백준 골드5
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0]; // 도시 크기
const m = input[0][1]; // 폐업시키지 않을 치킨 집 수
const cities = input.slice(1);

// 1. 폐업시키지 않을 치킨 집 M개 조합 구하기.
// 2. 각 집마다 치킨거리 구하여 `도시의 치킨 거리` 구하기
// 3. 도시의 치킨 거리 최솟값 구하기

const chicken_store = [];
const houses = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (cities[i][j] === 2) {
      chicken_store.push([i + 1, j + 1]);
    } else if (cities[i][j] === 1) {
      houses.push([i + 1, j + 1]);
    }
  }
}

const store = [];
const visited = new Array(chicken_store.length).fill(false);
let answer = Infinity;

const dfs = (n) => {
  if (store.length === m) {
    // 구해진 치킨집을 기준으로 각 치킨거리 구하기.
    let city_dis = 0;

    for (let [hx, hy] of houses) {
      let dis = Infinity;

      for (let [cx, cy] of store) {
        const temp_dis = Math.abs(hx - cx) + Math.abs(hy - cy);
        dis = Math.min(dis, temp_dis);
      }

      city_dis += dis;
    }
    answer = Math.min(answer, city_dis);
    return;
  }

  for (let i = n; i < chicken_store.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    store.push(chicken_store[i]);
    dfs(i);
    visited[i] = false;
    store.pop();
  }
};

dfs(0);
console.log(answer);
