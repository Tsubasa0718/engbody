
// trainer

const trainerData = [
 {
    image:"trainer01.jpg",
    text:"こんにちは！英語で楽しくトレーニングしましょう。日本語が話せますのでご安心ください。",
    alt:"フィットネスウェアを着た笑顔の女性がポーズを取っている様子",
 },
 {
    image:"trainer02.jpg",
    text:"Hello! 筋肉をつけすぎずしなやかな体を作ることが得意です！美しさを磨いていきましょう。",
    alt:"フヨガマットの上でストレッチをするフィットネスウェア姿の女性",
 },
 {
    image:"trainer03.jpg",
    text:"Hi, 負荷や強度の高いトレーニングがしたいならおまかせてください！どんなご要望もできるかぎり叶えますよ！",
    alt:"ジムでトレーニング中の筋肉質な男性が真剣な表情を見せる様子",
 }
]

// staff
const staffData = [
    {
        image:"staff01.jpg",
        text:"ENBODYは明るくてとっても楽しいジムです！みなさんのセッションが楽しくなるようしっかりサポートいたします。",
        alt:"書類を持ちながら笑顔で座るビジネススーツ姿の女性",
     },
     {
        image:"staff02.jpg",
        text:"Hi, please let me know anytime if you have any questions. We will fully support you!",
        alt:"ピンクの背景で顎に手を当てポーズをとる白いスーツの男性",
     },
]
const studioData = [
    {
     image:"studio01.jpg",
     alt:"ダンベルを両手に持ち、肩の上まで持ち上げるショルダープレスを行う女性",
    },
    {
     image:"studio02.jpg",
     alt:"ジムのチェストプレスマシンを使用して、胸の筋肉を鍛える女性",
    },
    {
     image:"studio03.jpg",
     alt:"バーベルを肩に担ぎ、スクワットを行う女性",
    },
]
// place
const priceData = [
    { 
      corse: "週１コース", 
      price: 20000,
      entryFee: 10000, 
      isRecommended: false, 
      features: {
        rental: {
          title: 'レンタル',
          items: ['タオル', 'ウェア', 'プロテイン無料']
        },
        restaurant: {
          title: 'レストラン',
          status: '使用不可'
        },
        mealGuidance: {
          title: '食事指導',
          status: 'なし'
        }
      }
    },
    { 
      corse: "週２コース", 
      price: 40000,
      entryFee: 10000, 
      isRecommended: true, 
      features: {
        rental: {
          title: 'レンタル',
          items: ['タオル', 'ウェア', 'プロテイン無料']
        },
        restaurant: {
          title: 'レストラン',
          status: '使用不可'
        },
        mealGuidance: {
          title: '食事指導',
          status: '無し'
        }
      }
    },
    { 
      corse: "無制限", 
      price: 70000,
      entryFee: 10000, 
      isRecommended: false, 
      features: {
        rental: {
          title: 'レンタル',
          items: ['タオル', 'ウェア', 'プロテイン無料']
        },
        restaurant: {
          title: 'レストラン',
          status: '使用不可'
        },
        mealGuidance: {
          title: '食事指導',
          status: '有り'
        }
      }
    },
];

// accordion
const accordionData = [
  {
    question:"見学や体験は可能ですか？", 
    answer: "無料カウンセリングの際に見学が可能です。フォームに見学・体験希望の欄がございますので内容をご確認しチェックを入れてください。",
  },
  {
    question:"用意するものは何がありますか？", 
    answer: "シューズをご持参ください。ウェアとタオルは無料でレンタルが可能です。",
  },
  {
    question:"シャワールームはありますか？", 
    answer: "5つのシャワールームがございます。ボディソープ・シャンプー・リンスなどのアメニティやドライヤーもご用意しております。",
  },

]

module.exports = { trainerData, staffData, priceData, studioData, accordionData };