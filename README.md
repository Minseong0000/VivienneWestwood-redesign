## 비비안웨스트우드 팀 프로젝트 작업

사용기술: JavaScript, GSAP, jQuery, AOS, Swiper

작업기간: 2024.05.10 ~ 2024.05.28 (18Days)

작업유형: 팀 프로젝트(기여도 30%)

---

### 팀 프로젝트 목표

- 브랜드의 정체성을 살려 리디자인
- 팀원과의 커뮤니케이션으로 효율적인 작업하기
- 유지보수를 염두에 둔 코딩 컨벤션 작성 후 규칙 준수하기
- 기술 능력 향상

### 웹 사이트 선정 이유

- 자바스크립트로 구현할 수 있는 기능이 적절히 배치
- 대중에게 친숙한 브랜드 웹사이트의 구조와 디자인 경험
- 각 팀원의 능력을 고려한 상의를 통해 최종 결정
---

### 프로젝트 진행 과정
1. 리더 선정
2. 웹사이트 선정
3. 디자인 및 구조 분석
4. 페이지 분배
5. 코딩 컨벤션
6. Github 워크플로우 작성
7. Github organizations 생성
8. 공통 디자인 요소 작업
9. 담당 페이지 작업
10. github 브랜치 최종 머지
11. 프로젝트 완성
12. 결과물 발표

---

### 담당 업무
- 메인 페이지 구현
- Github organizations 관리
- 결과물 발표
---
### 작업한 주요 기능

#### GSAP
- 고정&확대
 
transform: scale(), object-fit:cover를 사용하여 이미지의 찌그러짐을 해결
```
gsap.to(".main-model", {
  scale: 1,
  scrollTrigger: {
    trigger: ".main-img-wrapper",
    start: "top 80vh", //이벤트 시작지점
    end: "1800px 50%", //이벤트 끝나는 지점
    scrub: true,
    markers: false,
    pin: true, //고정기능 활성화
  },
  duration: 5,
  ease: "power4.out"
})
```

- 가로스크롤

함수를 선언하고, invalidateOnRefresh: true 값을 사용하여 변화하는 가로스크롤값 해결

```
const total = document.querySelector(".horizontal-scroll");//가로스크롤 총 진행 양

function getScrollAmount() {
  let totalWidth = total.scrollWidth;
  return -(totalWidth - window.innerWidth);
}//가로 스크롤 진행 되는양 에서 뷰포트 너비값을 뺀값

const tween = gsap.to(total, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});


ScrollTrigger.create({
  trigger: ".hsWrapper",
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,//사이즈 조절시 새로고침
  markers: false
});
```

- Write-in-text
  
HTML파일에서 data-text속성과 scrollTrigger를 사용하여 글이 나타나는 시점 해결
```
 gsap.utils.toArray(".write-in-text").forEach((text) => {
      gsap.fromTo(text, 
          { 
              opacity: 0, //보이지 않다가
              text: ""
          }, 
          { 
              opacity: 1, //서서히 보임
              duration: 2, 
              text: text.getAttribute("data-text"),
              ease: "power2.inOut",
              scrollTrigger: {
                  trigger: text,
                  start: "top bottom",
                  end: "top center",
              }
          }
      );
  });

<p class="write-in-text" data-text="With Andreas Kronthaler, we introduced a new fashion
 that combines British tailoring with French exaggerated decorations. The representative
 collection is Anglomania, the 1993 FW collection that established itself as a symbol of
 Vivienne Westwood at the time." style="color: #FFF9EC"></p>
```
- 이미지 나타나는 효과
  
overflow, transform: translateY(), scrollTrigger를 활용하여 숨겨져있던 이미지를 나타내게함
```
gsap.to(".group1", {
  scrollTrigger: {
    trigger: ".gallery",
    start: "center center",
    scrub: true,
    markers: false,
    ease: 'none',
  },
  y: 0,//translateY를 사용하여 숨겨뒀던 이미지를 제자리로 오게 함
  duration: 3,
});
```

---

### 프로젝트 결과

- 커뮤니케이션을 통해 각기 다른 재능과 기술들을 파악하여 빠르고 효율적이게 작업을 진행할 수 있었고, 공통적인 코딩컨벤션과
github를 통하여 접근성이 용이해 빠르게 오류들을 수정할 수 있었다.
- 브랜드가 기존에 가지고 있던 정체성을 디자인으로 하여금 온전히 전달 할 수 있었다.
- 다양한 플러그인을 공부하고 활용하여 새로운 기술을 습득할 수 있었다.

---

### 부족한 점

- 너무 많은 플러그인의 사용으로 웹사이트의 최적화가 이루어 지지 않았다.
- 기술적인 역량의 부족으로 처음 계획했던 디자인대로 완벽하게 구현을 하지 못했다.

---

### 잘한 점

- 래퍼런스 사이트의 기능들을 똑같이 구현
- 팀 프로젝트를 큰 충돌 없이 마무리 한 것

---

### 팀 프로젝트 후기

프로젝트 초기에 빠른 마감일을 예상하고 웹 구현을 시작한 반면, 현실은 그렇지 않았다.

예상치 못한 문제들에 부딪혔을 때, 빠르게 해결되는것들이 있는 반면, 며칠을 붙잡고 공부해도
해결되지 않는 문제들이 있었다. 정석인 방향이 아니더라도, 다양한 방법으로 문제들을 해결해
나가는 과정에서 많은 것들을 배우고 안된다고 믿었던게 해결이 됐을 때는 성취감을 느낄 수 있었다.

팀원들과 함께하여 서로 부족한 점을 채워주고, 혼자라면 하지 못했을 프로젝트를 완성해가는게
나에게 큰 원동력이 되었고 열심히 할 수 있었다.

모두 각자 맡은바 열심히 하여 프로젝트를 진행할 수 있어서 스스로에게도 값진 경험이 된 작업이었다.

---

### <a href="https://minseong0000.github.io/VivienneWestwood-redesign/" target="_blank">프로젝트 바로가기</a>


