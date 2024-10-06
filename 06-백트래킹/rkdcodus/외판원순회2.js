// 백준 10971 실버2
// 중복 안됌. 방문 처리 출발도시 제외
// 모르겠음 풀긴 함..

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const cities = input.slice(1);
const visited = new Array(n).fill(false);
let result = [];
let answer = n * 1000000;

// depth는 들른 도시가 몇번째인지를 나타냄.
const dfs = (depth) => {
  if (depth === n - 1) {
    // 비용 계산하기; cost가 0이면 계산 중단 후 바로 return.
    // (i) 두 번째 도시가는데 비용 계산
    let cost = cities[0][result[0]];
    if (cost !== 0) {
      // (ii) 두 번째 도시에서 시작하여 마지막 도시까지의 비용 계산
      for (let i = 1; i < n - 1; i++) {
        if (cities[result[i - 1]][result[i]] === 0) return;
        cost += cities[result[i - 1]][result[i]];
      }
      // (iii) 마지막 첫도시로 돌아가는 비용 계산
      const lastCost = cities[result.at(-1)][0];
      if (lastCost === 0) return;
      cost += lastCost;
    } else {
      return; // (i) 비용 0일 시 리턴.
    }

    // 최소비용 따지기
    answer = Math.min(answer, cost);
    return;
  }

  // 처음 도시 제외 나올 수 있는 경로 조합 구하기.
  for (let j = 1; j < n; j++) {
    if (visited[j]) continue;
    visited[j] = true;
    result.push(j);
    dfs(depth + 1);
    visited[j] = false;
    result.pop();
  }
};

// 맨처음 도시는 0번째 인덱스로 고정.
dfs(0);
console.log(answer);
