function solution(enroll, referral, seller, amount) {
  const members = new Map();

  // 멤버별 추천인, 수익 초기화
  enroll.forEach((member, i) => {
    members.set(member, { referral: referral[i], profit: 0 });
  });

  // seller 순회하며 누적 이익 분배 시작
  seller.forEach((member, i) => {
    let curAmount = amount[i] * 100;
    let curMember = members.get(member);

    // 부모가 없거나 남은 수익이 없을 때까지 반복 (재귀적으로 이익을 상위 추천인에게 분배)
    while (curAmount && curMember) {
      div = Math.floor(curAmount / 10); // 추천인에게 넘길 10%
      curMember.profit += curAmount - div; // 남은 90%를 자신이 가짐
      curAmount = div; // 나머지 10%를 상위 추천인에게 전달
      curMember = members.get(curMember.referral); // 상위 추천인으로 이동
    }
  });

  return enroll.map((member) => members.get(member).profit);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
