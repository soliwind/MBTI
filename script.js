// 16가지 MBTI 매칭 데이터 (실제 포켓몬 TCG 고해상도 카드 이미지 URL 적용)
const pokemonData = {
    "INTJ": { name: "뮤츠", img: "https://images.pokemontcg.io/base1/10_hires.png", desc: "차갑고 이성적인 통찰력. 완벽을 추구하는 전설의 에스퍼." },
    "INTP": { name: "야도킹", img: "https://images.pokemontcg.io/neo1/14_hires.png", desc: "세계의 진리를 탐구하는 지성파. 평소엔 느긋하지만 천재적인 두뇌를 가졌습니다." },
    "ENTJ": { name: "리자몽", img: "https://images.pokemontcg.io/base1/4_hires.png", desc: "타고난 카리스마와 뜨거운 열정. 거침없는 추진력을 가진 리더입니다." },
    "ENTP": { name: "팬텀", img: "https://images.pokemontcg.io/fossil/5_hires.png", desc: "틀에 얽매이지 않는 장난기 가득한 아이디어 뱅크. 호기심이 넘칩니다." },
    "INFJ": { name: "루카리오", img: "https://images.pokemontcg.io/dp1/12_hires.png", desc: "파동을 읽는 깊은 통찰력. 확고한 신념으로 좁고 깊은 관계를 맺습니다." },
    "INFP": { name: "메타몽", img: "https://images.pokemontcg.io/fossil/3_hires.png", desc: "어떤 형태든 될 수 있는 유연함. 타인의 감정에 깊이 공감하는 평화주의자." },
    "ENFJ": { name: "망나뇽", img: "https://images.pokemontcg.io/fossil/4_hires.png", desc: "위험에 처한 이를 돕는 바다의 수호자. 다정하고 이타심 강한 리더입니다." },
    "ENFP": { name: "피카츄", img: "https://images.pokemontcg.io/base1/58_hires.png", desc: "어디서나 사랑받는 에너지 덩어리. 긍정적인 기운을 뿜어내는 분위기 메이커." },
    "ISTJ": { name: "거북왕", img: "https://images.pokemontcg.io/base1/2_hires.png", desc: "묵묵히 제 할 일을 해내는 든든한 방어벽. 현실적이고 책임감이 강합니다." },
    "ISFJ": { name: "해피너스", img: "https://images.pokemontcg.io/neo3/2_hires.png", desc: "헌신적으로 상처를 치유하는 천사. 세심하고 배려심이 깊습니다." },
    "ESTJ": { name: "롱스톤", img: "https://images.pokemontcg.io/base1/56_hires.png", desc: "바위처럼 단단하고 흔들림 없는 원칙주의자. 일을 주도적이고 체계적으로 처리합니다." },
    "ESFJ": { name: "삐삐", img: "https://images.pokemontcg.io/base1/5_hires.png", desc: "다같이 어울려 춤추는 것을 좋아하는 사교왕. 조화와 협력을 중시합니다." },
    "ISTP": { name: "핫삼", img: "https://images.pokemontcg.io/neo2/29_hires.png", desc: "과묵하지만 뛰어난 상황 판단력. 쿨하고 논리적이며 적응력이 빠릅니다." },
    "ISFP": { name: "님피아", img: "https://images.pokemontcg.io/xy1/62_hires.png", desc: "갈등을 싫어하고 조화를 사랑하는 평화주의자. 미적 감각이 뛰어납니다." },
    "ESTP": { name: "꼬부기", img: "https://images.pokemontcg.io/base1/63_hires.png", desc: "두려움 없이 현재를 즐기는 행동파. 재치가 넘치고 활동적입니다." },
    "ESFP": { name: "푸린", img: "https://images.pokemontcg.io/base2/45_hires.png", desc: "관심받기를 좋아하는 타고난 스타. 사람들과 어울리는 것을 즐깁니다." }
};

// 버튼 토글 로직
const mbtiButtons = document.querySelectorAll('.mbti-btn');

mbtiButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // 같은 그룹(행)의 버튼들에서 active 클래스 제거
        const group = this.dataset.group;
        document.querySelectorAll(`.mbti-btn[data-group="${group}"]`).forEach(b => {
            b.classList.remove('active');
        });
        // 클릭한 버튼만 active 클래스 추가
        this.classList.add('active');
    });
});

const introSection = document.getElementById('intro-section');
const resultSection = document.getElementById('result-section');
const matchBtn = document.getElementById('match-btn');
const resetBtn = document.getElementById('reset-btn');
const card = document.getElementById('pokemon-card');
const glare = document.querySelector('.card-glare');

// 내 카드 뽑기 버튼 클릭
matchBtn.addEventListener('click', () => {
    // 현재 active 된 버튼들의 value를 모아 MBTI 문자열 생성
    const activeBtns = document.querySelectorAll('.mbti-btn.active');
    let userMBTI = '';
    activeBtns.forEach(btn => userMBTI += btn.dataset.val);

    const result = pokemonData[userMBTI];

    // 결과 데이터 반영
    document.getElementById('result-mbti').innerText = userMBTI;
    document.getElementById('result-name').innerText = result.name;
    document.getElementById('result-img').src = result.img;
    document.getElementById('result-desc').innerText = result.desc;

    // 화면 전환
    introSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
});

// 다시하기 버튼
resetBtn.addEventListener('click', () => {
    resultSection.classList.add('hidden');
    introSection.classList.remove('hidden');
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    glare.style.backgroundPosition = `100% 100%`;
});

// 3D 카드 애니메이션 및 빛 반사 효과
card.addEventListener('mousemove', (e) => {
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left; 
    const y = e.clientY - cardRect.top;  
    
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;
    
    // 기울기 계산 (최대 18도)
    const rotateX = -((y - centerY) / centerY) * 18; 
    const rotateY = ((x - centerX) / centerX) * 18;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // 마우스 위치에 따른 홀로그램 빛 반사 효과 이동
    const bgX = (x / cardRect.width) * 100;
    const bgY = (y / cardRect.height) * 100;
    glare.style.backgroundPosition = `${bgX}% ${bgY}%`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    glare.style.backgroundPosition = `100% 100%`;
});