
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const rankDummy = [
    
        {
            category: "fashion",
            id:1, 
            prod_img: "./Rank_fashion/fashion1.jpg",
            brand: "슈펜",
            prod_name: "슈탠다드 스니커즈AFHC79A01(제휴셀러)",
            discount_rate: 35,
            org_price: 19900,
            share_img: "md.png",
            share_count: "7명",
            tap_money: 500,
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",

        },

        {
            category: "fashion",
            id:2,
            prod_img: "./Rank_fashion/fashion2.jpg",
            brand: "슈펜",
            prod_name: "슈펜]대백팩TPB79S75(제휴셀러)",
            discount_rate: 50,
            org_price: 59900,
            share_img: "md.png",
            share_count: "7명",
            tap_money: 500,
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",
            

        },

        {
            category: "fashion",
            id:3,
            prod_img: "./Rank_fashion/fashion3.jpg",
            brand: "슈펜",
            prod_name: "슈탠다드 스니커즈AFHC79A01(제휴셀러)",
            discount_rate: 45,
            org_price: 29900,
            share_img: "md.png",
            share_count: "7명",
            tap_money: 500,
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",

        },

        {
            category: "fashion",
            id:4,
            prod_img: "./Rank_fashion/fashion4.jpg",
            brand: "슈펜",
            prod_name: "슈탠다드 스니커즈AFHC79A01(제휴셀러)",
            discount_rate: 35,
            org_price: 19900,
            share_img: "md.png",
            share_count: "7명",
            tap_money: 500,
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",

        },

        {
            category: "food",
            id:1,
            prod_img: "./Rank_food/food1.jpeg",
            brand: "무꼬뭐꼬 떡볶이",
            prod_name: "무꼬뭐꼬 궁물떡볶이 추억맛 3팩",
            discount_rate: 20,
            org_price: 14500,
            share_img: "md.png",
            share_count: "7명",
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",

        },

        {
            category: "food",
            id:2,
            prod_img: "./Rank_food/food2.jpg",
            brand: "애슐리 홈스토랑",
            prod_name: "[콸콸]애슐리 허브시즈닝 부채살 스테이크 5pk",
            share_img: "md.png",
            share_count: "7명",
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",
            discount_rate: 28,
            org_price: 49500,

        },


        {
            category: "food",
            id:3,
            prod_img: "./Rank_food/food3.jpg",
            brand: "애슐리 홈스토랑",
            prod_name: "[콸콸]애슐리 봉골레 크림빠네 + 당면듬뿍 안동찜닭(총4인분)",
            share_img: "md.png",
            share_count: "7명",
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",
            discount_rate: '',
            org_price: 30800,

        },


        {
            category: "food",
            id:4,
            prod_img: "./Rank_food/food4.jpg",
            brand: "엄마네한우",
            prod_name: "[엄마네한우]1++등급 한우 채끝등심 170g",
            share_img: "md.png",
            share_count: "7명",
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",
            discount_rate: 37,
            org_price: 39750,

        },

        {
            category: "kids",
            id:1,
            prod_img: "./Rank_kids/kids1.jpeg",
            brand: "슈펜키즈",
            prod_name: "[디즈니도날드덕 실내화(라이팅)(강서점)",
            share_img: "md.png",
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",
            discount_rate: 31,
            org_price: 10000,

        },

        {
            category: "health",
            id:1,
            prod_img: "./Rank_health/health1.jpeg",
            brand: "경남제약",
            prod_name: "고려은단 비타민C 1000mg 120정",
            share_img: "md.png",
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",
            discount_rate: 24,
            org_price: 13000,

        },

        {
            category: "health",
            id:2,
            prod_img: "./Rank_health/health3.jpg",
            brand: "Nc동수원점",
            prod_name: "레모나 생유산균9C 50포",
            share_img: "md.png",
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",
            discount_rate: 34,
            org_price: 9900,

        },
        {
            category: "health",
            id:12,
            prod_img: "./Rank_health/health4.jpg",
            brand: "NC동수원점",
            prod_name: "레모나 결콜라겐레몬향 60포",
            share_img: "md.png",
            show_window: "내쇼윈도",
            share_img: "공유하기",
            ship_type: "[무료배송]",
            profile_img: "이미지",
            discount_rate: 30,
            org_price: 19800,

        },

        






    ]

export default rankDummy;