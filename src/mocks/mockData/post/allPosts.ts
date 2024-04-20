import { Post } from '@/types/post';

export const allPosts: Post[] = [
  // DAILY
  {
    Id: 33,
    user: {
      id: 1,
      nickname: '홍길동',
      profileImgUrl: '',
      manners: 5,
    },
    productImgUrl: [],
    title: '모닝 커피 재료 구매 요청',
    participants: 2,
    deadline: '2024-06-20 08:00:00',
    status: 'in_progress',
    category: 'DAILY',
    place: '서울특별시 강서구 양천로 550',
    pLocationX: 37.560237,
    pLocationY: 126.836899,
    content: '모닝 커피를 위해 필요한 재료를 구매해주세요.',
    products: [
      {
        productId: 31,
        productName: '원두 커피',
        price: 20000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/coffeeshop/products/181818181',
      },
      {
        productId: 32,
        productName: '우유',
        price: 3000,
        count: 1,
        purchaseLink: 'https://www.naver.com',
      },
    ],

    createAt: '2024-04-19 07:15:00',
    updateAt: '2024-04-19 07:15:00',
  },
  {
    Id: 35,
    user: {
      id: 2,
      nickname: '홍길동2',
      profileImgUrl: '',
      manners: 4,
    },
    productImgUrl: [],
    title: '운동화 구매 부탁드립니다',
    deadline: '2024-06-25 16:30:00',
    status: 'in_progress',
    category: 'DAILY',
    place: '서울특별시 강남구 강남대로 396',
    pLocationX: 37.5178625,
    pLocationY: 127.0417354,
    content: '운동을 위해 신발을 구매해주세요.',
    participants: 3,
    products: [
      {
        productId: 33,
        productName: '운동화',
        price: 70000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/sportsshop/products/191919191',
      },
      {
        productId: 34,
        productName: '양말',
        price: 5000,
        count: 3,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-20 14:00:00',
    updateAt: '2024-04-20 14:00:00',
  },
  {
    Id: 37,
    user: {
      id: 3,
      nickname: '홍길동3',
      profileImgUrl: '',
      manners: 1,
    },
    productImgUrl: [],
    title: '물티슈 구매 인원 구해요',
    deadline: '2024-06-30 15:30:00',
    status: 'completed',
    category: 'DAILY',
    place: '서울특별시 용산구 한강대로 405',
    pLocationX: 37.5283169,
    pLocationY: 126.9294254,
    content: '향도 좋은 물티슈를 구매해주세요!',
    participants: 4,
    products: [
      {
        productId: 35,
        productName: '물티슈',
        price: 10000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/wetwipes/products/202020202',
      },
      {
        productId: 36,
        productName: '휴지',
        price: 5000,
        count: 2,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-21 09:45:00',
    updateAt: '2024-04-21 09:45:00',
  },
  {
    Id: 2,
    user: {
      id: 1,
      nickname: '익명의유저2',
      profileImgUrl:
        'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D',
      manners: 5,
    },
    productImgUrl: [
      'https://photo3.enuri.info/data/images/service/dnw/master/110388000/110388713.jpg',
      'https://photo3.enuri.info/data/images/service/dnw/master/14984000/14984034.jpg',
    ],
    title: '칫솔과 휴지를 함께 사실 분을 모집합니다!',
    deadline: '2024-04-11 12:00:00',
    status: 'in_progress',
    category: 'DAILY',
    place: '서울특별시 강남구 테헤란로 427',
    pLocationX: 37.4979254,
    pLocationY: 127.0275656,
    content: '칫솔은 10개씩 나누고 휴지는 1팩씩 가져요~',
    participants: 3,
    products: [
      {
        productId: 3,
        productName: '크리오덴티메이트 칫솔',
        price: 10830,
        count: 30,
        purchaseLink: 'https://smartstore.naver.com/groceryshop/products/123456789',
      },
      {
        productId: 4,
        productName: '하얀티슈 프리미엄',
        price: 30930,
        count: 3,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-06 10:30:00',
    updateAt: '2024-04-06 10:30:00',
  },
  // KITCHEN
  {
    Id: 3,
    user: {
      id: 2,
      nickname: '홍길동2',
      profileImgUrl: '',
      manners: 4,
    },
    productImgUrl: [],
    title: '주방용품 구매 도와주세요',
    deadline: '2024-04-12 18:00:00',
    status: 'in_progress',
    category: 'KITCHEN',
    place: '경기도 성남시 분당구 대왕판교로 645',
    pLocationX: 37.3949096,
    pLocationY: 127.1113331,
    content: '주방용품을 새로 구매하려고 합니다.',
    participants: 2,
    products: [
      {
        productId: 5,
        productName: '냄비세트',
        price: 45000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/kitchenmart/products/987654321',
      },
      {
        productId: 6,
        productName: '도마',
        price: 8000,
        count: 2,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-07 14:20:00',
    updateAt: '2024-04-07 14:20:00',
  },
  // FOOD
  {
    Id: 7,
    user: {
      id: 10,
      nickname: '김철수',
      profileImgUrl: '',
      manners: 2,
    },
    productImgUrl: [],
    title: '식사 대신할 다이어트 식품 구매 요청',
    deadline: '2024-04-15 10:00:00',
    status: 'in_progress',
    category: 'FOOD',
    place: '서울특별시 마포구 와우산로 94',
    pLocationX: 37.5466678,
    pLocationY: 126.9462928,
    content: '다이어트를 위해 식사를 대신할 식품을 구매해주세요.',
    participants: 3,
    products: [
      {
        productId: 7,
        productName: '다이어트 바',
        price: 25000,
        count: 5,
        purchaseLink: 'https://smartstore.naver.com/dietshop/products/123123123',
      },
      {
        productId: 8,
        productName: '식사 대용 스프',
        price: 15000,
        count: 3,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-08 11:45:00',
    updateAt: '2024-04-08 11:45:00',
  },
  // PET
  {
    Id: 9,
    user: {
      id: 11,
      nickname: '익명의유저1',
      profileImgUrl: '',
      manners: 3,
    },
    productImgUrl: [],
    title: '애완동물 간식 구매 부탁드립니다',
    deadline: '2024-04-20 14:00:00',
    status: 'in_progress',
    category: 'PET',
    place: '서울특별시 강북구 도봉로 240',
    pLocationX: 37.6155861,
    pLocationY: 127.0252771,
    content: '애완동물 간식을 구매해주세요.',
    participants: 4,
    products: [
      {
        productId: 9,
        productName: '간식 세트',
        price: 20000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/petshop/products/987987987',
      },
      {
        productId: 10,
        productName: '개껌',
        price: 5000,
        count: 2,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-09 09:30:00',
    updateAt: '2024-04-09 09:30:00',
  },
  // CLOTHING
  {
    Id: 11,
    user: {
      id: 11,
      nickname: '익명의유저1',
      profileImgUrl: '',
      manners: 3,
    },
    productImgUrl: [],
    title: '신상 의류 구매 도와주세요',
    deadline: '2024-04-25 17:00:00',
    status: 'in_progress',
    category: 'CLOTHING',
    place: '서울특별시 강남구 압구정로 424',
    pLocationX: 37.5248944,
    pLocationY: 127.0288156,
    content: '최신 트렌드의 의류를 구매하려고 합니다.',
    participants: 3,
    products: [
      {
        productId: 11,
        productName: '원피스',
        price: 50000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/clothingshop/products/111222333',
      },
    ],
    createAt: '2024-04-10 13:20:00',
    updateAt: '2024-04-10 13:20:00',
  },
  {
    Id: 13,
    user: {
      id: 123,
      nickname: '유저123',
      profileImgUrl: '',
      manners: 4,
    },
    productImgUrl: [],
    title: '비오는 날을 위한 우비 구매 요청',
    deadline: '2024-04-30 10:00:00',
    status: 'in_progress',
    category: 'CLOTHING',
    place: '서울특별시 종로구 새문안로 55',
    pLocationX: 37.5725203,
    pLocationY: 126.9766572,
    content: '비가 오는 날을 대비하여 우비를 구매해주세요.',
    participants: 2,
    products: [
      {
        productId: 13,
        productName: '우비',
        price: 20000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/clothingshop/products/444555666',
      },
      {
        productId: 12,
        productName: '셔츠',
        price: 35000,
        count: 2,
        purchaseLink: 'https://www.naver.com',
      },
      {
        productId: 14,
        productName: '장화',
        price: 30000,
        count: 1,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-11 09:45:00',
    updateAt: '2024-04-11 09:45:00',
  },
  {
    Id: 15,
    user: {
      id: 11,
      nickname: '익명의유저1',
      profileImgUrl: '',
      manners: 3,
    },
    productImgUrl: [],
    title: '트레이닝복 구매 도와주세요',
    deadline: '2024-05-05 15:00:00',
    status: 'in_progress',
    category: 'CLOTHING',
    place: '서울특별시 영등포구 경인로 775',
    pLocationX: 37.5325361,
    pLocationY: 126.8974856,
    content: '운동을 위한 편안한 트레이닝복을 구매하려고 합니다.',
    participants: 5,
    products: [
      {
        productId: 15,
        productName: '트레이닝 상의',
        price: 25000,
        count: 10,
        purchaseLink: 'https://smartstore.naver.com/clothingshop/products/777888999',
      },
      {
        productId: 16,
        productName: '운동 바지',
        price: 20000,
        count: 10,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-12 11:00:00',
    updateAt: '2024-04-12 11:00:00',
  },
  {
    Id: 17,
    user: {
      id: 11,
      nickname: '익명의유저1',
      profileImgUrl: '',
      manners: 3,
    },
    productImgUrl: [],
    title: '여름을 위한 시원한 원피스 구매 요청',
    deadline: '2024-05-10 14:30:00',
    status: 'in_progress',
    category: 'CLOTHING',
    place: '서울특별시 송파구 올림픽로 424',
    pLocationX: 37.5120559,
    pLocationY: 127.1041015,
    content: '여름에 입기 좋은 시원한 원피스를 구매하려고 합니다.',
    participants: 2,
    products: [
      {
        productId: 17,
        productName: '여름용 원피스',
        price: 35000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/clothingshop/products/101010101',
      },
      {
        productId: 18,
        productName: '샌들',
        price: 15000,
        count: 1,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-13 09:00:00',
    updateAt: '2024-04-13 09:00:00',
  },
  {
    Id: 21,
    user: {
      id: 13,
      nickname: '운동하는사람',
      profileImgUrl: '',
      manners: 3,
    },
    productImgUrl: [],
    title: '운동용품 구매 도와주세요',
    deadline: '2024-05-20 09:00:00',
    status: 'in_progress',
    category: 'HEALTH',
    place: '서울특별시 강서구 양천로 551',
    pLocationX: 37.5583062,
    pLocationY: 126.8608397,
    content: '운동을 위한 필수 용품을 구매해주세요.',
    participants: 2,
    products: [
      {
        productId: 21,
        productName: '요가 매트',
        price: 30000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/healthshop/products/131313131',
      },
      {
        productId: 22,
        productName: '핸드웨이트',
        price: 25000,
        count: 2,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-14 13:45:00',
    updateAt: '2024-04-14 13:45:00',
  },
  {
    Id: 23,
    user: {
      id: 123,
      nickname: '유저123',
      profileImgUrl: '',
      manners: 4,
    },
    productImgUrl: [],
    title: '사무용품 구매 부탁드립니다',
    deadline: '2024-05-25 15:30:00',
    status: 'completed',
    category: 'OFFICE',
    place: '서울특별시 서초구 강남대로 415',
    pLocationX: 37.5006686,
    pLocationY: 127.0243035,
    content: '사무실에서 사용할 필수용품을 구매해주세요.',
    participants: 2,
    products: [
      {
        productId: 23,
        productName: '노트북 스탠드',
        price: 20000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/officeshop/products/141414141',
      },
      {
        productId: 24,
        productName: '문서 보관함',
        price: 15000,
        count: 2,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-15 10:00:00',
    updateAt: '2024-04-15 10:00:00',
  },
  {
    Id: 25,
    user: {
      id: 123,
      nickname: '유저123',
      profileImgUrl: '',
      manners: 4,
    },
    productImgUrl: [],
    title: '기타 생활 용품 구매 요청',
    deadline: '2024-05-30 12:00:00',
    status: 'failed',
    category: 'OTHER',
    place: '서울특별시 중랑구 망우로 55',
    pLocationX: 37.5905592,
    pLocationY: 127.0802329,
    content: '기타 생활 용품을 구매해주세요.',
    participants: 3,
    products: [
      {
        productId: 25,
        productName: '욕실 수건',
        price: 10000,
        count: 1,
        purchaseLink: 'https://smartstore.naver.com/othershop/products/151515151',
      },
      {
        productId: 26,
        productName: '청소용품 세트',
        price: 25000,
        count: 1,
        purchaseLink: 'https://www.naver.com',
      },
    ],
    createAt: '2024-04-16 09:30:00',
    updateAt: '2024-04-16 09:30:00',
  },
];
