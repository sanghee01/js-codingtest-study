// 분할 정복 알고리즘을 이용한 병합 정렬 구현하기
// 재귀 함수 이용, 결과 배열을 만들어줘야함, 시간 복잡도 O(nlogn)

const arr = Array.from({ length: 20 }, () => Math.floor(Math.random(0, 100) * 100));

// 결과 배열이 있어야함.
const resultArr = Array.from({ length: 20 }, () => 0);

// 조합하기
// mid를 중심으로 왼쪽, 오른쪽 배열의 원소 값을 비교하여 작은 값을 결과 배열에 넣는다.
const merge = (left, mid, right) => {
  let i = left;
  let j = mid + 1;
  let k = left;

  // 두 배열을 비교하여 정렬해주기.
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) resultArr[k++] = arr[i++];
    else resultArr[k++] = arr[j++];
  }

  // 작은 값 다 들어가고 남은 값 넣어주기
  // (ex 왼쪽 배열이 전부 먼저 들어갔다면 오른쪽 배열은 아직 반영되지 않은 상태)
  if (i > mid) {
    for (; j <= right; j++) resultArr[k++] = arr[j];
  }

  if (j > right) {
    for (; i <= mid; i++) resultArr[k++] = arr[i];
  }

  // 원본 배열에 반영해주기
  for (let x = left; x <= right; x++) {
    arr[x] = resultArr[x];
  }
};

// 분할하기
// 중간 값을 기준으로 2개의 배열로 쪼개야함.
// 나눠진 2배열은 각각 중간값을 다시 구하여 또 쪼개야함.
// 초기 left, right는 배열의 양 끝 인덱스 번호가 들어간다.
const division = (left, right) => {
  // 배열의 원소가 1개가 될 때까지만 반복. left 와 right가 같아지면 mid도 같음.
  if (left < right) {
    const mid = Math.floor((left + right) / 2);

    // 쪼개진 왼쪽 배열을 다시 쪼갠다.
    division(left, mid);

    // 쪼개진 오른쪽 배열을 다시 쪼갠다.
    division(mid + 1, right);

    // 전부 쪼개지면 조합 함수 실행됨.
    merge(left, mid, right);
  }
};

console.log(arr);
division(0, arr.length - 1);
console.log(arr);
