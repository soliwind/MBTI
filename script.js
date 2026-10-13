// 16가지 MBTI 포켓몬 데이터 (PokeAPI 공식 고화질 이미지)
const pokemonData = {
    "INTJ": { name: "뮤츠", img: "150", desc: "독립적이고 분석적이며 완벽을 추구하는 전설의 포켓몬. 차갑고 이성적인 통찰력을 지녔습니다." },
    "INTP": { name: "야도킹", img: "199", desc: "뛰어난 지능으로 세계의 진리를 탐구합니다. 평소엔 느긋하지만 머릿속은 항상 바쁘게 돌아갑니다." },
    "ENTJ": { name: "리자몽", img: "6", desc: "타고난 카리스마와 뜨거운 열정으로 무리를 이끄는 리더. 목표를 향해 거침없이 돌진합니다." },
    "ENTP": { name: "팬텀", img: "94", desc: "장난기가 넘치고 독창적인 아이디어 뱅크. 언제나 새롭고 흥미로운 일을 찾아 헤맵니다." },
    "INFJ": { name: "루카리오", img: "448", desc: "타인의 파동(감정)을 읽어내는 깊은 통찰력. 신념이 뚜렷하고 소수의 사람과 깊이 교감합니다." },
    "INFP": { name: "메타몽", img: "132", desc: "어떤 형태로든 변할 수 있는 유연함. 이상주의자이며 타인의 감정에 깊이 공감하고 맞춰줍니다." },
    "ENFJ": { name: "망나뇽", img: "149", desc: "조난당한 사람을 돕는 다정한 바다의 수호자. 이타심이 강하고 타인을 이끄는 데 재능이 있습니다." },
    "ENFP": { name: "피카츄", img: "25", desc: "어디서나 사랑받는 인싸. 호기심이 많고 에너지가 넘치며 사람들에게 긍정적인 영향을 줍니다." },
    "ISTJ": { name: "거북왕", img: "9", desc: "묵묵하고 든든하게 자신의 책임을 다합니다. 실용적이고 체계적이며 흔들리지 않는 멘탈을 가졌습니다." },
    "ISFJ": { name: "해피너스", img: "242", desc: "따뜻한 마음으로 상처입은 사람들을 헌신적으로 치유해 줍니다. 배려심 깊은 천사 포켓몬." },
    "ESTJ": { name: "롱스톤", img: "95", desc: "바위처럼 단단하고 룰을 중시합니다. 체계적이고 현실적이며 일을 주도적으로 처리합니다." },
    "ESFJ": { name: "삐삐", img: "35", desc: "무리를 지어 서로 돕고 사는 다정한 친구. 조화와 협력을 중시하며 주변을 잘 챙깁니다." },
    "ISTP": { name: "핫삼", img: "212", desc: "과묵하지만 상황 판단이 빠르고 효율적입니다. 뛰어난 적응력과 강철 같은 쿨함을 지녔습니다." },
    "ISFP": { name: "님피아", img: "700", desc: "평화와 조화를 사랑하는 온화한 성향. 예술적 감각이 뛰어나며 갈등을 싫어합니다." },
    "ESTP": { name: "꼬부기", img: "7", desc: "활동적이고 적응력이 뛰어나며 현재를 즐깁니다. 어디서든 살아남는 쾌활한 행동파입니다." },
    "ESFP": { name: "푸린", img: "39", desc: "노래로 관심을 끄는 것을 좋아하는 타고난 스타. 사람들과 어울리며 분위기 메이커 역할을 합니다." }
};

const introSection = document.getElementById('intro-section');
const resultSection = document.getElementById('result-section');
const matchBtn = document.getElementById('match-btn');
const resetBtn = document.getElementById('reset-btn');
const card = document.getElementById('pokemon-card');

// 결과 확인 버튼 이벤트
matchBtn.addEventListener('click', () => {
    const e_i = document.getElementById('mbti-e-i').value;
    const s_n = document.getElementById('mbti-s-n').value;
    const t_f = document.getElementById('mbti-t-f').value;
    const j_p = document.getElementById('mbti-j-p').value;
    
    const userMBTI = e_i + s_n + t_f + j_p;
    const result = pokemonData[userMBTI];

    // 데이터 바인딩 (PokeAPI URL 생성)
    document.getElementById('result-mbti').innerText = userMBTI;
    document.getElementById('result-name').innerText = result.name;
    document.getElementById('result-img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.img}.png`;
    document.getElementById('result-desc').innerText = result.desc;

    // 화면 전환
    introSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    
    // 모바일 기기를 위해 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
});

// 다시하기 버튼 이벤트
resetBtn.addEventListener('click', () => {
    resultSection.classList.add('hidden');
    introSection.classList.remove('hidden');
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

// 3D 마우스 틸트 효과
card.addEventListener('mousemove', (e) => {
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left; 
    const y = e.clientY - cardRect.top;  
    
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;
    
    // 회전값 계산 (최대 15도)
    const rotateX = -((y - centerY) / centerY) * 15; 
    const rotateY = ((x - centerX) / centerX) * 15;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// 마우스가 카드를 벗어날 때 원상복구
card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});