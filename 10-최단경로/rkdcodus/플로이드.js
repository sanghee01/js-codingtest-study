// 11404 백준 골4 유형익히기.. 혼자 못품.

// 모든 지점에서 시작하여 모든 지점의 최소 비용을 구해야함
// -> 플로이드 워셜 알고리즘
// dp를 사용 점화식 : dp[a][b] = Math.min(dp[a][b], dp[a][k] + dp[k][b]))
// a -> b로 가는 값과 a -> k -> b로 가는 값 중 작은 값 갱신

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const m = input[1][0];
const graph = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => Infinity));

for (let i = 2; i < input.length; i++) {
  const [a, b, cost] = input[i];
  graph[a][b] = Math.min(graph[a][b], cost);
}

// 자기 자신으로 가는 비용은 0으로 초기화
for (let i = 1; i <= n; i++) {
  graph[i][i] = 0;
}

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let cost = graph[a][k] + graph[k][b];
      graph[a][b] = Math.min(graph[a][b], cost);
    }
  }
}

for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= n; j++) {
    if (graph[i][j] === Infinity) str += "0 ";
    else str += graph[i][j] + " ";
  }
  console.log(str);
}

/**
 * 간선비용이 다 다를 때
 * 한지점에서 시작해 한지점까지의 최소비용
 * 한 지점에서 시작해 모든 지점의 최소 비용  => 다익스트라 최단거리 알고리즘 (그리드 유형, 우선순위큐 이용/최단거리테이블 직접 갱신)
 *   => 한번 처리된 노드의 최단 거리는 고정되므로 무시.
 *   => 음의 간선이 있다면..? 벨만 포드 알고리즘 사용.
 * 모든 지점에서 시작해 모든 지점의 최소비용 => 플로이드 워셜 (dp이용)
 *
 * 다익스트라 동작 과정
 * 1. 출발 노드 설정
 * 2. 최단 거리 테이블 초기화
 * 3. 방문하지 않은 노드 중에서 최단 거리가 가장 짧은 노드 선택
 * 4. 해당 노드를 거쳐 다른 노드로 가는 비용을 계산해 최단 거리 테이블 갱신 -> 우선순위 큐 사용해도 ㄱㅊ
 * 5. 3,4 과정 반복.
 *
 * 플로이드 워셜
 * 2차원 테이블에 최단 거리 정보를 저장.
 * 점화식을 통해 2차원 테이블 값을 갱신
 * dp[a][b] = Math.min(dp[a][b], dp[a][k] + dp[k][b]))
 */
